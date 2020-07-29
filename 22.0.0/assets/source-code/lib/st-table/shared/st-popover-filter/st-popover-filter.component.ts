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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { get as _get } from 'lodash';

import { StTableHeader } from '../../shared/table-header.interface';

@Component({
   selector: 'st-popover-filter',
   templateUrl: './st-popover-filter.component.html',
   styleUrls: ['./st-popover-filter.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StPopoverFilterComponent {
   /**
    * @description {Component} [Popover Filter]
    *
    * The popover filter component allows user to filter table data according to column values
    *
    */
   /** @Input {StTableHeader} [field=''] field displayed in the header */
   @Input() field: StTableHeader;

   /** @Input {number} [index=''] index of field displayed in the header */
   @Input() index: number;

   /** @Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content */
   @Input() templateContentFilter?: TemplateRef<any>;

   /** @Output [filter=''] Event emitted  when user interacts with filter button without a custom template */
   @Output() filter: EventEmitter<any> = new EventEmitter();

   /** @Output [close=''] Event emitted when menu has to be closed */
   @Output() close: EventEmitter<boolean> = new EventEmitter();

   public openToLeft: boolean;
   public offsetX: number;

   private _hidden: boolean;

   constructor(private _elementRef: ElementRef) {

   }

   /** @Input {boolean} [hidden=''] field to show popover */
   @Input()
   get hidden(): boolean {
      return this._hidden;
   }

   set hidden(hidden: boolean) {
      if (!hidden) {
         this.offsetX = (this._elementRef.nativeElement.offsetLeft - this._elementRef.nativeElement.offsetWidth) * -1;
      }
      this._hidden = hidden;
   }

   public getConfigField(field: StTableHeader, config: string): any {
      return _get(field, `filters.${config}`);
   }

   public onChangeFilter(indexFilter: number, event: { checked: boolean, value: any }): void {
      this.field.filters.filterConfig[indexFilter].selected = event.checked;
   }

   public onFilter(): void {
      this.filter.emit();
      this.close.emit();
   }

   public onCloseMenu(): void {
      if (!this._hidden) {
         this.close.emit(true);
      }
   }

   @HostListener('document:keydown.enter')
   public onPressEnter(): void {
      if (!this._hidden) {
         this.onFilter();
      }
   }
}
