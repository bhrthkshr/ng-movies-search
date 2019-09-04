import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { MoviesService } from "./movies.service";


import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MovieCardComponent } from './home/movie-card/movie-card.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: ":category", component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    routingComponents,
    MovieCardComponent,
    FormsDemoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
