import { useSession } from 'next-auth/react';
import React from 'react';
import Login from '@/components/Login/Login';
import Dashboard from '@/pages/dashboard/Dashboard';
import scss from './Home.module.scss';

const Home: React.FC = () => {
    const { data: session } = useSession();

    return (
        <main className={scss.main}>
            {session && <Dashboard />}
            {!session && <Login />}
        </main>
    );
};

export default Home;
