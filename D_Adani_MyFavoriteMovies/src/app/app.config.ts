import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

//injecting new services here
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//import routes
import { appRoutes } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [ HttpClientModule,provideRouter(appRoutes),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    ...extractProviders(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    })), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};

function extractProviders(moduleWithProviders: any): any[] {
  if (moduleWithProviders && moduleWithProviders.providers) {
    return moduleWithProviders.providers;
  } else {
    return [];
  }
}
