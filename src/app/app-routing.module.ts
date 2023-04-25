import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import{UpdateTeacherComponent}from './update-teacher/update-teacher.component';
import { CourseListComponent } from './course-list/course-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AssignComponent } from './assign/assign.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';

const routes: Routes = [
   {path: "teachers", component: TeacherListComponent},
   {path:"home", component: HomeComponent},
   {path:"create-course",component:CreateCourseComponent},
   {path: "courses",component:CourseListComponent},
   {path:"create-teacher", component: CreateTeacherComponent},
   {path:"updateTeacher/:id" , component:UpdateTeacherComponent},
   {path:"updateCourse/:subId", component:UpdateCourseComponent},
   {path:"assign", component: AssignComponent},
   {path:"viewid/:subId", component:CourseDetailsComponent},
   {path:"viewTeacher/:id", component: TeacherDetailsComponent},
   {path:'', redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
