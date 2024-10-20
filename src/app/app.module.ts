import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { ViewTaskComponent } from './view-task/view-task.component';
  

@NgModule({
  declarations: [AppComponent, TaskListComponent, TaskCreateComponent, ViewTaskComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

 
}
