import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ImagePathPipe } from '@shared/pipes';
import { Mod } from 'src/app/pages/types/mods.type';

const IMPORTS = [
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  ImagePathPipe
];

@Component({
  selector: 'app-mod-info',
  standalone: true,
  imports: [IMPORTS],
  templateUrl: './mod-info.component.html',
  styleUrl: './mod-info.component.scss'
})
export class ModInfoComponent {
  mod = input.required<Mod>();
  dialogRef = inject(MatDialogRef<ModInfoComponent>)
  data = inject<{ mod: Mod }>(MAT_DIALOG_DATA);

  displayedColumns: string[] = [
    'location',
    'enemyType',
    'mode'
  ];

  constructor() {
    this.dialogRef.updateSize('800px');
  }

  renderMode(mode: number[]): string {
    let modeString: string = '';
    if (
      mode.includes(1) && mode.includes(2) && mode.includes(3)
    ) {
      modeString = '⚪ - 🔴 - 🔵';
    } else if (
      mode.includes(2) && mode.includes(3)
    ) {
      modeString = '🔴 - 🔵';
    } else if (
      mode.includes(1) && mode.includes(2)
    ) {
      modeString = '⚪ - 🔴';
    } else if (
      mode.includes(1) && mode.includes(3)
    ) {
      modeString = '⚪ - 🔵';
    } else if (
      mode.includes(3)
    ) {
      modeString = '🔵';
    } else if (
      mode.includes(2)
    ) {
      modeString = '🔴';
    } else if (
      mode.includes(1)
    ) {
      modeString = '⚪';
    }
    return modeString;
  }

}
