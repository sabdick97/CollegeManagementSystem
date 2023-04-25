import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Course } from '../course';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {


  constructor(private authService:AuthServiceService, private router:Router){}
  course:Course=new Course();
  subid!:Text;
  isSuccessful=false;
  isFailed=false;


form= new FormGroup(

  {
    subname: new FormControl("",[Validators.required,Validators.minLength(3)]),
    price: new FormControl("", [Validators.required,Validators.minLength(3)]),
    subId:new FormControl("", [Validators.required,Validators.minLength(3)])
  }


);

get f()
 {
  return this.form.controls;
 }

onSubmit() {

this.authService.createCourse(this.course).subscribe(
  data=>{console.log('SUCCESS',data);this.goToCourseList();this.isFailed=false; this.isSuccessful=true;}
  
  
  );
};

goToCourseList()
{
 this.router.navigate(['/courses']);
}
}
