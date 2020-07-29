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
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { StAlert } from './st-alerts.model';
import { StAlertsService } from './st-alerts.service';

@Component({
   selector: 'st-alerts',
   templateUrl: './st-alerts.component.html',
   styleUrls: ['./st-alerts.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * @description {Component} [Alerts]
 *
 * Alerts are made to let the user know errors or information about he is trying to do.
 *
 * @model
 *
 *  [Alert] {./st-alerts.model.ts#StAlert}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-alerts [showInConsole]="true"></st-alerts>
 *
 * ```
 */
export class StAlertsComponent {
   /** @Input {boolean} [showInConsole=false] Display logs in console */
   @Input() showInConsole: boolean = false;
   /** @Input {string} [qaTag=] Component qa tag */
   @Input() qaTag: string = 'st-alert-manager';

   constructor(
      public alertService: StAlertsService
   ) { }
}
