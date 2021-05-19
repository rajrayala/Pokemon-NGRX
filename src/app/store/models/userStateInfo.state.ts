import { AppState } from '..';
import { PokemonResponse } from './pokemon.model';

export const initialPokemonResponse: PokemonResponse = {
    count: '',
    next: '',
    previous: '',
    results: []
};

export const initiaAppState: AppState = {
    pokemon: initialPokemonResponse
};
