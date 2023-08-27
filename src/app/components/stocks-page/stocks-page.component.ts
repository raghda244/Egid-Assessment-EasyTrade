import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Stock, StockService } from 'src/models/Stock';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-stocks-page',
  templateUrl: './stocks-page.component.html',
  styleUrls: ['./stocks-page.component.css']
})
export class StocksPageComponent implements OnInit {

  stocksList: Stock[] = [];
  searchTxt: string = "";
  page: number = 1;
  currentLang: any

  constructor(private cd: ChangeDetectorRef, private stockService: StockService,public translateService:TranslateService) {
    this.stocksList = stockService.getStocks();
    this.currentLang = localStorage.getItem('lang') || 'en';
    translateService.onLangChange.subscribe(lang => {
      this.currentLang = lang;
    })
  }

  ngOnInit(): void {
    setInterval(() => {
      this.stocksList = this.stockService.getStocks();
    }, 10000)
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang
  });
  }

  filterStocks() {
    this.stocksList = this.stockService.filterStocks(this.searchTxt);
    this.page = 1
    this.cd.detectChanges();
  }

  onListDataChange(event: any) {
    this.page = event;
  }
}
