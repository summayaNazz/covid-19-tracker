import React from 'react'
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Charts from './components/Charts/Charts';
import style from './App.module.css';
import  {fetchData}  from './api';
import caronaImage from './image/image.png'


 class App extends React.Component {
state={
   data:{},
   country:''
}


   async componentDidMount(){
        const data = await fetchData();
        this.setState ({ data })
    }

handleChangeCountry=async (country)=>{
const data=await fetchData(country);
this.setState({data,country:country})    
}

    render() {
        const {data,country}=this.state
        return (
            <div className={style.container}>
            <img src={caronaImage} className={style.image} alt='carona'/>
            <Cards data={data} country={country}/>
            <CountryPicker handleChangeCountry={this.handleChangeCountry}/> 
            <Charts data={data} country={country}/>
            <h4>Covid-19 Calculating App by <b><i>SUMMAYA NAZZ</i></b></h4>
            </div>
        )
    }
}

export default App
