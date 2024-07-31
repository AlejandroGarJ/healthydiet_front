import { Injectable } from '@angular/core';
import translations from '../../../node_modules/json-i18n-gt/assets/translations.json';
@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  translations: any = translations;
  translationPrefix: string = 'es'

  constructor() { }
}
