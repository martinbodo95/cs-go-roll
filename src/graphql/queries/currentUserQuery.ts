import { gql } from 'apollo-angular';
import { CurrentUserPayload } from 'src/common/interfaces/CurrentUserPayload';

export const CurrentUserQuery = gql<CurrentUserPayload, {}>`
  query {
    currentUser {
      id
      name
      wallets {
        id
        amount
        currency
      }
    }
  }
`;
