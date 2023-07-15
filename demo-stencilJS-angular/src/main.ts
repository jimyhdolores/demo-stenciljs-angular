import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { defineCustomElements } from 'utp-web-components/loader';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule),
		{
			provide: APP_INITIALIZER,
			useFactory: () => defineCustomElements,
			multi: true
		}
	]
}).catch((err) => console.error(err));
