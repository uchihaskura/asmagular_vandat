import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";
import { Sidebar } from "./sidebar/sidebar";



@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet,RouterModule,Sidebar],
  templateUrl: "./app.html",
})
export class AppComponent {
  parentData: string = "Hello from Parent Component!";
}