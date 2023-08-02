import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-edit-reactive-form',
  templateUrl: './student-edit-reactive-form.component.html',
  styleUrls: ['./student-edit-reactive-form.component.css']
})
export class StudentEditReactiveFormComponent implements OnInit, OnDestroy {
  studentForm!: FormGroup;
  dataSubscription: Subscription |undefined;
 
  constructor(private studentDataService: StudentDataService, private route: ActivatedRoute,
     private router: Router){}
ngOnDestroy(): void {
  this.dataSubscription?.unsubscribe();
}
editStudent():void{
if(this.studentForm.valid== false){
  alert('Fill The Input');
}
else{
  this.studentDataService.editStudent(this.studentForm.value).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/studentlist']);
  })
  
}
}
ngOnInit(): void {
  this.studentForm =new FormGroup({
    id: new FormControl(0),
    sName: new FormControl('',Validators.required),
    semester: new FormControl(0),
    hobby: new FormControl(''),
   });
   let id= Number(this.route.snapshot.paramMap.get('id'));
   console.log(id);
   this.studentDataService.getById(id).subscribe((data)=>{
    console.log(data);
    
   });
   
}


}
