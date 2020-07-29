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
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StTagComponent } from './st-tag.component';
import { StTagItem } from './st-tag.model';

describe('StTagComponent', () => {
   let component: StTagComponent;
   let fixture: ComponentFixture<StTagComponent>;

   const simpleTag: StTagItem = {
      id: 'simpleTag',
      text: 'Tag text'
   };

   const tagWithIcon: StTagItem = {
      id: 'complexTag',
      text: 'Tag title',
      icon: 'icon-lock'
   };

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StTagComponent],
         providers: [],
         schemas: [NO_ERRORS_SCHEMA]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StTagComponent);
      component = fixture.componentInstance;
      component.tag = simpleTag;
      fixture.detectChanges();
   });

   describe('If tag can be removed', () => {
      beforeEach(() => {
         component.removable = true;
         fixture.detectChanges();
      });

      it('When user clicks on the cross icon, an event is emitted', () => {
         spyOn(component.remove, 'emit');

         const removeButton = fixture.nativeElement.querySelector('.st-tag__remove-button');
         removeButton.click();

         expect(component.remove.emit).toHaveBeenCalledWith(component.tag);
      });
   });

   describe('If tag can not be removed', () => {
      beforeEach(() => {
         component.removable = false;
         fixture.detectChanges();
      });

      it('Cross icon is not displayed', () => {
         expect(fixture.nativeElement.querySelector('.st-tag__remove-button')).toBeNull();
      });
   });

   it('If tag has an icon, it is displayed before text', () => {
      component.tag = tagWithIcon;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-tag__icon.' +  component.tag.icon)).not.toBeNull();
   });

});
