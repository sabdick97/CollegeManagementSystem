import { Component } from '@angular/core';
import { Teacher } from '../teacher';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent {
  
  constructor(private authService:AuthServiceService, private router: Router){}
 teacher: Teacher=new Teacher();

 form = new FormGroup(
  {
    firstname:new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    cont: new FormControl("", [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
    user:new FormControl("",[Validators.required,Validators.minLength(3)]),
    password:new FormControl("",[Validators.required,Validators.minLength(3)])
  }


)
get f()
{
  return this.form.controls;
}

 onSubmit(){
  this.authService.createTeacher(this.teacher).subscribe(
    data=> {
      console.log('SUCCESS',data);
      this.goToTeacherList();
    }
  );

 };
 goToTeacherList()
 {
  this.router.navigate(['/teachers']);
 }
}
