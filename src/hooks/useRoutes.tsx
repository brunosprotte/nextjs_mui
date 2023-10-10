import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Person2Icon from '@mui/icons-material/Person2';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Settings } from '@mui/icons-material';
import MemoryIcon from '@mui/icons-material/Memory';
import { signOut } from "next-auth/react";

const useRoutes = () => {
    const pathname = usePathname();

    const routes = useMemo(
        () => [
            {
                label: 'Services',
                href: '/services',
                icon: MemoryIcon,
                active: pathname === "/services"
            },
            {
                label: 'Data',
                href: '/dashboard/data',
                icon: EqualizerIcon,
                active: pathname === "/dashboard/data"
            },
            {
                label: 'Profile',
                href: '/dashboard/profile',
                icon: Person2Icon,
                active: pathname === "/dashboard/profile"
            },
            {
                label: 'Settings',
                href: '/dashboard/settings',
                icon: Settings,
                active: pathname === "/dashboard/settings"
            },
            {
                label: 'Sign Out',
                href: '',
                icon: ExitToAppIcon,
                onClick: () => signOut(),
            }
        ],
        [pathname]
    );

    return routes;
};

export default useRoutes;
