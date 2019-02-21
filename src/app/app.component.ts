import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CvItemService } from './cv-item/cv-item.service';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as cvItemsData from './cv-item/cv-items.data';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  generalData;
  countObservable: Observable<any>;
  count;
  initialCountLoaded;
  promise;
  loaded = false;

  public constructor(
    private cvItemService: CvItemService,
    private titleService: Title,
    private router: Router,
    db: AngularFireDatabase
  ) {
    const itemRefForProfile = db.object('profile').valueChanges();
    itemRefForProfile.subscribe((data: any) => {
      localStorage.setItem('profile', JSON.stringify(data));
      cvItemsData.GENERAL.position = data.designation;
      this.loaded = true;
    });

    this.getItems();
    this.setTitle(this.generalData.name + ' | ' + this.generalData.position);
    this.countObservable = db.object('users').valueChanges();

    this.countObservable.subscribe((data) => {
      console.log(data);
      this.count = 1 + parseInt(data.count, 10);
      console.log(this.count);
    });

    setTimeout(() => {
      console.log('inside timeout');
      const itemRef = db.object('users');
      itemRef.set({ count: 1 + +this.count });
    }, 5000);

    router.events
      // .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        window.scrollTo(0, 0);
      });
  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

  getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
