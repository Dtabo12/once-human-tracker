import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterLink, RouterOutlet } from '@angular/router';
import { ENV } from 'src/environments/environments';
import { NavigatorComponent } from './core/components/navigator/navigator.component';
import { HomeComponent } from './pages/home/home.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { ModsTrackerComponent } from './pages/mods-tracker/mods-tracker.component';

const COMMON_IMPORTS = [
  /* Modules */
  CommonModule,
  RouterOutlet,
  RouterLink,
  MatSidenavModule,
  /* Components */
  HomeComponent,
  ModsTrackerComponent,
  NavigatorComponent,
  LegalNoticeComponent,
  /* Pipes */
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: COMMON_IMPORTS,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onceHumanLogo: string = ENV.images.onceHumanLogo;
  officialSiteUrl: string = ENV.usefullRoutes.officialSite;
  interactiveMapUrl: string = ENV.usefullRoutes.interactiveMap;
}