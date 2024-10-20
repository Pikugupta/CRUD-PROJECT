CRUD Application with Local Storage

This project is a simple CRUD application utilizing Angular's state management with Signals to handle task operations, including adding, updating, deleting, and editing tasks. The data is persisted using local storage.

Technologies Used

Angular (v16+)
Angular Signals for state management
TypeScript
HTML5 and CSS3
Local Storage for data persistence


Components Overview

The application consists of the following components:

1. TaskCreateComponent
The TaskCreateComponent is responsible for task creation. It generates a unique task ID and allows the user to input a task description. When the user clicks the Add Task button, the task is added to the list and saved in local storage.


2. TaskListComponent
The TaskListComponent displays a list of tasks (limited to 3 rows at a time). It provides the following functionalities for each task:

1-Mark as Pending / Mark as Completed
This button toggles the task's status between pending and completed.

2-Edit Button
Clicking this button allows you to modify the task's description. However, the Generated ID remains immutable, as it is auto-generated and cannot be changed. The Add Task button transforms into an Update Task button once editing begins, allowing the user to save their changes.

3-Delete Button
The Delete button is only visible for completed tasks. Clicking it will remove the task from both the displayed list and local storage.
Filter Buttons


The filter options include:
All Button (default): Displays both pending and completed tasks.
Pending Button: Filters and displays only pending tasks.
Completed Button: Filters and displays only completed tasks.


View All Tasks Link
Since the table is limited to showing only 3 tasks at a time, this link allows users to navigate to a separate view that displays all tasks with their respective statuses (completed or pending).


3. ViewTaskComponent
This component displays all tasks in a table with their statuses (completed or pending), allowing users to view more than 3 tasks at once.