import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setBox } from 'src/app/state/box.actions';
import { Box, BoxNode } from 'src/common/interfaces/Box';

@Component({
  selector: 'app-box-list-item',
  templateUrl: './box-list-item.component.html',
  styleUrls: ['./box-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBoxListItem {
  @Input() box: BoxNode = {
    node: new Box('', '', '', 0),
  };
  showViewButton = false;

  constructor(private router: Router, private store: Store) {}

  openDetails(box: Box) {
    this.store.dispatch(setBox({ box }));
    this.router.navigateByUrl(`/boxes/${box.id}`);
  }
}
