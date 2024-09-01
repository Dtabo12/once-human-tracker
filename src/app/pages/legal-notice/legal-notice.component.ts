import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ImagePathPipe } from '@shared/pipes';
import { ENV } from 'src/environments/environments';

const COMMON_IMPORTS = [
  /* Modules */
  MatCardModule,
  MatIconModule,
  /* Pipes */
  ImagePathPipe
];

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: COMMON_IMPORTS,
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  currentYear: number = new Date().getFullYear();

  onClic(): void {
    window.open(
      ENV.usefullRoutes.dtaboDc,
      '_blank'
    )
  }
}
