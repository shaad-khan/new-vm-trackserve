import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipef'
})
export class PipefPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==undefined) return value;
    return value.filter(function(d){
     return d.Type.toLowerCase().includes(args.toLowerCase());
    })
  }

}
