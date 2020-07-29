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

import { ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { StTagItem } from './st-tag.model';

/**
 * @description {Component} [Tag]
 *
 * The tag component allows to display small texts.
 *
 * @model
 *
 *   [StTagItem] {./st-tag.model.ts#StTagItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 *  <st-tag [tag]="simpleTag" class="small" [removable]="true"></st-tag>
 *
 * ```
 *
 */
@Component({
   selector: 'st-tag',
   templateUrl: 'st-tag.component.template.html',
   styleUrls: ['st-tag.component.scss'],
   host: { 'class': 'st-tag' }
})

export class StTagComponent {
   /** @Input {StTagItem} [tag=] Item that contains the tag info  */
   @Input() tag: StTagItem;
   /** @Input {boolean} [removable=] Boolean to display or not the cross icon to remove tag */
   @HostBinding('class.st-tag--removable')
   @Input() removable: boolean;
   /** @Input {boolean} [clickable=true] Boolean to set tag as clicklable or not */
   @HostBinding('class.st-tag--clickable')
   @Input() clickable: boolean = true;
   /** @Output {StTagItem} [remove=] Even emitted when cross icon is clicked  */
   @Output() remove: EventEmitter<StTagItem> = new EventEmitter<StTagItem>();
   /** @Output {StTagItem} [click=] Event emitted when tag is clicked */
   @Output() click: EventEmitter<StTagItem> = new EventEmitter<StTagItem>();

   showBubble: boolean;

   constructor(private _cd: ChangeDetectorRef) {

   }

   onRemove(): void {
      this.remove.emit(this.tag);
   }

   onClick(filter: StTagItem): void {
      this.click.emit(filter);
   }

   onChangeBubbleVisibility(visible: boolean): void {
      this.showBubble = visible;
      this._cd.markForCheck();
   }

}
