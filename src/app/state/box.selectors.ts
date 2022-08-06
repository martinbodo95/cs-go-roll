import { createFeatureSelector } from '@ngrx/store';
import { Box } from 'src/common/interfaces/Box';

export const selectBox = createFeatureSelector<Box>('selectedBox');
