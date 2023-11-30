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
  students = [
    {indx: 1, name: "John Doe", program: "Degree", status: "Admitted"},
    {indx: 2, name: "John Doe", program: "HND", status: "Admitted"},
    {indx: 4, name: "John Doe", program: "Masters", status: "Admitted"},
    {indx: 4, name: "John Doe", program: "Degree", status: "Admitted"},
    {indx: 5, name: "John Doe", program: "Degree", status: "Admitted"},
    {indx: 6, name: "John Doe", program: "Degree", status: "Admitted"},
  ]

  public chartData = [
    {data: [25,  20, 30, 45],  backgroundColor: [ "#A04100", "#B08800", "#E36209","#009688"] }
  ]

  public chartsOptions = {
    scaleShowVerticalLine : false,
    responsive: true
    }

    public label= ["Degree Applicants", "Masters Applicants", "HND Applicants", "Topup Applicants"];

    public legend = false;

   
    
  public barChartData = [
    {data: [130, 50], backgroundColor: ["#009688", "#444D56",]},
  ]

  public barChartOptions = {
    scaleShowVerticalLine : false,
    responsive: true,
    scales:{
      y: {
        display: true,
        ticks: {
          display: false
        }
      },
      x: {
        grid: {
          display: false,
        },
    }
  },
}

    public barChartlabels = [
      "WASSCE", "A LEVEL"
  ]


  public secondBarChartLegend = true;
    
  public secondbarChartData = [
    {data: [80,180, 100], backgroundColor: ["#444D56"], label: "WASSCE"},
    {data: [100, 50, 30], backgroundColor: ["#009688"],  label: "A LEVEL"},
  ]

  public secondbarChartOptions = {
    scaleShowVerticalLine : false,
    responsive: true,
    scales:{
      y: {
        display: true,
        stacked: true,
        ticks: {
          display: false
        }
      },
      x: {
        stacked: true,
        grid: {
          display: false,
        },
    }
  },
}

public secondbarChartlabels = [
  "Regular", "Internatinal", "Fee paying"
]

}
