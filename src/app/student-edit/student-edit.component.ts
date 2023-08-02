import { NgForOfContext } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],
})
export class StudentEditComponent implements OnInit, OnDestroy {
  studentEdit: Student = new Student();
  dataSubscription: Subscription | undefined;
  constructor(
    private studentDataService: StudentDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
  }
  editStudent(studentForm: NgForm): void {
    if (studentForm.valid == false) {
      alert('Fill the input.');
    }
    else{
      this.studentDataService.editStudent(this.studentEdit).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/studentlist']);
      })
    }
  }
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.studentDataService.getById(id).subscribe((data) => {
      console.log(data);
      this.studentEdit = data;
    });
  }
  
}
