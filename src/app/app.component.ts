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
    { nome: 'Davide', cognome: 'Cangiano', isOnline: true },
    { nome: 'Leonardo', cognome: 'Firenze', isOnline: false },
    { nome: 'Christian', cognome: 'Damiano', isOnline: true },
    { nome: 'Marco', cognome: 'Scognamiglio', isOnline: false },
    { nome: 'Pasquale', cognome: 'De Micco', isOnline: true },
    { nome: 'Gabriele', cognome: 'Intoccia', isOnline: false },
    { nome: 'Alessandro', cognome: 'Allegro', isOnline: true }
  ];

 onclick(event:Event)
 {
this.title="Ho cliccato sul bottone";
 }
}

