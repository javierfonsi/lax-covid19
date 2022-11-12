import React, { useState, useEffect} from 'react'
import LineChart from './LineChart';
import PieChart from './PieChart'

import axios from 'axios' 
import Footer from './Components/footerLayout/Footer';
import './App.css'
import { Select, MenuItem, InputLabel, Box, FormControl, CircularProgress, Button } from '@mui/material';

function App() {

  const [total, setTotal] = useState([])
  const [option, setOption] = useState('')
  const [loading, setLoading] = useState(false)
  const [cDate, setCDate] = useState(0)

  const handleDateNext = (val) =>{
    if(val){
      if(cDate===total.length-1){
        setCDate(0)
      }else{
        setCDate(cDate+1)
      }
    }
    else{
      if(cDate===0){
        setCDate(total.length-1)
      }else{
        setCDate(cDate-1)
      }
    }
  }
  
  
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  
  useEffect(() => {
    const handleMain = async () => {
      //setLoading(true)
    const { data } = await axios.get('https://lax-api-covid.herokuapp.com/api/v1/coviddaily')
    setTotal(data.data.caso)
  }
  total.length>0 ? setLoading(false) : setLoading(true) //
  handleMain();
  
}, [total.length])
console.log(option)

  return (
    <div className="App">
      <div className='main'>
        <header className="App-header">
          <h1 className="title-main">Reportes Covid-19</h1> 
        </header>
        {
          loading ? <div className="load-main"> Cargando<CircularProgress /> </div>  : 
          <div className="current-char"> 
            <div className="chart">
              <LineChart total={total} option={option}/>
              <div className="more-info">
                <Box variant='contained' color='success' sx={{ minWidth: 120, padding:0}}>
                  <FormControl fullWidth >
                    <InputLabel variant='filled' color='info' id="demo-simple-select-label" > Selecciona </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={option}
                      //label=" Selecciona "
                      onChange={handleChange}
                    >
                      <MenuItem value={'Positivos'}>Positivos</MenuItem>
                      <MenuItem value={'Negativos'}>Negativos</MenuItem>
                      <MenuItem value={'Pendientes'}>Pendientes</MenuItem>
                      <MenuItem value={'Muertes'}>Muertes</MenuItem>
                      <MenuItem value={''}>Todos</MenuItem>
                    </Select>
                  </FormControl>
                </Box>              
              </div>
              <div className="pie-container">
              <PieChart total={total} cDate={cDate}/>
              </div>
              <div className="date-control">  
                <Button variant='contained' color='info' onClick={()=>{handleDateNext(1)}}>ant</Button>
                <Button variant='contained' color='info' onClick={()=>{handleDateNext(undefined)}}>sig</Button>
              </div>
            </div>

          </div>
        }
        
        <Footer/>
      </div>
    </div>
  );
}

export default App;
