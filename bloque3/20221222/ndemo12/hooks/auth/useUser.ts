import { useState, useEffect } from 'react';
import { IUser } from '../../models/IUser';
import { useToken } from './useToken';

export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = (token:any):IUser|null => {
        const encodedPayload = token.split('.')[1];
        if (typeof window !== 'undefined') {
            return JSON.parse(window.atob(encodedPayload)) as IUser;
        }
        return null
    }

    const [user, setUser] = useState<IUser|null>(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    });

    useEffect(() => {
        if (!token) {
            setUser(null);
        } else {
            setUser(getPayloadFromToken(token));
        }
    }, [token]);

    return user;
}