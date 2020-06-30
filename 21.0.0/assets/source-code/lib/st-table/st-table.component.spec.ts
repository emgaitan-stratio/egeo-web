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
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Order, ORDER_TYPE } from './shared/order';
import { StPopoverFilterComponent } from './shared/st-popover-filter/st-popover-filter.component';
import { StTableComponent } from './st-table.component';
import { StTableHeader } from './shared/table-header.interface';
import { StCheckboxModule } from '../st-checkbox/st-checkbox.module';
import { StPopOverModule } from '../st-pop-over/st-pop-over.module';

let fixture: ComponentFixture<StTableComponent>;
let component: StTableComponent;
let fakeFields: StTableHeader[] = [
   { id: 'id', label: 'ID', sortable: true },
   {
      id: 'name',
      label: 'Name',
      sortable: false
   },
   { id: 'lastName', label: 'Last name' },
   { id: 'phone', label: 'Phone', sortable: true },
   { id: 'group', label: 'Group', sortable: true, filterable: true, filters: { title: 'test', filterConfig: [{ id: 0, name: '1111' }] } }
];

describe('StTableComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [CommonModule, RouterTestingModule, StCheckboxModule, StPopOverModule],
         declarations: [StPopoverFilterComponent, StTableComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StTableComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StTableComponent);
      component = fixture.componentInstance;
      component.fields = fakeFields;
      component.qaTag = 'fake qa tag';
   });

   describe('If some inputs are not specified, they will be set by default', () => {
      beforeEach(() => {
         fixture.detectChanges();
      });
      it('header is shown by default', () => {
         expect(component.header).toBeTruthy();
      });

      it('table is sortable by default', () => {
         expect(component.sortable).toBeTruthy();
      });

      it('hover menu is not displayed by default', () => {
         expect(component.hasHoverMenu).toBeFalsy();
      });
   });

   it('if table is sortable but there are fields not sortable, sortable class is only added to sortable fields', () => {
      component.sortable = true;
      fixture.detectChanges();
      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');


      expect(headerItems[0].classList).toContain('st-table__header-item--sortable');
      expect(headerItems[1].classList).not.toContain('st-table__header-item--sortable');
      expect(headerItems[2].classList).toContain('st-table__header-item--sortable');
      expect(headerItems[3].classList).toContain('st-table__header-item--sortable');
      expect(headerItems[4].classList).toContain('st-table__header-item--sortable');
   });

   it('if table is not sortable but there are fields sortable, arrow is displayed for sortable fields', () => {
      component.sortable = false;
      fixture.detectChanges();
      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

      expect(headerItems[0].classList).toContain('st-table__header-item--sortable');
      expect(headerItems[1].classList).not.toContain('st-table__header-item--sortable');
      expect(headerItems[2].classList).not.toContain('st-table__header-item--sortable');
      expect(headerItems[3].classList).toContain('st-table__header-item--sortable');
      expect(headerItems[4].classList).toContain('st-table__header-item--sortable');
   });

   it('if table is filterable, filterable class is only added to filterable fields', () => {
      component.filterable = true;
      fixture.detectChanges();
      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

      expect(headerItems[0].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[1].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[2].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[3].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[4].classList).toContain('st-table__header-item--filterable');
   });

   it('If fields input is not introduced, it throws an error', () => {
      component.fields = undefined;
      try {
         fixture.detectChanges();
         expect(component.fields).toThrow();
      } catch (error) {
         expect(error.message).toContain('st-table-component: field fields is a required field');
      }
   });

   it('only is displayed an arrow next to header of the field over which current order is applied', () => {
      component.sortable = true;
      component.currentOrder = undefined;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('thead .st-table__order-arrow')).toBeNull();

      component.currentOrder = new Order(fakeFields[3].id, ORDER_TYPE.ASC);
      fixture.detectChanges();

      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

      expect(fixture.nativeElement.querySelectorAll('thead .icon-arrow-up').length).toBe(1);
      expect(headerItems[3].querySelector('.icon-arrow-up')).not.toBeNull();
      expect(headerItems[3].classList).toContain('st-table__header-item--sortable');
   });

   it('only is displayed an arrow next to header of the field over which current filter is configured', () => {
      component.filterable = true;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('thead .st-table__filter-arrow')).toBeDefined();
      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

      expect(fixture.nativeElement.querySelectorAll('thead .icon-arrow4_down').length).toBe(1);
      expect(headerItems[0].querySelector('.icon-arrow4_down')).toBeNull();
      expect(headerItems[0].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[1].querySelector('.icon-arrow4_down')).toBeNull();
      expect(headerItems[1].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[2].querySelector('.icon-arrow4_down')).toBeNull();
      expect(headerItems[2].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[3].querySelector('.icon-arrow4_down')).toBeNull();
      expect(headerItems[3].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[4].querySelector('.icon-arrow4_down')).not.toBeNull();
      expect(headerItems[4].classList).toContain('st-table__header-item--filterable');
   });

   describe('Should return the class name for header items according to the current order and direction', () => {
      beforeEach(() => {
         fixture.detectChanges();
      });

      it('if current order is not defined yet, no one arrow is displayed', () => {
         component.currentOrder = undefined;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('thead st-table__order-arrow')).toBeNull();
      });

      it('if table is sort by the field but not in ascending direction, it returns icon-arrow-down', () => {
         component.currentOrder = new Order(fakeFields[0].id, ORDER_TYPE.DESC);

         expect(component.getHeaderItemClass(fakeFields[0])).toBe('icon-arrow-down');
      });

      it('if table is sort in ascending direction but not by the introduced field, it returns icon-arrow-down', () => {
         component.currentOrder = new Order(fakeFields[1].id, ORDER_TYPE.ASC);

         expect(component.getHeaderItemClass(fakeFields[0])).toBe('icon-arrow-down');
      });

      it('if table is sort by that field and in ascending direction, it returns icon-arrow-up', () => {
         component.currentOrder = new Order(fakeFields[0].id, ORDER_TYPE.ASC);

         expect(component.getHeaderItemClass(fakeFields[0])).toBe('icon-arrow-up');
      });

   });

   describe('When user clicks on a field in the table header, order is changed', () => {
      beforeEach(() => {
         spyOn(component.changeOrder, 'emit');
         fixture.detectChanges();
      });
      it('if field is different to the current order`s one, current order is changed to the selected field and in direction ASC', () => {
         component.currentOrder = new Order(fakeFields[0].id, ORDER_TYPE.ASC);

         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item label')[fakeFields.length - 1];
         headerItem.click();
         fixture.changeDetectorRef.markForCheck();
         fixture.detectChanges();

         expect(component.changeOrder.emit).toHaveBeenCalled();
         const expectedOrder: Order = (<jasmine.Spy> component.changeOrder.emit).calls.mostRecent().args[0];
         expect(expectedOrder.orderBy).toBe(fakeFields[fakeFields.length - 1].id);
         expect(expectedOrder.type).toBe(ORDER_TYPE.ASC);
      });

      it('if field is the same to the current order`s one, only order direction is changed', () => {
         // ascent sorting
         component.currentOrder = new Order(fakeFields[0].id, ORDER_TYPE.ASC);
         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item label')[0];
         headerItem.click();
         fixture.detectChanges();

         expect(component.changeOrder.emit).toHaveBeenCalled();
         let expectedOrder: Order = (<jasmine.Spy> component.changeOrder.emit).calls.mostRecent().args[0];
         expect(expectedOrder.orderBy).toBe(fakeFields[0].id);
         expect(expectedOrder.type).toBe(ORDER_TYPE.DESC);

         // descent sorting
         component.currentOrder = new Order(fakeFields[0].id, ORDER_TYPE.DESC);
         headerItem.click();
         fixture.detectChanges();

         expectedOrder = (<jasmine.Spy> component.changeOrder.emit).calls.mostRecent().args[0];
         expect(component.changeOrder.emit).toHaveBeenCalled();
         expect(expectedOrder.orderBy).toBe(fakeFields[0].id);
         expect(expectedOrder.type).toBe(ORDER_TYPE.ASC);
      });

      it('if field is undefined, order is not changed', () => {
         component.currentOrder = new Order(fakeFields[1].id, ORDER_TYPE.DESC);

         component.onChangeOrder(undefined);
         fixture.detectChanges();

         expect(component.currentOrder.orderBy).toBe(fakeFields[1].id);
         expect(component.currentOrder.type).toBe(ORDER_TYPE.DESC);
         expect(component.changeOrder.emit).not.toHaveBeenCalled();
      });

      it('should stand up the field`s header which table is sorted by', () => {
         component.currentOrder = new Order(fakeFields[fakeFields.length - 1].id, ORDER_TYPE.ASC);
         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item label')[fakeFields.length - 1];
         fixture.detectChanges();

         expect(headerItem.parentElement.classList).toContain('st-table__header-item--selected');
      });
   });

   describe('When user clicks on a filter arrow in the table header', () => {
      beforeEach(() => {
         spyOn(component.selectFilters, 'emit');
         component.filterable = true;

         fixture.detectChanges();
      });

      it('Should show a menu where to apply filters', () => {
         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item');
         headerItem[4].querySelector('.st-table__filter-arrow').click();
         fixture.changeDetectorRef.markForCheck();
         fixture.detectChanges();
         let popover = fixture.nativeElement.querySelectorAll('.st-table__popover-content')[0];

         if (!component.templateContentFilter) {
            expect(popover).not.toBeNull();
            expect(popover.querySelector('st-checkbox')).not.toBeNull();
         }
      });

      it('if not has custom template and select an option, clicking on button should emit eventEmitter with selected filters', () => {
         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item');
         headerItem[4].querySelector('.st-table__filter-arrow').click();
         fixture.detectChanges();
         let popover = fixture.nativeElement.querySelectorAll('.st-table__popover-content')[0];
         popover.querySelector('.st-table__popover-button').click();
         fixture.detectChanges();
         expect(headerItem[4].querySelector('.icon-arrow4_down')).not.toBeNull();

         popover.querySelector('st-checkbox').querySelector('input').click();
         popover.querySelector('.st-table__popover-button').click();

         expect(component.selectFilters.emit).toHaveBeenCalledWith([fakeFields[4]]);
      });
   });

   describe('Should be able to enable or disable the selection of all its rows', () => {

      it('By default, if "selectableAll" input is not specified, table is created without being able to select all its rows', () => {
         expect(fixture.nativeElement.querySelector('.st-table__checkbox')).toBeNull();
      });

      it('If table does not allow to select all its rows, header will be displayed without a checkbox', () => {
         component.selectableAll = false;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-table__checkbox')).toBeNull();
      });

      describe('If table allows to select all its rows', () => {
         beforeEach(() => {
            component.selectableAll = true;
            fixture.detectChanges();
         });

         it('checkbox is displayed at the header', () => {
            expect(fixture.nativeElement.querySelector('.st-table__header').querySelector('st-checkbox')).not.toBeNull();
         });

         it('When user clicks on the checkbox, an event is emitted with its current status', () => {
            spyOn(component.selectAll, 'emit');
            let selectedAllCheckbox: HTMLInputElement = fixture.nativeElement.querySelector('.st-table__header')
               .querySelector('st-checkbox').querySelector('input');

            selectedAllCheckbox.click();

            expect(component.selectAll.emit).toHaveBeenCalledWith(true);

            selectedAllCheckbox.click();

            expect(component.selectAll.emit).toHaveBeenCalledWith(false);
         });

         it('Checkbox is displayed checked or not according to the selectedAll input', () => {
            component.selectedAll = true;
            fixture.detectChanges();

            let selectedAllCheckbox: HTMLInputElement = fixture.nativeElement.querySelector('.st-table__header')
               .querySelector('st-checkbox').querySelector('input');

            expect(selectedAllCheckbox.checked).toBeTruthy();

            component.selectedAll = false;
            fixture.detectChanges();

            expect(selectedAllCheckbox.checked).toBeFalsy();
         });

      });
   });

   it('only if hasHoverMenu is true, an empty cell is created after the header cells', () => {
      component.hasHoverMenu = true;
      component.fields = fakeFields;

      fixture.detectChanges();
      let headerCells: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('th');

      expect(headerCells.length).toBe(fakeFields.length + 1);
      expect(headerCells[headerCells.length - 1].innerHTML).toEqual('');

      component.hasHoverMenu = false;

      fixture.detectChanges();
      fixture.changeDetectorRef.markForCheck();

      expect(fixture.nativeElement.querySelectorAll('th').length).toBe(fakeFields.length);
   });

   describe('it should fix its header in order to be displayed although page scrolling', () => {
      it('if input "fixedHeader" is not specified, header is not fixed', () => {
         expect(fixture.nativeElement.classList).not.toContain('fixed-header');
      });

      it('if input "fixedHeader" is true, header is fixed', () => {
         component.fixedHeader = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.classList).toContain('fixed-header');
      });

      it('if input "fixedHeader" is false, header is not fixed', () => {
         component.fixedHeader = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.classList).not.toContain('fixed-header');
      });
   });

   it('Custom classes can be added to the table', () => {
      let fakeClass = 'separated-rows';
      expect(fixture.nativeElement.querySelector('table').classList).not.toContain(fakeClass);

      component.customClasses = fakeClass;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('table').classList).toContain('separated-rows');
   });
});
