import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts = Highcharts
  chartOptions = {}
  constructor(){
    this.chartOptions = {
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Average Student Admission, 2022-23',
        align: 'left'
    },
    // subtitle: {
    //     text: 'Source: ' +
    //         '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
    //         'target="_blank">Counterpoint Research</a>',
    //     align: 'left'
    // },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    credits:{
      enabled:false
    },
    series: [{
        type: 'pie',
        name: 'Share',
        data: [
            ['MEARN', 23],
            ['PYTHON', 12],
            // {
            //     name: 'Xiaomi',
            //     y: 12,
            //     sliced: true,
            //     selected: true
            // },
            ['ASP.NET',8],
            ['TESTING*', 20],
            ['FLUTTER', 7],
            ['BIG DATA', 30]
        ]
    }]
    }
  }
}
