import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStackOverflow, faGithub, faTwitter, faLinkedin, faHashnode, faWhatsapp, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBlog, faNewspaper } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStackOverflow,
      faGithub,
      faTwitter,
      faLinkedin,
      faHashnode,
      faWhatsapp,
      faEnvelope,
      faBlog,
      faNewspaper,
      faSpotify
    )
  }
}
