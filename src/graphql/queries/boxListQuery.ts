import { gql } from 'apollo-angular';
import { CurrentUserPayload } from 'src/common/interfaces/CurrentUserPayload';

export const BoxListQuery = gql<CurrentUserPayload, {}>`
  query {
    boxes(free: false, purchasable: true, openable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
        }
      }
    }
  }
`;
