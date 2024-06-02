import { bootstrapApplication } from '@angular/platform-browser';
import { MainMenuComponent } from './app/main-menu/main-menu.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(MainMenuComponent, config);

export default bootstrap;
