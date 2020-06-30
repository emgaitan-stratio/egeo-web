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
import {
   AfterViewInit,
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   ElementRef,
   EventEmitter,
   HostListener,
   Input,
   Output,
   ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

import { StHeaderMenuOption, StHeaderSelection } from './st-header.model';
import { StWindowRefService } from '../utils/window-service';


/**
 * @description {Component} [Header]
 *
 * The header component is a main component of an application.
 * This component must be on top and scroll with page, when scroll is in a calculated position,
 * the header shrinks and fix to top.
 *
 * @model
 *
 *   [Header menu options] {./st-header.model.ts#StHeaderMenuOption}
 *   [Submenu options] {./st-header.model.ts#StHeaderSubMenuOption}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-header [menu]="headerMenuSchema" id="header">
 *     <div class="st-header-logo">
 *        <!-- Logo as svg, image, etc. -->
 *     </div>
 *     <div class="st-header-user-menu">
 *        <!-- Right header menu, with user menu, notifications, etc -->
 *     </div>
 *
 *  </st-header>
 * ```
 */
@Component({
   selector: 'st-header',
   templateUrl: './st-header.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderComponent implements AfterViewInit {

   /** @Input {StHeaderMenuOption[]} [menu] Array with menu option to show */
   @Input() menu: StHeaderMenuOption[] = [];
   /** @Input {boolean} [navigateByDefault] True if we want menu to manage navigation, false if navigation will be managed from the outside */
   @Input() navigateByDefault: boolean = true;

   /** @Output {StHeaderSelection} [selectMenu] Notify any menu option selection */
   @Output() selectMenu: EventEmitter<StHeaderSelection> = new EventEmitter<StHeaderSelection>();

   @ViewChild('headerDivElement', { static: false }) headerDivElement: ElementRef;
   @ViewChild('headerFixPart', { static: false }) headerFixPart: ElementRef;
   @ViewChild('userMenuContainerElement', { static: true }) userMenuContainer: ElementRef;

   public showMenuNames: boolean = true;

   private _headerSize: number = 0;

   constructor(
      private _router: Router,
      private _windowServiceRef: StWindowRefService,
      private _el: ElementRef,
      private _cd: ChangeDetectorRef
   ) { }

   public ngAfterViewInit(): void {
      this._headerSize = this.headerFixPart.nativeElement.getBoundingClientRect().width + this.userMenuElementWidth + 20;
      setTimeout(() => {
         this.checkMenuLabelVisibility();
         this._cd.markForCheck();
      });
   }

   @HostListener('window:resize', [])
   onResize(): void {
      this.checkMenuLabelVisibility();
      this._cd.markForCheck();
   }

   public get id(): string {
      return this._el.nativeElement.id || 'st-header';
   }

   public onSelectMenu(selected: StHeaderSelection): void {
      if (this.navigateByDefault) {
         if (selected.external) {
            this._windowServiceRef.nativeWindow.open(selected.link, selected.openInNewPage ? '_blank' : '_self');
         } else {
            this._router.navigate([selected.link]);
         }
      }
      this.selectMenu.emit(selected);
   }

   public get menuContainerId(): string {
      return `${this.id}-menu`;
   }

   public get userMenuElementWidth(): number {
      const userMenuContainer: HTMLElement = this.userMenuContainer.nativeElement;

      if (userMenuContainer.children && userMenuContainer.children.length > 0) {
         return userMenuContainer.children[0].getBoundingClientRect().width;
      } else {
         return userMenuContainer.getBoundingClientRect().width;
      }
   }

   private checkMenuLabelVisibility(): void {
      const windowSize: number = this._windowServiceRef.nativeWindow.innerWidth;
      const canShowMenuNames = this._headerSize <= windowSize;
      if (this.showMenuNames !== canShowMenuNames) {
         this.showMenuNames = canShowMenuNames;
         this._cd.markForCheck();
      }
   }
}
