import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesPopularProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesPopularProvider {
   url = 'https://api.themoviedb.org/3/movie/popular?api_key=34738023d27013e6d1b995443764da44';
  constructor(public http: HttpClient) {
    console.log('Hello MoviesPopularProvider Provider');
  }
  getMoviesPopular(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
}
