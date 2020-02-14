import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MovieToolComponent } from "./movie-tool/movie-tool.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { HttpClientModule } from "@angular/common/http";
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieToolComponent,
    MovieCardComponent,
    PaginationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
