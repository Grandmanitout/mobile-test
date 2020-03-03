import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable()
export class ResizeService {

  format: string = "desktops";

  get onResize$(): Observable<any> {
    return this.resizeSubject.asObservable().pipe(distinctUntilChanged());
  }

  private resizeSubject: Subject<AnimationPlaybackEventInit>;

  constructor(media: MediaMatcher) {
    this.format = media.matchMedia('(max-width: 1024px)').matches ? 'tablets' : 'desktops';

    this.resizeSubject = new Subject();
  }

  onResize(size: any) {
    this.resizeSubject.next(size);
  }

  getFormat(size: any) {
    if (size >= 1281) {
      this.format = 'desktops';
      console.log('desktops');
    } else if (size >= 1025 && size <= 1280) {
      this.format = 'desktops';
      console.log('Laptops, Desktops');
    } else if (size >= 768 && size <= 1024) {
      this.format = 'tablets';
      console.log('Tablets, Ipads (portrait)');
    } else if (size >= 481 && size <= 767) {
      this.format = 'tablets';
      console.log('Low Resolution Tablets, Mobiles (Landscape)');
    } else if (size >= 320 && size <= 480) {
      this.format = 'smartphones';
      console.log('Most of the Smartphones Mobiles (Portrait)');
    }
  }
}