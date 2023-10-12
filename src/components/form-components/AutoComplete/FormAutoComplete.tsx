import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';
import React, { ReactNode } from 'react';
import { useController } from 'react-hook-form';

export interface FormAutoCompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined = undefined,
> extends Omit<AutocompleteProps<T | string, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
    renderInput?: AutocompleteProps<T | string, Multiple, DisableClearable, FreeSolo>['renderInput'];
    label?: ReactNode;
    name: string;
}

export default function FormAutoComplete<
    T,
    Multiple extends boolean | undefined = undefined,
    DisableClearable extends boolean | undefined = undefined,
    FreeSolo extends boolean | undefined = undefined,
>({ name, label, ...props }: FormAutoCompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
    
    const { field, fieldState: { error }, } = useController({ name });

    return (
        <Autocomplete
            {...field}
            onChange={(_, value) => field.onChange(value)}
            renderInput={
                (params) => <TextField {...params} helperText={error?.message} error={!!error} label={label} />
            }
            {...props}
        />
    );
}