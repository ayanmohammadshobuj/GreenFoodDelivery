import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    email: '',
    password: ''
  };

  userList: any [] = [];

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    debugger;
    this.http.get('http://localhost:3000/userList').subscribe((data:any) => {
      debugger;
      this.userList = data;
    })
  }

  onLogin() {
    debugger;
    this.http.get('http://localhost:3000/userList').subscribe((data:any) => {
      debugger;
      this.userList = data;

      for (let item of this.userList) {
        if (item.email == this.loginObj.email && item.password == this.loginObj.password) {
          alert('Login successfully');
          this.router.navigate(['']);

        }
      } 
      
      if (this.loginObj == null) {
        alert('Invalid username or password or null');
        this.loginObj = {
          userName: '',
          password: ''
        }

      } else if (this.loginObj.userName == '' || this.loginObj.password == '') {
        localStorage.setItem('user', JSON.stringify(this.loginObj));

        this.loginObj = {
          userName: '',
          password: ''
        }
      }

    })
  }

  goRegister() {
    this.router.navigate(['signup']);
  }

}


