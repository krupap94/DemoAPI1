import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student | undefined;
  constructor(private studentDataService: StudentDataService){}
  ngOnInit(): void {
    this.studentDataService.getById().subscribe((data)=>{
      console.log(data);
      this.student=data;

    })
  }

}
