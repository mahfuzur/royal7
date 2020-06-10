import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostModule } from './post/post.module';

const routes: Routes = [
  { path: 'post', component: PostModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
