import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http'
import{Teacher} from './teacher';
import { Observable } from 'rxjs';
import { Course } from './course';
import { Params } from '@angular/router';

const TEACHER = 'http://localhost:8080/teacher/';
const deleteTeach = 'http://localhost:8080/teacher/deleteTeacherById';
const updateTeach = 'http://localhost:8080/teacher/updateTeacher';
const getTeachById ='http://localhost:8080/teacher/getTeacherById';
const COURSE='http://localhost:8080/course/';
const getCourse ='http://localhost:8080/course/getCourseById';
const deleteCourseById = 'http://localhost:8080/course/deleteCourseById';
const updateCourseById= 'http://localhost:8080/course/updateCourse';
const assigning='http://localhost:8080/course/assignTeachertoCourse';


const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
 

  constructor(private http: HttpClient) { }


  getAllTeachers(): Observable<Teacher[]>
  {
    return this.http.get<Teacher[]>(TEACHER+'getAllTeachers',httpOptions);
  }

  deleteTeacherById(id: number): Observable<Object>
  {
    return this.http.delete(`${deleteTeach}/${id}`);
  }
  func(id:number):Observable<Teacher>
  {
    return this.http.get<Teacher>(`${getTeachById}/${id}`);
  }

  createTeacher(teacher: Teacher): Observable<Object>
  {
    return this.http.post<any>(TEACHER+'createTeacher',teacher,httpOptions);
  }

  updateTeacherById(id: number, teacher: Teacher): Observable<Object>
  {
    return this.http.put(`${updateTeach}/${id}`,teacher);
  }

  getTeacherById(id: number): Observable<Teacher>
  {
    return this.http.get<Teacher>(`${getTeachById}/${id}`);
  }



getAllCourses():Observable<Course[]>
{
  return this.http.get<Course[]>(COURSE+'getAllCourses',httpOptions);
}
deleteCourseById(Id:number):Observable<object>
{
  return this.http.delete(`${deleteCourseById}/${Id}`);
}
createCourse(course:Course):Observable<Course>
{
  return this.http.post<Course>(COURSE+'createCourse',course,httpOptions);
}
updateCourseById(id:number,course: Course): Observable<object>
{
return this.http.put(`${updateCourseById}/${id}`,course);
}

getCourseById(id:number): Observable<Course>
{
  return this.http.get<Course>(`${getCourse}/${id}`);
}

assign(teacherId: number, courseId: number): Observable<Params>
  {
    return this.http.post(`${assigning}/${teacherId}/${courseId}`,httpOptions);
  }
}

