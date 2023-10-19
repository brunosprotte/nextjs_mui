import {Box, Grid, Paper } from "@mui/material";

import axios from "axios";
import { useState, useEffect } from "react";
import ReleasesForm from "./components/releases-form";

const ReleasesPage = ({
    params
}:{
    params: {releaseId: string}
}) => {
    
    const [release, setRelease] = useState(null);
    
    
    useEffect( () => { 
        async function fetchService() {
            try {
                const {data} = await axios.get('/api/releases/', {data: params.releaseId}); 
                setRelease(data);
            } catch (err) {
                console.log(err);
            }
        }
        
        fetchService();
        
    }, []);

    return (
        
        <Box marginTop={'20px'} >
            <Paper sx={{ padding: '20px'}}>
                <ReleasesForm 
                    initialData={release}
                />
            </Paper>
        </Box>
        
    );
};

export default ReleasesPage;