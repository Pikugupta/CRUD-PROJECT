import { Component } from '@angular/core';
import { TaskServiceService } from '../Service/task-service.service';
import { Router } from '@angular/router';
import { Task } from '../Modal/task-modal';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks = this.taskService.tasksSignal; // Uses signal directly for task list
  taskFilter: string = 'all';
  taskToEdit: Task | null = null;

  constructor(private taskService: TaskServiceService, private router: Router) {}


  filteredTask() {
    const allTasks = this.tasks(); 
    if (this.taskFilter === 'completed') {
      return allTasks.filter((task) => task.isComplete);
    } else if (this.taskFilter === 'pending') {
      return allTasks.filter((task) => !task.isComplete);
    }
    return allTasks;
  }

  setFilter(filter: string): void {
    this.taskFilter = filter;
  }

  toggleComplete(task: Task) {
    task.isComplete = !task.isComplete;
    this.taskService.updateTask(task); // Signal will automatically update the list
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id); // Signal will automatically update the list
  }

  editTask(task: Task) {
    this.taskToEdit = { ...task }; // Pass the task to the form for editing
  }

  clearEditState() {
    this.taskToEdit = null;
  }

  navigateToView(): void {
    const filteredTasks = this.filteredTask();
    if (filteredTasks.length) {
      this.router.navigate(['/viewTask'], { queryParams: { tasks: filteredTasks } });
    } else {
      console.log('No tasks to navigate with');
    }
  }
}
