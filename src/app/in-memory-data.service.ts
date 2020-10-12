import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  constructor() { }
  createDb() {
    const heroes = [
      { id: 11, name: 'アノマロカリス', eng: 'Anomalocaridid' },
      { id: 12, name: 'ウミサソリ', eng: 'Eurypterida' },
      { id: 13, name: 'オパビニア', eng: 'Opabinia' },
      { id: 14, name: 'ケリグマケラ', eng: 'Kerygmacheaa' },
      { id: 15, name: 'タミシオカリス', eng: 'Tamisiocaris' },
      { id: 16, name: 'フデイシ', eng: 'Graphtolithnia' },
      { id: 17, name: '三葉虫', eng: 'Trilobite' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
