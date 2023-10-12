import {Box, Grid, Paper } from "@mui/material";

import axios from "axios";
import { useState, useEffect } from "react";
import ServiceForm from "./components/services-form";

const ServicePage = ({
    params
}:{
    params: {serviceId: string}
}) => {
    
    const [service, setService] = useState(null);
    const [applications, setsApplications] = useState([]);
    
    useEffect( () => { 
        async function fetchService() {
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
        
        <Box marginTop={'20px'}  >
            <Paper sx={{ padding: '20px'}}>
                <ServiceForm 
                    applications={applications}
                    initialData={service}
                />
            </Paper>
        </Box>
        
    );
};

export default ServicePage;