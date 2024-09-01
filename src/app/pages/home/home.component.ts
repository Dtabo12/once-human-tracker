import { Component } from '@angular/core';
import { ENV } from 'src/environments/environments';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  onceHumanLogo: string = ENV.images.onceHumanLogo;
  officialSiteUrl: string = ENV.usefullRoutes.officialSite;
  interactiveMapUrl: string = ENV.usefullRoutes.interactiveMap;
  homeBGMobile: string = ENV.images.homeBGMobile;
  homeBGDestop: string = ENV.images.homeBGDesktop;
}
