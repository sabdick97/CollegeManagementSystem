import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit{

  teacher:Teacher=new Teacher();
  id!: number;
  isSuccessful=false;
  isFailed=false;
constructor(private authService: AuthServiceService,private router: Router, private route: ActivatedRoute){}
ngOnInit():void{
  this.id= this.route.snapshot.params['id'];
  this.authService.getTeacherById(this.id).subscribe(data=>{this.teacher=data;});

}
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
onSubmit()
{
  this.authService.updateTeacherById(this.id,this.teacher).subscribe(
    data=>{
      console.log(data);
      this.goToTeacherList();
      this.isFailed=false;
      this.isSuccessful=true;
    },
    error=>{
    console.log(error)
    this.isFailed=true;
    this.isSuccessful=false;
  }
  );
};
goToTeacherList()
    {
      this.router.navigate(['/teacher']);
    }
}
