import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Store } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { map, Observable } from 'rxjs';
import { modActions } from '../stores/mod.action';
import { selectData } from '../stores/mod.reducer';
import { ModCategories } from '../types/mods-categories.type';
import { Mod } from '../types/mods.type';

const IMPORTS: CommonModule[] = [
  CommonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  SharedModule,
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
export class ModsTrackerComponent {

  store = inject(Store);
  mods = this.store.select(selectData);
  filteredMods$: Observable<Mod[]>;

  value: string = '';

  constructor() {
    this.store.dispatch(modActions.loadMods());
    this.filteredMods$ = this.mods;
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

  onResetName(): void {
    this.value = '';
    this.filteredMods$ = this.mods;
  }

  onChangeName(name: string): void {
    this.filteredMods$ = name.length <= 2
      ? this.mods
      : this.filteredMods$.pipe(
        map((mods) => {
          return mods.filter(
            (mod) => mod.name.toLowerCase().includes(name.toLowerCase())
          );
        })
      )
  }
}
