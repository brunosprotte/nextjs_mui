import { useState } from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Drawer, useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, Theme, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import scss from './SideMenu.module.scss';
import useRoutes from '@/hooks/useRoutes';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

function SideMenu() {
    const theme = useTheme();
    const routes = useRoutes();
    const [open, setOpen] = useState(false);    const mobileCheck = useMediaQuery('(min-width: 600px)');

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleListItemButtonClick = (onClick) => {
        if (onClick && typeof onClick === 'function') {
            return onClick();
        }
    };
    
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            open={open}
            className={scss.sideMenu}
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: {
                    flexShrink: 1,
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(4px)',
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    left: 0,
                    top: mobileCheck ? 64 : 57,
                    ...(open && {
                        ...openedMixin(theme),
                        '& .MuiDrawer-paper': openedMixin(theme),
                    }),
                    ...(!open && {
                        ...closedMixin(theme),
                        '& .MuiDrawer-paper': closedMixin(theme),
                    }),
                },
            }}
        >
            <div className={scss.drawerHeader}>
                <IconButton onClick={toggleDrawer}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />

            <List>
                {routes.map(({ label, href, onClick, icon: Icon }) => (
                    <ListItem 
                        key={label} 
                        disablePadding 
                        sx={{
                            display: 'block', 
                            textShadow: `0px 0px 3px ${theme.palette.mode === 'dark' ? '#000' : '#fff'} ` 
                        }}>
                        <Link className={scss.link} href={`${href}`}>
                            <ListItemButton
                                onClick={() => handleListItemButtonClick(onClick)}
                                title={label}
                                aria-label={label}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Icon />

                                </ListItemIcon>
                                <ListItemText
                                    primary={label}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default SideMenu;
