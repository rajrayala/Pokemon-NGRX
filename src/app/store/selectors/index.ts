import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectAppState = (state: AppState) => state;

export const getAppState = createSelector(
    selectAppState,
    (state: AppState) => state
);

export const getPokemonLists = createSelector(
    selectAppState,
    (state: AppState) => state.pokemon.results
);
