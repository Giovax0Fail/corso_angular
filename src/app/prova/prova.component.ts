import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit{
 @Input() data: any;


 ngOnInit(): void {
  console.log(this.data);

 }

}
