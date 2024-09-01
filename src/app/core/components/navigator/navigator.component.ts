import { Component, EventEmitter, Output } from '@angular/core';
import COMMON_IMPORTS from 'src/app/app.component';
import { ENV } from 'src/environments/environments';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [COMMON_IMPORTS],
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
