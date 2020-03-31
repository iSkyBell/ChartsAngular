import { Component } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Ventas', 'En Tienda', 'En proceso'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
      this.doughnutChartData = [
        [this.randomNumber(), this.randomNumber(), this.randomNumber()],
        [this.randomNumber(), this.randomNumber(), this.randomNumber()],
        [this.randomNumber(), this.randomNumber(), this.randomNumber()],
      ];
  }

  private randomNumber(): number {
    return Math.round(Math.random() * 100);
  }

}
