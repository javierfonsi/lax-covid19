import { useMemo } from 'react'
//import axios from 'axios' 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register (
    //Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



//const handleMain = async () => {
//    const { data } = await axios.get('https://lax-api-covid.herokuapp.com/api/v1/coviddaily')
//    console.log(data.data.caso)
//    let all = []
//    const resolvedPos = await Promise.all(positivos);
//    all.push(resolvedPos)
//    //console.log(posi)
//    const date = data.data.caso.map(({Date})=>Date)
//    const resolvedDat = await Promise.all(date);
//    all.push(resolvedDat)
//    //}
//    //console.log(arreglado)
//    //console.log(posi)
//    return all
//  }

  const options = {
    fill: true,
    responsive: true,
    scales: {
        y:{
            min:0,
        }
    },
    plugins:{
        legend: {
            display: true
        }
    }
  }
    
    export default function LineChart({total}){
        //const {Date, Positivos, Negativos} = total.map(({Date, Positivos, Negativos})=> {[Date], [Positivos], [Negativos]})
        const date = total.map(({Date})=> Date)
        const positivos = total.map(({Positivos})=> Positivos)
        const negativos = total.map(({Negativos})=> Negativos)
        const pendientes = total.map(({Pendientes})=> Pendientes)
        const muertes = total.map(({Muertes})=> Muertes)

        //console.log(positivos)
        //console.log(Object.values(total))
        //const negativos = total.map(({Negativos})=> Negativos)
        //const pendientes = total.map(({Pendientes})=> Pendientes)
        //const muertes = total.map(({Muertes})=> Muertes)
        //console.log(date)
      
    const scores = positivos
    const scores2 = negativos
    const scores3 = pendientes
    const scores4 = muertes
    const labels = date
    //const labels = [allValues.map(({Date}) => Date)]
    //console.log(scores, labels)

    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "Positivos",
                data: scores,
                //borderColor: "rgb(255, 25, 192)",
                backgroundColor: "rgba(250, 10, 162, 0.3)"
                },
                {
                    label: "Negativos",
                data: scores2,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(95, 192, 162, 0.3)"
                },
                {
                    label: "Pendientes",
                data: scores3,
                borderColor: "rgb(87, 190, 25)",
                backgroundColor: "rgba(95, 252, 162, 0.7)"
                },
                {
                    label: "Muertes",
                data: scores4,
                borderColor: "rgb(190, 19, 25)",
                backgroundColor: "rgba(195, 19, 50, 0.7)"
                }
            ],

            labels,
        };
    }, [labels, scores, scores2, scores3, scores4 ]);

    return <Line data={data} options = {options} />
}