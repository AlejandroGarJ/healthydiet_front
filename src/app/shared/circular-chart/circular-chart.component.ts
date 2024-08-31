import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { Chart, ChartOptions, ChartType, registerables } from 'chart.js';
import { Food, foodInit } from '../../models/food';


@Component({
  selector: 'app-circular-chart',
  templateUrl: './circular-chart.component.html',
  styleUrl: './circular-chart.component.css'
})
export class CircularChartComponent {

  @Input() food: Food = foodInit;

  chart: Chart | undefined;

  ngOnInit(): void {
    // Registrar todos los componentes de Chart.js
    Chart.register(...registerables);
    
    this.renderChart();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['food']) {
      this.resetChart();
    }
  }
  resetChart() {
    if (this.chart) {
      this.chart.destroy(); // Destruye la instancia actual del gráfico
      this.renderChart();  // Crea una nueva instancia del gráfico
    }
  }


  renderChart() {
    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar', 
        data: {
          labels: ['Carbs', 'Fats', 'Protein', 'Sodium'],
          datasets: [{
            label: '(g)',
            data: [this.food.carbs, this.food.fats, this.food.protein, this.food.sodium],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                // Aquí puedes ajustar los estilos de las etiquetas de la leyenda
                color: 'black', // Cambia el color del texto de las etiquetas
                font: {
                  size: 14, // Cambia el tamaño de la fuente
                },
                filter: (legendItem) => {
                  // Esto elimina el color de la caja, pero mantiene el texto visible
                  legendItem.hidden = true; // Puedes ocultar el color si no deseas mostrarlo
                  return false; // Asegúrate de que se mantenga la etiqueta
                }
              }
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const datasetLabel = tooltipItem.dataset.label || '';
                  const dataValue = tooltipItem.raw;
                  return `${datasetLabel}: ${dataValue}`;
                }
              }
            }
          }
        }
      });
    }
  }
}
