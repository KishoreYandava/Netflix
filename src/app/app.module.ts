import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { OnlyonnetflixComponent } from './navigatingcomponents/onlyonnetflix/onlyonnetflix.component';
import { FaqComponent } from './navigatingcomponents/faq/faq.component';
import { InvestorrelationsComponent } from './navigatingcomponents/investorrelations/investorrelations.component';
import { PrivacyComponent } from './navigatingcomponents/privacy/privacy.component';
import { SpeedtestComponent } from './navigatingcomponents/speedtest/speedtest.component';
import { HelpcentreComponent } from './navigatingcomponents/helpcentre/helpcentre.component';
import { JobsComponent } from './navigatingcomponents/jobs/jobs.component';
import { CookiepreferencesComponent } from './navigatingcomponents/cookiepreferences/cookiepreferences.component';
import { LegalnoticesComponent } from './navigatingcomponents/legalnotices/legalnotices.component';
import { AccountsComponent } from './navigatingcomponents/accounts/accounts.component';
import { WaystowatchComponent } from './navigatingcomponents/waystowatch/waystowatch.component';
import { CorporateinformationComponent } from './navigatingcomponents/corporateinformation/corporateinformation.component';
import { MediacentreComponent } from './navigatingcomponents/mediacentre/mediacentre.component';
import { TermsofuseComponent } from './navigatingcomponents/termsofuse/termsofuse.component';
import { ContactusComponent } from './navigatingcomponents/contactus/contactus.component';
import { NavbarComponent } from './commomcomponents/navbar/navbar.component';
import { FooterComponent } from './commomcomponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    OnlyonnetflixComponent,
    FaqComponent,
    InvestorrelationsComponent,
    PrivacyComponent,
    SpeedtestComponent,
    HelpcentreComponent,
    JobsComponent,
    CookiepreferencesComponent,
    LegalnoticesComponent,
    AccountsComponent,
    WaystowatchComponent,
    CorporateinformationComponent,
    MediacentreComponent,
    TermsofuseComponent,
    ContactusComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
