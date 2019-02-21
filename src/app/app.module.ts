import { AngularFireDatabase } from '@angular/fire/database';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';
import { AboutComponent } from './about/about.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvItemService } from './cv-item/cv-item.service';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PdfComponent } from './pdf/pdf.component';
import { CvDownloadCardComponent } from './cv-download-card/cv-download-card.component';
import { PictureModalComponent } from './picture-modal/picture-modal.component';

// Firebase imports

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    ExperienceComponent,
    EducationComponent,
    PublicationsComponent,
    ProjectsComponent,
    VolunteeringComponent,
    AboutComponent,
    CvItemComponent,
    FooterComponent,
    ContactComponent,
    PdfComponent,
    CvDownloadCardComponent,
    PictureModalComponent,
    FormsComponent
  ],
  providers: [Title, CvItemService, AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents: [PictureModalComponent]
})
export class AppModule {}
