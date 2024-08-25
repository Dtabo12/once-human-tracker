import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ImagePathPipe } from '@shared/pipes';
import { Observable, of } from 'rxjs';

const IMPORTS: CommonModule[] = [
  RouterLink,
  MatIconModule,
  AsyncPipe,
  ImagePathPipe
];

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IMPORTS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  interactiveMapUrl: string = 'https://oncehuman.th.gl/';
  officialSiteUrl: string = 'https://www.oncehuman.game/';
  onceHumanLogo: string = 'https://www.oncehuman.game/pc/fab/20240706164218/img/logo_1098a5d6.png';

  menuOpen: boolean = false;
  currentYear: number = new Date().getFullYear();

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
