import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import style from './Charts.module.css';
import { Line, Bar } from 'react-chartjs-2';


const Charts=({data: { confirmed,recovered,deaths },country})=> {
const [dailyData, setdailyData] = useState([]);

 useEffect(() => {
    const fetchApi= async () => { 
    const initialDailyData = await fetchDailyData();

    setdailyData(initialDailyData)
    }
    fetchApi();
},[]);

const lineChart =(
    dailyData.length ?
    (<Line data={{labels:dailyData.map(({date}) => date)
    ,datasets:[{
     data:dailyData.map(({confirmed}) => confirmed),
     label:'infected',
     borderColor: '#3333ff',
     fill:true,
    },{
     data:dailyData.map(({deaths}) => deaths),
     label:'Deaths',
     borderColor:'red',
     backgroundColor: 'rgba(225,0,0,0.5)',
     fill:true,
    }], }}/>): null
);

const barChart=(
    confirmed
    ?(
    <Bar
    data={{
    labels:['Infected','Recovered','Deaths'],
    datasets:[{
        label:'people',
        backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
        data:[confirmed.value,recovered.value,deaths.value]
    }]
    }}
    options={{
    legend:{display:false},
    title:{display:true,text:`Current state in ${country}`},
    }}
    />
    ):null
);
    return (
        <div className={style.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts;

 
