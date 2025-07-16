import { Component } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list";
import { ChildConponent } from "./child-conponent/child-conponent"; 
import { FormsModule} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CategoryList } from "./category-list/category-list";
import { BrandList } from "./brand-list/brand-list";
import { UserList } from "./user-list/user-list";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [ProductListComponent, FormsModule, CommonModule, ChildConponent, CategoryList,BrandList,UserList],
  templateUrl: "./app.html",
})
export class AppComponent {
  parentData: string = "Hello from Parent Component!";
}