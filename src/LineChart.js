//import { useMemo, useState } from 'react'
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
} from "chart.js";

import { Line } from "react-chartjs-2";

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
            //display: true,
            display: false,
            position: 'bottom'
        },
        
        //title: {
        //  display: true,
        //  text: 'Todos',
        //},
    }
  }
    
    export default function LineChart({total, option}){
        //const {Date, Positivos, Negativos} = total.map(({Date, Positivos, Negativos})=> {[Date], [Positivos], [Negativos]})
        const labels = total.map(({Date})=> Date)
        const positivos = total.map(({Positivos})=> Positivos)
        const negativos = total.map(({Negativos})=> Negativos)
        const pendientes = total.map(({Pendientes})=> Pendientes)
        const muertes = total.map(({Muertes})=> Muertes)



    let data = {
        datasets: [
            {
                label: "Positivos",
            data: positivos,
            //borderColor: "rgb(255, 25, 192)",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.2)"
            //backgroundColor: "rgba(250, 10, 162, 0.3)"
            }
            ,
            {
                label: "Negativos",
            data: negativos,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.2)"
            },
            {
                label: "Pendientes",
            data: pendientes,
            borderColor: "rgb(255, 206, 86)",
            backgroundColor: "rgba(255, 206, 86, 0.4)"
            },
            {
                label: "Muertes",
            data: muertes,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 28, 50, 0.7)"
            }
        ],
        labels,
    }
    if (option!==''){
        let dataFilter =  data.datasets.filter(x=>x.label===option)
        data= {...data, datasets: dataFilter} 
    }

    return <Line data={data} options = {options} />
}