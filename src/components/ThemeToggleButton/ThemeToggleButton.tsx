import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/system';
import React from 'react';

export type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void }>
}

function ThemeToggleButton(props: ThemeToggleButtonProps) {
    const { ColorModeContext = React.createContext({ toggleColorMode: () => {} }) } = props;
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Typography>{theme.palette.mode === 'dark' ? 'Light mode' : 'Dark Mode'}</Typography>

            <IconButton
                sx={{ mr: 2 }}
                title={`${theme.palette.mode  } mode`}
                aria-label={`${theme.palette.mode  } mode button`}
                onClick={colorMode.toggleColorMode}
                color="inherit"
            >
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </>
    );
}

export default ThemeToggleButton;
