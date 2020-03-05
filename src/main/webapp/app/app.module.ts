import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterThirdSharedModule } from 'app/shared/shared.module';
import { JhipsterThirdCoreModule } from 'app/core/core.module';
import { JhipsterThirdAppRoutingModule } from './app-routing.module';
import { JhipsterThirdHomeModule } from './home/home.module';
import { JhipsterThirdEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterThirdSharedModule,
    JhipsterThirdCoreModule,
    JhipsterThirdHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterThirdEntityModule,
    JhipsterThirdAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterThirdAppModule {}
