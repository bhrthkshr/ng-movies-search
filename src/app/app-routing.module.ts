import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { FormsDemoComponent } from "./forms-demo/forms-demo.component";
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "form", component: FormsDemoComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AboutComponent,
];
