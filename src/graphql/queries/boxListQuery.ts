import { gql } from 'apollo-angular';
import { BoxListPayload } from 'src/common/interfaces/BoxListPayload';

export const boxListQuery = gql<BoxListPayload, {}>`
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
