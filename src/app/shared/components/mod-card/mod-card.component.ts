import { Component, Input, input } from '@angular/core';
import { Mod } from 'src/app/pages/types/mods.type';

@Component({
  selector: 'app-mod-card',
  templateUrl: './mod-card.component.html',
  styleUrl: './mod-card.component.scss'
})
export class ModCardComponent {
  mod = input.required<Mod>();
}
