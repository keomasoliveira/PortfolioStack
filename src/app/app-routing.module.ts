import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHistoryComponent } from './components/home-page/card-history/card-history.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', redirectTo:'my-history',pathMatch:'full'  },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'my-history', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
