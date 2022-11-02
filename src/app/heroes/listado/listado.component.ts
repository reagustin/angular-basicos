import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent {
    heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];
    heroeBorrado: string|undefined = '';

    borrarHeroe() {      
      const heroeBorrado = this.heroes.pop() || '';
      this.heroeBorrado = heroeBorrado;
    }

}
