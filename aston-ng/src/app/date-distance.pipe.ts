import { Pipe, PipeTransform } from '@angular/core';
import * as distanceInWordsToNow from'date-fns/distance_in_words_to_now'; // dossier avec les fonctions à importer
import * as localeFR from 'date-fns/locale/fr'; // dossier pour récupérer la langue francaise 
@Pipe({
  name: 'dateDistance'
})
export class DateDistancePipe implements PipeTransform {

  transform(value: any, args?: any): any { // valeur any prend n'importe quel type - agrs = n'importe quel(s) argument(s)
    return distanceInWordsToNow(value, {locale : localeFR});
  }

}
