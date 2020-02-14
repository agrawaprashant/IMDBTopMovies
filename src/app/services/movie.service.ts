import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../model/movie";
@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  fetchMovies() {
    return this.http.get<Movie[]>("/movies");
  }
}
