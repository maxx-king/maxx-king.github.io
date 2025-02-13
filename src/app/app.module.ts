import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeJSComponent } from './components/three-js/three-js.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ToolsComponent } from './pages/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeJSComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    CarouselComponent,
    ResumeComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
