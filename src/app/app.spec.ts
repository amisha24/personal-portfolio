import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';

// minimal routes just for testing
const routes: Routes = [];

describe('AppComponent (standalone)', () => {
  it('should create the app', async () => {
    const appRef = await bootstrapApplication(AppComponent, {
      providers: [provideRouter(routes)],
    });

    expect(appRef.components[0]).toBeTruthy();

    // Clean up
    appRef.destroy();
  });
});