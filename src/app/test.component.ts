import { Component, OnInit, ElementRef, HostListener, AfterViewInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef, public dialog: MatDialog) {}

  ngOnInit() {  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dialog.open(LoginComponent, {
        panelClass: "loginPanel",
        hasBackdrop: false,
        disableClose: true
      });
    }, 200);
  }
}
