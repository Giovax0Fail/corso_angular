import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit,AfterContentChecked,AfterContentInit,
AfterViewChecked,AfterViewInit,DoCheck,OnDestroy {

  constructor(){
    console.log("Costr")
  }
  ngAfterContentInit(): void {
    console.log("Content Init")
  }

  ngAfterViewInit(): void {
    console.log("ViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ViewChecked")
  }

  ngDoCheck(): void {
    console.log("DoCheck")
  }
  ngOnDestroy(): void {
    console.log("OnDestroy")
  }
  ngAfterContentChecked(): void {

  }

  ngOnInit(): void {
    console.log("oninit")
  }
}
