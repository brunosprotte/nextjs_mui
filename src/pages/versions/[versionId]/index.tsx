import {Box, Grid, Paper } from "@mui/material";

import axios from "axios";
import { useState, useEffect } from "react";
import VersionsForm from "./components/versions-form";

const VersionsPage = ({
    params
}:{
    params: {versionId: string}
}) => {
    
    const [version, setVersion] = useState(null);
    const [services, setServices] = useState([]);
    
    useEffect( () => { 
        async function fetchVersion() {
            if (!params?.versionId) return

            try {
                const {data} = await axios.get('/api/versions/', {data: params?.versionId}); 
                setVersion(data);
            } catch (err) {
                console.log(err);
            }
        }
        async function fetchServices() {
            try {
                const {data} = await axios.get(`/api/services/`); 

                const normalizedServices = data.map((service:{id: string, name: string}) => {return {value: service.id, label: service.name}})

               setServices(normalizedServices);
            } catch (err) {
                console.log(err);
            }
        }
        fetchVersion();
        fetchServices();
    }, []);

    return (
        
        <Box marginTop={'20px'} >
            <Paper sx={{ padding: '20px'}}>
                <VersionsForm 
                    services={services}
                    initialData={version}
                />
            </Paper>
        </Box>
        
    );
};

export default VersionsPage;