import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }
  public name!: string;
  public flag!: string;
}
