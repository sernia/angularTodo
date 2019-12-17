import { Component } from '@angular/core';
import { Task } from './task'

const Tasks: Task[] = [
  {id: 12, name: "12N"},
  {id: 13, name: "12N"},
  {id: 14, name: "12N"},
  {id: 15, name: "12N"}
];

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title = "TODOLIST"
  task: Task = {
    id: 1,
    name: "sernia"
  }

  tasks = Tasks;

  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}


