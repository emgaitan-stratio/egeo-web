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

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StIconTab } from './st-icon-tabs.model';

/**
 * @description {Component} [Vertical Icon Tabs]
 *
 * The vertical icon tabs component has been designed to display content in different sections.
 *
 * @model
 *
 *   [Icon tab] {./st-icon-tabs.model.ts#StIconTab}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-vertical-icon-tabs class="vertical-icon-tabs"
 * [options]="options"
 * [activeOption]="active"
 * (changeOption)="onChangeOption($event)">
 * </st-vertical-icon-tabs>
 * ```
 *
 */
@Component({
   selector: 'st-vertical-icon-tabs',
   templateUrl: './st-vertical-icon-tabs.component.html',
   styleUrls: ['./st-vertical-icon-tabs.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StVerticalIconTabsComponent implements OnInit {
   /** @Input {StIconTab} [activeOption=] Active option */
   @Input() activeOption: StIconTab;
   /** @Input {StIconTab[]} [options=] Option list */
   @Input() options: StIconTab[];
   /** @Output {StIconTab} [changeOption=] Event emitted when user clicks on an option */
   @Output() changeOption: EventEmitter<StIconTab> = new EventEmitter<StIconTab>();

   ngOnInit(): void {
      if (this.options && this.options.length > 0) {
         this.activateOption(this.options[0]);
      }
   }

   isActive(option: StIconTab): boolean {
      return this.activeOption === option;
   }

   activateOption(option: StIconTab): void {
      this.changeOption.emit(option);
   }

}
