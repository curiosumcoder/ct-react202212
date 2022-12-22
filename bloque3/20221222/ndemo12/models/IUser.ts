export interface IUser
{
    id: number;
    email: string;
    passwordHash: string;
    salt: string;
    roles: Array<string>
}