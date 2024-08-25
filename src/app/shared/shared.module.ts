import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModCardComponent } from './components';
import { ImagePathPipe } from './pipes';

const COMMON_IMPORTS: CommonModule[] = [
    CommonModule,
    ImagePathPipe,
    MatCardModule,
    MatTooltipModule
]

const COMMON_DECLARATIONS: CommonModule[] = [
    ModCardComponent
];

@NgModule({
    declarations: [COMMON_DECLARATIONS],
    imports: [COMMON_IMPORTS],
    exports: [COMMON_DECLARATIONS],
})
export class SharedModule { }