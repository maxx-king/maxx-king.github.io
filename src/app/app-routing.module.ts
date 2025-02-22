import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ToolsComponent } from './pages/tools/tools.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'resume', component: ResumeComponent },
  { path: 'tools', component: ToolsComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for 404, must be last 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
