import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardPerfilComponent } from './components/card-perfil/card-perfil.component';
import { CardEstudosComponent } from './components/card-perfil/card-estudos/card-estudos.component';
import { CardPerfilProfilleComponent } from './components/card-perfil/card-perfil-profille/card-perfil-profille.component';
import { CardRedeSocialComponent } from './components/card-perfil/card-rede-social/card-rede-social.component';
import { CardHistoryComponent } from './components/card-history/card-history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardPerfilComponent,
    CardPerfilProfilleComponent,
    CardRedeSocialComponent,
    CardEstudosComponent,
    CardHistoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
