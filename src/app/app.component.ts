import { Component, HostListener, ViewChild, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular";

  baskets = [
    {
      id: "mybasket",
      label: "Courriers à traiter",
    },
    {
      id: "copybasket",
      label: "Courriers en copie",
    }
  ];
  @ViewChild("sidenav", { static: true }) public sidenav: MatSidenav;
  constructor(private appservice: AppService) {}

  ngOnInit(): void {
    this.appservice.setSidenav(this.sidenav);
  }
}
