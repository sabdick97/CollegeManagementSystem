import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { FooterComponent } from './footer/footer.component';
import { CourseListComponent } from './course-list/course-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AssignComponent } from './assign/assign.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent,
    HomeComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent,
    FooterComponent,
    CourseListComponent,
    UpdateCourseComponent,
    CreateCourseComponent,
    AssignComponent,
    CourseDetailsComponent,
    TeacherDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
