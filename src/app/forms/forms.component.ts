import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  public profileForm: FormGroup;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.profileForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      designation: new FormControl(null, Validators.required),
      qualification: new FormControl(null, Validators.required)
    });
  }

  submit() {
    const profileData = {
      name: this.profileForm.value.name,
      designation: this.profileForm.value.designation,
      qualification: this.profileForm.value.qualification
    };

    const itemRef = this.db.object('profile');
    itemRef.set(profileData);
  }
}
