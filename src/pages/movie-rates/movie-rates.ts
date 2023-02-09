import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesRatesProvider } from '../../providers/movies-rates/movies-rates';
/**
/**
 * Generated class for the MovieRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-rates',
  templateUrl: 'movie-rates.html',
})
export class MovieRatesPage {
  arrayPosts:any;
  arrayMovies:[any][];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public movieServicesRates: MoviesRatesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieRatesPage');
    this.getMoviesTop();
  }
  getMoviesTop() { //llamamos a la funcion getPost de nuestro servicio.
      this.movieServicesRates.getMoviesRates()
      .then(data => {
        this.arrayPosts = data;
        this.arraySismos = this.arrayPosts.events;
        //console.log(this.arrayPosts);
        console.log(this.arraySismos);
        console.log(this.arraySismos);
  });

}
