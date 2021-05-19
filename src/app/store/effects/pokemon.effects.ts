import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { ApiControllerService } from 'src/app/services/api-controller.service';
import { GetPokemonListRequest, GETPOKEMONREQUEST, GetPokemonSuccess, GetPokemonFailed } from '../actions/pokemon.actions';

@Injectable()
export class PokemonEffects {
   constructor(private actions$: Actions,
               private apiControllerService: ApiControllerService) { }

    @Effect()
    loadGetPokemonInfo$ = this.actions$.pipe(
        ofType<GetPokemonListRequest>(GETPOKEMONREQUEST),
        switchMap((reqPayload) => {
        return this.apiControllerService.getPokemonList(reqPayload.payload).pipe(
            mergeMap((resp) => {
                return [
                    new GetPokemonSuccess(resp.body)
                ];
            }),
            catchError((error) => {
                console.log('ERROR: ', error);
                return [
                    new GetPokemonFailed()
                ];
            })
        );
    }));
}
