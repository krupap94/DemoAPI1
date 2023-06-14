import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }
  getData():Observable<Student[]>{
    return this.httpClient.get<Student[]>('https://182.237.13.165/APIDemoApplication/api/Student/getdata');
    
  }
  getById():Observable<Student>{
    return this.httpClient.get<Student>('https://182.237.13.165/APIDemoApplication/api/Student/getbyid/32');
  }
}
