import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product.model';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit, OnChanges {

  @Input() config: IProduct | undefined;

  @Input() display: 'list' | 'grid' = 'grid';

  favIcon: boolean | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    const isFav = changes['config']?.currentValue?.isFav;
    if (!Utils.isNullOrUndefined(isFav)) {
      this.favIcon = isFav;
    }
  }

  onAddToFavourites(event: any): void {
    alert(`${this.favIcon ? 'Added' : 'Removed'} product '${this.config?._id}' to FAVOURITES!`);
    event.stopPropagation();
  }

  onOpenProduct(): void {
    this.router.navigate([this.config!.url], { relativeTo: this.activatedRoute });
  }

}
