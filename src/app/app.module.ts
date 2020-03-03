import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing.module";
import { NgPipesModule } from "ngx-pipes";

import { AppMaterialModule } from "./app-material.module";
import {
  CustomSnackbarComponent,
  NotificationService
} from "./notification.service";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AppService } from "./app.service";
import { ResizeService } from "./size-detector/resize.service";
import { SizeDetectorComponent } from "./size-detector/size-detector.component";
import { FileManagerComponent } from "./file-manager/file-manager.component";
import { DetailComponent } from "./detail/detail.component";
import { NoteComponent } from "./note/note.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    NgPipesModule
  ],
  entryComponents: [
    CustomSnackbarComponent,
    LoginComponent,
    FileManagerComponent,
    NoteComponent
  ],
  declarations: [
    CustomSnackbarComponent,
    AppComponent,
    TestComponent,
    LoginComponent,
    SizeDetectorComponent,
    HomeComponent,
    FileManagerComponent,
    NoteComponent,
    DetailComponent
  ],
  bootstrap: [AppComponent],
  providers: [NotificationService, ResizeService, AppService]
})
export class AppModule {}
