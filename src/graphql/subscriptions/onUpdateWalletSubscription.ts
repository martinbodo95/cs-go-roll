import { gql } from 'apollo-angular';
import { OnUpdateWalletPayload } from 'src/common/interfaces/OnUpdateWalletPayload';

export const onUpdateWalletSubscription = gql<OnUpdateWalletPayload, {}>`
  subscription OnUpdateWallet {
    updateWallet {
      wallet {
        id
        amount
        name
      }
    }
  }
`;
