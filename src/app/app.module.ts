import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StocksPageComponent } from './components/stocks-page/stocks-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbAccordionModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageStockModalComponent } from './components/manage-stock-modal/manage-stock-modal.component';
import { FormsModule } from '@angular/forms';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { StockService } from 'src/models/Stock';
import { OrderService } from 'src/models/Order';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StocksPageComponent,
    FooterComponent,
    HeaderComponent,
    ManageStockModalComponent,
    OrdersPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    NgxPaginationModule,
    FormsModule,
    NgSelectModule,
    NgbAccordionModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [StockService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}