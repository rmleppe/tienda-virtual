import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    const resultLista = [];
     
    for(const item of value){
      if(item.nombre.indexOf(arg) > -1){
        
        
       resultLista.push(item);
       
      };
    };
    return resultLista;
  }

}
