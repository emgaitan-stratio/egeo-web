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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { StBubbleOnEllipsisComponent } from './st-bubble-on-ellipsis.component';
import { StBubbleComponent, StBubbleModule } from '..';
import { CommonModule } from '@angular/common';


const textTrigger = 'Text that trigger bubble';

@Component({
   template: '<div [style.max-width]="containerMaxWidth"><st-bubble-on-ellipsis  [text]="text" [openToLeft]="openToLeft" [lines]="lines">     ' +
      '{{text}}</st-bubble-on-ellipsis></div>'
})
class TestStBubbleOnEllipsisComponent {
   @Input() text: string = textTrigger;
   @Input() containerMaxWidth: string = '';
   @Input() openToLeft: boolean;
   @Input() lines: number;
}

let component: TestStBubbleOnEllipsisComponent;
let fixture: ComponentFixture<TestStBubbleOnEllipsisComponent>;

describe('StBubbleOnEllipsisComponent', () => {

   beforeEach(async(() => {
      TestBed
         .configureTestingModule({
            imports: [CommonModule, StBubbleModule],
            declarations: [
               StBubbleOnEllipsisComponent,
               TestStBubbleOnEllipsisComponent
            ]
         })
         // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StBubbleOnEllipsisComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StBubbleComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TestStBubbleOnEllipsisComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
   });

   describe('When ellipsis has to be displayed in the first line', () => {

      describe('When user puts the mouse over the content', () => {
         it('If its width is longer than the container with, bubble is displayed', (done) => {
            component.containerMaxWidth = '20px';
            fixture.detectChanges();

            fixture.nativeElement.querySelector('.bubble-trigger').dispatchEvent(new Event('mouseenter'));
            fixture.detectChanges();

            fixture.whenStable().then(() => {
               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('st-bubble .content').style.visibility).toEqual('visible');
               done();
            });

         });

         it('If its width is smaller than the container with, bubble is not displayed', (done) => {
            component.containerMaxWidth = '500px';
            component.text = 'A';
            fixture.detectChanges();

            fixture.nativeElement.querySelector('.bubble-trigger').dispatchEvent(new Event('mouseenter'));
            fixture.detectChanges();

            fixture.whenStable().then(() => {
               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('st-bubble .content').style.visibility).toEqual('hidden');
               done();
            });
         });
      });
   });

   describe('When ellipsis has to be displayed in different line than the first one', () => {
      beforeEach(() => {
         component.lines = 2;
         component.containerMaxWidth = '100px';
         component.text = 'This is a long text and we want to display it with ellipsis only if it takes up more than two lines';
         fixture.detectChanges();
      });

      it('If text takes up more the specified lines, bubble is displayed', (done) => {
         fixture.nativeElement.querySelector('.bubble-trigger').dispatchEvent(new Event('mouseenter'));
         fixture.detectChanges();

         fixture.whenStable().then(() => {
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('st-bubble .content').style.visibility).toEqual('visible');
            done();
         });

      });

      it('If text does not take up the specified lines, bubble is not displayed', (done) => {
         component.lines = 8;
         fixture.detectChanges();

         fixture.nativeElement.querySelector('.bubble-trigger').dispatchEvent(new Event('mouseenter'));
         fixture.detectChanges();

         fixture.whenStable().then(() => {
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('st-bubble .content').style.visibility).toEqual('hidden');
            done();
         });

      });
   });

   it('A class is added to bubble if it is open to left', () => {
      component.openToLeft = true;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.bubble').classList).toContain('bubble--open-to-left');
   });
});
