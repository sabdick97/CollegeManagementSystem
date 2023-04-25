import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  price: any;
  


   course:Course = new Course();
   subId!: number ;

   constructor(private authService: AuthServiceService,private router: Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.subId=this.route.snapshot.params['subId'];
    this.authService.getCourseById(this.subId).subscribe(
      data=>{this.course=data;});
  }
  goToCourseList()
{
  this.router.navigate(['/courses']);}


}
