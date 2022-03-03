import { Kartvizit } from './../models/kartvizit';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterKartvizit'
})
export class FilterKartvizitPipe implements PipeTransform {

  transform(kartvizits: Kartvizit[], filterText: string): Kartvizit[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";

    return filterText?kartvizits.filter((k:Kartvizit)=>k.name.toLocaleLowerCase().indexOf(filterText)!==-1):kartvizits;
  }

}
