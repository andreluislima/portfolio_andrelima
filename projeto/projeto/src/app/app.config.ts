import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Lara,
                options: {
                    
                    darkModeSelector: false,
                    cssLayer: false
                } 
            }
        }),
        provideRouter(routes),
        provideHttpClient(withFetch()),

        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
};