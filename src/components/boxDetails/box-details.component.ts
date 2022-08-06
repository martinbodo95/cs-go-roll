import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo } from 'apollo-angular';
import { Observable, take } from 'rxjs';
import { BoxState } from 'src/app/state/box.reducer';
import { selectBox } from 'src/app/state/box.selectors';
import { Box } from 'src/common/interfaces/Box';
import { openBoxMutation } from 'src/graphql/mutations/openBoxMutation';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBoxDetails {
  box$: Observable<Box>;

  constructor(private apollo: Apollo, private store: Store<BoxState>) {
    this.box$ = this.store.select(selectBox);
  }

  openBox(box: Box, amount: number) {
    this.apollo
      .mutate({
        mutation: openBoxMutation,
        variables: {
          boxId: box.id,
          amount: amount,
          multiplierBoxBet: 0,
        },
      })
      .pipe(take(1))
      .subscribe();
  }
}
