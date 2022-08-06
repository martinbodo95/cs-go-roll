import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { BoxNode } from 'src/common/interfaces/Box';
import { boxListQuery } from 'src/graphql/queries/boxListQuery';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBoxList {
  boxes$: Observable<BoxNode[]>;

  constructor(private apollo: Apollo) {
    this.boxes$ = this.apollo
      .watchQuery({
        query: boxListQuery,
      })
      .valueChanges.pipe(map((res) => res.data.boxes.edges));
  }
}
