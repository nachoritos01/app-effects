import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from '../../app/models/usuario.model';
import {
  cargarUsuario,
  cargarUsuarioError,
  cargarUsuarioSuccess,
} from '../actions';

export interface UsuarioState {
  id: string | undefined;
  user: Usuario | undefined;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState = {
  id: undefined,
  user: undefined,
  loaded: false,
  loading: false,
  error: undefined,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,
  on(cargarUsuario, (state, {id}) => ({ ...state, loading: true, id })),
  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {... usuario},
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usuarioReducer(state: any, action: any) {
  return _usuarioReducer(state, action);
}
