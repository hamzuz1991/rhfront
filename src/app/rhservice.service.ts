import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rhservice {
data :any ;
  constructor(private http : HttpClient) { }
  


getentrp():Observable<any> {
  return this.http.get<any>(`/api/entreprise/getallentreprise`);
}
getalldep(a):Observable<any> {
  return this.http.get<any>(`/api/departement/getalldep/${a}`);
}
}