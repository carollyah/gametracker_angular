import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PopulaireComponent } from './populaire/populaire.component';
import { RecommandeComponent } from './recommande/recommande.component';
import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [

    AppComponent,

    MenuComponent,
	
	SearchBarComponent,

    PopulaireComponent,
	
	RecommandeComponent,

    ListeComponent

  ],

  imports: [

    BrowserModule,

    FormsModule,

    HttpModule,
	
	AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }