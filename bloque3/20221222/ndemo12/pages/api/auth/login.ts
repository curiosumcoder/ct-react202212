import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserService from '../../../services/UserService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === 'POST') {
    if (!process.env.JWT_SECRET) {
      throw new Error('Invalid configuration value.');
    }

    const { email, password } = req.body;

    // Verificar la existencia del usuario
    const us = new UserService();
    const user = await us.getByMail(email);

    if (!user) return res.status(401).end();

    const { id, passwordHash, salt, roles } = user;
    const pepper = process.env.PEPPER_STRING;

    const isCorrect = await bcrypt.compare(
      `${salt}${password}${pepper}`,
      passwordHash
    );

    if (isCorrect) {
      jwt.sign(
        { id, email, roles },
        process.env.JWT_SECRET,
        { expiresIn: '2d' },
        (err, token) => {
          if (err) {
            return res.status(500).end(err);
          }
          res.status(200).json({ token });
        }
      );
    } else {
      res.status(401).end();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
