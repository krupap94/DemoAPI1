import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentDataService } from '../student-data.service';
import { StudentDTOAdd } from '../student-dtoadd';

@Component({
  selector: 'app-student-add-reactive-form',
  templateUrl: './student-add-reactive-form.component.html',
  styleUrls: ['./student-add-reactive-form.component.css']
})
export class StudentAddReactiveFormComponent implements OnInit{
studentForm!: FormGroup;//Form Model
// studentAdd: StudentDTOAdd= new StudentDTOAdd();//Data Model
constructor(private studentDataService:StudentDataService){}
  ngOnInit(): void {
   this.studentForm =new FormGroup({
    sName: new FormControl('',Validators.required),
    semester: new FormControl(0),
    hobby: new FormControl('')
   });
  }
  saveStudent():void{
    console.log(this.studentForm.valid);
    console.log(this.studentForm.get('sName')?.value);
    console.log(this.studentForm.get('sName')?.valid);
    console.log(this.studentForm.value);
    if(this.studentForm.valid){
      this.studentDataService.addStudent(this.studentForm.value).subscribe((data)=>{
        console.log(data);
      })
    }
  }

}
