import React, { useEffect,useState } from 'react';
import {NativeSelect , FormControl} from '@material-ui/core';
import styles from './Country.module.css';
import {fetchCountries} from '../../api';

function Country({handleCountryChange}){
    const[fetchedCountries,setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchCountry = async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchCountry();
    },[setFetchedCountries])

    return(   
        <div className={styles.formControl}>
        <FormControl >
            <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i)=> <option key = {i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    )
}

export default Country;