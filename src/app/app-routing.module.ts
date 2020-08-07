import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FundraisingComponent } from './fundraising/fundraising.component';
import { CardsComponent } from './cards/cards.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "fundraising",
    component: FundraisingComponent
  },
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path: "chatbot",
    component: ChatbotComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
