import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../app/models/usuario.model';
//Le va a decir a la aplicacion que debe cargar los usuario
export const cargarUsuario = createAction(
  '[Users] Cargar Usuario',
  props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[Users] Cargar Usuario success',
  props<{ usuario: Usuario}>()
);

export const cargarUsuarioError = createAction(
  '[Users] Cargar Usuario error',
  props<{ payload: any }>()
);
