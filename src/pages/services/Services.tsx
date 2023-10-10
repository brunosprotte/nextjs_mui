import { Grid, Paper,  } from '@mui/material';
import ServicesClient from './components/services-client';

const Service = () => {

    const rows = [
        { id: '1', description: 'Snow', version: 'Jon' },
    ];
    
    return (
        <Grid container spacing={2} marginTop={'20px'}>
            <Paper sx={{ padding: '20px' }}>
                <ServicesClient data={rows}/>
            </Paper> 
        </Grid>
        
    );
};
 
export default Service;