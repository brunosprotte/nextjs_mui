import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export type ServicesColumns = {
    id: string
    description: string
    version: string
}

const columns: GridColDef[] = [
    { 
        field: 'id', 
        headerName: 'ID', 
        // width: 70 
    },
    { 
        field: 'name', 
        headerName: 'Name', 
        width: 130 
    },
    { 
        field: 'version', 
        headerName: 'Version', 
        // width: 130 
    },
   
];

export default columns;