
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import {AuthorizationComponent} from '../authorization/authorization.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    DescriptionComponent,
    FooterComponent,
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
      HeaderComponent,
      NavComponent,
      DescriptionComponent,
      FooterComponent
  ]
})
export class CoreModule { }
