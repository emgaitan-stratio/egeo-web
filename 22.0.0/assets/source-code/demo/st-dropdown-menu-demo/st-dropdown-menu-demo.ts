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
import { ChangeDetectorRef, Component } from '@angular/core';
import { StDropDownMenuGroup, StDropDownMenuItem, StDropDownVisualMode } from '@stratio/egeo';

import { StDemoLoggerService } from '../shared/st-demo-logger/st-demo-logger.service';
import { CssProperty } from '@app/shared/css-property-table/css-property-table.model';

@Component({
   selector: 'st-dropdown-menu-demo',
   templateUrl: 'st-dropdown-menu-demo.html',
   styleUrls: ['./st-dropdown-menu-demo.component.scss']
})
export class StDropdownMenuDemoComponent {

   public configDoc: any = {
      html: 'demo/st-dropdown-menu-demo/st-dropdown-menu-demo.html',
      ts: 'demo/st-dropdown-menu-demo/st-dropdown-menu-demo.ts',
      component: 'lib/st-dropdown-menu/st-dropdown-menu.component.ts'
   };

   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-dropdown-menu__title--color',
         description: 'Title color',
         default: '$neutral-40'
      },
      {
         name: '--egeo-st-dropdown-menu__title--font-weight',
         description: 'Title font weight',
         default: 'bold'
      },
      {
         name: '--egeo-st-dropdown-menu__title--font-size',
         description: 'Title font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-dropdown-menu__title--line-height',
         description: 'Title line height',
         default: '$egeo-line-height-xxxsmall'
      }, {
         name: '--egeo-st-dropdown-menu--color',
         description: 'Text color',
         default: '$space-110'
      },
      {
         name: '--egeo-st-dropdown-menu--font-weight',
         description: 'Text font weight',
         default: '400'
      },
      {
         name: '--egeo-st-dropdown-menu--font-size',
         description: 'Text font size',
         default: '$egeo-font-size-xsmall'
      },
      {
         name: '--egeo-st-dropdown-menu--line-height',
         description: 'Text line height',
         default: '$egeo-line-height-20'
      },
      {
         name: '--egeo-st-dropdown-menu--bg-color',
         description: 'Menu background color',
         default: '$neutral-full'
      },
      {
         name: '--egeo-st-dropdown-menu--border-color',
         description: 'Menu border color',
         default: '$neutral-30'
      },
      {
         name: '--egeo-st-dropdown-menu--border-radius',
         description: 'Menu border radius',
         default: '4px'
      },
      {
         name: '--egeo-st-dropdown-menu__item--padding',
         description: 'Item padding',
         default: '9px 15px'
      },
      {
         name: '--egeo-st-dropdown-menu__item--font-weight',
         description: 'Item font weight',
         default: '400'
      },
      {
         name: '--egeo-st-dropdown-menu__active--border-color',
         description: 'Active menu border color',
         default: '$input-field-onfocus'
      },
      {
         name: '--egeo-st-dropdown-menu__item__hover--bg-color',
         description: 'Hover item background color',
         default: '$space-5'
      },
      {
         name: '--egeo-st-dropdown-menu__item__selected--bg-color',
         description: 'Selected item background color',
         default: '$action-10'
      },
      {
         name: '--egeo-st-dropdown-menu__item__disabled--color',
         description: 'Disabled item color',
         default: '$space-40'
      },
      {
         name: '--egeo-st-dropdown-menu__separator--color',
         description: 'Separator color',
         default: '$space-20'
      },
      {
         name: '--egeo-st-dropdown-menu__icon--color',
         description: 'Item icon color',
         default: '$space-70'
      },
      {
         name: '--egeo-st-dropdown-menu__icon--font-size',
         description: 'Icon font size',
         default: '$egeo-font-size-12'
      },
      {
         name: '--egeo-st-dropdown-menu__icon--line-height',
         description: 'Icon line height',
         default: '$egeo-line-height-20'
      },
      {
         name: '--egeo-st-dropdown-menu__text-info--color',
         description: 'Text info color',
         default: '$neutral-40'
      },
      {
         name: '--egeo-st-dropdown-menu__text-info--font-size',
         description: 'Text info font size',
         default: '$egeo-font-size-12'
      },
      {
         name: '--egeo-st-dropdown-menu__text-info--line-height',
         description: 'Text info line height',
         default: '12px'
      },
      {
         name: '--egeo-st-dropdown-menu__without-results--color',
         description: 'Without results label color',
         default: '$neutral-50'
      },
      {
         name: '--egeo-st-dropdown-menu__without-results--font-size',
         description: 'Without results label font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-dropdown-menu__without-results--font-weight',
         description: 'Without results label font weight',
         default: '300'
      },
      {
         name: '--egeo-st-dropdown-menu__without-results--padding',
         description: 'Without results label padding',
         default: ' 20px'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list--bg-color',
         description: 'Menu list background color',
         default: '$neutral-full'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list--border-radius',
         description: 'Menu list border radius',
         default: '4px'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list--box-shadow',
         description: 'Menu list box shadow',
         default: '0 3px 9px 0 rgba(17, 17, 17, 0.25)'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list--padding',
         description: 'Menu list padding',
         default: '4px 0'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list__item--color',
         description: 'Menu list item color',
         default: '$space-110'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list__item--font-size',
         description: 'Menu list item font-size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list__item--min-height',
         description: 'Menu list item min height',
         default: '40px'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list__item--padding',
         description: 'Menu list item padding',
         default: '10px 20px'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list__item__hover--bg-color',
         description: 'Menu list hover item background color',
         default: '$action-10'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list__item--font-size',
         description: 'Menu list item font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-dropdown-menu__menu-list__item--line-height',
         description: 'Menu list item line height',
         default: '$egeo-line-height-22'
      }
   ];

   public titles: string[] = [];
   public menus: ((StDropDownMenuItem | StDropDownMenuGroup)[])[] = [];
   public active: boolean[] = [];
   public selectedValue: (StDropDownMenuItem | undefined)[] = [];
   public visualMode: StDropDownVisualMode = StDropDownVisualMode.MENU_LIST;
   public isLoading: boolean = false;

   constructor(private _logger: StDemoLoggerService, private _cd: ChangeDetectorRef) {
      const menus: number = 6;
      this.active = Array.from(Array<boolean>(menus)).map(() => false);
      this.selectedValue = Array.from(Array<StDropDownMenuItem>(menus)).map(() => undefined);

      this.titles = ['Normal', 'With Scroll', 'Large Text', 'Group', 'Group With Scroll'];

      this.menus.push(this.generateNormal());
      this.menus.push(this.generateWithScroll());
      this.menus.push(this.generateLargeText());
      this.menus.push(this.generateGroup());
      this.menus.push(this.generateGroupWithScroll());
      this.menus.push(this.generateWithScroll());
   }

   changeActive(position: number): void {
      this.active[position] = !this.active[position];
      this._logger.log('click button and active is: ', this.active[position]);
   }

   onChange(selected: StDropDownMenuItem, position: number): void {
      this.active[position] = false;
      this.selectedValue[position] = selected;
      this._logger.log('select value and hide menu', JSON.stringify(selected));
   }

   getVisualMode(menuId: number): StDropDownVisualMode {
      return menuId % 2 ? StDropDownVisualMode.OPTION_LIST : StDropDownVisualMode.MENU_LIST;
   }

   onScrollAtBottom(): void {
      this.isLoading = true;
      setTimeout(() => {
         this.menus[1].push.apply(this.menus[5], this.generateWithScroll(this.menus[5].length));
         this.isLoading = false;
         this._cd.markForCheck();
      }, 2000);
   }

   private generateNormal(): StDropDownMenuItem[] {
      return [
         {
            label: 'Edit',
            value: 'edit',
            icon: 'icon-cogs'
         },
         {
            label: 'Rename',
            value: 'rename',
            icon: 'icon-cogs'
         },
         {
            label: 'Schedule',
            value: 'schedule',
            icon: 'icon-eye',
            topSeparator: true,
            bottomSeparator: true
         },
         {
            label: 'Security',
            value: 'security',
            icon: 'icon-lock',
            disabled: true
         },
         {
            label: 'Archived',
            value: 'archived',
            iconColor: 'gray',
            icon: 'icon-grid-2',
            textInfo: 'This is an optional text'
         },
         {
            label: 'Publish',
            value: 'published',
            iconColor: 'blue',
            icon: 'icon-cloud-upload',
            disabled: true
         },
         {
            label: 'province of birth',
            value: 'fk',
            iconColor: '#000000',
            icon: 'icon-arrow-up',
            extraIcon: 'icon-info',
            extraIconColor: '#8898a7',
            extraIconBubble: 'To connect this table you have to set “Province” as root',
            textInfo: 'This is an optional text'
         },
         {
            label: 'Delete',
            value: 'delete',
            iconColor: 'red',
            labelColor: 'red',
            icon: 'icon-trash',
            topSeparator: true
         }
      ];
   }

   private generateWithScroll(length: number = 0): StDropDownMenuItem[] {
      return Array.from(Array<StDropDownMenuItem>(20)).map((_value, i) => ({
         label: `Option ${length + i}`,
         value: `option-${length + i}`
      }));
   }

   private generateLargeText(): StDropDownMenuItem[] {
      return Array.from(Array<StDropDownMenuItem>(10)).map((_value, i) => ({
         label: i === 3 ? `Option ${i} with large text that not fit in button size` : `Option ${i}`,
         value: `option-${i}`
      }));
   }

   private generateGroup(): StDropDownMenuGroup[] {
      return [
         {
            title: 'Severity', items: [
               { label: 'Critical Error', value: 'critical' },
               { label: 'Warning', value: 'Warning' }
            ]
         },
         {
            title: 'Status', items: [
               { label: 'Active', value: 'active' },
               { label: 'Inactive', value: 'inactive' }
            ]
         }
      ];
   }

   private generateGroupWithScroll(): StDropDownMenuGroup[] {
      return [
         {
            title: 'Severity', items: [
               { label: 'Critical Error', value: 'critical' },
               { label: 'Warning', value: 'Warning' }
            ]
         },
         {
            title: 'Status', items: [
               { label: 'Active', value: 'active' },
               { label: 'Inactive', value: 'inactive' },
               { label: 'Paused', value: 'paused' },
               { label: 'Stopped', value: 'stopped' },
               { label: 'Running', value: 'running' },
               { label: 'Waiting', value: 'waiting' },
               { label: 'Delayed', value: 'delayed' },
               { label: 'Unknown', value: 'unknown' }
            ]
         }
      ];
   }
}
