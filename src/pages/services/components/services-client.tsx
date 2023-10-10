import { Box, Button, Divider } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import columns from './columns';
import Heading from '@/components/Heading/Heading';
import {  useRouter } from 'next/navigation';
import { Add } from '@mui/icons-material';
import { ServicesColumns } from './columns';

interface ServicesClientProps {
    data: ServicesColumns[]
}

const ServicesClient: React.FC<ServicesClientProps> = ({ data }) => {
    const router = useRouter();
    
    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];
    
    return (
        <>
            <Box 
                display='flex'
                alignItems='center'
                justifyContent='space-between'
            >
            
                <Heading 
                    title='Services' 
                    description='Manage the services that compose your application'
                />
                <Button onClick={() => router.push(`/services/new`)}>
                    <Add className="mr-2 h-4 w-4" />
                    Add new
                </Button>
            </Box>
            
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
            
        </>
    );
};
 
export default ServicesClient;