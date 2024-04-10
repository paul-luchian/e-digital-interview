import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { IHeaderConfig } from './components/header/models/header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  headerConfig!: IHeaderConfig;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.headerConfig = this.getHeaderConfig();
  }

  ngAfterViewInit(): void {
    this.renderer.addClass(this.document.body, this.detectDeviceType(this.document.documentElement));
  }

  private detectDeviceType(documentElement: HTMLElement): 'is-touch-device' | 'is-pointer-device' {
    if ('ontouchstart' in documentElement) {
      return 'is-touch-device';
    }
    return 'is-pointer-device';
  }

  private getHeaderConfig(): IHeaderConfig {
    return {
      logo: {
        text: 'E-Digital',
        path: '/dashboard'
      },
      items: [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Products', path: '/products' },
      ]
    };
  }
}
