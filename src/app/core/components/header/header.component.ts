import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImagePathPipe } from '@shared/pipes';
import { Observable, of } from 'rxjs';

const IMPORTS: CommonModule[] = [
  RouterLink,
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

  shouldRenderDropdown$: Observable<boolean> = new Observable<boolean>();

  interactiveMapUrl: string = 'https://oncehuman.th.gl/';

  onDeployDropdown(): void {
    this.shouldRenderDropdown$ = of(true);
  }
}
