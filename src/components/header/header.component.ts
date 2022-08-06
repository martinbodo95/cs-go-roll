import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { CurrentUser } from 'src/common/interfaces/CurrentUser';
import { Wallet } from 'src/common/interfaces/Wallet';
import { currentUserQuery } from 'src/graphql/queries/currentUserQuery';
import { onUpdateWalletSubscription } from 'src/graphql/subscriptions/onUpdateWalletSubscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  user$: Observable<CurrentUser>;
  wallet$: Observable<Wallet | undefined>;
  steamCommunityLoginUrl =
    'https://steamcommunity.com/openid/login?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=http%3A%2F%2Flocalhost%3A4200&openid.realm=https%3A%2F%2Fapi-staging.entertoroll.com';

  constructor(private apollo: Apollo) {
    this.user$ = this.apollo
      .watchQuery({
        query: currentUserQuery,
      })
      .valueChanges.pipe(map((res) => res.data.currentUser));
    this.wallet$ = this.apollo
      .subscribe({
        query: onUpdateWalletSubscription,
      })
      .pipe(map((res) => res?.data?.updateWallet.wallet));
  }
}
