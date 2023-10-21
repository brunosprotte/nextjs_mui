
import {
    Autocomplete,
    FormControl, 
    InputLabel,
    MenuItem, 
    Select, 
    TextField
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

const ServiceAutocomplete: React.FC<FormInputProps & DropdownProps> = ({ 
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
        
            <Controller
                render={({  
                    field: { onChange, value },
                    fieldState: { error },
                    formState, 
                }) => (
                    <Autocomplete 
                        size="small"
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        getOptionLabel={(option) => option?.label ? option?.label : ""}
                        onChange={(_, value) => onChange(value)}
                        value={value}
                        renderInput={(params) => <TextField {...params} label={label} helperText={error?.message} error={!!error}/>}
                        options={options}
                    />
                )}
                control={control}
                name={name}
            />
        
    );
};

export default ServiceAutocomplete;