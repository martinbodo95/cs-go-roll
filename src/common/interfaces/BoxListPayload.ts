import { BoxNode } from './Box';

export interface BoxListPayload {
  boxes: {
    edges: BoxNode[];
  };
}
