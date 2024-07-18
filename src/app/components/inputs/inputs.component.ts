// src/app/components/inputs/inputs.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { WorkoutService, PeriodicElement } from '../../service/workout.service';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  name: string = '';
  workoutType: string = '';
  duration: number | null = null;

  constructor(private workoutService: WorkoutService) {}

  saveData(): void {
    if (!this.name || !this.workoutType || this.duration === null) {
      console.error('All fields are required.');
      return;
    }

    const newWorkout: PeriodicElement = {
      id: Date.now(),
      name: this.name,
      workouts: [{ type: this.workoutType, minutes: this.duration }]
    };

    this.workoutService.addWorkout(newWorkout);

    this.name = '';
    this.workoutType = '';
    this.duration = null;
  }
}


