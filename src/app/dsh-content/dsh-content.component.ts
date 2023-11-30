import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-dsh-content',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dsh-content.component.html',
  styleUrl: './dsh-content.component.css'
})
export class DshContentComponent {

  public chartData = [
    {data: [25,  20, 30, 45],  label: "this", backgroundColor: [ "#A04100", "#B08800", "#E36209","#009688"] }
  ]

  public chartsOptions = {
    scaleShowVerticalLine : false,
    responsive: true
    }

    public BarchartLegend = true;

    public bar1chartData = [
      {data: [50], label: "A LEVEL", backgroundColor: "blue" },
      {data: [100], label: "WASCE", backgroundColor: "red" },
    ]

    public bar1Chartlabels = [
      "WASCE", "A LEVEL"
    ]
  
    public bar1chartsOptions = {
      scaleShowVerticalLine : false,
      responsive: true
      }
  
}
