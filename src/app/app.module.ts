import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LatestWorkComponent } from './latest-work/latest-work.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NewsComponent } from './news/news.component';
import { ArticleOneComponent } from './article-one/article-one.component';
import { ArticleTwoComponent } from './article-two/article-two.component';
import { ArticleThreeComponent } from './article-three/article-three.component';
import { ArticleFourComponent } from './article-four/article-four.component';
import { ServiceEMCComponent } from './services/service-emc/service-emc.component';
import { ServiceRFComponent } from './services/service-rf/service-rf.component';
import { ServiceEquipementAndTechnologiesComponent } from './services/service-equipement-and-technologies/service-equipement-and-technologies.component';
import { ServiceSupportComponent } from './services/service-support/service-support.component';
import { ServiceEnergyEfficiencyComponent } from './services/service-energy-efficiency/service-energy-efficiency.component';
import { GetinTouchComponent } from './getin-touch/getin-touch.component';
import { OneNewComponent } from './one-new/one-new.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'get-in-touch', component: GetinTouchComponent },
  { path: 'latest-work', component: LatestWorkComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'one-new', component: OneNewComponent },
  { path: 'quick-process-time', component: ArticleOneComponent },
  { path: 'good-customers-relationship', component: ArticleTwoComponent },
  { path: 'comptetitive-costs', component: ArticleThreeComponent },
  { path: 'flexibility-in-execution', component: ArticleFourComponent },
  { path: 'service-EMC', component: ServiceEMCComponent },
  { path: 'service-RF', component: ServiceRFComponent },
  { path: 'service-Equipment-and-Technologies', component: ServiceEquipementAndTechnologiesComponent },
  { path: 'service-Support', component: ServiceSupportComponent },
  { path: 'service-Energy-Efficiency', component: ServiceEnergyEfficiencyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestWorkComponent,
    ServicesComponent,
    AboutUsComponent,
    NewsComponent,
    ArticleOneComponent,
    ArticleTwoComponent,
    ArticleThreeComponent,
    ArticleFourComponent,
    ServiceEMCComponent,
    ServiceRFComponent,
    ServiceEquipementAndTechnologiesComponent,
    ServiceSupportComponent,
    ServiceEnergyEfficiencyComponent,
    GetinTouchComponent,
    OneNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
