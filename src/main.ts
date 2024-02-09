import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let docTitle = document.title;
window.addEventListener('blur', ()=>{
  document.title = "dont leave 😢"
})
window.addEventListener('focus', () => {
  document.title = docTitle;
})
