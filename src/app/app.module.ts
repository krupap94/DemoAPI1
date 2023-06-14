import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
import * as path from 'path';

@NgModule({
  declarations: [AppComponent, StudentListComponent, StudentDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'studentlist',
        component: StudentListComponent,
      },
      { path: 'studentdetails/:id', component: StudentDetailsComponent },
      {
        path: '', redirectTo: 'studentlist', pathMatch: 'full',
      },
      {
        path: '',redirectTo: 'studentdetails', pathMatch: 'full',
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
