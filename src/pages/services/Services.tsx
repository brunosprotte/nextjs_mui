import { Box,  } from '@mui/material';


import ServicesClient from './components/services-client';


const Service = () => {

    const rows = [
        { id: '1', description: 'Snow', version: 'Jon' },
    ];
    
    return (
        <Box display='flex' flexDirection="column" width="100%" height="600px">
            <Box 
                flex="1 1 0%"
                marginTop="1rem"
                padding="2rem"
                paddingTop="1.5rem"
            >             
                <ServicesClient data={rows}/>
            </Box> 
        </Box> 
        
    );
};
 
export default Service;