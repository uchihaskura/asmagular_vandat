import { Routes } from '@angular/router';
import { CategoryList } from './category-list/category-list';
import { ProductListComponent } from './product-list/product-list';
import { BrandList } from './brand-list/brand-list';
import { UserList } from './user-list/user-list';
import { ProductDetail } from './product-detail/product-detail';
import { ProductCreate } from './product-create/product-create';
import { Sidebar } from './sidebar/sidebar';
import { CategoryCreateComponent } from './category-create/category-create';
import { BrandCreate } from './brand-create/brand-create';




export const routes: Routes = [
    { path: 'categories',component: CategoryList } ,
    { path: 'products', component: ProductListComponent },
    { path: 'brands', component: BrandList },
    { path: 'users', component: UserList },
    { path: 'product/detail/:id',component: ProductDetail},
    { path: 'products/create', component: ProductCreate } ,
    { path: 'categories/create', component: CategoryCreateComponent },
    { path: 'brand/create', component: BrandCreate },
    
];
