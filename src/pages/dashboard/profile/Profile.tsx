import { Avatar, Box, Grid, TextField, Typography } from "@mui/material";
import { useSession } from "next-auth/react";

function Profile() {
    const { data: session } = useSession();
    const userProfileImg = session?.user?.image as string;

    return (
        <>
            <Typography variant="h1" gutterBottom>Profile</Typography>
            <Box sx={{ width: '100%', paddingTop: '20px' }}>


                <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} >
                        <Avatar 
                            alt={session?.user?.name as string} 
                            src={userProfileImg} 
                            sx={{ width: 80, height: 80 }}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField id="name" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField id="passsword" label="Password" variant="outlined" type="password"/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Profile;