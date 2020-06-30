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
import {
   Component,
   Input,
   OnInit,
   ChangeDetectorRef,
   ChangeDetectionStrategy, Output, EventEmitter
} from '@angular/core';

import { STALERT_SEVERITY, StAlert, StAlertLink } from '../st-alerts.model';

@Component({
   selector: 'st-alert-box',
   templateUrl: './st-alert-box.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * @description {Component} [Alert Box]
 *
 * Alert box is made to let the user know errors or information about he is trying to do.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-alert-box [alert]="alert" [showInConsole]="showInConsole"></st-alert-box>
 *
 * ```
 */
export class StAlertBoxComponent implements OnInit {
   /** @Input {StAlert} [alert=] Data of the alert */
   @Input() alert: StAlert;
   /** @Input {boolean} [showInConsole=false] Display logs in console */
   @Input() showInConsole: boolean = false;
   /** @Output {StAlertLink} [clickLink=] Event emitted when link is clicked */
   @Output() clickLink: EventEmitter<StAlertLink> = new EventEmitter();
   /** @Output {boolean} [close=] Event emitted when alert is closed */
   @Output() close: EventEmitter<boolean> = new EventEmitter();

   public iconValue: string;
   public opacity: number = 0;
   public severityColorValue: string;

   constructor(private _cd: ChangeDetectorRef) {
   }

   ngOnInit(): void {
      this.alert.opacity.subscribe(opacity => this.changeOpacity(opacity));
      this.alert.notify();
      if (this.showInConsole) {
         this.notifyConsole();
      }
      this.severityColorValue = this.getSeverityColor();
      this.iconValue = this.getIcon();
   }

   closeAlert(): void {
      this.alert.cancel();
      this.close.emit(true);
   }

   getIcon(): string {
      switch (this.alert.severity) {
         case STALERT_SEVERITY.ERROR: return 'icon-circle-alert';
         case STALERT_SEVERITY.WARNING: return 'icon-alert';
         case STALERT_SEVERITY.SUCCESS: return 'icon-circle-check';
         case STALERT_SEVERITY.INFO: return 'icon-info';
         default: return '';
      }
   }

   getSeverityColor(): string {
      switch (this.alert.severity) {
         case STALERT_SEVERITY.ERROR: return 'sth-alert-box-error';
         case STALERT_SEVERITY.WARNING: return 'sth-alert-box-warning';
         case STALERT_SEVERITY.SUCCESS: return 'sth-alert-box-success';
         case STALERT_SEVERITY.INFO: return 'sth-alert-box-info';
         default: return '';
      }
   }

   goTo(): void {
      this.clickLink.emit(this.alert.link);
   }

   changeOpacity(opacity: number): void {
      this.opacity = opacity;
      this._cd.markForCheck();
   }

   private notifyConsole(): void {
      switch (this.alert.severity) {
         case STALERT_SEVERITY.ERROR: console.error(`ERROR-${this.alert.title}: ${this.alert.message}`); break;
         case STALERT_SEVERITY.WARNING: console.warn(`WARNING-${this.alert.title}: ${this.alert.message}`); break;
         case STALERT_SEVERITY.SUCCESS: console.log(`SUCCESS-${this.alert.title}: ${this.alert.message}`); break;
         default: console.error(`ERROR: severity not found for ${this.alert.title}: ${this.alert.message}`); break;
      }
   }
}
