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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { JSONSchema4 } from 'json-schema';

import { StEgeo, StRequired } from '../decorators/require-decorators';
import { Order } from '../st-table/shared/order';
import { StDynamicTableUtils } from './utils/st-dynamic-table.utils';
import { StDynamicTableClickCellEvent, StDynamicTableHeader, StDynamicTableUserInterface } from './st-dynamic-table.model';
import { StTableIconClasses } from '../st-table/st-table.interface';

/**
 * @description {Component} [Dynamic Table]
 *
 * The table component has been designed to be able to create a table deducing its columns using a json schema
 *
 * * @model
 *
 *   [StDynamicTableHeader] {./st-dynamic-table.model.ts#StDynamicTableHeader}
 *   [StDynamicTableUISpecification] {./st-dynamic-table.model.ts#StDynamicTableUISpecification}
 *   [StDynamicTableUserInterface] {./st-dynamic-table.model.ts#StDynamicTableUserInterface}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-dynamic-table [jsonSchema]="jsonSchema"
 *    [items]="sortedUsers"
 *    [sortable]="true"
 *    [filterable]="true"
 *    [hasHoverMenu]="true"
 *    [currentOrder]="currentOrder"
 *    [activeHoverMenu]="activeHoverMenuPosition"
 *    [templateContentFilter]="filterContent"
 *    (changeOrder)="onSortTable($event)"
 *    (showHoverMenu)="onShowHoverMenu($event)">
 *        <st-dropdown-menu st-dynamic-table-hover-menu
 *          class="hover-menu"
 *          [items]="rowActions"
 *          [active]="activeHoverMenuPosition[3] !== undefined"
 *          [visualMode]="1">
 *       </st-dropdown-menu>
 * </st-dynamic-table>
 * ```
 *
 */
@StEgeo()
@Component({
   selector: 'st-dynamic-table',
   templateUrl: './st-dynamic-table.component.html',
   styleUrls: ['./st-dynamic-table.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StDynamicTableComponent {
   /** @Input {Object([key: string]: any)[]} [items=''] Item list displayed as table rows */
   @Input() @StRequired() items: { [key: string]: any }[];
   /** @Input {string} [qaTag=''] Prefix used to generate the id values for qa tests */
   @Input() qaTag: string;
   /** @Input {boolean} [header=true] Boolean to show or hide the header */
   @Input() header: boolean = true;
   /**
    * @Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
    * the new "sortable" field inside stTableHeader model
    */
   @Input() sortable: boolean = true;
   /**
    * @Input {boolean} [filterable=false] Boolean to make filterable the table, To enable filtering of columns use
    * the new "filterable" field inside stTableHeader model (necessary define filterConfig).
    */
   @Input() filterable: boolean = false;
   /**
    * @Input {boolean} [selectable=false] Boolean to show or hide a checkboxes in the first cell of rows
    */
   @Input() selectable: boolean = false;
   /**
    * @Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
    *  deselect all rows
    */
   @Input() selectableAll: boolean = false;
   /** @Input {boolean[]} [selected=''] Boolean list to indicate if a row is selected */
   @Input() selected?: boolean[] = [];
   /** @Input {Order} [currentOrder=''] It specifies what is the current order applied to the table */
   @Input() currentOrder: Order;
   /** @Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows */
   @Input() customClasses: string;
   /** @Input {boolean} [fixedHeader=false] Boolean to fix the table header */
   @Input() fixedHeader: boolean = false;
   /** @Input {boolean} [stickyHoverMenu=false] Boolean to fix hover menu always visible */
   @Input() stickyHoverMenu: boolean = false;
   /** @Input {StTableIconClasses} [iconClasses=''] List of icon classes */
   @Input() iconClasses?: StTableIconClasses = new StTableIconClasses();
   /** @Input {number} [activeHoverMenu=] Position of the current active hover menu */
   @Input() activeHoverMenu?: number;
   /** @Input {boolean} [hasHoverMenu=] It specifies if a menu has to be displayed when user puts the mouse over
    * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
    */
   @Input() hasHoverMenu?: boolean;
   /** @Input {string} [hoverButton='icon-ellipsis'] It specifies the icon class of the hover button displayed when user puts mouse over a row
    */
   @Input() hoverButton: string = 'icon-ellipsis';
   /** @Input {boolean} [selectedAll=] It specifies if all rows are selected */
   @Input() selectedAll?: boolean;
   /** @Input {string} [locale=en-US] Locale used to format dates */
   @Input() locale: string = 'en-US';
   /** @Input {TemplateRef} [templateContentFilter=undefined] Reference to paint a custom template inside popover content */
   @Input() templateContentFilter?: TemplateRef<any>;
   /** @Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows */
   @Output() changeOrder: EventEmitter<Order> = new EventEmitter<Order>();
   /** @Output {boolean} [selectAll=''] Event emitted  when user interacts with the checkbox to select or deselect
    * all rows
    */
   @Output() selectAll: EventEmitter<boolean> = new EventEmitter<boolean>();
   /** @Output {EventEmitter<StTableHeader[]>} [fields=] Event emitted when header fields are being loaded */
   @Output() updateFields: EventEmitter<StDynamicTableHeader[]> = new EventEmitter<StDynamicTableHeader[]>();
   /** @Output {string} [clickFilter=] Event emitted when using filters custom template  */
   @Output() clickFilter: EventEmitter<StDynamicTableHeader> = new EventEmitter();
   /** @Output {StTableHeader[]} [selectFilters=] Event emitted  when user interacts with filter button without a custom template */
   @Output() selectFilters: EventEmitter<StDynamicTableHeader[]> = new EventEmitter<StDynamicTableHeader[]>();
   /** @Output {EventEmitter<number} [showHoverMenu=] Event emitted when user clicks on hover button of a row */
   @Output() showHoverMenu: EventEmitter<number> = new EventEmitter<number>();
   /** @Output {Object(checked: boolean, row: number)} [selectRow=] Event emitted when user clicks on checkbox of a row */
   @Output() selectRow: EventEmitter<{ checked: boolean, row: number }> = new EventEmitter<{ checked: boolean, row: number }>();
   /** @Output {StDynamicTableClickCellEvent} [clickCell=] Event emitted when user clicks on a cell */
   @Output() clickCell: EventEmitter<StDynamicTableClickCellEvent> = new EventEmitter<StDynamicTableClickCellEvent>();


   public fields: StDynamicTableHeader[] = [];
   public statusFilter: boolean[] = [];
   private _jsonSchema: JSONSchema4;
   private _uiDefinitions: StDynamicTableUserInterface;

   private _templateContentFilter: TemplateRef<any>;
   private _fkSeparator: string = ' - ';
   private _activeFilterFields: string[] = [];

   constructor(private _cd: ChangeDetectorRef) {
   }

   /** @Input {JSONSchema4} [jsonSchema=] Json schema to define its structure */
   @Input() @StRequired()
   get jsonSchema(): JSONSchema4 {
      return this._jsonSchema;
   }

   set jsonSchema(_jsonSchema: JSONSchema4) {
      this._jsonSchema = _jsonSchema;
      this._manageFieldsUpdate();
   }

   /** @Input {StDynamicTableUserInterface} [uiDefinitions=''] UI definition for each field */
   @Input()
   get uiDefinitions(): StDynamicTableUserInterface {
      return this._uiDefinitions;
   }

   set uiDefinitions(_uiDefinitions: StDynamicTableUserInterface) {
      this._uiDefinitions = _uiDefinitions;
      this._manageFieldsUpdate();
   }

   /** @Input {string[]} [activeFilterFields=] List of current filtered fields  */
   @Input()
   get activeFilterFields(): string[] {
      return this._activeFilterFields;
   }

   set activeFilterFields(_activeFilterFields: string[]) {
      this._activeFilterFields = _activeFilterFields;
      this._updateStatusFilters();
   }

   public onFilterClick(selectedFilter: any): void {
      this.clickFilter.emit(selectedFilter);
   }

   public onChangeOrder(order: Order): void {
      if (order) {
         this.changeOrder.emit(order);
      }
   }

   public onSelectAll(checked: boolean): void {
      this.selectAll.emit(checked);
   }

   public onSelectedFilters(selectedFilters: StDynamicTableHeader[]): void {
      this.selectFilters.emit(selectedFilters);
   }

   public onShowHoverMenu(row: number): void {
      this.showHoverMenu.emit(row);
   }

   public onLeaveRow(): void {
      this.showHoverMenu.emit(undefined);
   }

   public onClickCell(value: any, field: StDynamicTableHeader): void {
      if (field.clickable) {
         this.clickCell.emit({
            header: field,
            value: value
         });
      }
   }

   public getCellContent(item: { [key: string]: any }, field: StDynamicTableHeader): string {
      if (field.fk && field.group) {
         const groupLabel = field.group.split(this._fkSeparator)
            .map(_groupKey => item[_groupKey])
            .join(this._fkSeparator);
         return groupLabel.length > this._fkSeparator.length ? groupLabel : item[field.id];
      }
      const uiDefinition = this.uiDefinitions && this.uiDefinitions[field.id];

      if (uiDefinition && uiDefinition.dateFormat) {
         return StDynamicTableUtils.formatDate(<string> item[field.id], uiDefinition.dateFormat, this.locale);
      }
      return item[field.id];
   }

   public getCellStyles(field: StDynamicTableHeader): any {
      const uiDefinition = this.uiDefinitions && this.uiDefinitions[field.id];
      return uiDefinition && uiDefinition.styles;
   }

   public onSelectRow(checkboxEvent: { checked: boolean, value: any }, row: number): void {
      this.selectRow.emit({ checked: checkboxEvent.checked, row: row });
   }

   private _manageFieldsUpdate(): void {
      this.fields = StDynamicTableUtils.getHeaderFieldsFromJsonSchema(this._jsonSchema, this._uiDefinitions);
      this.updateFields.emit(this.fields);
      this._updateStatusFilters();
      this._cd.markForCheck();
   }

   private _updateStatusFilters(): void {
      this.statusFilter = [];

      if (this._activeFilterFields && this._activeFilterFields.length && this.fields && this.fields.length) {
         this._activeFilterFields.forEach(_fieldId => {
            const position = this.fields.findIndex(_field => _field.id === _fieldId);
            if (position > -1) {
               this.statusFilter[position] = true;
            }
         });
      }
   }
}
