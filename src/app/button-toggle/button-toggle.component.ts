import { Component, OnInit } from '@angular/core';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  constructor() { }
  private destroyed$ = new Subject();

  ngOnInit() {
    // this.destroyed$.subscribe(data => {
    // })
    // const interval$ = interval(1000);
    // interval$
    //   .pipe(takeUntil(this.destroyed$))
    //   .subscribe((data) => {
    //     console.log('data',data)
    //   });
  }

  next() {
    this.destroyed$.next('value')
  }

  complete() {
    this.destroyed$.complete();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
