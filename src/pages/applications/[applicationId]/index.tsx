import {Box, Grid, Paper } from "@mui/material";

import axios from "axios";
import { useState, useEffect } from "react";
import ApplicationsForm from "./components/applications-form";

const ApplicationsPage = ({
    params
}:{
    params: {applicationId: string}
}) => {
    
    const [application, setApplication] = useState(null);
    
    
    useEffect( () => { 
        async function fetchService() {
            try {
                const {data} = await axios.get('/api/applications/', {data: params.applicationId}); 
                setApplication(data);
            } catch (err) {
                console.log(err);
            }
        }
        
        fetchService();
        
    }, []);

    return (
        
        <Box marginTop={'20px'} >
            <Paper sx={{ padding: '20px'}}>
                <ApplicationsForm 
                    initialData={application}
                />
            </Paper>
        </Box>
        
    );
};

export default ApplicationsPage;