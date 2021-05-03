import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, of} from 'rxjs';
import {
  catchError,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  last,
  map,
  mergeMap,
  pairwise,
  skipWhile, switchMap,
  take
} from 'rxjs/operators';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  hidden = false;
  data: any;
  isSkip = false;
  form: any;
  previousForm: any;
  profileForm: FormGroup = this.fb.group({
    firstName: [''],
    lastName: [''],
    agreement: this.fb.group({
      isAgree: [false, Validators.requiredTrue],
    }),
    filterOs: this.fb.group({}),
  });
  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) { }
  ngOnInit(): void {
    const checkboxes = this.profileForm.get('filterOs') as FormGroup;
    ['Windows', 'Ubuntu', 'Mac'].forEach((option: any) => {
      checkboxes.addControl(option, new FormControl(false));
    });
    this.profileForm.get('firstName').valueChanges.pipe(debounceTime(3000)).subscribe(data => {
      console.log('data',data)
    })
  }
  toggleBadgeVisibility(): void {
    this.hidden = !this.hidden;
  }
  console(value) {
    console.log('value',value)
  }

  click() {
    this.isSkip = !this.isSkip;
  }

  submit() {
    console.log('this.profileForm', this.profileForm);
    of({data: this.profileForm.value}).pipe(
      skipWhile((val) => {
        this.previousForm = this.profileForm.value;
        // isDeepEqual val === this.previousForm; return true;
        return false;
      }),
      switchMap(data => {
        return this.httpClient.post('http://localhost:3030/heroes', data);
      })
    ).subscribe(data => {
        console.log('data',data)
      })
  }

}
