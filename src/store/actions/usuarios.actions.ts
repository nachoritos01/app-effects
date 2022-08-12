import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../app/models/usuario.model';
//Le va a decir a la aplicacion que debe cargar los usuarios
export const cargarUsuarios = createAction('[Users] Cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Users] Cargar Usuarios success',
  props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
  '[Users] Cargar Usuarios error',
  props<{ payload: any }>()
);
