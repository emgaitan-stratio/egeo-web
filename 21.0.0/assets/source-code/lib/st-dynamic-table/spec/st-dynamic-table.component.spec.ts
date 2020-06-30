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
import { cloneDeep as _cloneDeep } from 'lodash';
import { JSONSchema4 } from 'json-schema';

import { StDynamicTableComponent } from '../st-dynamic-table.component';
import { Order, ORDER_TYPE, StCheckboxComponent, StCheckboxModule, StTableComponent, StTableHeader, StTableModule } from '../..';

let fixture: ComponentFixture<StDynamicTableComponent>;
let component: StDynamicTableComponent;


describe('StDynamicTableComponent', () => {
   const jsonSchema: JSONSchema4 = {
      '$schema': 'http://json-schema.org/schema#',
      'title': 'Executor Table',
      'type': 'object',
      'description': 'Spark executor properties',
      'optional': true,
      'properties': {
         'cores': {
            'title': 'Cores',
            'description': 'Number of per spark`s executor',
            'type': 'integer',
            'default': 4,
            'minimumExclusive': 0,
            'maximum': 8
         },
         'memory': {
            'title': 'Memory',
            'description': 'Spark executor memory',
            'type': 'integer',
            'default': 512,
            'minimum': 512,
            'maximum': 4096
         },
         'home': {
            'title': 'Executor home',
            'description': 'Set the directory in which Spark is installed on the executors in Mesos.',
            'type': 'string',
            'default': '/opt/spark/dist',
            '$ref': '/root/homes/executor',
            'enum': ['/root', '/desktop', '/document']
         },
         'subexecutor': {
            'title': 'Sub executor',
            'type': 'object',
            'description': 'Spark executor properties',
            'properties': {
               'subcores': {
                  'title': 'Sub cores',
                  'type': 'integer'
               },
               'submemory': {
                  'title': 'Sub memory',
                  'type': 'integer'
               }
            }
         }
      }
   };

   const items: any[] = [{ cores: 8, memory: 512, home: '/desktop' }];

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [CommonModule, StTableModule, StCheckboxModule],
         declarations: [StDynamicTableComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StDynamicTableComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StTableComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StCheckboxComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StDynamicTableComponent);
      component = fixture.componentInstance;
      component.jsonSchema = jsonSchema;
      component.items = items;
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

   describe('It should be able to apply some styles from outside', () => {
      it('If uiDefinitions input is introduced and there is a field with styles properties, there are added to the right field', () => {
         component.uiDefinitions = {
            cores: {
               styles: {
                  width: '25%'
               }
            },
            home: {
               styles: {
                  color: 'green'
               }
            }
         };

         fixture.detectChanges();

         const rows = fixture.nativeElement.querySelectorAll('tbody tr');
         for (let i = 0; i < rows.length; ++i) {
            const cells = rows[i].querySelectorAll('td');

            expect(cells[0].style.width).toEqual('25%');
            expect(cells[2].style.color).toEqual('green');
         }
      });

      it('if table is sortable but there are fields not sortable, sortable class is only added to sortable fields', () => {
         component.sortable = true;
         component.uiDefinitions = {
            memory: {
               sortable: false
            }
         };
         component.jsonSchema = jsonSchema;
         fixture.detectChanges();

         let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

         expect(headerItems[0].classList).toContain('st-table__header-item--sortable');
         expect(headerItems[1].classList).not.toContain('st-table__header-item--sortable');
         expect(headerItems[2].classList).toContain('st-table__header-item--sortable');

      });

      it('if table is not sortable but there are fields sortable, arrow is displayed for sortable fields', () => {
         component.sortable = false;
         component.uiDefinitions = {
            memory: {
               sortable: true
            }
         };
         component.jsonSchema = jsonSchema;
         fixture.detectChanges();
         let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

         expect(headerItems[0].classList).not.toContain('st-table__header-item--sortable');
         expect(headerItems[1].classList).toContain('st-table__header-item--sortable');
         expect(headerItems[2].classList).not.toContain('st-table__header-item--sortable');
      });
   });

   it('if table is filterable, filterable class is only added to filterable fields', () => {
      component.filterable = true;
      fixture.detectChanges();
      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

      expect(headerItems[0].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[1].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[2].classList).toContain('st-table__header-item--filterable');
   });

   it('If fields input is not introduced, it throws an error', () => {
      component.jsonSchema = undefined;
      try {
         fixture.detectChanges();
         expect(component.jsonSchema).toThrow();
      } catch (error) {
         expect(error.message).toContain('st-dynamic-table-component: field jsonSchema is a required field');
      }
   });

   it('only is displayed an arrow next to header of the field over which current order is applied', () => {
      component.sortable = true;
      component.currentOrder = undefined;
      component.jsonSchema = jsonSchema;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('thead .st-table__order-arrow')).toBeNull();

      component.currentOrder = new Order('home', ORDER_TYPE.ASC);
      fixture.detectChanges();

      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

      expect(fixture.nativeElement.querySelectorAll('thead .icon-arrow-up').length).toBe(1);
      expect(headerItems[2].querySelector('.icon-arrow-up')).not.toBeNull();
      expect(headerItems[2].classList).toContain('st-table__header-item--sortable');
   });

   it('only is displayed an arrow next to header of the field over which current filter is configured', () => {
      component.filterable = true;
      component.currentOrder = new Order('home', ORDER_TYPE.DESC);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('thead .st-table__filter-arrow')).toBeDefined();
      let headerItems: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('.st-table__header-item');

      expect(fixture.nativeElement.querySelectorAll('thead .icon-arrow4_down').length).toBe(1);
      expect(headerItems[0].querySelector('.icon-arrow4_down')).toBeNull();
      expect(headerItems[0].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[1].querySelector('.icon-arrow4_down')).toBeNull();
      expect(headerItems[1].classList).not.toContain('st-table__header-item--filterable');
      expect(headerItems[2].querySelector('.icon-arrow4_down')).not.toBeNull();
      expect(headerItems[2].classList).toContain('st-table__header-item--filterable');
   });

   describe('When user clicks on a field in the table header, order is changed', () => {
      beforeEach(() => {
         spyOn(component.changeOrder, 'emit');
         fixture.detectChanges();
      });

      it('if field is different to the current order`s one, current order is changed to the selected field and in direction ASC', () => {
         component.currentOrder = new Order('cores', ORDER_TYPE.ASC);

         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item label')[2];
         headerItem.click();
         fixture.detectChanges();

         expect(component.changeOrder.emit).toHaveBeenCalled();
         const expectedOrder: Order = (<jasmine.Spy> component.changeOrder.emit).calls.mostRecent().args[0];
         expect(expectedOrder.orderBy).toBe('home');
         expect(expectedOrder.type).toBe(ORDER_TYPE.ASC);
      });

      it('if field is undefined, order is not changed', () => {
         component.onChangeOrder(undefined);
         fixture.detectChanges();

         expect(component.changeOrder.emit).not.toHaveBeenCalledWith(undefined);
      });

      it('should stand up the field`s header which table is sorted by', () => {
         component.sortable = true;
         component.currentOrder = new Order('home', ORDER_TYPE.ASC);
         fixture.detectChanges();
         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item label')[2];

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
         headerItem[2].querySelector('.st-table__filter-arrow').click();
         fixture.detectChanges();
         let popover = fixture.nativeElement.querySelectorAll('.st-table__popover-content')[0];

         expect(popover).not.toBeNull();
         expect(popover.querySelector('st-checkbox')).not.toBeNull();
      });

      it('if not has custom template and select an option, clicking on button should emit eventEmitter with selected filters', () => {
         let headerItem: HTMLTableHeaderCellElement = fixture.nativeElement.querySelectorAll('.st-table__header-item');
         headerItem[2].querySelector('.st-table__filter-arrow').click();
         fixture.detectChanges();
         let popover = fixture.nativeElement.querySelectorAll('.st-table__popover-content')[0];
         popover.querySelector('.st-table__popover-button').click();
         fixture.detectChanges();
         expect(headerItem[2].querySelector('.icon-arrow4_down')).not.toBeNull();

         (<jasmine.Spy> component.selectFilters.emit).calls.reset();
         popover.querySelector('st-checkbox').querySelector('input').click();
         popover.querySelector('.st-table__popover-button').click();
         const expectedHeader: StTableHeader = _cloneDeep(component.fields[2]);
         expectedHeader.filters.filterConfig = [{ id: '/root', name: '/root', selected: true }];
         expect(component.selectFilters.emit).toHaveBeenCalledWith([expectedHeader]);
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
      fixture.detectChanges();

      let headerCells: HTMLTableHeaderCellElement[] = fixture.nativeElement.querySelectorAll('th');

      expect(headerCells.length).toBe(component.fields.length + 1);
      expect(headerCells[headerCells.length - 1].innerHTML).toEqual('');

      component.hasHoverMenu = false;

      fixture.detectChanges();
      fixture.changeDetectorRef.markForCheck();

      expect(fixture.nativeElement.querySelectorAll('th').length).toBe(component.fields.length);
   });

   describe('it should fix its header in order to be displayed although page scrolling', () => {
      it('if input "fixedHeader" is not specified, header is not fixed', () => {
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('st-table').classList).not.toContain('fixed-header');
      });

      it('if input "fixedHeader" is true, header is fixed', () => {
         component.fixedHeader = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('st-table').classList).toContain('fixed-header');
      });

      it('if input "fixedHeader" is false, header is not fixed', () => {
         component.fixedHeader = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('table').classList).not.toContain('st-table--fixed-header');
      });
   });

   it('Custom classes can be added to the table', () => {
      fixture.detectChanges();

      let fakeClass = 'separated-rows';
      expect(fixture.nativeElement.querySelector('table').classList).not.toContain(fakeClass);

      component.customClasses = fakeClass;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('table').classList).toContain('separated-rows');
   });

   it('When user leaves a row, an event is emitted to hide active hover menu', () => {
      spyOn(component.showHoverMenu, 'emit');
      component.hasHoverMenu = true;
      fixture.detectChanges();
      const rows = fixture.nativeElement.querySelectorAll('tbody tr');
      rows[0].querySelector('.icon.icon-ellipsis').click();
      fixture.detectChanges();

      expect(component.showHoverMenu.emit).toHaveBeenCalledWith(0);

      rows[0].dispatchEvent(new Event('mouseleave'));
      expect(component.showHoverMenu.emit).toHaveBeenCalledWith(undefined);
   });
});
