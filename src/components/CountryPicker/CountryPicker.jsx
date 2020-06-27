import React,{useState,useEffect} from 'react'
import {FormControl, NativeSelect,} from '@material-ui/core';
import style from './CountryPicker.module.css';
import { fetchCountries } from '../../api'
 
const CountryPicker=({handleChangeCountry})=> {
const [fetchedCountries, setFetchedCountries] = useState([]);

useEffect(() => {
  const fetchApi= async() =>{
      setFetchedCountries(await fetchCountries())
  }
  fetchApi();
},[]);

    return (
        <div>
            <FormControl className={style.formControl}>
            <NativeSelect defaultValue='' onChange={(e)=>handleChangeCountry(e.target.value)}>
          <option value=''>Global</option>
    {fetchedCountries.map((country,i)=> <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;