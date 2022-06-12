import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {

  id: number;
  name: string;
  users_resolved: number;
  active: boolean;
  image_url: string;
  currentUser = [sessionStorage.getItem("user")];
  userName = "user@deepersignals.com";
  
  
  constructor() { 
    this.id = 1;
    this.name = "Core Drivers";
    this.users_resolved = 5;
    this.active = true;
    this.image_url = "https:\/\/d1cuxz3dnd9slg.cloudfront.net\/assessments\/Core+Values+-+Cover+Photo.jpg___2020-05-15-14-13-06.jpg"
  }

 
  
  ngOnInit(): void {
  }

}
