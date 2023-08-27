import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentLang: string;

  constructor(public translateService: TranslateService, @Inject(DOCUMENT) private document: Document, private cd:ChangeDetectorRef) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translateService.use(this.currentLang);
  }

  ngOnInit(): void {
  }
  changeCurrentLang(lang: string) {
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    this.translateService.use(lang);
    localStorage.setItem('currentLang', lang);
    this.cd.detectChanges();
  }

}
