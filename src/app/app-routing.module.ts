import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BiensComponent } from './biens/biens.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ 
  
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'home', component: HomeComponent },
  {path:'biens', component: BiensComponent },
  {path:'contact', component: ContactComponent },
  {path:'about', component: AboutComponent },
  {path:'detail', component: DetailComponent },
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'location', component: LocationComponent },
  {path:'reclamation', component: ReclamationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


 
}
