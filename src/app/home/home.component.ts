import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FileManagerComponent } from "../file-manager/file-manager.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { NoteComponent } from "../note/note.component";
import { AppService } from "../app.service";
import {
  CdkVirtualScrollViewport,
  ScrollDispatcher
} from "@angular/cdk/scrolling";
import { takeWhile, map, filter } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  baskets: any[] = [];
  loading: boolean = false;
  multipleSelect: boolean = false;
  hold: boolean = false;
  indicators: any = {
    time: 0
  };
  sidenav: any = null;
  page: string = '';

  @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;
  constructor(
    private http: HttpClient,
    private _bottomSheet: MatBottomSheet,
    private router: Router,
    private appservice: AppService,
    private scrollDispatcher: ScrollDispatcher,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.items = [
      {
        res_id: 15,
        alt_identifier: "MAARCH/2019A/14",
        barcode: null,
        subject: "Demande intervention à qualifier",
        confidentiality: null,
        statusLabel: "Nouveau courrier ou document non qualifié",
        statusImage: "fm-letter-status-attr",
        priorityColor: "#009dc5",
        closing_date: null,
        countAttachments: 0,
        countNotes: 0,
        isLocked: false,
        creationDate: new Date("2020-02-29 23:39:42.240733"),
        senders: "Bernard PASCONTENT",
        display: [
          {
            value: "getPriority",
            cssClasses: [],
            icon: "fa-traffic-light",
            displayValue: "Normal"
          },
          {
            value: "getCategory",
            cssClasses: [],
            icon: "fa-exchange-alt",
            displayValue: "incoming"
          },
          {
            value: "getDoctype",
            cssClasses: [],
            icon: "fa-suitcase",
            displayValue: "Recours gracieux et réclamations"
          },
          {
            value: "getAssignee",
            cssClasses: [],
            icon: "fa-sitemap",
            displayValue: "Charlotte CHARLES (Pôle Technique)"
          },
          {
            value: "getRecipients",
            cssClasses: [],
            icon: "fa-user",
            displayValue: []
          },
          {
            value: "getSenders",
            cssClasses: [],
            icon: "fa-book",
            displayValue: ["Bernard PASCONTENT"]
          },
          {
            value: "getCreationAndProcessLimitDates",
            cssClasses: ["align_rightData"],
            icon: "fa-calendar",
            displayValue: {
              creationDate: "2020-02-29 23:39:42.240733",
              processLimitDate: "2020-03-21 00:00:00"
            }
          }
        ]
      }
    ];
    this.items = Array.from({ length: 10 }).map((_, i) => {
      return {
        id: i,
        label: `Item ${i}`,
        res_id: 15,
        alt_identifier: `MAARCH/2019A/${i + 1}`,
        barcode: null,
        subject: "Demande intervention à qualifier",
        confidentiality: null,
        statusLabel: "Nouveau courrier ou document non qualifié",
        statusImage: "fm-letter-status-attr",
        priorityColor: "#009dc5",
        closing_date: null,
        countAttachments: 0,
        countNotes: 0,
        isLocked: false,
        creationDate: new Date("2020-02-29 23:39:42.240733"),
        senders: "Bernard PASCONTENT"
      };
    });
    this.baskets = Array.from({ length: 10 }).map((_, i) => {
      return {
        id: i,
        label: `Basket ${i}`,
        count: 10
      };
    });
  }

  ngAfterViewInit(): void {
    this.scrollDispatcher
      .scrolled()
      .pipe(
        filter(
          event =>
            this.virtualScroll.getRenderedRange().end ===
              this.virtualScroll.getDataLength() && !this.loading
        )
      )
      .subscribe(event => {
        this.loading = true;
        setTimeout(() => {
          this.items = this.items.concat(this.items);
          console.log("new result append");
          this.loading = false;
          this.cd.detectChanges();
        }, 5000);

        console.log("end");
        this.cd.detectChanges();
        //this.searchPageNumber++;
        //this.nextSearchPage(this.searchPageNumber);
        //this.cd.detectChanges();
      });
    //this.scrollDispatcher.register(this.scrollable);
    //this.scrollDispatcher.scrolled(1000)
    //    .subscribe((viewport: CdkVirtualScrollViewport) => {
    //        console.log('scroll triggered', viewport);
    //    });

     this.virtualScroll.renderedRangeStream.subscribe(range => {
      console.log('range', range);
      this.page = `${range.start} - ${range.end} / ${this.items.length}`;
    //   console.log('range2', this.virtualScroll.getRenderedRange());
    //   if (this.virtualScroll.getRenderedRange().end % 10 === 0) {
    //     this.nextSearchPage(++this.searchPageNumber);
    //   }
     });
  }

  panleft(ev: any) {
    console.log(ev);
  }

  panright(ev: any) {
    console.log(ev);
  }

  onPress(evt) {
    let time = 0;
    this.indicators.interval = setInterval(() => {
      this.indicators.time += 1;
      if (this.indicators.time === 3) {
        this.multipleSelect = !this.multipleSelect;
      } else if (this.indicators.time === 10) {
        clearInterval(this.indicators.interval);
      }
      console.log(this.indicators.time);
    }, 200);
  }

  onPressUp(evt, item: any) {
    if (this.multipleSelect) {
      item.selected = true;
    }
    this.indicators.time = 0;
    clearInterval(this.indicators.interval);
  }

  cdkDragStarted(item: any) {
    (document.querySelector(
      "#item-" + item.id
    ) as HTMLElement).style.background = "red";
    this.hold = true;
  }
  cdkDragEnded(item: any) {
    (document.querySelector(
      "#item-" + item.id
    ) as HTMLElement).style.background = "none";
    this.hold = false;
    item.x = 0;
  }

  haveSelectedItems() {
    return this.items.filter(item => item.selected).length > 0;
  }

  haveSingleSelectedItems() {
    return this.items.filter(item => item.selected).length === 1;
  }

  haveAllSelectedItems() {
    return (
      this.items.filter(item => item.selected).length === this.items.length
    );
  }

  test(evt) {
    console.log(evt);
  }

  toggleItem(item: any) {
    if (this.multipleSelect) {
      item.selected = !item.selected;
    } else {
      this.router.navigate(["/resource"]);
    }
    if (!this.haveSelectedItems()) {
      this.multipleSelect = false;
    }
  }

  deselectItem(item: any) {
    item.selected = false;
    if (!this.haveSelectedItems()) {
      this.multipleSelect = false;
    }
  }

  openBottomSheet(): void {
    this._bottomSheet.open(FileManagerComponent);
  }

  openNote(): void {
    this._bottomSheet.open(NoteComponent, { panelClass: "panelContainer" });
  }
}
