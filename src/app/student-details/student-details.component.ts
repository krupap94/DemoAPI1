import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  student: Student | undefined;
  constructor(
    private studentDataService: StudentDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.studentDataService.getById(id).subscribe((data) => {
      console.log(data);
      this.student = data;
    });
  }
}
