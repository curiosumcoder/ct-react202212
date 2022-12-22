import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useUser } from '../hooks/auth/useUser';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const user = useUser();

  const handleLogout = async () => {
    localStorage.removeItem('token');

    router.reload();
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h3>
          {user && (
            <p>
              {user.email} <button onClick={handleLogout}>Logout</button>{' '}
            </p>
          )}
        </h3>
        <ul>
          {!user && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
