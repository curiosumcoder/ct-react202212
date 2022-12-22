import { IUser } from '../models/IUser';
import axios from 'axios';

export default class AuthService {
  constructor() {
    console.log(`AuthService via Axios in ...`);
  }

  async signup(data: IUser) {
    let postResponse = await axios.post('api/auth/signup', data);

    if (postResponse.status === 200) {
      return postResponse.data;
    }
  }

  async login(data: IUser) {
    let postResponse = await axios.post('api/auth/login', data);

    if (postResponse.status === 200) {
      return postResponse.data;
    }
  }
}
