import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import axios from "axios";
import { Box, Button, Typography,  } from "@mui/material";
import FormDate from "@/components/form-components/Date/FormDate";
import FormDropdown from "@/components/form-components/Dropdown/FormDropdown";
import FormText from "@/components/form-components/Input/FormInput";
import FormSlider from "@/components/form-components/Slider/FormSlider";
import FormRadio from "@/components/form-components/RadioGroup/FormRadio";
import FormMultiCheckbox from "@/components/form-components/MultiCheckbox/FormMultiCheckbox";
import ApplicationDropdown from "@/components/ApplicationDropdown/ApplicationDropdown";
import Grid from '@mui/material/Unstable_Grid2';

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import ServiceDropdown from "@/components/ServiceDropdown/ServiceDropdown";
import { FilePond } from "react-filepond";

import 'filepond/dist/filepond.min.css';
import { Label } from "@mui/icons-material";
import { FilePondFile } from "filepond";
import FormFilepond from "@/components/form-components/Filepond/FormFilepond";
import FormAutoComplete from "@/components/form-components/AutoComplete/FormAutoComplete";

type Version = {
    version: string
    serviceId: string
}

type Service = {
    value: string
    label: string
}

const formSchema = z.object({
    version: z.string().min(1).default(""),
    serviceId: z.string().min(1).default(""),
    migrations: z.object({id: z.string()}).array()
})

type VersionFormValues = z.infer<typeof formSchema>;

type VersionFormProps = {
    initialData: Version & { migrations: any[] } | null
    services: Service[]
}

export const VersionsForm: React.FC<VersionFormProps> = ({
    initialData,
    services
}) => {

    const router = useRouter();
    const params = useParams();

    const [loading, setLoading] = useState(false)
    // const [migrations, setMigrations] = useState([{}])

    const {
        handleSubmit, reset, control, setValue 
    } = useForm<VersionFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
        ? initialData
        : {
            version: '',
            serviceId: '',
            migrations: []
        }, 
    });

    const onSubmit = async (data: VersionFormValues) => {
        console.log('form data', data)
        try {
            setLoading(true)

            if (initialData) {
                await axios.patch(`/api/versions/${params.versionId}`, data)
            } else {
                await axios.post(`/api/versions`, data)
            }

            router.refresh()
            router.push(`/versions`)

            // toast.success(toastMessage)
        } catch(error) {
            console.log('Something went wrong!')
            // toast.error('Something went wrong!')
        } finally{
            setLoading(false)
        }
    }

    // const handleFileUpdate = useCallback((fileItems: FilePondFile[]) => {
    //     console.log(fileItems)
    //     const files = fileItems.map(fileItem => fileItem.file)
    //     setMigrations([...migrations, files])
    // }, [])
    
    return (
        <>
            <Grid container direction={'row'}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }} height={'80vh'} width={"50vw"} alignContent={"flex-start"}>
                <Grid xs={2} sm={4} md={4}>
                    <ServiceDropdown
                        name="serviceId"
                        control={control}
                        label="Service"
                        options={services}
                    />
                </Grid>

                <Grid xs={2} sm={4} md={4}>
                    <FormText name="version" control={control} label="Version" />
                </Grid>

                <Grid xs={8} sm={8} md={8} maxHeight={100}>
                    
                    <Typography padding={1}>Migrations</Typography>
                    
                    <FormFilepond
                        name="migrations"
                        control={control}
                        rest={{
                            allowMultiple:true,
                            maxFiles:10,
                            server:"/api/migrations" 
                        }}
                        // onupdatefiles={handleFileUpdate}
                    />
                </Grid>

                {/* <Grid item xs={12} sm={4} md={4} lg={8} xl={12}>

                    <FormRadio
                        name={"radioValue"}
                        control={control}
                        label={"Radio Input"}
                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>

                    <FormDropdown
                        name="dropdownValue"
                        control={control}
                        label="Dropdown Input"
                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>

                    <FormDate name="dateValue" control={control} label="Date Input" />
                </Grid>
                
                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>
                    <FormMultiCheckbox
                        control={control}
                        setValue={setValue}
                        name={"checkboxValue"}
                        label={"Checkbox Input"}
                    />
                </Grid> */}
                {/* <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>

                    <FormSlider
                        name={"sliderValue"}
                        control={control}
                        setValue={setValue}
                        label={"Slider Input"}
                    />
                </Grid> */}

            </Grid>
            <Box display={'flex'} gap={4} justifyContent={"flex-end"} >
                <Button onClick={() => reset()} variant={"outlined"} color="error">
                    Reset
                </Button>
                <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                    Submit
                </Button>
            </Box>
        </>
        
    );
};

export default VersionsForm;