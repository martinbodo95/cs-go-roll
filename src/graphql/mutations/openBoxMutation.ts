import { gql } from 'apollo-angular';
import { OpenBoxInput } from 'src/common/interfaces/OpenBoxInput';
import { OpenBoxPayload } from 'src/common/interfaces/OpenBoxPayload';

export const OpenBoxMutation = gql<OpenBoxPayload, OpenBoxInput>`
  mutation OpenBox($input: OpenBoxInput!) {
    openBox(input: $input) {
      boxOpenings {
        id
        itemVariant {
          id
          name
          value
        }
      }
    }
  }
`;
