import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule
    // and so on...
} from "@angular/material";

const MAT_MODULES  = [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule
    // and so on...
];

@NgModule({
    imports: MAT_MODULES,
    exports: MAT_MODULES,
    declarations: []
})
export class MaterialModule { }