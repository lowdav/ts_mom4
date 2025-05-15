import { Component } from '@angular/core';
import { Course } from '../model/course';
import { GetcoursesService } from '../services/getcourses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courselist',
  imports: [CommonModule],
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {
  courselist: Course[] = [];

constructor(private getcoursesservice: GetcoursesService) {}
 
//Prenumeration på den observable som skapades i getcourses. services.ts
ngOnInit() {
    this.getcoursesservice.getCourses().subscribe(data => {
      this.courselist = data;
    })

  }
}

