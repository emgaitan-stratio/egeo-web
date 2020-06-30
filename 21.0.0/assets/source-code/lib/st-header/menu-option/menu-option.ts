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
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   ElementRef,
   EventEmitter,
   HostBinding,
   HostListener,
   Input,
   OnDestroy,
   Output,
   ViewChild
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { StHeaderMenuItem, StHeaderMenuOption, StHeaderSelection } from '../st-header.model';
import { StDropDownVisualMode } from './../../st-dropdown-menu/st-dropdown-menu.interface';
import { StHeaderUtils } from '../st-header.utils';

@Component({
   selector: 'st-header-menu-option',
   templateUrl: './menu-option.html',
   styleUrls: ['./menu-option.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderMenuOptionComponent implements OnDestroy {

   @Input() showMenuName: boolean;

   @Output() selectMenu: EventEmitter<StHeaderSelection> = new EventEmitter<StHeaderSelection>();

   @ViewChild('menu', { static: false }) menu: ElementRef;

   @HostBinding('class.active')
   public get isCurrentRoute(): boolean {
      return StHeaderUtils.isRouteActive(this._option, this.router.url);
   }

   public isActive: boolean;
   public visualMode: StDropDownVisualMode = StDropDownVisualMode.MENU_LIST;
   public hasSubmenu: boolean;
   public qaId: string;
   public submenuList: StHeaderMenuItem[];

   private _subscription: Subscription;
   private _actualPath: string = '';
   private _option: StHeaderMenuOption;

   @Input()
   get option(): StHeaderMenuOption {
      return this._option;
   }

   set option(_option: StHeaderMenuOption) {
      this._option = _option;
      this.hasSubmenu = _option.subMenus && _option.subMenus.length > 0;
      this.qaId = this._getQaId();
      this.submenuList = this._getSubmenuList();
      this.cd.markForCheck();
   }

   constructor(private elementRef: ElementRef, private router: Router, private cd: ChangeDetectorRef) {
      this._subscription = this.router.events.subscribe((event) => this._onRouterEvent(event));
      this._actualPath = this.router.url;
   }

   public ngOnDestroy(): void {
      this.isActive = false;
      this._subscription.unsubscribe();
   }

   public onMenuClick(): void {
      if (this.hasSubmenu) {
         this.isActive = !this.isActive;
         this.cd.markForCheck();
      } else {
         this.selectMenu.emit({
            link: this._option.link,
            external: this._option.external,
            openInNewPage: this._option.openInNewPage
         });
      }
   }

   public changeOption(selected: StHeaderMenuItem): void {
      this.isActive = false;
      this.cd.markForCheck();
      this.selectMenu.emit(selected.selection);
   }

   @HostListener('document:click', ['$event'])
   onClickOutside(event: Event): void {
      const isMyComponent: boolean = this.isActive && this.menu.nativeElement.contains(event.target);
      if (!isMyComponent && this.isActive) {
         this.isActive = false;
         this.cd.markForCheck();
      }
   }

   private _onRouterEvent(event: any): void {
      if (event instanceof NavigationEnd) {
         this._actualPath = event.urlAfterRedirects;
         this.submenuList = this._getSubmenuList();
         this.cd.markForCheck();
      }
   }


   private _getQaId(): string {
      if (!this._option) {
         return null;
      }
      let id: string = `${this.elementRef.nativeElement.id}-${this._option.label.toLowerCase()}`;
      id.replace(/\s+/ig, '_');
      return id;
   }


   private _getSubmenuList(): StHeaderMenuItem[] {
      return this._option && this.hasSubmenu ? this._option.subMenus.map(_ => ({
         label: _.label,
         value: _.link,
         selected: this._actualPath === _.link,
         selection: {
            link: _.link,
            external: _.external,
            openInNewPage: _.openInNewPage
         } as StHeaderSelection
      })) : [];
   }


}
