import { Component, OnInit, Input } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { Movie } from "../model/movie";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.css"]
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  constructor() {}
  ngOnInit() {
    // this.movie = {
    //   movie_title: "Avatar",
    //   director_name: "James Cameron",
    //   actor_1_name: "CCH Pounder",
    //   actor_2_name: "Joel David Moore",
    //   genres: "Action|Adventure|Fantasy|Sci-Fi",
    //   language: "English",
    //   country: "USA",
    //   content_rating: "PG-13",
    //   budget: "237000000",
    //   title_year: "2009",
    //   plot_keywords: "avatar|future|marine|native|paraplegic",
    //   movie_imdb_link: "http://www.imdb.com/title/tt0499549/?ref_=fn_tt_tt_1"
    // };
  }
}
