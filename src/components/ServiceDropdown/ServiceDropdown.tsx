
import {
    FormControl, 
    InputLabel,
    MenuItem, 
    Select 
} from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../form-components/FormInputProps";

interface DropdownOptions {
    value: string
    label: string
}

interface DropdownProps {
    options: DropdownOptions[]
}

const ServiceDropdown: React.FC<FormInputProps & DropdownProps> = ({ 
    name,
    control,
    label,
    options,
 }) => {
        
    const generateSingleOptions = () => options.map((option: DropdownOptions) => {
        return (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        )
 });

    return (
        <FormControl size={"small"} sx={{ width: "100%"}}>
            <InputLabel>{label}</InputLabel>
            <Controller
                render={({ field: { onChange, value } }) => (
                    <Select onChange={onChange} value={value}>
                        {generateSingleOptions()}
                    </Select>
                )}
                control={control}
                name={name}
            />
        </FormControl>
    );
};

export default ServiceDropdown;