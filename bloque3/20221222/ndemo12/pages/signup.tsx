import next from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useToken } from '../hooks/auth/useToken';
import AuthService from '../services/AuthService';

function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const [token, setToken] = useToken()

  const handleSignUp = async () => {
    if (email && password) {
      const newUser: any = { email, password };
      const as = new AuthService();
      const responseData = await as.signup(newUser);
      const { token } = responseData;

      console.log(token)
      setToken(token)

      router.push('/')
    }
  };
  return (
    <>
      <h3>Signup</h3>
      <p>
        Email:{' '}
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </p>
      <p>
        Password:{' '}
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </p>
      <button onClick={handleSignUp}>SignUp</button>
    </>
  );
}

export default Signup;
