import {Box, Grid, Paper } from "@mui/material";

import axios from "axios";
import { useState, useEffect } from "react";
import ServicesForm from "./components/services-form";

const ServicesPage = ({
    params
}:{
    params: {serviceId: string}
}) => {
    
    const [service, setService] = useState(null);
    const [applications, setsApplications] = useState([]);
    
    useEffect( () => { 
        async function fetchService() {
            if (!params?.serviceId) return
            try {
                const {data} = await axios.get('/api/services/', {data: params.serviceId}); 
                setService(data);
            } catch (err) {
                console.log(err);
            }
        }
        async function fetchApplications() {
            try {
                const {data} = await axios.get(`/api/applications/`); 
                setsApplications(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchService();
        fetchApplications();
    }, []);

    return (
        
        <Box marginTop={'20px'} >
            <Paper sx={{ padding: '20px'}}>
                <ServicesForm 
                    applications={applications}
                    initialData={service}
                />
            </Paper>
        </Box>
        
    );
};

export default ServicesPage;