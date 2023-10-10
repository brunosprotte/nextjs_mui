import React, { useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SessionProvider } from 'next-auth/react';
import Header from '@/components/Header/Header';
import Layout from '@/components/Layout';
import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';

const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

function App({ Component, pageProps: { session, ...pageProps } }) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
        } 
    }),[]);

    const darkThemeChosen = useMemo(() =>
        createTheme({
            ...darkTheme,
        }), [mode]);

    const lightThemeChosen = useMemo(() =>
        createTheme({
            ...lightTheme,
        }), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
                <SessionProvider session={session}>
                    <CssBaseline />
                    <Header ColorModeContext={ColorModeContext} />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SessionProvider>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
