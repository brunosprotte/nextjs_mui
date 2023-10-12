import DataRibbon from '@/components/Dashboard/DataRibbon';
import TransactionBottomRow from '@/components/Dashboard/TransactionBottomRow';
import TransactionsPerDay from '@/components/Dashboard/TransactionsPerDay';
import { Box, Grid } from '@mui/material';

const Dashboard = () => (
    <Box>
        <Grid container gap={4} marginTop={2}>
            <DataRibbon />
            <TransactionsPerDay />
        </Grid>
        <TransactionBottomRow />
    </Box>
);
export default Dashboard;
