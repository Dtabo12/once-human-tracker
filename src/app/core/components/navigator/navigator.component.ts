import { Component, EventEmitter, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { ENV } from 'src/environments/environments';

const COMMON_IMPORTS = [
  /* Modules */
  RouterLink,
  MatDividerModule,
  MatIconModule,
  MatListModule,
];

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: COMMON_IMPORTS,
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.scss'
})
export class NavigatorComponent {

  @Output() closeDrawer = new EventEmitter<void>();

  onceHumanLogo: string = ENV.images.onceHumanLogo;
  officialSiteUrl: string = ENV.usefullRoutes.officialSite;
  interactiveMapUrl: string = ENV.usefullRoutes.interactiveMap;

  onClose(): void {
    this.closeDrawer.emit();
  }
}
