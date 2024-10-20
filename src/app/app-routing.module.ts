import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { ViewTaskComponent } from './view-task/view-task.component';

const routes : Routes=[
  { path: 'task', component: TaskListComponent},
  { path: 'task/complete', component: TaskListComponent},
  { path: 'task/pending', component: TaskListComponent},
  { path: 'viewTask', component: ViewTaskComponent},
  { path: '',redirectTo: '/task', pathMatch: 'full'},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
