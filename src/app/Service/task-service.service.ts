import { Injectable, signal } from '@angular/core';
import { Task } from './../Modal/task-modal';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private taskKey = 'Tasks';

  // Define a signal to hold the task list
  tasksSignal = signal<Task[]>(this.getInitialTasks());

  constructor() {}

  // Get initial tasks from localStorage
  getInitialTasks(): Task[] {
    const tasks = localStorage.getItem(this.taskKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  
  saveTasksToSignal(tasks: Task[]): void {
    this.tasksSignal.set(tasks); 
    localStorage.setItem(this.taskKey, JSON.stringify(tasks)); // Save to localStorage
  }

  addTask(taskData: Task) {
    const tasks = this.tasksSignal(); 
    tasks.push(taskData); 
    this.saveTasksToSignal(tasks); // Update signal and localStorage
  }

  updateTask(taskData: Task) {
    const tasks = this.tasksSignal();
    const index = tasks.findIndex((t) => t.id === taskData.id);
    if (index > -1) {
      tasks[index] = taskData; // Update the task
      this.saveTasksToSignal(tasks); // Update signal and localStorage
    }
  }

  deleteTask(id: string) {
    const tasks = this.tasksSignal();
    const updatedTasks = tasks.filter((t) => t.id !== id); 
    this.saveTasksToSignal(updatedTasks); // Update signal and localStorage
  }
}
