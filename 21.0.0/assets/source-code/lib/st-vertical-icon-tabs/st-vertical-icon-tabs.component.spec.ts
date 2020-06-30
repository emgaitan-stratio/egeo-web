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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StVerticalIconTabsComponent } from './st-vertical-icon-tabs.component';
import { StIconTab } from './st-icon-tabs.model';

describe('StVerticalIconTabsComponent', () => {
   let component: StVerticalIconTabsComponent;
   let fixture: ComponentFixture<StVerticalIconTabsComponent>;
   const fakeOptions: StIconTab[] = [
      { id: 'tab1', text: 'tab 1', iconClass: 'icon-alarm'},
      { id: 'tab2', text: 'tab 2', iconClass: 'icon-camera' },
      { id: 'tab3', text: 'tab 3', iconClass: 'icon-heart' }
   ];

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StVerticalIconTabsComponent]
      })
      .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StVerticalIconTabsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   describe('when it is initialized', () => {

      it('only if option list has one option at least and if active tab is not defined, first option is activated', () => {
         spyOn(component.changeOption, 'emit');

         // without options
         component.options = [];
         component.activeOption = undefined;

         component.ngOnInit();

         expect(component.changeOption.emit).not.toHaveBeenCalled();

         // with options
         component.options = fakeOptions;
         component.activeOption = undefined;

         (<jasmine.Spy> component.changeOption.emit).calls.reset();
         component.ngOnInit();

         expect(component.changeOption.emit).toHaveBeenCalledWith(fakeOptions[0]);
      });

      it('if active option is defined, it will be used as the active option', () => {
         component.activeOption = fakeOptions[1];
         component.ngOnInit();

         expect(component.isActive(fakeOptions[1])).toBeTruthy();
      });
   });

   it('should be able to return if an option is active', () => {
      component.activeOption = fakeOptions[0];
      fixture.detectChanges();

      expect(component.isActive(fakeOptions[1])).toBeFalsy();
      expect(component.isActive(fakeOptions[0])).toBeTruthy();
   });

   describe('should be able to activate an option', () => {
      beforeEach(() => {
         spyOn(component.changeOption, 'emit');
      });

      it('when active option is changed, active option is updated', () => {
         component.activateOption(fakeOptions[1]);
         fixture.detectChanges();

         expect(component.changeOption.emit).toHaveBeenCalledWith(fakeOptions[1]);
      });

      it('when active option is changed, an event is emitted with the active option', () => {
         component.activateOption(fakeOptions[0]);
         fixture.detectChanges();

         expect(component.changeOption.emit).toHaveBeenCalledWith(fakeOptions[0]);
      });
   });
});
