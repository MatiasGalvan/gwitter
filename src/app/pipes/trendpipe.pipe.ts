import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'trendpipe'
})
export class TrendpipePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) {
      return value;
    } else {
      const result = [];
      for (const trend of value) {
        const name: string = trend.name;
        if (name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          result.push(trend);
        }
      }
      return result;
    }

  }

}


