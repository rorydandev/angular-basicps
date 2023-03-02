import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes : string[] = ['Spiderman','Hulk','Hawkya','Iron Man','Capitan America','Thor'];

  heroeBorrado : string = '';

   borrarHeroe () {

    // this.heroes.splice(1,1);

    this.heroeBorrado = this.heroes.shift() || '';


  }
}
