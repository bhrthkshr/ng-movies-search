import { Component, OnInit, Renderer2 } from '@angular/core';
import { MoviesService } from "../movies.service";


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  queryData: string;
  name: string;
  
  constructor(private result: MoviesService,
    private renderer: Renderer2) {}

  ngOnInit() {
    // console.log("came to header init");  

    this.result.currentQuery.subscribe(
      queryData => (this.queryData = queryData)
    );
  }



  sendQuery(data){
    // console.log('sending query to home comp',data);
    this.result.checkQuery(data);
  }
}
