(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-table-demo-st-table-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <div class=\"demo-layout\">\n         <p class=\"introduction\">Tables are structured grids of information that help users understand large amounts of\n            data.</p>\n         <span class=\"separator\"></span>\n         <h1 class=\"title\">Design and behaviour</h1>\n         <p class=\"paragraph\">When a user needs to understand, manipulate, or edit a group of information that is\n            text-based\n            and has the same content structure you use a Table component. Table’s main content can be of two main types:\n            Normal content tables and file system content. Depending on the type of table’s content some options will be\n            available when selecting one or more rows allowing the user to perform bulk options. As well, if 2 or more\n            items\n            are selected a row, a new row will appear under the header of the table allowing to select all the avaiable\n            items\n            on the table even if it has pagination. Tables can have a breadcrumbs row before the table header if the table\n            type allows folder / files navigation. In that case too a first folder with two dots allows the user go back to\n            the parent folder.\n         </p>\n         <h1 class=\"title\">Normal content table design and behaviour</h1>\n         <p class=\"paragraph\">They can have two rows of items before the table header.\n            On the first you can have a title on the top left (optional) and dropdown filters on the right (optional)\n            On second you can have a Search box (Optional) on the left, and toolbar icons (optional) on the right. You can\n            choose between an Add toolbar icon or a more explicit Call to Action button on the right. In case you have\n            toolbar\n            icons and a CTA, please, place your CTA as the latest element of the row.\n            When the user scrolls and reach the header of the table, this element will remain sticked to the main header\n            while\n            scrolling so the user always know what kind of data is seeing on the current table. On scroll up the subheader\n            will appear. To understand better this behaviour please interact with the following tables</p>\n\n         <h1 class=\"title\">Theme customization</h1>\n         <p class=\"paragraph\">You can customize some table styles using the following css variables</p>\n         <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\n      </div>\n\n      <h2 class=\"subtitle\">Selectable tables</h2>\n      <div class=\"row\">\n         <div class=\"col-sm-12 col-lg-12 col-xs-12\">\n            <st-table [fields]=\"smallTableFields\" [sortable]=\"false\" [selectableAll]=\"true\" [hasHoverMenu]=\"true\" (selectAll)=\"onSelectAll($event, 0)\">\n               <tbody>\n                  <tr st-table-row *ngFor=\"let userData of data; let index = index\" [selected]=\"selectedCheckboxes[0][index]\">\n                     <td st-table-cell class=\"clickable\" st-table-row-content>\n                        <st-checkbox class=\"st-table__checkbox\" [checked]=\"selectedCheckboxes[0][index]\"\n                            (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\n                        </st-checkbox>\n                        <label>{{userData.id}}</label>\n                     </td>\n                     <td st-table-cell st-table-row-content>\n                        <label>{{userData.name}}</label>\n                     </td>\n                     <td st-table-cell st-table-row-content>\n                        <label>{{userData.lastName}}</label>\n                     </td>\n                     <td st-table-row-hover class=\"st-table-hover\">\n                        <i class=\"icon icon-ellipsis\"></i>\n                     </td>\n                  </tr>\n               </tbody>\n            </st-table>\n         </div>\n      </div>\n\n      <h2 class=\"subtitle\">Sortable table</h2>\n      <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific\n         fields as sortable </p>\n      <st-table [fields]=\"fields\" [hasHoverMenu]=\"true\" [currentOrder]=\"currentOrder[0]\" (changeOrder)=\"onSortTable($event, 0)\">\n         <tbody>\n            <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\">\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.id}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.name}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.lastName}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.phone}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.company}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.completedProfile}}</label>\n               </td>\n\n               <td st-table-row-hover class=\"st-table-hover\">\n                  <i class=\"icon icon-ellipsis\"></i>\n               </td>\n            </tr>\n         </tbody>\n      </st-table>\n\n      <h2 class=\"subtitle\">Filterable and sortable table</h2>\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\n         fields as filterable </p>\n      <st-table [filterable]=\"true\"\n                [fields]=\"filterFields\"\n                [statusFilter]=\"statusFilter\"\n                [hasHoverMenu]=\"true\"\n                [currentOrder]=\"currentOrder[1]\"\n                (changeOrder)=\"onSortTable($event, 1)\"\n                (selectedFilters)=\"onSelectedFilters($event)\"\n      >\n         <tbody>\n            <tr st-table-row *ngFor=\"let userData of filterData; let index = index\">\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.id}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.name}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.lastName}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.phone}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.company}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.completedProfile}}</label>\n               </td>\n               <td st-table-row-hover class=\"st-table-hover\">\n                  <i class=\"icon icon-ellipsis\"></i>\n               </td>\n            </tr>\n         </tbody>\n      </st-table>\n\n      <h2 class=\"subtitle\">Filterable table with custom template</h2>\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\n         fields as filterable </p>\n      <ng-template #filterContent let-index=\"index\">\n         <div *ngIf=\"index === 0\">\n            <div>\n               <st-checkbox name=\"nameA\" value=\"1\">\n                  <span>Option A</span>\n               </st-checkbox>\n               <st-checkbox name=\"nameB\" value=\"2\">\n                  <span>Option B</span>\n               </st-checkbox>\n               <st-checkbox name=\"nameC\" value=\"3\">\n                  <span>Option C</span>\n               </st-checkbox>\n            </div>\n            <button class=\"button button-primary small st-table__popover-button\" (click)=\"onFilter(index); checkIcon(index)\">\n               <span>Apply</span>\n            </button>\n         </div>\n         <div *ngIf=\"index === 3\">\n            <div>\n               <span>Hellooo {{index}}</span>\n            </div>\n\n            <button class=\"button button-primary small st-table__popover-button\" (click)=\"onFilter(index); checkIcon(index)\">\n               <span>Apply</span>\n            </button>\n         </div>\n      </ng-template>\n      <st-table\n         [sortable]=\"false\"\n         [filterable]=\"true\"\n         [fields]=\"filterFields\"\n         [hasHoverMenu]=\"true\"\n         [templateContentFilter]=\"filterContent\"\n         [statusFilter]=\"statusFilter\">\n         <tbody>\n            <tr st-table-row *ngFor=\"let userData of filterData; let index = index\">\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.id}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.name}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.lastName}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.phone}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.company}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.completedProfile}}</label>\n               </td>\n               <td st-table-row-hover class=\"st-table-hover\">\n                  <i class=\"icon icon-ellipsis\"></i>\n               </td>\n            </tr>\n         </tbody>\n      </st-table>\n\n      <h2 class=\"subtitle\">Sortable and selectable table</h2>\n      <p class=\"paragraph\">Table can be configured as sortable and selectable simultaneously</p>\n      <st-table [fields]=\"fields\"\n                [currentOrder]=\"currentOrder[2]\"\n                (changeOrder)=\"onSortTable($event, 2)\"\n                [selectableAll]=\"true\"\n                [hasHoverMenu]=\"true\"\n          (selectAll)=\"onSelectAll($event, 0)\">\n         <tbody>\n            <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\" [selected]=\"selectedCheckboxes[0][index]\">\n               <td class=\"clickable\" st-table-cell st-table-row-content>\n                  <st-checkbox class=\"st-table__checkbox\" [checked]=\"selectedCheckboxes[0][index]\" (click)=\"$event.stopPropagation()\"\n                      (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\n                  </st-checkbox>\n                  <label>{{userData.id}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.name}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.lastName}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.phone}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.company}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.completedProfile}}</label>\n               </td>\n\n               <td st-table-row-hover class=\"st-table-hover\">\n                  <i class=\"icon icon-ellipsis\"></i>\n               </td>\n            </tr>\n         </tbody>\n      </st-table>\n\n\n      <h2 class=\"subtitle\">Table with fixed header</h2>\n      <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and specify\n         to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\n\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [fixedHeader]=\"true\" [hasHoverMenu]=\"false\" class=\"table--fixed-header\">\n         <tr st-table-row *ngFor=\"let userData of data\">\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.id}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.name}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.lastName}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.phone}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.company}}</label>\n            </td>\n            <td st-table-cell st-table-row-content>\n               <label>{{userData.completedProfile}}</label>\n            </td>\n         </tr>\n      </st-table>\n\n\n      <h2 class=\"subtitle\">Table without header</h2>\n      <st-table [fields]=\"fields\" [header]=\"false\" [hasHoverMenu]=\"true\">\n         <tbody>\n            <tr st-table-row *ngFor=\"let userData of data\">\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.id}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.name}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.lastName}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.phone}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.company}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.completedProfile}}</label>\n               </td>\n               <td st-table-row-hover class=\"st-table-hover\">\n                  <i class=\"icon icon-arrow2_right\"></i>\n               </td>\n            </tr>\n         </tbody>\n      </st-table>\n\n      <h2 class=\"subtitle\">Table with complex hover actions and the custom class 'separated rows'</h2>\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [hasHoverMenu]=\"true\" customClasses=\"separated-rows\" qaTag=\"table-qa-tag\">\n         <tbody>\n            <tr st-table-row *ngFor=\"let userData of data\">\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.id}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.name}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.lastName}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.phone}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.company}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.completedProfile}}</label>\n               </td>\n               <td st-table-row-hover class=\"st-table-hover\">\n                  <button class=\"button button-toolbar\"><i class=\"icon-circle-check\"></i></button>\n                  <button class=\"button button-toolbar\"><i class=\"icon-download\"></i></button>\n               </td>\n            </tr>\n         </tbody>\n      </st-table>\n\n      <h2 class=\"subtitle\">Table with special content (charts, images)</h2>\n      <st-table [fields]=\"fields\" [sortable]=\"false\"\n                [hasHoverMenu]=\"false\">\n         <tbody>\n            <tr st-table-row *ngFor=\"let userData of data\">\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.id}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.name}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.lastName}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <label>{{userData.phone}}</label>\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <img style=\"width: 50px;\" src=\"assets/images/stratio.png\">\n               </td>\n               <td st-table-cell st-table-row-content>\n                  <div style=\"width: 25px;  height: 25px;\">\n                     <svg viewBox=\"0 0 100 100\" style=\"display: block; width: 100%;\">\n                        <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"#eee\" stroke-width=\"1\" fill-opacity=\"0\"></path>\n                        <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"rgb(55,181,228)\" stroke-width=\"6\" fill-opacity=\"0\"\n                            style=\"stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 59.0832;\"></path>\n                     </svg>\n                  </div>\n               </td>\n            </tr>\n         </tbody>\n      </st-table>\n   </section>\n\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nst-table {\n  position: relative; }\n.st-table__popover-button {\n  margin-top: 20px;\n  width: 100%; }\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 1.143rem;\n  line-height: 4px;\n  vertical-align: top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  height: 150px; }\n.subtitle {\n  font-weight: 400;\n  font-size: 1.429rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.714rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding: 26px 0;\n  display: inline-block; }\n.paragraph {\n  font-weight: normal;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.571rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC10YWJsZS1kZW1vL3N0LXRhYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19pbmRleC5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fY29sb3JzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3JDRjtFQUNHLGtCQUFrQixFQUFBO0FBSWxCO0VBQ0csZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUlqQjtFQUNHLGVBQWU7RUFDZixtQkdEeUI7RUhFekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3RCO0VBQ0csaUJBQWlCLEVBQUE7QUFJakI7RUFDRyxhQUFhLEVBQUE7QUFJbkI7RUFDRyxnQkFBZ0I7RUFDaEIsbUJHaEJ5QjtFSGlCekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkdOMkI7RUhPM0Isc0JBQXNCO0VBQ3RCLGNFTWM7RUZMZCxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7QUFHeEI7RUFDRyxtQkFBbUI7RUFDbkIsbUJHN0J5QjtFSDhCekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkduQjJCO0VIb0IzQixzQkFBc0I7RUFDdEIsY0VOYztFRk9kLG9CQUFvQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbnN0LXRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5zdC10YWJsZV9fcG9wb3Zlci1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMTQzcmVtO1xuICBsaW5lLWhlaWdodDogNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5idXR0b24tdG9vbGJhciB7XG4gIG1hcmdpbi1yaWdodDogNnB4OyB9XG5cbi50YWJsZS0tZml4ZWQtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxNTBweDsgfVxuXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNDI5cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MTRyZW07XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMTExMTExO1xuICBwYWRkaW5nOiAyNnB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuXG4ucGFyYWdyYXBoIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjI4NnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTcxcmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzExMTExMTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4Jztcblxuc3QtdGFibGUge1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3QtdGFibGUge1xuICAgJl9fcG9wb3Zlci1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgfVxufVxuXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE2O1xuICAgbGluZS1oZWlnaHQ6IDRweDtcbiAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5idXR0b24tdG9vbGJhciB7XG4gICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnRhYmxlIHtcbiAgICYtLWZpeGVkLWhlYWRlciB7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgfVxufVxuXG4uc3VidGl0bGUge1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTIwO1xuICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQtMjQ7XG4gICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgY29sb3I6ICRuZXV0cmFsO1xuICAgcGFkZGluZzogMjZweCAwO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGFyYWdyYXBoIHtcbiAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcbiAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTIyO1xuICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgIGNvbG9yOiAkbmV1dHJhbDtcbiAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vLyBWQVJTOlxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBmb250LWZhbWlseTpcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xuXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcblxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxuXG4vLyBkZXByZWNhdGVkOlxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweCAoYmFzZSAxNilcblxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: StTableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTableDemoComponent", function() { return StTableDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
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



var StTableDemoComponent = /** @class */ (function () {
    function StTableDemoComponent(_cd) {
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-table-demo/st-table-demo.component.html',
            ts: 'demo/st-table-demo/st-table-demo.component.ts',
            component: 'lib/st-table/st-table.component.ts'
        };
        this.smallTableFields = [
            { id: 'id', label: 'Id' },
            { id: 'name', label: 'Name' },
            { id: 'lastName', label: 'Last Name' }
        ];
        this.fields = [
            { id: 'id', label: 'Id' },
            { id: 'name', label: 'Name' },
            { id: 'lastName', label: 'Last Name' },
            { id: 'phone', label: 'Phone' },
            { id: 'company', label: 'Company' },
            { id: 'completedProfile', label: 'Completed profile' }
        ];
        this.filterFields = [
            {
                id: 'id', label: 'Id', filters: {
                    filterConfig: [
                        {
                            id: '0',
                            name: 'López'
                        },
                        {
                            id: '1',
                            name: 'Lara'
                        }
                    ],
                    title: 'Filter By',
                    buttonText: 'Apply'
                }
            },
            { id: 'name', label: 'Name' },
            {
                id: 'lastName',
                label: 'Last Name'
            },
            {
                id: 'phone',
                label: 'Phone',
                filters: {
                    filterConfig: [
                        {
                            id: '0',
                            name: 60052520145
                        },
                        {
                            id: '1',
                            name: 600456520145
                        },
                        {
                            id: '2',
                            name: 6005276845
                        }
                    ],
                    showSettingBtn: true,
                    title: 'Filter by',
                    buttonText: 'Apply'
                }
            },
            { id: 'company', label: 'Company' },
            { id: 'completedProfile', label: 'Completed profile' }
        ];
        this.cssProperties = [
            {
                name: '--egeo-st-table__header--font-size',
                description: 'Header font size',
                default: '$egeo-font-size-12'
            },
            {
                name: '--egeo-st-table__header--font-weight',
                description: 'Header font weight',
                default: '600'
            },
            {
                name: '--egeo-st-table__header--text-transform',
                description: 'Header text transform',
                default: 'initial'
            },
            {
                name: '--egeo-st-table__header--letter-spacing',
                description: 'Header letter spacing',
                default: 'normal'
            },
            {
                name: '--egeo-st-table__header--text-align',
                description: 'Header text align',
                default: 'left'
            },
            {
                name: '--egeo-st-table__header--border-bottom',
                description: 'Header border bottom color',
                default: '$space-50'
            },
            {
                name: '--egeo-st-table__row--font-size',
                description: 'Row font size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-table__row--hover--bg-color',
                description: 'Row background color on hover',
                default: '$action-10'
            },
            {
                name: '--egeo-st-table__row--border-bottom',
                description: 'Row border bottom color',
                default: '$action-10'
            },
            {
                name: '--egeo-st-table__row--selected--bg-color',
                description: 'Selected row background color',
                default: '$space-5'
            },
            {
                name: '--egeo-st-table__cell--padding',
                description: 'Cell padding',
                default: '9px 20px 9px 20px'
            },
            {
                name: '--egeo-st-table__hover-menu--padding',
                description: 'Hover menu padding',
                default: '0 25px 0 20px'
            },
            {
                name: '--egeo-st-table__cell--white-space',
                description: 'Cell white space',
                default: 'normal'
            }
        ];
        this.header = true;
        this.currentOrder = [];
        this.data = [
            {
                id: '4545-df56-s341',
                name: 'Antonio',
                lastName: 'López',
                phone: 60052520145,
                company: 'Stratio',
                completedProfile: '100%'
            },
            {
                id: '4545-df56-s342',
                name: 'Marina',
                lastName: 'Lara',
                phone: 600456520145,
                company: 'Stratio',
                completedProfile: '20%'
            },
            {
                id: '4545-df56-s343',
                name: 'Álvaro',
                lastName: 'García',
                phone: 60052320145,
                company: 'Stratio',
                completedProfile: '10%'
            },
            {
                id: '4545-df56-s344',
                name: 'Marina',
                lastName: 'González',
                phone: 600455640145,
                company: 'Stratio',
                completedProfile: '50%'
            }, {
                id: '4545-df56-s345',
                name: 'Pepe',
                lastName: 'Guerrero',
                phone: 6005276845,
                company: 'Stratio',
                completedProfile: '80%'
            },
            {
                id: '4545-df56-s346',
                name: 'María',
                lastName: 'Rodríguez',
                phone: 60065620145,
                company: 'Stratio',
                completedProfile: '70%'
            }
        ];
        this.selectedCheckboxes = [[], []];
        this.sortedData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data);
        this.filterData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data);
    }
    StTableDemoComponent.prototype.ngOnInit = function () {
        this.statusFilter = new Array(this.fields.length);
        this.statusFilter.fill(false);
    };
    StTableDemoComponent.prototype.checkIcon = function (index) {
        this.statusFilter[index] = !this.statusFilter[index];
        this._cd.markForCheck();
    };
    // Selectable tables
    StTableDemoComponent.prototype.onSelectRow = function (event, rowIndex, selected) {
        selected[rowIndex] = event.checked;
    };
    StTableDemoComponent.prototype.onSelectAll = function (selected, tablePosition) {
        this.selectedCheckboxes[tablePosition] = [];
        for (var i = 0; i < this.data.length; ++i) {
            this.selectedCheckboxes[tablePosition].push(selected);
        }
    };
    // Sortable tables
    StTableDemoComponent.prototype.onSortTable = function (order, tablePosition) {
        this.currentOrder[tablePosition] = order;
        var reverseConst = order.type === _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["ORDER_TYPE"].ASC ? 1 : -1;
        this.sortedData = __spread(this.data).sort(function (a, b) {
            return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
        });
        this.filterData = __spread(this.data).sort(function (a, b) {
            return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
        });
    };
    StTableDemoComponent.prototype.onSelectedFilters = function (event) {
        var _this = this;
        this.statusFilter = [];
        if (event.length > 0) {
            var filterElement_1 = [];
            event.map(function (filter) {
                var filterPosition = _this.filterFields.findIndex(function (_field) { return _field.id === filter.id; });
                _this.statusFilter[filterPosition] = true;
                filterElement_1.push([].concat.apply([], filter.filters.filterConfig.map(function (config) {
                    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["filter"])(_this.data, function (user) {
                        return user[filter.id] === config.name;
                    });
                })));
            });
            this.filterData = lodash__WEBPACK_IMPORTED_MODULE_2__["intersectionBy"].apply(void 0, __spread(filterElement_1, ['id']));
        }
        else {
            this.filterData = this.data;
        }
        this._cd.markForCheck();
    };
    StTableDemoComponent.prototype.onFilter = function (index) {
        // do stuff to filter table
    };
    StTableDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StTableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-table-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-table-demo.component.scss */ "./src/app/demos/st-table-demo/st-table-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StTableDemoComponent);
    return StTableDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.module.ts ***!
  \*************************************************************/
/*! exports provided: StTableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTableDemoModule", function() { return StTableDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-table-demo.component */ "./src/app/demos/st-table-demo/st-table-demo.component.ts");
/* harmony import */ var _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/css-property-table/css-property-table.module */ "./src/app/shared/css-property-table/css-property-table.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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





var StTableDemoModule = /** @class */ (function () {
    function StTableDemoModule() {
    }
    StTableDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StCheckboxModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StTableDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StToggleButtonsModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_4__["CssPropertyTableModule"]
            ],
            declarations: [_st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StTableDemoComponent"]]
        })
    ], StTableDemoModule);
    return StTableDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-table-demo-st-table-demo-module.js.map