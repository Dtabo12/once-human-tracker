import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBottomSheet, MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterLink, RouterOutlet } from '@angular/router';
import { ENV } from 'src/environments/environments';
import { NavigatorComponent } from './core/components/navigator/navigator.component';
import { HomeComponent } from './pages/home/home.component';
import { ModsTrackerComponent } from './pages/mods-tracker/mods-tracker.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { ImagePathPipe } from '@shared/pipes';

const COMMON_IMPORTS = [
  CommonModule,
  RouterOutlet,
  RouterLink,
  MatAutocompleteModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  HomeComponent,
  ModsTrackerComponent,
  NavigatorComponent,
  LegalNoticeComponent,
  ImagePathPipe
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: COMMON_IMPORTS,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private _bottomSheet = inject(MatBottomSheet);
  
  onceHumanLogo: string = ENV.images.onceHumanLogo;
  officialSiteUrl: string = ENV.usefullRoutes.officialSite;
  interactiveMapUrl: string = ENV.usefullRoutes.interactiveMap;

  onOpenMenu(): void {
    this._bottomSheet.open(NavigatorComponent);
  }
}

export default COMMON_IMPORTS;