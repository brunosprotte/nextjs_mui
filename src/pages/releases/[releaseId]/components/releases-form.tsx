import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

import axios from "axios";
import { Box, Button,  } from "@mui/material";
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

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
    textValue: "",
    radioValue: "",
    checkboxValue: [],
    dateValue: new Date(),
    dropdownValue: "",
    sliderValue: 0,
};

type Release = {
    version: string
    applicationId: string
}

// type Application = {
//     value: string
//     label: string
// }

const formSchema = z.object({
    version: z.string().min(1).default(""),
    releaseId: z.string().min(1).default(""),
})

type ReleaseFormValues = z.infer<typeof formSchema>;

type ReleaseFormProps = {
    initialData: Release | null
    // applications: Application[]
}

export const ReleasesForm: React.FC<ReleaseFormProps> = ({
    initialData,
    // applications
}) => {
    
    const router = useRouter();
    const params = useParams();

    const [loading, setLoading] = useState(false)

    const {
        handleSubmit, reset, control, setValue 
    } = useForm<ReleaseFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
        ? initialData
        : {
            version: '',
            releaseId: ''
        }, 
    });

    // const onSubmit = (data: ApplicationFormValues) => console.log(data);

    const onSubmit = async (data: ReleaseFormValues) => {
        console.log('form data', data)
        try {
            setLoading(true)

            if (initialData) {
                await axios.patch(`/api/releases/${params.releaseId}`, data)
            } else {
                await axios.post(`/api/releases`, data)
            }

            router.refresh()
            router.push(`/releases`)

            // toast.success(toastMessage)
        } catch(error) {
            console.log('Something went wrong!')
            // toast.error('Something went wrong!')
        } finally{
            setLoading(false)
        }
    }
    
    return (
        <>
            <Grid container direction={'row'}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }} height={'80vh'} width={"50vw"} alignContent={"flex-start"}>
                {/* <Grid xs={2} sm={4} md={4}>
                    <ApplicationDropdown
                        name="applicationId"
                        control={control}
                        label="Application"
                        options={applications}
                    />
                    
                </Grid> */}

                <Grid xs={2} sm={4} md={4}>
                    <FormText name="version" control={control} label="Release version" />
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

export default ReleasesForm;