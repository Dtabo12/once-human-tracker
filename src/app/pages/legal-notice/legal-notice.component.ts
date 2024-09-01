import { Component } from '@angular/core';
import COMMON_IMPORTS from 'src/app/app.component';
import { ENV } from 'src/environments/environments';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [COMMON_IMPORTS],
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
