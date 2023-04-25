import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Course } from '../course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  courses: Course[] | undefined;
  constructor(private authService: AuthServiceService, private router: Router){}
 
  
 ngOnInit(): void {
   this.getAllCourses();
 }
 private getAllCourses()
 {
  this.authService.getAllCourses().subscribe((data: Course[] | undefined)=>{this.courses=data;});
 }
 deleteCourse(subId: number)
 {
  this.authService.deleteCourseById(subId).subscribe(data=>{this.reloadpage();});
 }
 updateCourse(subId: number)
 {
  this.router.navigate(['updateCourse',subId]);
 }
 viewid(subId:number)
 {
  this.router.navigate(['viewid', subId]);
 }
 
 reloadpage()
  {
   window.location.reload();
  }
}



