import { Box, Button, Grid } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import columns from './columns';
import Heading from '@/components/Heading/Heading';
import {  useRouter } from 'next/navigation';
import { Add } from '@mui/icons-material';
import { VersionsColumns } from './columns';

interface VersionsClientProps {
    data: VersionsColumns[]
}

const VersionsClient: React.FC<VersionsClientProps> = ({ data }) => {
    const router = useRouter();
    
    return (
        <>  
            <Grid container spacing={2} width={'50vw'}>
                <Grid item xs={8}>
                    <Heading 
                        title='Versions' 
                        description='Manage the version of the versions that will compose an application release'
                    />
                </Grid>
                
                <Grid item xs={4}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant='contained' onClick={() => router.push(`/versions/new`)}>
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
 
export default VersionsClient;