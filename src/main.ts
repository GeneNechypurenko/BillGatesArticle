import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainComponent } from './app/main/main.component';
import { LinkListComponent } from './app/link-list/link-list.component';
import { QuoteListComponent } from './app/quote-list/quote-list.component';
import { BioComponent } from './app/bio/bio.component';

bootstrapApplication(MainComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(LinkListComponent, appConfig)
  .catch((err) => console.error(err));
bootstrapApplication(QuoteListComponent, appConfig)
  .catch((err) => console.error(err));
  bootstrapApplication(BioComponent, appConfig)
  .catch((err) => console.error(err));