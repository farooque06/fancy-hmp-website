import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/controls/header/header.component';
import { FooterComponent } from './components/controls/footer/footer.component';
import { PhoneFrameComponent } from './components/controls/phone-frame/phone-frame.component';

import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/sections/banner/banner.component';
import { WhyComponent } from './components/sections/why/why.component';
import { NewArrivalComponent } from './components/sections/new-arrival/new-arrival.component';
import {
  NgbCarouselModule,
  NgbModule,
  NgbPaginationModule,
  NgbNavModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/sections/product-list/product-list.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { CommonBannerComponent } from './components/controls/common-banner/common-banner.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { WorldOfHempComponent } from './components/pages/world-of-hemp/world-of-hemp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhoneFrameComponent,
    HomeComponent,
    BannerComponent,
    WhyComponent,
    NewArrivalComponent,
    ProductListComponent,
    AboutComponent,
    ContactUsComponent,
    CommonBannerComponent,
    ProductsComponent,
    WorldOfHempComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbCarouselModule,
    NgbNavModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
