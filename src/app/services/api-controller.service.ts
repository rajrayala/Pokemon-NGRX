import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiControllerService {

  constructor(private _http: HttpClient) {}

  getPokemonList(max_list: number): Observable<HttpResponse<any>> {
    return this._http.get<any>(
      `https://pokeapi.co/api/v2/pokemon/?limit=${max_list}`, { observe: 'response' });
  }
}
