import { Box } from './Box';

export interface BoxListPayload {
  boxes: {
    edges: Box[];
  };
}
