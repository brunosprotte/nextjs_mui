
import {
    FormControl, 
    FormHelperText, 
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
        <FormControl size={"small"} fullWidth >
            <InputLabel>{label}</InputLabel>
            <Controller
                control={control}
                name={name}
                render={({ 
                    field: { onChange, value },
                    fieldState: { error }, 
                    formState,
                }) => (
                    <>
                        <Select 
                            onChange={onChange} 
                            value={value} 
                            size="small" 
                            error={!!error}
                            label={label}
                        >
                             <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {generateSingleOptions()}
                        </Select>
                        <FormHelperText error={!!error}> {error ? error.message : null}</FormHelperText>
                    </>
                    
                )}
                
            />
         </FormControl>
    );
};

export default ServiceDropdown;