import { IUser } from '../models/IUser';
import axios from 'axios';

const USER_URL = process.env.USER_URL;

export default class UserService {
  constructor() {
    console.log(`UserService via Axios in ${USER_URL} ...`);
  }

  async get(id:number): Promise<IUser | null> {
    const response = await axios(`${USER_URL}/${id}`);
    if (response.status === 200)
    {
      return response.data;
    }
    return null
  }

  async getByMail(email:string): Promise<IUser | null> {
    const response = await axios(`${USER_URL}?email=${email}`);
    if (response.status === 200)
    {
      return response.data.length > 0 ? response.data[0] : null;
    }
    return null
  }

  async save(data: IUser) {
    let postResponse = await axios.post(`${USER_URL}`, data);

    if (postResponse.status === 201) {
      return postResponse.data;
    }
  }
}
