import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './core/components/header/header.component';

const COMMON_IMPORTS = [
  CommonModule,
  RouterOutlet,
  RouterLink,
  AsyncPipe,
  MatSidenavModule,
  MatButtonModule,
  SharedModule,
  HeaderComponent,
  AsyncPipe,
  JsonPipe,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: COMMON_IMPORTS,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'once-human-tracker';
}
