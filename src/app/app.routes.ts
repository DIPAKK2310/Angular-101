import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path:'about',
        component: AboutComponent,
        title: 'About Page',

    },
    {
        path:'products',
        component: ProductsComponent,
        title: 'Products Page',
    },
    {
        path:'contact',
        component:ContactComponent,
        title: 'Contact Page',
    }
];
