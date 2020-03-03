import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import { ResizeService } from '../size-detector/resize.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>, public resizeSvc: ResizeService, private router: Router ) {
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        console.log(this.resizeSvc.getFormat(x));
      });
  }

  ngOnInit() {
  }

  goTo() {
    this.dialogRef.close();
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 200);
    
  }

}