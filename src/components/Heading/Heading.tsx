import { Grid, Typography } from "@mui/material";

interface HeadingProps {
    title: string,
    description: string   
}

export const Heading: React.FC<HeadingProps> = ({
    title, description
}) => ( 
    <>
        <Grid container spacing={2}>

            <Grid item xs={'auto'}>
                <Typography variant="h3">
                    {title}
                </Typography>
            </Grid>

            <Grid item xs={'auto'}>
                <Typography 
                    variant="subtitle1"
                    paragraph={true} 
                    color="GrayText"
                >
                    {description}
                </Typography>
            </Grid>
        </Grid>
    </>
    
);

export default Heading;