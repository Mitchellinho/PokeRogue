import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AbilityService } from '../api/ability/abilities.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    AbilityService,
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule), 
    ]
};
