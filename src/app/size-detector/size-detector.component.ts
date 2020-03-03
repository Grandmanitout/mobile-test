import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { ResizeService } from './resize.service';

@Component({
  selector: 'app-size-detector',
  templateUrl: './size-detector.component.html',
  styleUrls: ['./size-detector.component.css']
})
export class SizeDetectorComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef,private resizeSvc: ResizeService) {}

   @HostListener("window:resize", ['$event'])
  private onResize($event) {
    this.detectScreenSize($event.target.innerWidth);
  }

  ngAfterViewInit() {
    //this.detectScreenSize();
  }

  private detectScreenSize(width: number) {
    this.resizeSvc.onResize(width);
  }

}