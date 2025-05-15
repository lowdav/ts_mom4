import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class GetcoursesService {

  //egen notering: private innebär att variablen bara kan nås inom klassen.

  // private url:string = "ramschema.json"; //Länkar till json i public-mappen, använt för att testa båda varianterna.
  private url:string = "https://webbutveckling.miun.se/files/ramschema.json";
  
  constructor(private http: HttpClient) { } //Gör att http-client blir tillgänglig i denna klass (dependency injection)

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}

//Denna service används i user-komponenten