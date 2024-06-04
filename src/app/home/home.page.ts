import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  async mostrar() {
    const alert = await this.alertController.create({
      header: 'Modificación exitosa',
      message: 'Los datos se han modificado exitosamente.',
      buttons: [
        {
          text: 'Ir a Perfil',
          handler: () => {
            const navigationExtras: NavigationExtras = {
              queryParams: {
                username: this.username,
                nombre: this.nombre,
                apellido: this.apellido,
                nivelEducacion: this.nivelEducacion,
                fechaNacimiento: this.fechaNacimiento
              }
            };
            this.router.navigate(['/perfil'], navigationExtras);
          }
        },
        {
          text: 'OK',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';

    setTimeout(() => {
      document.querySelectorAll('.animated-input').forEach((element) => {
        element.classList.add('animate-input');
      });
    }, 10);
  }

  navigateTo(tab: string) {
    if (tab === 'Buscador') {
      this.router.navigate(['/Buscador']);
    } else if (tab === 'Historial') {
      this.router.navigate(['/Historial']);
    }
  }
}
