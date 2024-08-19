import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ImagePathPipe } from '@shared/pipes';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe, ImagePathPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  shouldRenderDropdown$: Observable<boolean> = new Observable<boolean>();

  onNavigate(route?: string): void {
    if (route) window.open('https://oncehuman.th.gl/', '_blank');
  }

  onDeployDropdown(): void {
    this.shouldRenderDropdown$ = of(true);
  }
}
