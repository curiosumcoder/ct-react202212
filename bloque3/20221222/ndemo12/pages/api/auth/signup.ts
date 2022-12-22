import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import UserService from '../../../services/UserService';
import { IUser } from '../../../models/IUser';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  console.log('signup - process.env.USER_URL: ', process.env.USER_URL)

  if (!process.env.JWT_SECRET) {
    throw new Error("Invalid configuration value.")        
  }

  if (method === 'POST') {
    const { email, password } = req.body;

    // Verificar la existencia del usuario
    const us = new UserService();
    const user = await us.getByMail(email)

    console.log('signup - user: ', email, user)

    if (user) {
        return res.status(409).end();
    }

    const salt = uuid();
    const pepper = process.env.PEPPER_STRING;

    const passwordHash = await bcrypt.hash(`${salt}${password}${pepper}`, 10);
    const newUser: IUser = {
      id: 0,
      email,
      passwordHash,
      salt,
      roles: Array<string>(''),
    };

    // Llamar al servicio web para crear el usuario
    let result: IUser | null;
    result = await us.save(newUser);

    if (result) {
      jwt.sign(
        {
          id: result.id,
          email,
          roles: newUser.roles,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '2d',
        },
        (err: any, token: any) => {
          if (err) {
            return res.status(500).send(err);
          }
          res.status(200).json({ token });
        }
      );
    } else {
      return res.status(500).end();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
