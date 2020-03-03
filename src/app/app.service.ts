import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class AppService {

  sidenav: MatSidenav;
  constructor() { }

  setSidenav(snav: MatSidenav) {
    this.sidenav = snav;
  }

  toggle() {
    this.sidenav.toggle();
  }

}