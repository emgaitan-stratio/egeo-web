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
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
   selector: '[template-filter-submit]'
})
export class StTemplateFilterSubmitDirective {
   @Output() submit: EventEmitter<boolean> = new EventEmitter();

   private _submitButton: HTMLButtonElement;
   private _observer: MutationObserver;

   constructor(private _elementRef: ElementRef) {
      this._observer = new MutationObserver(list => {
            if (!this._submitButton) {
               this._addTemplateSubmitButtonListener();
            }
         }
      );
      this._observer.observe(this._elementRef.nativeElement, {
         attributes: false,
         childList: true,
         subtree: false
      });
   }

   ngOnDestroy(): void {
      this._observer.disconnect();
      this._removeTemplateSubmitButtonListener();
   }

   private _addTemplateSubmitButtonListener(): void {
      if (this._elementRef && this._elementRef.nativeElement) {
         this._submitButton = this._elementRef.nativeElement.querySelector('button[popover-filter-submit]');
         if (this._submitButton) {
            this._submitButton.addEventListener('click', () => this.submit.emit(true));
            this._observer.disconnect();
         }
      }
   }

   private _removeTemplateSubmitButtonListener(): void {
      if (this._submitButton) {
         this._submitButton.removeEventListener('click', () => this.submit.emit(true));
      }
   }
}
