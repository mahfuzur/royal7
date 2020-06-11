import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgbModule
  ]
})
export class ProductModule { }
