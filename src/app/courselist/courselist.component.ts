import { Component } from '@angular/core';
import { Course } from '../model/course';
import { GetcoursesService } from '../services/getcourses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courselist',
  imports: [CommonModule, FormsModule],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courselist: Course[] = [];
  searchTerm: string = "";
  column: string = "";

constructor(private getcoursesservice: GetcoursesService) {}
 
//Prenumeration på den observable som skapades i getcourses.services.ts
ngOnInit() {
    this.getcoursesservice.getCourses().subscribe(data => {
      this.courselist = data;
    })
  };
//Sökning
//Filtrera listan baserat på sökning i sökfältet
filteredCourses(): Course[] {
  //Om inget i sökfältet returnera hela listan
  if(!this.searchTerm) {
    return this.courselist;
  }

  //Spara sökfrasen i term, som små bokstäver
  const term = this.searchTerm.toLowerCase();
  //Skicka tillbaka de kurser som inkluderar sökordet.
  return this.courselist.filter(course =>
    course.code.toLowerCase().includes(term) ||
    course.coursename.toLowerCase().includes(term) ||
    course.progression.toLowerCase().includes(term)
  );
}
//Sortering
//Parameter column måste vara en giltig egenskap i interfacet Course (key of)
sortCourses(column: keyof Course) {
  //vanlig sortering, stigande ordning.
  // små bokstäver används eftersom js gör om bokstäver till numeriskt värde och det skiljer mellan stora och små 
  this.courselist.sort((a, b) => 
    a[column].toLowerCase().localeCompare(b[column].toLowerCase())
  );
}

}

