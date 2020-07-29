/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener, OnDestroy } from '@angular/core';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
   selector: 'st-modal2',
   templateUrl: './st-modal2.component.html',
   styleUrls: ['./st-modal2.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   animations: [
      trigger('state', [
         state('void, hidden', style({ opacity: 0 })),
         state('visible', style({ opacity: 1 })),
         transition('* => visible', [
            style({ opacity: 0 }),
            animate(300)
         ]),
         transition('* => hidden', [
            style({ opacity: 1 }),
            animate(300)
         ])
      ])
   ]
})
export class StModal2Component implements OnDestroy {

   @Input() disabledAnimation: boolean = true;
   @Input() emptyModal: boolean;
   @Input() width: number = 600;
   @Input() modalTitle: string = '';
   @Input() closeOnEscape: boolean;
   @Input() hideCloseBtn: boolean;

   @Output() endAnimation: EventEmitter<boolean> = new EventEmitter<boolean>();
   @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
   @Output() onEnter: EventEmitter<void> = new EventEmitter<void>();

   visibility: string = 'visible';

   private _subscriptions: Array<Subscription> = [];
   private ESCAPE_KEYCODE: number = 27;
   private ENTER_KEYCODE: number = 13;

   @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent): void {
      if (this.closeOnEscape && event.keyCode === this.ESCAPE_KEYCODE) {
         this.onCloseButton();
      }

      if (event.keyCode === this.ENTER_KEYCODE) {
         this.onEnter.emit();
      }
   }

   ngOnDestroy(): void {
      if (this._subscriptions.length > 0) {
         this._subscriptions.forEach((subscription) => {
            if (subscription) {
               subscription.unsubscribe();
            }
         });
      }
   }

   animationDone(event: AnimationEvent): void {
      if (event.toState === 'hidden') {
         this.endAnimation.emit(true);
      }
   }

   onCloseButton(): void {
      this.visibility = 'hidden';
      this._subscriptions.push(this.endAnimation.subscribe((data) => {
         if (data) {
            this.onClose.emit();
         }
      }));
   }
}
