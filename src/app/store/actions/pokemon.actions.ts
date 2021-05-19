import { Action } from '@ngrx/store';
import { PokemonResponse } from '../models/pokemon.model';

export const GETPOKEMONREQUEST = 'get_pokemon_request';
export const GETPOKEMONSUCCESS = 'get_pokemon_success';
export const GETPOKEMONFAILED = 'get_pokemon_failed';
export const DELETEPOKEMON = 'delete_pokemon';
export const LASTPOKEMONLEFT = 'last_pokemon';

export class GetPokemonListRequest implements Action {
    readonly type = GETPOKEMONREQUEST;
    constructor(public payload: number) { }
}

export class GetPokemonSuccess implements Action {
    readonly type = GETPOKEMONSUCCESS;
    constructor(public payload: PokemonResponse) { }
}

export class GetPokemonFailed implements Action {
    readonly type = GETPOKEMONFAILED;
}

export class DeletePokemon implements Action {
    readonly type = DELETEPOKEMON;
    constructor(public payload: string) { }
}

export class LastPokemonLeft implements Action {
    readonly type = LASTPOKEMONLEFT;
}

export type PokemonActions = GetPokemonListRequest | GetPokemonSuccess | GetPokemonFailed | DeletePokemon;
