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
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
   selector: 'st-zero-page-demo',
   templateUrl: 'st-zero-page-demo.component.html',
   styleUrls: ['st-zero-page-demo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StZeroPageDemoComponent {
   public configDoc: any = {
      html: 'demo/st-zero-page-demo/st-zero-page-demo.component.html',
      ts: 'demo/st-zero-page-demo/st-zero-page-demo.component.ts',
      component: 'lib/st-zero-page/st-zero-page.component.ts'
   };
}
