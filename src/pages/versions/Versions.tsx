import { Grid, Paper,  } from '@mui/material';
import VersionsClient from './components/versions-client';

const Version = () => {

    const rows = [
        { id: '1', description: 'Snow', version: 'Jon' },
    ];
    
    return (
        <Grid container spacing={2} marginTop={'20px'} >
            <Paper sx={{ padding: '20px' }}>
                <VersionsClient data={rows}/>
            </Paper> 
        </Grid>
        
    );
};
 
export default Version;