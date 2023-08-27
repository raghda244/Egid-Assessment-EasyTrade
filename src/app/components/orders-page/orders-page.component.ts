import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order, OrderService } from 'src/models/Order';
import { StockService } from 'src/models/Stock';
import { ManageStockModalComponent } from '../manage-stock-modal/manage-stock-modal.component';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  searchTxt: string
  ordersList: Order[] = []
  page = 1;
  currentLang: any

  constructor(private orderService: OrderService, public stockService: StockService, public modalService: NgbModal, public translateService: TranslateService) {
    this.ordersList = this.orderService.getOrders();
    this.currentLang = localStorage.getItem('lang') || 'en';
    translateService.onLangChange.subscribe(lang => {
      this.currentLang = lang;
    })
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang
  });
  }

  onListDataChange(event: any) {
    this.page = event;
  }

  getStockName(id: number) {
    return this.stockService.getStockNameById(id)
  }
  search() {
    this.ordersList = this.orderService.OrdersList.filter((order) => order.personName.toLocaleLowerCase().includes(this.searchTxt))
  }
  openModal() {
    this.modalService.open(ManageStockModalComponent, { size: 'lg' });
  }
}
