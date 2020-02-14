import { Component, OnInit } from "@angular/core";
import { MovieService } from "./services/movie.service";
import { Movie } from "./model/movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  title = "ClarivateAnalytics";
  movies: Movie[] = new Array();
  ngOnInit() {
    this.movieService.fetchMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies.length);
    });
  }
}
