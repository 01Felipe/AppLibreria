import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILibro } from './_libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {


  private apiURL = this.baseUrl + "api/libro";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  GetLib(): Observable<ILibro[]> {
    return this.http.get<ILibro[]>(this.apiURL);
  }

  Post(libro: ILibro): Observable<ILibro>
  {
    return this.http.post<ILibro>(this.apiURL, libro);
  }
}
