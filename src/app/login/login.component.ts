import { Component, OnInit } from '@angular/core';
import {  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './login.service';
import { HttpClient, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userName!: string;
  password!: string;
  formData!: FormGroup;
  require: any;
  configUrl = 'http://localhost:4200/admin';
  params = new HttpParams({
    fromObject: {
      nameUser: "admin@deepersignals.com",
      first_name: "Admin",
      last_name: "Deepersignals",
      role: "Admin",
      token: "QWRtaW5Vc2Vy" 
    }
  }); 

  constructor(private authService : AuthService, private router : Router, private http: HttpClient){}

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }  

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;
    
    if(this.userName && this.password) {
      this.authenticateUser(this.userName);
    } else {
      alert('enter username and password');
    }
  }
  

    authenticateUser(userName:any){
      sessionStorage.setItem("user", userName);
      if(userName == "admin@deepersignals.com"){
        this.http.post(this.configUrl, this.params)
        .subscribe(res =>{
          this.router.navigateByUrl(`http//localhost:4200/admin`);
        })
        this.router.navigate(['/admin']); 
      } else if(userName == "user@deepersignals.com"){ 
        this.router.navigate(['/user']);
      }
      console.log(sessionStorage.getItem("user"))
    }

}

    




