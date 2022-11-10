import React, { useState, useEffect} from 'react'
//import React from 'react'
import LineChart from './LineChart';
//import ReactDOM from 'react-dom'
//import AnyChart from 'anychart-react.min.js'
//import AnyChart from 'anychart-react'
import axios from 'axios' 
import Footer from './Components/footerLayout/Footer';
import './App.css'

//ReactDOM.render(
  //<AnyChart
  //  type="pie"
  //  data={[1, 2, 3, 4]}
  //  title="Simple pie chart"
  ///>, document.getElementById('root'));


//import React from 'react';//import { Counter } from './features/counter/Counter';
//import './App.css';

function App() {

  const [total, setTotal] = useState([2, 10, 30, 40, 5, 7, 9, 11])
  
  
  
  useEffect(() => {
    const handleMain = async () => {
    setTotal([2, 10, 30, 40, 5])
    const { data } = await axios.get('https://lax-api-covid.herokuapp.com/api/v1/coviddaily')
    //const posi = data.data.caso.map(({Positivos})=>Positivos)
    //const posi = data.data.caso.map(({Date, Positivos})=> `${Date},${Positivos}\n`)
      
    //console.log(posi)
    //console.log
    //let arreglado = ""
    //for(let i=0; i<posi.length-1; i++){
    //  arreglado += posi[i]
    //}
    //console.log(arreglado)
    //const posi = data.data.caso.forEach(({Date, Positivos})=> `${Date},${Positivos}\n+`)
    setTotal(data.data.caso)
  }

  handleMain();
  
}, [])
//console.log(total)


//const complexSettings = {
//  width: 800,
//  height: 600,
//  type: 'column',
//  //data: "P1,5\nP2,3\nP3,6\nP4,4",
//  data: {total},
//  title: 'Column chart',
//  yAxis: [1, {
//    orientation: 'right',
//    enabled: true,
//    labels: {
//      format: '{%Value}{decimalPoint:\\,}',
//      fontColor: 'red'
//    }
//  }],
//  legend: {
//    background: 'lightgreen 0.4',
//    padding: 0
//  },
//  lineMarker: {
//    value: 4.5
//  }
//};




  return (
    <div className="App">
      <div className='main'>

        <header className="App-header">
          <h1 className="main">Reportes Covid-19</h1> 
        </header>

        <LineChart total={total} />
          {/*<AnyChart {...complexSettings} />*/}
          {/*<AnyChart type="column"
            //data={[1, 2, 3, 4]}
            data={total}
            title="Simple pie chart"/>*/}

          {/*<button onClick={() => calculate()} > Calcular</button>*/}
          <Footer/>
      </div>
    </div>
  );
}

export default App;
