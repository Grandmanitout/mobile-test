import { Component, OnInit } from "@angular/core";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { NotificationService } from "../notification.service";

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.scss"]
})
export class NoteComponent implements OnInit {
  messages: any[] = [
    {
      id: 3,
      identifier: 15,
      user_id: "bblier",
      creation_date: new Date("2020-03-02 01:19:54.638742"),
      note_text:
        "Merci de répondre favorablement à la demande inscrite dans ce courrier",
      type: "resource",
      firstname: "Bernard",
      lastname: "BLIER",
      entity_label: "Service Courrier"
    },
    {
      id: 2,
      identifier: 15,
      user_id: "bblier",
      creation_date: "2020-03-02 01:19:50.27217",
      note_text:
        "Merci de me fournir les éléments de langage pour répondre à ce courrier.",
      type: "resource",
      firstname: "Bernard",
      lastname: "BLIER",
      entity_label: "Service Courrier"
    },
    {
      id: 1,
      identifier: 15,
      user_id: "bblier",
      creation_date: new Date("2020-03-02 01:19:35.568956"),
      note_text: "Passer me voir à mon bureau, merci.",
      type: "resource",
      firstname: "Bernard",
      lastname: "BLIER",
      entity_label: "Service Courrier"
    }
  ];

  constructor(
    private notify: NotificationService,
    private _bottomSheetRef: MatBottomSheetRef<NoteComponent>
  ) {}

  ngOnInit() {}

  copy() {
    this.notify.success("Content copied !");
  }
}
