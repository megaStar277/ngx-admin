import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-area-stack',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsAreaStackComponent {
  options: any;

  constructor(private theme: NbThemeService) {
    this.theme.getJsTheme().subscribe(config => {

      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: echarts.areaStack.colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: echarts.areaStack.tooltipBackgroundColor,
            },
          },
        },
        legend: {
          data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
          textStyle: {
            color: echarts.legendTextColor,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            axisLine: {
              lineStyle: {
                color: echarts.xAxisLineColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.yAxisLineColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Mail marketing',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: {} },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Affiliate advertising',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: {} },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video ad',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: {} },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Direct interview',
            type: 'line',
            stack: 'Total amount',
            areaStyle: { normal: {} },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Search engine',
            type: 'line',
            stack: 'Total amount',
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
            areaStyle: { normal: {} },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
    });
  }
}
