import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksPageComponent } from './components/stocks-page/stocks-page.component';
import { OrdersPageComponent } from './components/orders-page/orders-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'StockList', pathMatch: 'full' },
  {
    path: 'StockList',
    component: StocksPageComponent
  },
  {
    path: 'OrdersList',
    component: OrdersPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
