import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PopulaireComponent } from './populaire/populaire.component';
import { RecommandeComponent } from './recommande/recommande.component';
import { ListeComponent } from './liste/liste.component';


const routes: Routes = [

  { path: 'menu',  component: MenuComponent },
  { path: 'search-bar',  component: SearchBarComponent },
  { path: 'populaire',  component: PopulaireComponent },
  { path: 'recommande',  component: RecommandeComponent },
  { path: 'liste',  component: ListeComponent },
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}