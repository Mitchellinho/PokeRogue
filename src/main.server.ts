import { bootstrapApplication } from '@angular/platform-browser';
import { MainMenuComponent } from './app/frontend/main-menu/main-menu.component';
import { config } from './app/frontend/app.config.server';

const bootstrap = () => bootstrapApplication(MainMenuComponent, config);

export default bootstrap;
