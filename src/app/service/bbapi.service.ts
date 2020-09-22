import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Personaggio } from '../model/personaggio/personaggio';


@Injectable({
  providedIn: 'root'
})
export class BbapiService {
personaggio:Personaggio;

  private baseUrl:String = 'https://www.breakingbadapi.com/api/';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET, POST, DELETE, PUT',
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getCharacters():Observable<any>{
    return this._http.get(this.baseUrl+'characters', this.httpOptions).pipe(
      map((response=>response)),
      catchError(this.errorHandler<any>('getCharacters'))
    )
  }

  getEpisodes():Observable<any>{
    return this._http.get(this.baseUrl+'episodes', this.httpOptions).pipe(
      map((response=>response)),
      catchError(this.errorHandler<any>('getEpisodes'))
    )
  }

  getRandomDeath():Observable<any>{
    return this._http.get(this.baseUrl+'random-death', this.httpOptions).pipe(
      map((response=>response)),
      catchError(this.errorHandler<any>('getRandomDeath'))
    )
  }

  getCharByName(name:string):Observable<any>{
    return this._http.get(this.baseUrl+'characters?name='+name, this.httpOptions).pipe(
      map((response=>response)),
      catchError(this.errorHandler<any>('getCharByName'))
    )
  }

  getQuotes():Observable<any>{
    return this._http.get(this.baseUrl+'quotes', this.httpOptions).pipe(
      map((response=>response)),
      catchError(this.errorHandler<any>('getQuotes'))
    )
  }

  setter(personaggio: Personaggio){
    this.personaggio = personaggio;
  }
  
  getter(){
    return this.personaggio;
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
