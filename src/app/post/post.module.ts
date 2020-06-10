import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { PostRoutingModule } from './post-routing.module';
import { ShowComponent } from './show/show.component';
import { PostComponent } from './post.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [CreateComponent, ListComponent, ShowComponent, PostComponent, EditComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
