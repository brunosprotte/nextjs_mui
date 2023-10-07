import { useTheme } from "@mui/material";

import { darkOptions, lightOptions } from "@/components/DataChart/Themes";
import { months } from "@/helper/Util";
import { Chart, ChartConfiguration, registerables } from "chart.js";
import { useEffect, useRef } from "react";


function DataChart(props: ChartConfiguration) {
    const theme = useTheme();
    const { data, options } = props;
    const chartRef = useRef<HTMLCanvasElement>(null);   
    const labels = months({ count: 7 });
    const themeOptions = theme.palette.mode === 'dark' ? darkOptions : lightOptions;

    useEffect(() => {

        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                ...props,
                options: {
                    ...options,
                    ...themeOptions,
                },
            });

            return () => {
                chart.destroy();
            };
        }
    }, [data, theme]);
    
    return <canvas ref={chartRef} />;
}
Chart.register(...registerables);

export default DataChart;