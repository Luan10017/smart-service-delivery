import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PresentationComponent } from './presentation/presentation.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    PresentationComponent
  ]
})
export class TemplateModule { }
