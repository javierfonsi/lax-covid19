import React, { useState, useEffect} from 'react'
//import React from 'react'
import LineChart from './LineChart';
//import ReactDOM from 'react-dom'
//import AnyChart from 'anychart-react.min.js'
//import AnyChart from 'anychart-react'
import axios from 'axios' 
import Footer from './Components/footerLayout/Footer';
import './App.css'
import { Box, FormControl, CircularProgress } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

//ReactDOM.render(
  //<AnyChart
  //  type="pie"
  //  data={[1, 2, 3, 4]}
  //  title="Simple pie chart"
  ///>, document.getElementById('root'));


//import React from 'react';//import { Counter } from './features/counter/Counter';
//import './App.css';

function App() {

  const [total, setTotal] = useState([])
  const [option, setOption] = useState('')
  const [loading, setLoading] = useState(false)
  
  //useState(['Positivos', 'Negativos', 'Pendientes', 'Muertes'])
  
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
          <h1 className="main">Reportes Covid-19</h1> 
        </header>
        {
          loading ? <div className="load-main"> Cargando<CircularProgress /> </div>  : 
          <div className="current-char"> 
          <div className="start">

            <LineChart total={total} option={option}/>
              {/*<AnyChart {...complexSettings} />*/}
              {/*<AnyChart type="column"
                //data={[1, 2, 3, 4]}
                data={total}
                title="Simple pie chart"/>*/}
              {/*<button onClick={() => calculate()} > Calcular</button>*/}
            <div className="more-info">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={option}
                    label="Seleccionar"
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
          </div>
        </div>
        }
        
          <Footer/>
      </div>
    </div>
  );
}

export default App;
