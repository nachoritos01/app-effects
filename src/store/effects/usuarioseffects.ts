import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of, tap } from 'rxjs';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../app/services/usuario.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      //dispara un nuevo observable y mezclar con el observable anterior
      mergeMap((action) => //action
        this.usuarioService.getUserById(action.id).pipe(
          map((user) =>
            usuariosActions.cargarUsuarioSuccess({ usuario: user })
          ),
          catchError((error) =>
            of(usuariosActions.cargarUsuarioError({ payload: error }))
          )
        )
      )
    )
  );
}
