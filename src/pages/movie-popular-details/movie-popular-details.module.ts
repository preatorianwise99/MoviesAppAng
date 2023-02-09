import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviePopularDetailsPage } from './movie-popular-details';

@NgModule({
  declarations: [
    MoviePopularDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviePopularDetailsPage),
  ],
})
export class MoviePopularDetailsPageModule {}
