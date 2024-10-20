import { Component } from '@angular/core';
import { TaskServiceService } from './../Service/task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
})
export class ViewTaskComponent {
  tasks = this.taskService.tasksSignal; // Use signal for task list
  filter: string = 'all';

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskServiceService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] || 'all';
    });
  }

  filteredTasks() {
    const allTasks = this.tasks(); // Get the signal's value
    if (this.filter === 'completed') {
      return allTasks.filter((task) => task.isComplete);
    } else if (this.filter === 'pending') {
      return allTasks.filter((task) => !task.isComplete);
    }
    return allTasks;
  }
}
