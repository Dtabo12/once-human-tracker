import { Component, inject, input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModInfoComponent } from '@shared/dialogs';
import { Mod } from 'src/app/pages/types/mods.type';

@Component({
  selector: 'app-mod-card',
  templateUrl: './mod-card.component.html',
  styleUrl: './mod-card.component.scss'
})
export class ModCardComponent {
  mod = input.required<Mod>();
  readonly dialog = inject(MatDialog);

  onOpenDialog(): void {
    const dialogRef = this.dialog.open(
      ModInfoComponent,
      {
        maxWidth: '700px',
        data: {
          mod: this.mod()
        }
      }
    );
  }
}
