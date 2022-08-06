import { createAction, props } from '@ngrx/store';
import { Box } from 'src/common/interfaces/Box';

export const setBox = createAction('[Box List] Set Box', props<{ box: Box }>());
