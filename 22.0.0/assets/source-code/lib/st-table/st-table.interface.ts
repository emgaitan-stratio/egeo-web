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

export class StTableFilterIconClasses {
   selected: string;
   enabled: string;

   constructor() {
      this.selected = 'icon-facets-2';
      this.enabled = 'icon-arrow4_down';
   }
}

export class StTableIconClasses {
   filter: StTableFilterIconClasses;
   sort: {
      asc: string;
      desc: string;
   };

   constructor() {
      this.filter = new StTableFilterIconClasses();
      this.sort = {
         asc: 'icon-arrow-up',
         desc: 'icon-arrow-down'
      };
   }
}
