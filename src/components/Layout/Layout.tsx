import { useSession } from 'next-auth/react';

import { Box } from '@mui/material';
import Head from 'next/head';
import SideMenu from '../SideMenu/SideMenu';
import scss from './Layout.module.scss';

const Layout = (props: any) => {
    const { data: session } = useSession();

    return (
        <Box display="flex">
            <Head>
                <title>DataSoft - Data Dashboard</title>
                <meta name="description" content="Data Dashboard" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={scss.layout} style={{ padding: session ? '60px 24px 0 80px' : '0' }}>
                {session && <SideMenu />}
                {props.children}
                {/* <Footer /> */}
            </main>
        </Box>
    );
};

export default Layout;
