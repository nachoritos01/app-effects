import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of, tap } from 'rxjs';
import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../app/services/usuario.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      //dispara un nuevo observable y mezclar con el observable anterior
      mergeMap(() =>
        this.usuarioService.getUsers().pipe(
          map((users) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          catchError((error) =>
            of(usuariosActions.cargarUsuariosError({ payload: error }))
          )
        )
      )
    )
  );
}
