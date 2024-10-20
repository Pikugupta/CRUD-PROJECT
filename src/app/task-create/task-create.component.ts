import {Component,Output,EventEmitter,Input,OnInit,OnChanges,SimpleChanges,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../Service/task-service.service';
import { Task } from '../Modal/task-modal';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
})
export class TaskCreateComponent implements OnInit, OnChanges {
  taskForm: FormGroup;
  generatedId: string; // Property to store the generated ID

  @Input() taskToEdit: Task | null = null; // Input to receive the task to be edited
  @Output() taskCreated = new EventEmitter<void>();
  @Output() taskUpdated = new EventEmitter<void>(); // EventEmitter for task update

  constructor(
    private fb: FormBuilder,
    private taskService: TaskServiceService
  ) {
    this.generatedId = this.idGenerated(); // Generate ID once when component is created
    this.taskForm = this.fb.group({
      id: [this.generatedId],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.populateFormForEdit();
    }
  }

  populateFormForEdit(): void {
    if (this.taskToEdit) {
      this.taskForm.patchValue(this.taskToEdit);
    }
  }

  idGenerated() {
    const randomId = Date.now() + Math.floor(Math.random() * 1000);
    return randomId.toString().slice(-5);
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      if (this.taskToEdit) {
        // If editing an existing task, update the task
        const updatedTask: Task = {
          id: this.taskToEdit.id, // Keep the same ID
          description: this.taskForm.value.description,
          isComplete: this.taskToEdit.isComplete, // Maintain the same complete status
        };
        this.taskService.updateTask(updatedTask);
        this.taskUpdated.emit(); 
      } else {
        // Otherwise, create a new task
        const newTask: Task = {
          id: this.generatedId,
          description: this.taskForm.value.description,
          isComplete: false,
        };
        this.taskService.addTask(newTask);
        this.taskCreated.emit();
      }

      // Reset the form after submission
      this.generatedId = this.idGenerated(); 
  }
}
}
