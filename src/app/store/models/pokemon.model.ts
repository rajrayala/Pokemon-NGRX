export interface PokemonResponse {
    count: string;
    next: string;
    previous: string;
    results: PokemonList[];
}

export interface PokemonList {
    name: string;
    url: string;
}
