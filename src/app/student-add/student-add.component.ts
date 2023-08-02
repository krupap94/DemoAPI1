import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentDataService } from '../student-data.service';
import { StudentDTOAdd } from '../student-dtoadd';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
 studentAdd: StudentDTOAdd = new StudentDTOAdd(); 


constructor(private studentDataService: StudentDataService, private router: Router){

}
submitStudent(studentForm: NgForm):void{
  if(studentForm.valid==false){
    alert('Name is Required.');
    return ;
  }
  // this.studentAdd.sName="";
  // this.studentAdd.semester=0;
  // this.studentAdd.hobby="";
  this.studentDataService.addStudent(this.studentAdd).subscribe((data)=>{
  
    console.log(data);
    this.router.navigate(['/studentlist']);
  })
}

}
