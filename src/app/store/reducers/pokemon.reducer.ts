import { DELETEPOKEMON, GETPOKEMONSUCCESS } from '../actions/pokemon.actions';
import { PokemonResponse } from '../models/pokemon.model';
import { initialPokemonResponse } from '../models/userStateInfo.state';

export function PokemonReducer(state = initialPokemonResponse, action): PokemonResponse {
  switch (action.type) {
    case GETPOKEMONSUCCESS:
      return state = action.payload;
    case DELETEPOKEMON:
      const newObj = state.results.filter(e => {
        return e.name !== action.payload
      });
      return Object.assign({}, state, { ...state, results: newObj });
    default:
      return state;
  }
}
