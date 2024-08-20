import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Store } from '@ngrx/store';
import { modActions } from '../stores/mod.action';
import { selectData } from '../stores/mod.reducer';
import { ModCategories } from '../types/mods-categories.type';

const IMPORTS: CommonModule[] = [
  CommonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  AsyncPipe,
  JsonPipe
];

@Component({
  selector: 'app-mods-tracker',
  standalone: true,
  imports: [IMPORTS],
  templateUrl: './mods-tracker.component.html',
  styleUrl: './mods-tracker.component.scss'
})
export class ModsTrackerComponent implements OnInit {

  store = inject(Store);
  mods = this.store.select(selectData);

  constructor() { }

  ngOnInit(): void {
    this.store.dispatch(modActions.loadMods());
    console.log('🚩Component: list of mods:', this.mods);
  }

  readonly tasks = signal<ModCategories[]>([
    {
      id: 1,
      name: 'Armor mods',
      completed: false,
      subtasks: [
        { id: 1, name: 'Helmet', completed: false },
        { id: 2, name: 'Mask', completed: false },
        { id: 3, name: 'Top', completed: false },
        { id: 4, name: 'Gloves', completed: false },
        { id: 5, name: 'Botttom', completed: false },
        { id: 6, name: 'Shoes', completed: false },
      ],
    },
    {
      id: 2,
      name: 'Weapon mods',
      completed: false,
      subtasks: [
        { id: 1, name: 'Bomber', completed: false },
        { id: 2, name: 'Bounce', completed: false },
        { id: 3, name: 'Burn', completed: false },
        { id: 4, name: 'Fast Gunner', completed: false },
        { id: 5, name: 'Fortress Warfare', completed: false },
        { id: 6, name: 'Frost Vortex', completed: false },
        { id: 7, name: 'Power Surge', completed: false },
        { id: 8, name: 'Shrapnel', completed: false },
        { id: 9, name: 'The Bull\'s Eye', completed: false },
      ],
    },
  ]);

  readonly partiallyComplete = computed(() => {
    return this.tasks().map(task => {
      if (!task.subtasks) {
        return false;
      }
      return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
    });
  });

  update(taskIndex: number, completed: boolean, subtaskIndex?: number) {
    this.tasks.update(tasks => {
      const task = tasks[taskIndex];
      if (subtaskIndex === undefined) {
        task.completed = completed;
        task.subtasks?.forEach(t => (t.completed = completed));
      } else {
        task.subtasks![subtaskIndex].completed = completed;
        task.completed = task.subtasks?.every(t => t.completed) ?? true;
      }
      return [...tasks];
    });
  }


}
