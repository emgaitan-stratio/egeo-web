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
import { ChangeDetectorRef, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';

import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StEgeo, StRequired } from '../decorators/require-decorators';
import { StTwoListSelectionConfig, StTwoListSelectionElement, StTwoListSelectExtraLabelAction } from './st-two-list-selection.model';

@Component({
   selector: 'st-two-list-selection-view',
   templateUrl: './st-two-list-selection.view.component.html',
   styleUrls: ['./st-two-list-selection.view.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
@StEgeo()
export class StTwoListSelectionViewComponent implements OnInit, OnChanges {

   @Input() @StRequired() qaTag: string;
   @Input() @StRequired() selectedElements: StTwoListSelectionElement[];
   @Input() allElements: StTwoListSelectionElement[];
   @Input() config: StTwoListSelectionConfig;
   @Input() editable: boolean = false;
   @Input() hasAllListAll?: boolean = false;
   @Input() hasAllListSelected?: boolean = false;
   @Input() hasSearch: boolean = true;
   @Input() isLoading?: boolean = false;
   @Input() itemAll?: StTwoListSelectionElement;
   @Input() mode: 'compact' | 'normal' = 'normal';
   @Input() moveAllToSelectedButton: boolean = false;
   @Input() moveAllToAllButton: boolean = false;
   @Input() moveToSelectedButton: boolean = false;
   @Input() moveToAllButton: boolean = false;
   @Input() orderSelectedOptions: StDropDownMenuItem[] = [];
   @Input() orderAllOptions: StDropDownMenuItem[] = [];
   @Input() showSearchNumber?: number;

   @Output() changeOrderAll: EventEmitter<any> = new EventEmitter<any>();
   @Output() changeOrderSelected: EventEmitter<any> = new EventEmitter<any>();
   @Output() moveAllToAll: EventEmitter<Event> = new EventEmitter<Event>();
   @Output() moveAllToSelected: EventEmitter<Event> = new EventEmitter<Event>();
   @Output() moveToAll: EventEmitter<Event> = new EventEmitter<Event>();
   @Output() moveToSelected: EventEmitter<Event> = new EventEmitter<Event>();
   @Output() scrollBottomAll: EventEmitter<any> = new EventEmitter<any>();
   @Output() searchOverAll: EventEmitter<string> = new EventEmitter<string>();
   @Output() searchOverSelected: EventEmitter<string> = new EventEmitter<string>();
   @Output() selectAllElement: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectExtraLabelAll: EventEmitter<StTwoListSelectExtraLabelAction> = new EventEmitter<StTwoListSelectExtraLabelAction>();
   @Output() selectExtraLabelSelected: EventEmitter<StTwoListSelectExtraLabelAction> = new EventEmitter<StTwoListSelectExtraLabelAction>();
   @Output() selectItemNonEditable: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectSelectedElement: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();

   public checkMoveToSelectedValue: boolean;
   public checkMoveToAllValue: boolean;

   constructor(private _cd: ChangeDetectorRef) {}

   ngOnChanges(changes: SimpleChanges): void {
      if (changes) {
         this.refreshButtons();
      }
   }

   ngOnInit(): void {
      this.refreshButtons();
   }

   get allTitle(): string {
      return this.config && this.config.allElementsListTitle || '';
   }

   get allSubtitle(): string {
      return this.config && this.config.allElementsListSubtitle || '';
   }

   get allPlaceholder(): string {
      return this.config && this.config.allElementsSearchPlaceholder || '';
   }

   get fetchingDataText(): string {
      return this.config && this.config.fetchingDataText || '';
   }

   get menuOptionList(): StDropDownMenuItem[] {
      return this.config && this.config.menuOptionList;
   }

   get orderPlaceholder(): string {
      return this.config && this.config.orderPlaceholder || '';
   }

   get selectedTitle(): string {
      return this.config && this.config.selectedElementsListTitle || '';
   }

   get selectedSubtitle(): string {
      return this.config && this.config.selectedElementsListSubtitle || '';
   }

   get allQaTag(): string {
      return this.qaTag + '-all-elements';
   }

   get selectedPlaceholder(): string {
      return this.config && this.config.selectedElementsSearchPlaceholder || '';
   }

   get selectedQaTag(): string {
      return this.qaTag + '-selected-elements';
   }

   checkMoveToSelected(): void {
      let existDisabledElements = (this.allElements) ? this.allElements.filter((elem) => elem.disabled) : [];
      // tslint:disable-next-line:max-line-length
      this.checkMoveToSelectedValue = (this.allElements) ? (this.allElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.allElements.length) : false;
      this._cd.markForCheck();
   }

   checkMoveToAll(): void {
      let existDisabledElements = (this.selectedElements) ? this.selectedElements.filter((elem) => elem.disabled) : [];
      // tslint:disable-next-line:max-line-length
      this.checkMoveToAllValue = (this.selectedElements) ? (this.selectedElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.selectedElements.length) : false;
      this._cd.markForCheck();
   }

   refreshButtons(): void {
      this.checkMoveToSelected();
      this.checkMoveToAll();
   }
}
