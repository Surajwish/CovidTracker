import axios from 'axios';

const url ="https://covid19.mathdro.id/api";

export const fetchData = async (country) =>{

    let changedUrl =url;
    if(country){
        changedUrl =`${url}/countries/${country}`; 
    }

    try{
        const {data} = await axios.get(changedUrl);
        const modifiedData ={
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }  
        // console.log(modifiedData);
        return modifiedData;
    }
    catch(error){

    }
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((daily)=>({
            confirmed:daily.confirmed.total,
            deaths:daily.deaths.total,
            date:daily.reportDate
        }));
        return modifiedData;
    }
    catch(error){

    }
}

export const fetchCountries = async()=>{
    try{
        const {data} = await axios.get(`${url}/countries`);
        // console.log(data);
        const modifiedData = data.countries.map((item)=>( item.name))
        return modifiedData;
    }
    catch(error){

    }
}