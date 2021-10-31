import React,{useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

function Chart({data,country}){
    const [dailyData,setDailyData] = useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
        // console.log(dailyData);
    },[]);

    const lineChart=(
        dailyData.length
        ?(
        <Line
            data={{
                labels:dailyData.map((item)=>(item.date)),
                datasets:[{
                    data:dailyData.map((item)=>(item.confirmed)),
                    label:"Infected",
                    borderColor: "blue",
                    fill:true,
                },{
                    data:dailyData.map((item)=>(item.deaths)),
                    label:"Deaths",
                    borderColor: "red",
                    fill:true,
                }]
            }}
        />):null
    )
            console.log(country);
    const barChart=(
        data.confirmed
        ?<Bar
            data={{
                labels:["Infected","Recovered","Deaths"],
                datasets:[{
                    label:"People",
                    backgroundColor:["blue","green","red"],
                    data:[data.confirmed.value,data.recovered.value,data.deaths.value]
                }]
            }}
        />
        :null
    )

    return(
        <div className={styles.container}>
        {country?
        <div>
        <h2 style={{textAlign:"center"}}>{country}</h2>
        {barChart}
        </div>
        :lineChart}
        </div>
    )
}

export default Chart;