import Login from '@/components/Login'
import { Box } from '@mui/material'
import { useSession } from 'next-auth/react'

const SignIn = () => {
    const { data: session } = useSession()
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h2>{session ? 'Welcome back!' : 'Log in'}</h2>
            <Login />
        </Box>
    )
}

export default SignIn
