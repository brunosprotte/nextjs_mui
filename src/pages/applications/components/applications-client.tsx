import { Box, Button, Divider, Grid } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import columns from './columns';
import Heading from '@/components/Heading/Heading';
import {  useRouter } from 'next/navigation';
import { Add } from '@mui/icons-material';
import { ApplicationsColumns } from './columns';

interface ApplicationsClientProps {
    data: ApplicationsColumns[]
}

const ApplicationsClient: React.FC<ApplicationsClientProps> = ({ data }) => {
    const router = useRouter();
    
    return (
        <>  
            <Grid container spacing={2} width={'50vw'}>
                <Grid item xs={8}>
                    <Heading 
                        title='Applications' 
                        description='Manage your applications'
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant='contained' onClick={() => router.push(`/applications/new`)}>
                            <Add sx={{ marginRight: '8px' }} />
                            Add new
                        </Button>
                    </Box>
                    
                </Grid>
           
            </Grid>
        
            <Box height={'70vh'}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </Box>            
        </>
    );
};
 
export default ApplicationsClient;