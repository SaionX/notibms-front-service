import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout.component";
import { ListComponent } from "./list.component";
import { AddEditComponent } from "./add-edit.component";
import { EntitatsRoutingModule } from "./entitats-routing.module";

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    AddEditComponent  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EntitatsRoutingModule
  ]
})
export class EntitatsModule { }
