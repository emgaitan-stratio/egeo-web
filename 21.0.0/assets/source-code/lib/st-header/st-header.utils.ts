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

import { StHeaderMenuOption } from './st-header.model';

export class StHeaderUtils {

   public static isRouteActive(option: StHeaderMenuOption, url: string): boolean {
      return option && url.indexOf(option.link) > -1;
   }

}
