import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { MoviePopularPage } from '../movie-popular/movie-popular';
//import { MoviePopularDetailsPage } from '../pages/movie-popular-details/movie-popular-details';

import { MovieRatesPage } from '../movie-rates/movie-rates';
//import { MovieRatesDetailsPage } from '../pages/movie-rates-details/movie-rates-details';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MoviePopularPage;
  tab5Root = MovieRatesPage;

  constructor() {

  }
}
