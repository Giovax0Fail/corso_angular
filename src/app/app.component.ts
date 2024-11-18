import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso_angular';

    oninput(e:Event)
    {
      this.title = (<HTMLInputElement>e.target).value;
  console.log((<HTMLInputElement>e.target).value);
  }

 persone = [
  { nome: 'Davide', cognome: 'Cangiano', isOnline: true, color: 'Red' },
  { nome: 'Leonardo', cognome: 'Firenze', isOnline: false, color: 'Blue' },
  { nome: 'Christian', cognome: 'Damiano', isOnline: true, color: 'Green' },
  { nome: 'Marco', cognome: 'Scognamiglio', isOnline: false, color: 'Yellow' },
  { nome: 'Pasquale', cognome: 'De Micco', isOnline: true, color: 'Purple' },
  { nome: 'Gabriele', cognome: 'Intoccia', isOnline: false, color: 'Pink' },
  { nome: 'Alessandro', cognome: 'Allegro', isOnline: true, color: 'Orange' }
  ];

 onclick(event:Event)
 {
this.title="Ho cliccato sul bottone";
 }
}

