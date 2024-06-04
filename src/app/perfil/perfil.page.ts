import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener los datos de la consulta
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.nombre = params['nombre'];
      this.apellido = params['apellido'];
      this.nivelEducacion = params['nivelEducacion'];
      this.fechaNacimiento = params['fechaNacimiento'];
    });
  }
}
