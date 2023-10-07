import AdbIcon from '@mui/icons-material/Adb';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Context, MouseEvent, createContext, useContext, useState } from 'react';

export type HeaderProps = {
    ColorModeContext: Context<{ toggleColorMode: () => void }>
}

function Header(props: HeaderProps) {
    const theme = useTheme();
    const { data: session } = useSession();
    const { ColorModeContext = createContext({ toggleColorMode: () => {} }) } = props;
    const colorMode = useContext(ColorModeContext);
    const userProfileImg = session?.user?.image as string;
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const tabletCheck = useMediaQuery('(min-width: 768px)');

    return (
        <AppBar 
            position="fixed" 
            sx={{
                backgroundColor: "transparent", 
                marginBottom: '40px', 
                backdropFilter: "blur(4px)",
                backgroundImage: 'none',
                borderBottom: `solid 1px ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'} `,
                boxShadow: 'none'

            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: `${theme.palette.text.primary}` }}  />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: `${theme.palette.text.primary}`,
                            textDecoration: 'none',
                        }}
                    >
                        Front-end
                    </Typography>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: `${theme.palette.text.primary}` }}  />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: `${theme.palette.text.primary}`,
                            textDecoration: 'none',
                        }}
                    >
                        Front-end
                    </Typography>

                    {tabletCheck && (
                        <Box sx={{ paddingRight: 5, marginLeft: 'auto' }}>
                            <Typography>Signed in as {session?.user?.email}</Typography>
                        </Box>
                    )}

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open profile settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={session?.user?.name as string} src={userProfileImg} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={() => (session ? signOut() : signIn())}>
                                <Typography textAlign="center" />
                                <ListItemIcon>{session ? <ExitToAppIcon /> : 'Login'}</ListItemIcon>
                                <ListItemText>{session ? 'Logout' : 'Login'}</ListItemText>
                            </MenuItem>

                            <MenuItem onClick={colorMode.toggleColorMode}>
                                <ListItemIcon>
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </ListItemIcon>
                                <ListItemText>
                                    {theme.palette.mode === 'dark' ? 'Light mode' : 'Dark Mode'}
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
