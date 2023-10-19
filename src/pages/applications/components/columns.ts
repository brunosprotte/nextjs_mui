import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export type ApplicationsColumns = {
    id: string
    description: string
    version: string
}

const columns: GridColDef[] = [
    { 
        field: 'id', 
        headerName: 'ID', 
    },
    { 
        field: 'name', 
        headerName: 'Application name', 
        width: 130 
    },
];

export default columns;