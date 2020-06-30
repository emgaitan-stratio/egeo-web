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
import { Component, Input, OnInit } from '@angular/core';

import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';

/**
 * @description {Component} [Bubble]
 *
 * This component displays a text inside a floating box
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-bubble [qaTag]="qaTag" [text]="text" [hidden]="hidden">
 *    </st-bubble>
 * ```
 */
@Component({
   selector: 'st-bubble',
   styleUrls: ['./st-bubble.component.scss'],
   templateUrl: './st-bubble.component.html'
})
export class StBubbleComponent {

   /** @Input {string} [text=] Text of the bubble */
   @Input() text: string;
   /** @input {boolean} [hidden=false] Show or hide the bubble */
   @Input() hidden: boolean = false;
   /** @Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis */
   @Input() offset: StPopOffset = { x: 0, y: 17 };
   /** @Input {boolean} [showArrow=true] when true, arrow icon is displayed    */
   @Input() showArrow?: boolean = true;
   /** @Input {boolean} [animation=true] when true, bubble is displayed with an animation  */
   @Input() animation?: boolean = true;
   /** @Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right  */
   @Input() openToLeft?: boolean = true;
   /** @Input {boolean} [small=false] when true, bubble is displayed with theme small  */
   @Input() small?: boolean = false;
   /** @Input {string} [minWidth=] min width for bubble  */
   @Input() minWidth?: string;
   /** @Input {string} [maxWidth=] max width for bubble  */
   @Input() maxWidth?: string;

   public placement: StPopPlacement = StPopPlacement.BOTTOM;

}
