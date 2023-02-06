import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    ResultComponent,
    SearchComponent,
  ], exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
