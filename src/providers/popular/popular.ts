import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PopularProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PopularProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PopularProvider Provider');
  }

}
