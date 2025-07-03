import { bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { App } from './app/app';
import {provideRouter} from '@angular/router';
import routeConfig from './app/app.routes';
import {AuthModule} from '@auth0/auth0-angular';
import {importProvidersFrom} from '@angular/core';

bootstrapApplication(App, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig),
  importProvidersFrom(
    AuthModule.forRoot({
      domain: 'dev-1ppg0d1zaminjjku.us.auth0.com',
      clientId: '2u0VVOA8iayDcAqZLmHYwYQcnggdISlk',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  )
  ],
}).catch((err) => console.error(err));
