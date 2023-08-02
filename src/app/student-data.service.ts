import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResponse } from './delete-response';
import { Student } from './student';
import { StudentDTOAdd } from './student-dtoadd';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }
  getData():Observable<Student[]>{
    return this.httpClient.get<Student[]>('https://182.237.13.165/APIDemoApplication/api/Student/getdata');
    
  }
  getById(id:number):Observable<Student>{
    // let id = 32 
    return this.httpClient.get<Student>('https://182.237.13.165/APIDemoApplication/api/Student/getbyid/'+id);
  }
  addStudent(student: StudentDTOAdd): Observable<Student>{
    return this.httpClient.post<Student>('https://182.237.13.165/APIDemoApplication/api/Student/add',student);
  }
  deleteStudent(id: number):Observable<DeleteResponse>{
    return this.httpClient.delete<DeleteResponse>('https://182.237.13.165/APIDemoApplication/api/Student/delete/'+id);
  }
  editStudent(student: Student): Observable<Student>{
    return this.httpClient.put<Student>('https://182.237.13.165/APIDemoApplication/api/Student/edit', student);
  } 
}
