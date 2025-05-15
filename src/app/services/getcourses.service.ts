import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class GetcoursesService {

  private url:string = "ramschema.json"; //Länkar till json i public-mappen
  constructor(private http: HttpClient) { } //Gör att http-client blir tillgänglig i denna klass

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}

//Denna service används i user-komponenten