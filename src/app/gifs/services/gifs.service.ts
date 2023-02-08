import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'Bxrz9fN4Yc18QHOG0ChyyDSmBN2rMyeY';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  private _history: string[] = [];

  public result: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];

    this.result = JSON.parse(localStorage.getItem('result')!) || [];
    // if (localStorage.getItem('history')) {
    //   this._history = JSON.parse(localStorage.getItem('history')!);
    // }
  }

  searchGifs(query: string = '') {
    query = query.trim().toLowerCase();

    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '20')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe((resp) => {
        this.result = resp.data;
        localStorage.setItem('result', JSON.stringify(this.result));
      });
  }
}
