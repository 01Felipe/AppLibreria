import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAutor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private apiURL = this.baseUrl + "api/autor";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  GetAu(): Observable<IAutor[]> {
    return this.http.get<IAutor[]>(this.apiURL);
  }
  Post(autor: IAutor): Observable<IAutor> {
    return this.http.post<IAutor>(this.apiURL, autor);
  }
}
