import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { modActions } from '../stores/mod.action';
import { selectData } from '../stores/mod.reducer';
import { ModCategories } from '../types/mods-categories.type';
import { Mod } from '../types/mods.type';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '@shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';

const COMMON_IMPORTS: CommonModule[] = [
  CommonModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatTooltipModule,
  FormsModule,
  SharedModule
]

@Component({
  selector: 'app-mods-tracker',
  standalone: true,
  imports: [COMMON_IMPORTS],
  templateUrl: './mods-tracker.component.html',
  styleUrl: './mods-tracker.component.scss'
})
export class ModsTrackerComponent {

  store = inject(Store);
  mods = this.store.select(selectData);
  filteredMods$: Observable<Mod[]>;

  searchOpen = false;
  filterOpen = false;
  sectionTitle: string = 'Available mods';
  currentYear: number = new Date().getFullYear();
  filterValue: string = '';

  // Lista de categorías seleccionadas
  selectedCategories = signal<ModCategories[]>([]);

  constructor() {
    this.store.dispatch(modActions.loadMods());
    this.filteredMods$ = this.mods;
  }

  readonly availableMods = signal<ModCategories[]>([
    {
      id: 1,
      name: 'Armor mods',
      completed: false,
      subCategories: [
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
      subCategories: [
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
    return this.availableMods().map(mods => {
      if (!mods.subCategories) {
        return false;
      }
      return mods.subCategories.some(sc => sc.completed) && !mods.subCategories.every(sc => sc.completed);
    });
  });

  update(categoryIndex: number, completed: boolean, subcategoryIndex?: number) {
    this.availableMods.update(mods => {
      const mod = mods[categoryIndex];

      if (subcategoryIndex === undefined) {
        mod.completed = completed;
        mod.subCategories?.forEach(t => (t.completed = completed));

        this.updateSelectedCategories(mod, completed);
      } else {
        const submod = mod.subCategories![subcategoryIndex];
        submod.completed = completed;
        
        if (mod.subCategories?.every(t => t.completed)) {
          console.log('👀if');
          mod.completed = true;
          
          this.updateSelectedCategories(mod, true);
        } else {
          console.log('👀else');
          mod.completed = false;

          this.updateSelectedCategories(mod, false);
        }
      }

      return [...mods];
    });
  }

  private updateSelectedCategories(mod: ModCategories, completed: boolean) {
    const selectedMods = this.selectedCategories();
  
    if (completed) {
      if (!selectedMods.includes(mod)) {
        this.selectedCategories.set([...selectedMods, mod]);
      }
    } else {
      this.selectedCategories.set(selectedMods.filter(m => m !== mod));
    }

    // this.filterMods();
  }

  filterMods() {
    const selectedMods = this.selectedCategories();
    console.log('🚩selectedMods', selectedMods);

    //1. Cuando se selecciona toda la categoría
    selectedMods.filter

    //2. Cuando se seleccionan una o más subcategorías
    
  }

  onResetName(): void {
    this.filterValue = '';
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

  toggleSearch() {
    this.filterValue = '';
    this.searchOpen = !this.searchOpen;
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen;
  }
}
