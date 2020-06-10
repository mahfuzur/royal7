import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [CreateComponent, ListComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [CreateComponent, ListComponent]
})
export class PostModule { }
