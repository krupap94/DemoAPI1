import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy{
StudentList: Student[]=[];
dataSubscription: Subscription | undefined;
constructor(private studentdataservice: StudentDataService){

}
  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.dataSubscription = this.studentdataservice.getData().subscribe((data)=>{
      console.log(data);
      this.StudentList=data;
    });
  }
}
