
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../FormInputProps";

const FormInputDate = ({ name, control, label }: FormInputProps) => (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <DatePicker value={value} onChange={onChange} />
            )}
        />
    </LocalizationProvider>
);

export default FormInputDate;