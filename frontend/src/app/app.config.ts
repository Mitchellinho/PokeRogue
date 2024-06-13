import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AbilityService } from '../api/ability/ability.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { UserService } from '../api/user/user.service';
import { ActiveComponentService } from './service/active-component.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    AbilityService,
    UserService,
    ActiveComponentService,
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule), 
    ]
};
