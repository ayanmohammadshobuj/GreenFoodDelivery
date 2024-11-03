import { Location } from './signup.model'; 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Route, Router } from '@angular/router';
import { SignupService } from './signup.service';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupComponent, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formValue!:FormGroup;
  location: Location = new Location();
  userList: Location[] = [];
  submitted:boolean = false;


  constructor(
    private signupService: SignupService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      id:[''],
      fullName:['',[Validators.required]],
      password:['',[Validators.required]],
      email:['',[Validators.required]],
      mobile:['',[Validators.required]],
    });
  }

  onSignUp() {
    // let iD;
    // this.http.get('http://localhost:3000/userList').subscribe((data:any) => {
    //   debugger;
    //   this.userList = data;
    //   for (let item of this.userList) {
    //     let iD = max(this.userList);
        
    //   }
    // });
    // this.location.id = this.iD + 1;
    
    this.location.fullName = this.formValue.value.fullName;
    this.location.email = this.formValue.value.email;
    this.location.mobile = this.formValue.value.mobile;
    this.location.password = this.formValue.value.password;
    this.signupService.createLocation(this.location).subscribe(res => {
      console.log(res);
      this.formValue.reset();
    },
    error => {
      console.log(error);
    }
  )
}

  

  goLogin() {
    this.router.navigate(['login']);
  }
  
}
