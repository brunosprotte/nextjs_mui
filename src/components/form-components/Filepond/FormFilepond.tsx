import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "../FormInputProps";
import { FilePond } from "react-filepond";

const FormFilepond = ({ name, control, label, rest}: FormInputProps) => (
    <Controller
        name={name}
        control={control}
        render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
        }) => (
            <FilePond
                // value={value.map(file => file.name)}
                onupdatefiles={(files) => onChange([...value, files])}
                onremovefile={(error, file) => onChange([...value.filter(current => current.id !== file.id)])}
                {...rest}
            />
        )}
    />
);

export default FormFilepond;