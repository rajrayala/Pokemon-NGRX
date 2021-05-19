import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PokemonResponse } from './models/pokemon.model';
import { PokemonReducer } from './reducers/pokemon.reducer';

/**
 * App State
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  pokemon: PokemonResponse;
}

/**
 * App Reducers
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<AppState> = {
  pokemon: PokemonReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
