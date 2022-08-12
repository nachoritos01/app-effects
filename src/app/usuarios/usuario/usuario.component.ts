import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/store/app.reducers';
import { cargarUsuario } from '../../../store/actions/usuario.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario | undefined;
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('usuario').subscribe(({ user }) => {
      this.usuario = user;
    });
    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
  }
}
