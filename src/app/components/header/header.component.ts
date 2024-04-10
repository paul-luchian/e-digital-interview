import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHeaderConfig } from './models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  @Input() config: IHeaderConfig | undefined;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  onLogoClick(): void {
    if (!this.config?.logo) { return; }
    this.router.navigateByUrl(this.config.logo.path);
  }

}
