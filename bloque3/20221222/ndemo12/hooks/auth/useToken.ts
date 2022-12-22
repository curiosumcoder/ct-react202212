import { useState } from 'react';

export const useToken = (): any => {
  const [token, setTokenInternal] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
  });

  const setToken = (newToken: any) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', newToken);
      setTokenInternal(newToken);
    }
  };

  return [token, setToken];
};
