import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortComponent } from './sort/sort.component';
import { HomeComponent } from './home/home.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { AboutComponent } from './about/about.component';
import { CreatorComponent } from './creator/creator.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { CardLightAComponent } from './ui-components/card-light-a/card-light-a.component';
import { CardCanvasSortComponent } from './ui-components/card-canvas-sort/card-canvas-sort.component';
import { RandomBgColorDirective } from './directives/random-bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    HomeComponent,
    AlgorithmsComponent,
    AboutComponent,
    CreatorComponent,
    BinarySearchComponent,
    CardLightAComponent,
    CardCanvasSortComponent,
    RandomBgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
