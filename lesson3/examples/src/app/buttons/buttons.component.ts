import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   notWorking: boolean = false;
   notOn: boolean = false;

   constructor() { }

   ngOnInit() { }

   reset() {
      this.inactive = !this.inactive;
      this.notWorking = !this.notWorking;
      this.notOn = !this.notOn;
   }

}
