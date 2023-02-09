import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviePopularPage } from './movie-popular';

@NgModule({
  declarations: [
    MoviePopularPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviePopularPage),
  ],
})
export class MoviePopularPageModule {}
