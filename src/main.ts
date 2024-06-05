import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainMenuComponent } from './app/frontend/main-menu/main-menu.component';

bootstrapApplication(MainMenuComponent, appConfig)
  .catch((err) => console.error(err));
