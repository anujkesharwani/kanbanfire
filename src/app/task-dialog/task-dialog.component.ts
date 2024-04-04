import { Component, NgModule } from '@angular/core';
import {  Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task/task';
import { MatFormField} from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogClose } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  imports : [MatFormField, MatLabel,FormsModule,MatDialogClose,MatIcon],
  standalone: true,
  styleUrl: './task-dialog.component.css'
})

export class TaskDialogComponent {
    private backupTask: Partial<Task> = { ...this.data.task };
  
    constructor(
      public dialogRef: MatDialogRef<TaskDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
    ) {}
  
    cancel(): void {
      this.data.task.title = this.backupTask.title;
      this.data.task.description = this.backupTask.description;
      this.dialogRef.close(this.data);
    }
  

  
  }
  export interface TaskDialogData {
    task: Partial<Task>;
    enableDelete: boolean;
  }
  
  export interface TaskDialogResult {
    task: Task;
    delete?: boolean;
  }
