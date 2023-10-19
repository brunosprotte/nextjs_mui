import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export type ReleasesColumns = {
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
        field: 'version', 
        headerName: 'Release version', 
        width: 130 
    },
];

export default columns;