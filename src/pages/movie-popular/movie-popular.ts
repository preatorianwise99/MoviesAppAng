import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesPopularProvider } from '../../providers/movies-popular/movies-popular';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the MoviePopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-popular',
  templateUrl: 'movie-popular.html',
})
export class MoviePopularPage {
    arrayPosts:any;
    arrayMovies:[any][];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public moviePopServices: MoviesPopularProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePopularPage');
    this.getMoviesPop();
  }
  getMoviesPop() { //llamamos a la funcion getPost de nuestro servicio.
      this.moviePopServices.getMoviesPopular()
      .then(data => {
        this.arrayPosts = data;
        this.arrayMovies = this.arrayPosts.events;
        //console.log(this.arrayPosts);
        console.log(this.arrayMovies);
        console.log(this.arrayMovies);
  });
}
  // eventosId(event, tms){
  //     //console.log(tms);
  //     console.log('eventosId SismosChilePage');
  //     //this.navCtrl.push(SismosChileDetallePage,{'tms': tms});
  //   }
}
