import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, metaReducers } from './store';
import { HttpHandlerInterceptor } from './interceptors/http-handler.interceptor';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PokemonEffects } from './store/effects/pokemon.effects';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      PokemonEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 20 }) : []
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
