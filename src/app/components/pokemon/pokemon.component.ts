import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DeletePokemon, GetPokemonListRequest, LastPokemonLeft } from '../../store/actions/pokemon.actions';
import { PokemonList } from '../../store/models/pokemon.model';
import { getPokemonLists } from '../../store/selectors';
import { AppState } from '../../store';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  getPokemonSubscription: Subscription;
  pokemonContent: PokemonList[];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetPokemonListRequest(10));
  }

  ngOnInit() {
    this.getPokemonSubscription = this.store.select(getPokemonLists).subscribe(content => {
      this.pokemonContent = content;
    });
  }

  ngOnDestroy() {
    if (this.getPokemonSubscription) {
      this.getPokemonSubscription.unsubscribe();
    }
  }

  deletePokemon(name: string) {
    this.store.dispatch(new DeletePokemon(name));
    if (this.pokemonContent.length === 1) {
      this.store.dispatch(new LastPokemonLeft());
    }
  }

}
