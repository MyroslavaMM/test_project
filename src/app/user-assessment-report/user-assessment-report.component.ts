import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-assessment-report',
  templateUrl: './user-assessment-report.component.html',
  styleUrls: ['./user-assessment-report.component.css']
})
export class UserAssessmentReportComponent implements OnInit {
  agreeableness: number;
  drive: number;
  luck:number;
  openess: number;
  type: string;

  constructor() {

    this.agreeableness = 13.333333333333334;
    this.drive = 21.666666666666668;
    this.luck = 10;
    this.openess = 30;
    this.type = 'bar';
   }

  ngOnInit(): void {
  }

}
