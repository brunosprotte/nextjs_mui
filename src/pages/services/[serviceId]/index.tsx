import { useForm } from "react-hook-form";

import { Box, Button, Grid, Paper } from "@mui/material";
import FormDate from "@/components/form-components/Date/FormDate";
import FormDropdown from "@/components/form-components/Dropdown/FormDropdown";
import FormText from "@/components/form-components/Input/FormInput";
import FormSlider from "@/components/form-components/Slider/FormSlider";
import FormRadio from "@/components/form-components/RadioGroup/FormRadio";
import FormMultiCheckbox from "@/components/form-components/MultiCheckbox/FormMultiCheckbox";

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

export const ServiceForm = () => {
    
    const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
        defaultValues: defaultValues,
    });

    const onSubmit = (data: IFormInput) => console.log(data);
    
    return (
        
        <Grid container spacing={2} marginTop={'20px'} height={'80vh'} >
            <Paper sx={{ padding: '20px' }}>

                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>
                    <FormText name="textValue" control={control} label="Text Input" />
                </Grid>

                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>

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
                </Grid>
                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>

                    <FormSlider
                        name={"sliderValue"}
                        control={control}
                        setValue={setValue}
                        label={"Slider Input"}
                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>

                    <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={2} sm={4} md={4} lg={8} xl={12}>

                    <Button onClick={() => reset()} variant={"outlined"}>
                        Reset
                    </Button>
                </Grid>
            </Paper> 
        </Grid>
        
    );
};

export default ServiceForm;