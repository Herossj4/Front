import { Component, ElementRef, OnDestroy, AfterViewInit,OnInit } from '@angular/core';
import { create, createOptions, RichEdit } from 'devexpress-richedit';
import dictionaryEs from 'dictionary-es'
import { loadMessages, locale } from 'devextreme/localization';
import RELocalization from 'devexpress-richedit/localization/dx-rich.es.json';
@Component({
  selector: 'app-richedit',
  template: '<div></div>',
  styleUrls: ['./richedit.component.scss']
})
export class RicheditComponent implements AfterViewInit, OnDestroy, OnInit {

  private rich: any = RichEdit;

  constructor(private element: ElementRef) {
    loadMessages({ es: RELocalization });
    locale("es");
}

  ngOnInit(){
  }

  ngAfterViewInit(): void {
    const options = createOptions();
    // set options
    options.width = '1700px';
    options.height = '800px';
    this.rich = create(this.element.nativeElement.firstElementChild, options);
  }

  ngOnDestroy() {
    if (this.rich) {
      this.rich.dispose();
      this.rich = null;
    }
  }

}





