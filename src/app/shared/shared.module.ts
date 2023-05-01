import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    PageNotFoundComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
