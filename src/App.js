import React from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Country from './components/Country/Country';
import Chart from './components/Chart/Chart';
import {fetchData} from './api';
import covid from './Assests/covid.png'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      data:{},
      country :"",
    }
  }

  handleCountryChange= async(country)=>{
    const fetchedData = await fetchData(country);
    console.log(country);
    console.log(fetchedData);
    this.setState({data:fetchedData, country:country})
  }
  
  async componentDidMount(){
    const data = await fetchData(); 
    // console.log(data);
    this.setState({data:data})
  }
  
  render(){
    // console.log(this.state.data);
    return (
    <div className={styles.container}>
      <div style ={{display:"flex"}}>
        <img src={covid} alt="Covid" width='80px'/>
        <h1>Covid Tracker</h1>
      </div>
      <Cards data ={this.state.data}/>
      <Country handleCountryChange={this.handleCountryChange}/>
      <Chart data={this.state.data} country={this.state.country}/>
      <p style={{marginTop:"25px"}}>All Rights Reserved | Suraj Vishwakarma</p>
    </div>
  );
}
}

export default App;
