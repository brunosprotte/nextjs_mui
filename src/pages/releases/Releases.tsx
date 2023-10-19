import { Divider, Grid, Paper,  } from '@mui/material';
import ReleasesClient from './components/releases-client';

const Releases = () => {

    const rows = [
        { id: '1', description: 'Snow', version: 'Jon' },
    ];
    
    return (
        <Grid container spacing={2} marginTop={'20px'} >
            <Paper sx={{ padding: '20px' }}>
                <ReleasesClient data={rows}/>
            </Paper>
        </Grid>
        
    );
};
 
export default Releases;