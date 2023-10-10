import { Typography } from "@mui/material";

interface HeadingProps {
    title: string,
    description: string   
}

export const Heading: React.FC<HeadingProps> = ({
    title, description
}) => ( 
    <div>
        <Typography variant="h3">
            {title}
        </Typography>

        <Typography 
            variant="subtitle1"
            paragraph={true} 
            color="GrayText"
        >
            {description}
        </Typography>
    </div>
);

export default Heading;