import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { MoviePopularPage } from '../pages/movie-popular/movie-popular';
import { MoviePopularDetailsPage } from '../pages/movie-popular-details/movie-popular-details';

import { MovieRatesPage } from '../pages/movie-rates/movie-rates';
import { MovieRatesDetailsPage } from '../pages/movie-rates-details/movie-rates-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopularProvider } from '../providers/popular/popular';
import { RatesProvider } from '../providers/rates/rates';
import { MoviesPopularProvider } from '../providers/movies-popular/movies-popular';
import { MoviesRatesProvider } from '../providers/movies-rates/movies-rates';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MoviePopularPage,
    MoviePopularDetailsPage,
    MovieRatesPage,
    MovieRatesDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MoviePopularPage,
    MoviePopularDetailsPage,
    MovieRatesPage,
    MovieRatesDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PopularProvider,
    RatesProvider,
    MoviesPopularProvider,
    MoviesRatesProvider
  ]
})
export class AppModule {}
