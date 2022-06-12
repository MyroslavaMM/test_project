import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  first_name: string;
  last_name: string;
  role: string;
  
  constructor(private http: HttpClient){
    this.first_name = 'Admin';
    this.last_name = 'Deepersignals';
    this.role = 'Admin';
  }
  ngOnInit(): void {

  };

}
