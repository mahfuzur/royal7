import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPosts()

      .subscribe(res => {
        this.posts = res;
      })
  }

}
