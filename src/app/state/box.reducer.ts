import { createReducer, on } from '@ngrx/store';
import { Box } from 'src/common/interfaces/Box';

import { setBox } from './box.actions';

export interface BoxState {
  selectedBox: Box;
}

export const initialState: BoxState = {
  selectedBox: new Box('', '', '', 0),
};

export const boxReducer = createReducer(
  initialState,
  on(setBox, (state, { box }) => {
    return { ...state, selectedBox: box };
  })
);
