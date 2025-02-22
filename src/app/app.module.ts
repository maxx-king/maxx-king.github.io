import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeJSComponent } from './components/three-js/three-js.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexDisplayComponent } from './components/flex-display-carousel/flex-display/flex-display.component';
import { FlexDisplayCarouselComponent } from './components/flex-display-carousel/flex-display-carousel.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ThreeJSComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    ResumeComponent,
    ToolsComponent,
    HeroComponent,
    FooterComponent,
    FlexDisplayComponent,
    ParallaxComponent,
    FlexDisplayCarouselComponent,
    PdfViewerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'resume',
        component: NotFoundComponent
      },
      {
        path: 'tools',
        component: NotFoundComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
