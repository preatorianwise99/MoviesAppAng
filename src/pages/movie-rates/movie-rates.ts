import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesRatesProvider } from '../../providers/movies-rates/movies-rates';
import { RatesProvider } from '../../providers/rates/rates';
import { HttpClient } from '@angular/common/http';
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
    public movieServicesRates: MoviesRatesProvider,
    public movieServicesTopRates: RatesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieRatesPage');
    this.getMoviesTop();
  }
  getMoviesTop() { //llamamos a la funcion getPost de nuestro servicio.
      this.movieServicesTopRates.getMoviesRates()
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
