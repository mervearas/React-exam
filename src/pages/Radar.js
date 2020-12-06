import React, { useContext, useEffect, useState } from 'react';
import { ModuleContext } from '../App';
import Chart from '../components/Chart';
import Input from '../components/Input';
import MODULES from '../modules';
import { getRadarChartUrl } from '../util/getChartUrl';
import Navigation from './Navigation';

export default function Radar() {
    const [moduleDataSet, setModuleDataSet] = useContext(ModuleContext);
    const [chartUrl, setChartUrl] = useState("");

    useEffect(() => {
        if(moduleDataSet.length > 0) {
            getChartUrl(moduleDataSet);
        }
    },[])

    function handleChange(index, value) {
        const dataSet = moduleDataSet;
        dataSet[index] = Number(value);
        setModuleDataSet(dataSet);
        getChartUrl(dataSet);
    }

    function getChartUrl(dataSet) {
        const url = getRadarChartUrl(dataSet);
        setChartUrl(url);
    }
    
    return(
        <div>
            <Navigation/>
            {moduleDataSet.map((data, index) => {
                return (
                    <>
                        <Input key={index} index={index} label={MODULES[index]} defaultValue={data} handleOnChange={handleChange} />
                    </>
                )
            })}
            <Chart chartUrl={chartUrl}/>
        </div>
    )
}