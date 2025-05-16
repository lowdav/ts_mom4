import { Routes } from '@angular/router';
import { CourselistComponent } from './courselist/courselist.component';

//Lägger till routing
export const routes: Routes = [
    {path: "courselist", component: CourselistComponent},
    { path: '', redirectTo: 'courselist', pathMatch: 'full' },
    { path: '**', redirectTo: 'courselist' }

];
