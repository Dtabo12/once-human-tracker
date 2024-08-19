import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImagePathPipe } from './pipes';

const COMMON_IMPORTS: CommonModule[] = [
    CommonModule,
    ImagePathPipe
]

const COMMON_DECLARATIONS: CommonModule[] = [];

@NgModule({
    declarations: [COMMON_DECLARATIONS],
    imports: [COMMON_IMPORTS],
    exports: [COMMON_DECLARATIONS],
})
export class SharedModule { }