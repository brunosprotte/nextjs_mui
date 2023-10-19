import { Divider, Grid, Paper,  } from '@mui/material';
import ApplicationsClient from './components/applications-client';

const Applications = () => {

    const rows = [
        { id: '1', description: 'Snow', version: 'Jon' },
    ];
    
    return (
        <Grid container spacing={2} marginTop={'20px'} >
            <Paper sx={{ padding: '20px' }}>
                <ApplicationsClient data={rows}/>
            </Paper>
        </Grid>
        
    );
};
 
export default Applications;