import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable, throwError } from 'rxjs';
import { MovieModel } from './shared/models/home.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private queryString = new BehaviorSubject<string>("");
  currentQuery = this.queryString.asObservable();
  private apiKey = "?api_key=57896cca63a7d000d5bec6df02be9a4d";
  private apiUrl = "https://api.themoviedb.org/";

  constructor(private http: HttpClient) {}

  checkQuery(queryData: string) {
    this.queryString.next(queryData);
  }

  public getList(category): Observable<MovieModel[]>{
    return this.http.get(this.apiUrl + "3/movie/" + category + this.apiKey)
    .pipe(map((data: any) => data.results));
  }

  search(query) {
    return this.http.get(
      this.apiUrl + "3/search/movie" + this.apiKey + "&query=" + query
    );
  }
}
