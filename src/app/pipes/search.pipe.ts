import { Pipe, PipeTransform } from '@angular/core';
import {Artist} from '../models/artist';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(artists: Artist[], query): any {
    return artists.filter((eachItem) => {
      return eachItem.name.toLowerCase().includes(query.toLowerCase()) ||
        eachItem.reknown.toLowerCase().includes(query.toLowerCase());
    });
  }

}
