import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLang:string
  dir:string
  
  title = 'Easy-Trade';
  constructor(@Inject(DOCUMENT) private document: Document){
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = (this.currentLang === 'ar') ? 'rtl' : 'ltr';
  }
  
}
