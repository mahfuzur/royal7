import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  slug: string = "";
  post: any = {};
  isLoading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService) {
    this.slug = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.api.getPost(this.slug).subscribe(res => {
      this.post = res;
      this.isLoading = false;
    })
  }

}
