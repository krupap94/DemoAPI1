import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import * as path from 'path';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentAddReactiveFormComponent } from './student-add-reactive-form/student-add-reactive-form.component';
import { StudentEditReactiveFormComponent } from './student-edit-reactive-form/student-edit-reactive-form.component';

@NgModule({
  declarations: [AppComponent, StudentListComponent, StudentDetailsComponent, StudentAddComponent, StudentEditComponent, StudentAddReactiveFormComponent, StudentEditReactiveFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'studentlist',
        component: StudentListComponent,
      },
      { path: 'studentdetails/:id', component: StudentDetailsComponent },
      {
        path: 'studentdadd', component:StudentAddComponent
      },
      {
        path: '',
        redirectTo: 'studentlist',
        pathMatch: 'full',
      },
      {
        path:'studentedit/:id', component: StudentEditComponent
      },
      {
        path:'studentAddReactive', component: StudentAddReactiveFormComponent
      },
      {
        path:'studentEditReactive/:id', component: StudentEditReactiveFormComponent
      }
      
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
