import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  lang = signal('en');

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {
    this.lang.set(lang);
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getLanguage() {
    return this.lang();
  }

}
