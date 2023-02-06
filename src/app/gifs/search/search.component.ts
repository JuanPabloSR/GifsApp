import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!:ElementRef;  //?busca una referencia local y lo asigna a una nueva variable

  search() {
   const value = this.txtSearch.nativeElement.value
   console.log(value);
  }
}
