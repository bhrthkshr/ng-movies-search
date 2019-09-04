import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  moviesList = [];
  queryData: string;
  constructor(
    private storage: MoviesService,
    private route: ActivatedRoute,
    private result: MoviesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.category === undefined) {
        this.getList("popular");
      } else {
        this.getList(params.category);
      }
    });
    this.result.currentQuery.subscribe(queryData => this.search((this.queryData = queryData)));
  }

  getList(category) {
    this.storage.getList(category).subscribe(response => {
      this.moviesList = response;
      console.log(this.moviesList);
    });
  }
    search(queryData) {
    // console.log("came to search", queryData);
    this.result.search(queryData).subscribe(response => {
      this.moviesList = response["results"];
      // console.log(this.moviesList);
    });
  }

}
