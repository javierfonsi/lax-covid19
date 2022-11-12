import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({total, cDate}) {

    const titles = total.map(({Date})=> Date)
    const positivos = total.map(({Positivos})=> Positivos)
    const negativos = total.map(({Negativos})=> Negativos)
    const pendientes = total.map(({Pendientes})=> Pendientes)
    const muertes = total.map(({Muertes})=> Muertes)

    const options = {
        //fill: true,
        responsive: true,
        //scales: {
        //    y:{
        //        min:0,
        //    }
        //},
        plugins:{
            legend: {
                display: true,
                position: 'bottom'
            },
            
            title: {
              display: true,
              text:`Fecha: ${titles[cDate]}`,
            },
        }
      }

    const data = {
        labels: ['Positivos', 'Negativos', 'Pendientes', 'Muertes'],
        //labels: [titles[0]],


        datasets: [
          {
            label: '# of Votes',
            //label: '# of Votes',
            //data: [12, 19, 3, 5, 2, 3],
            data: [positivos[cDate], negativos[cDate], pendientes[cDate], muertes[cDate]],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return <Pie data={data} options={options}/>;
}