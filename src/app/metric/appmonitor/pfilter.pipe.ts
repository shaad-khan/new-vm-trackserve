import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pfilter'
})
export class PfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return null;
    if(args===3) return value;
    return value.filter(function(data){
  return data.Flag.toString().includes(args.toString());

    })
  }

}
