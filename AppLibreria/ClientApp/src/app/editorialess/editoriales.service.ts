import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEditorial } from './_editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {

  private apiURL = this.baseUrl + "api/editoriales";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetEdi(): Observable<IEditorial[]> {
    return this.http.get<IEditorial[]>(this.apiURL);
  }

  Post(editorial: IEditorial): Observable<IEditorial> {
    return this.http.post<IEditorial>(this.apiURL, editorial);
  }

}
