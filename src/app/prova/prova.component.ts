import { Component, OnInit, OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, OnDestroy, AfterViewInit {

  isDisabled = true;
  immagine1 = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  immagine2 = "https://wallpapercave.com/wp/wp5560261.jpg";
  immagine = "";
  cani = [
    { nome: 'roger', razza: 'golden', descrizione: 'Cane dolce' }
  ];

  private intervalId: any;  // Store the interval ID to clear it later

  constructor(private cdr: ChangeDetectorRef) {
    console.log("Constructor: ProvaComponent initialized");
  }

  ngOnInit(): void {
    // Logic for SSR: Don't set an interval in SSR environment
    if (typeof window !== 'undefined') {
      let counter = 0;
      this.intervalId = setInterval(() => {
        // Toggle the image every 2 seconds
        this.immagine = counter % 2 === 0 ? this.immagine1 : this.immagine2;
        counter++;
      }, 2000);
    }
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed to prevent memory leaks
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log("OnDestroy: Interval cleared");
    }
  }

  // ngAfterViewInit to trigger change detection only after the view is initialized
  ngAfterViewInit(): void {
    // Trigger change detection only after the view is initialized (client-side)
    this.cdr.detectChanges();
  }
}
