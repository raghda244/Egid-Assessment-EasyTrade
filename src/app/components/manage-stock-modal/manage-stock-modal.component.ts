import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/models/Order';
import { Stock, StockService } from 'src/models/Stock';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-manage-stock-modal',
  templateUrl: './manage-stock-modal.component.html',
  styleUrls: ['./manage-stock-modal.component.css']
})
export class ManageStockModalComponent implements OnInit {

  stocksList: Stock[] = []
  stockSelected: Stock
  quantitySelected: number
  currentLang: any

  constructor(public activeModal: NgbActiveModal, private stockService: StockService, private orderService: OrderService, public translateService: TranslateService) {
    this.stocksList = this.stockService.getStocks();
    this.currentLang = localStorage.getItem('lang') || 'en';
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang
    });
  }
  manageOrder(processType: number) {
    this.orderService.ManageOrder({
      stockId: this.stockSelected.id,
      price: this.stockSelected.price * this.quantitySelected,
      quantity: this.quantitySelected,
      personName: 'Raghda Mohsen',
      type: processType
    });
    this.activeModal.close();
  }
}
