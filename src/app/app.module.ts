import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardPerfilComponent } from './components/home-page/card-perfil/card-perfil.component';
import { CardEstudosComponent } from './components/home-page/card-perfil/card-estudos/card-estudos.component';
import { CardPerfilProfilleComponent } from './components/home-page/card-perfil/card-perfil-profille/card-perfil-profille.component';
import { CardRedeSocialComponent } from './components/home-page/card-perfil/card-rede-social/card-rede-social.component';
import { CardHistoryComponent } from './components/home-page/card-history/card-history.component';

import { HttpClientModule } from '@angular/common/http';
import { ServiceGitService } from './services/service-git.service';
import { SharedService } from './models/global';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardPerfilComponent,
    CardPerfilProfilleComponent,
    CardRedeSocialComponent,
    CardEstudosComponent,
    CardHistoryComponent,
    PortfolioComponent,
    HomePageComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ServiceGitService,SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
