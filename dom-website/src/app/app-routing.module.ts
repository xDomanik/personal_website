import { NgModule } from '@angular/core';
import {Routes, RouterModule}  from '@angular/router' 
import {ContactComponent} from '../app/contact/contact.component'
import {AboutComponent} from './about/about.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule 
  ]
})
export class AppRoutingModule { }
