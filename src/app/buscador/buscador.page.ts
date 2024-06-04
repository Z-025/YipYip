import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage {
  searchTerm: any = '';
  searchResults: any[] = [];

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }

  search() {
    // Aquí iría la lógica para realizar la búsqueda utilizando el término ingresado en this.searchTerm
    // Por ahora, solo mostraremos algunos resultados de ejemplo
    this.searchResults = [
      { name: 'Lapastora, M. (2021). Psicología del bebé adoptado. Desclée De Brouwer. Sáenz de Jubera Ocón, M., & Alonso Ruíz, R. A. (Coords.). (2021). Ocio y educación: experiencias, innovación y transferencia. Universidad de La Rioja. 1' }
    ];
  }
}
