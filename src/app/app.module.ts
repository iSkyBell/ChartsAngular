import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from './pages/line-chart/line-chart.component';
import { BarChartComponent } from './pages/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './pages/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './pages/radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
