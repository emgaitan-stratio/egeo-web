(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-table-demo-st-table-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html":
/*!***********************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n      <div class=\"demo-layout\">\r\n         <p class=\"introduction\">Tables are structured grids of information that help users understand large amounts of\r\n            data.</p>\r\n         <span class=\"separator\"></span>\r\n         <h1 class=\"title\">Design and behaviour</h1>\r\n         <p class=\"paragraph\">When a user needs to understand, manipulate, or edit a group of information that is\r\n            text-based\r\n            and has the same content structure you use a Table component. Table’s main content can be of two main types:\r\n            Normal content tables and file system content. Depending on the type of table’s content some options will be\r\n            available when selecting one or more rows allowing the user to perform bulk options. As well, if 2 or more\r\n            items\r\n            are selected a row, a new row will appear under the header of the table allowing to select all the avaiable\r\n            items\r\n            on the table even if it has pagination. Tables can have a breadcrumbs row before the table header if the\r\n            table\r\n            type allows folder / files navigation. In that case too a first folder with two dots allows the user go back\r\n            to\r\n            the parent folder.\r\n         </p>\r\n         <h1 class=\"title\">Normal content table design and behaviour</h1>\r\n         <p class=\"paragraph\">They can have two rows of items before the table header.\r\n            On the first you can have a title on the top left (optional) and dropdown filters on the right (optional)\r\n            On second you can have a Search box (Optional) on the left, and toolbar icons (optional) on the right. You\r\n            can\r\n            choose between an Add toolbar icon or a more explicit Call to Action button on the right. In case you have\r\n            toolbar\r\n            icons and a CTA, please, place your CTA as the latest element of the row.\r\n            When the user scrolls and reach the header of the table, this element will remain sticked to the main header\r\n            while\r\n            scrolling so the user always know what kind of data is seeing on the current table. On scroll up the\r\n            subheader\r\n            will appear. To understand better this behaviour please interact with the following tables</p>\r\n\r\n         <h1 class=\"title\">Theme customization</h1>\r\n         <p class=\"paragraph\">You can customize some table styles using the following css variables</p>\r\n         <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\r\n      </div>\r\n\r\n      <h2 class=\"subtitle\">Selectable tables</h2>\r\n      <div class=\"row\">\r\n         <div class=\"col-sm-12 col-lg-12 col-xs-12\">\r\n            <st-table [fields]=\"smallTableFields\" [sortable]=\"false\" [selectableAll]=\"true\" [hasHoverMenu]=\"true\"\r\n                      (selectAll)=\"onSelectAll($event, 0)\">\r\n               <tbody>\r\n               <tr st-table-row *ngFor=\"let userData of data; let index = index\"\r\n                   [selected]=\"selectedCheckboxes[0][index]\">\r\n                  <td st-table-cell class=\"clickable\" st-table-row-content>\r\n                     <st-checkbox class=\"st-table__checkbox\" [checked]=\"selectedCheckboxes[0][index]\"\r\n                                  (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n                     </st-checkbox>\r\n                     <label>{{userData.id}}</label>\r\n                  </td>\r\n                  <td st-table-cell st-table-row-content>\r\n                     <label>{{userData.name}}</label>\r\n                  </td>\r\n                  <td st-table-cell st-table-row-content>\r\n                     <label>{{userData.lastName}}</label>\r\n                  </td>\r\n                  <td st-table-row-hover class=\"st-table-hover\">\r\n                     <i class=\"icon icon-ellipsis\"></i>\r\n                  </td>\r\n               </tr>\r\n               </tbody>\r\n            </st-table>\r\n         </div>\r\n      </div>\r\n\r\n      <h2 class=\"subtitle\">Sortable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific\r\n         fields as sortable </p>\r\n      <st-table [fields]=\"fields\" [hasHoverMenu]=\"true\" [currentOrder]=\"currentOrder[0]\"\r\n                (changeOrder)=\"onSortTable($event, 0)\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Filterable and sortable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\r\n         fields as filterable </p>\r\n      <st-table [filterable]=\"true\"\r\n                [fields]=\"filterFields\"\r\n                [statusFilter]=\"statusFilter[0]\"\r\n                [hasHoverMenu]=\"true\"\r\n                [currentOrder]=\"currentOrder[1]\"\r\n                (changeOrder)=\"onSortTable($event, 1)\"\r\n                (selectFilters)=\"onSelectedFilters($event, 0)\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of filterData; let index = index\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Filterable table with custom template</h2>\r\n      <p class=\"paragraph\">Column filters can be configured with custom templates which are managed from outside.\r\n         If you want to use your own template, remember to add attribute <b>popover-filter-submit</b> to the submit button</p>\r\n      <ng-template #filterContent let-index=\"index\">\r\n\r\n            <div class=\"custom-filter-container\">\r\n               <st-input [formControl]=\"index === 0 ? idFilterFormControl : (index === 2 ? lastNameFilterFormControl : phoneFilterFormControl)\"\r\n                         (click)=\"$event.stopPropagation()\">\r\n               </st-input>\r\n\r\n               <button class=\"button button-primary small st-table__popover-button\"\r\n                       (click)=\"onCustomFilter()\" popover-filter-submit>\r\n                  <span>Apply</span>\r\n               </button>\r\n            </div>\r\n      </ng-template>\r\n      <st-table\r\n         [sortable]=\"false\"\r\n         [filterable]=\"true\"\r\n         [fields]=\"filterFields\"\r\n         [hasHoverMenu]=\"true\"\r\n         [templateContentFilter]=\"filterContent\"\r\n         [statusFilter]=\"statusFilter[1]\"\r\n         (selectFilters)=\"onSelectedFilters($event, 1)\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of customFilterData; let index = index\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with sticky hover menu</h2>\r\n      <p class=\"paragraph\">Table can be configured as hove menu always visible using input \"stickyHoverMenu\" with value\r\n         \"true\". </p>\r\n      <st-table [fields]=\"fields\" [hasHoverMenu]=\"true\" [sortable]=\"false\" [filterable]=\"false\" [stickyHoverMenu]=\"true\"\r\n                style=\"display: block; max-width: 50%; overflow: auto\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of data; let index = index\"\r\n             (mouseleave)=\"activeMenu = -1\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-ellipsis\" (click)=\"activeMenu = index\"></i>\r\n               <st-dropdown-menu\r\n                  class=\"row-menu\"\r\n                  [items]=\"rowActions\"\r\n                  [active]=\"activeMenu === index\"\r\n                  [visualMode]=\"1\">\r\n               </st-dropdown-menu>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Sortable and selectable table</h2>\r\n      <p class=\"paragraph\">Table can be configured as sortable and selectable simultaneously</p>\r\n      <st-table [fields]=\"fields\"\r\n                [currentOrder]=\"currentOrder[2]\"\r\n                (changeOrder)=\"onSortTable($event, 2)\"\r\n                [selectableAll]=\"true\"\r\n                [hasHoverMenu]=\"true\"\r\n                (selectAll)=\"onSelectAll($event, 0)\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of sortedData; let index = index\"\r\n             [selected]=\"selectedCheckboxes[0][index]\">\r\n            <td class=\"clickable\" st-table-cell st-table-row-content>\r\n               <st-checkbox class=\"st-table__checkbox\" [checked]=\"selectedCheckboxes[0][index]\"\r\n                            (click)=\"$event.stopPropagation()\"\r\n                            (change)=\"onSelectRow($event, index, selectedCheckboxes[0])\">\r\n               </st-checkbox>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n\r\n      <h2 class=\"subtitle\">Table with fixed header</h2>\r\n      <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and specify\r\n         to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\r\n\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [fixedHeader]=\"true\" [hasHoverMenu]=\"true\"\r\n                class=\"table--fixed-header\">\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with fixed header and sticky hover menu</h2>\r\n\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [fixedHeader]=\"true\" [stickyHoverMenu]=\"true\" [hasHoverMenu]=\"true\"\r\n                class=\"table--fixed-header\"\r\n                style=\"max-width: 50%\">\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-ellipsis\"></i>\r\n            </td>\r\n         </tr>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table without header</h2>\r\n      <st-table [fields]=\"fields\" [header]=\"false\" [hasHoverMenu]=\"true\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <i class=\"icon icon-arrow2_right\"></i>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with complex hover actions and the custom class 'separated rows'</h2>\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\" [hasHoverMenu]=\"true\" customClasses=\"separated-rows\"\r\n                qaTag=\"table-qa-tag\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.company}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.completedProfile}}</label>\r\n            </td>\r\n            <td st-table-row-hover class=\"st-table-hover\">\r\n               <button class=\"button button-toolbar\"><i class=\"icon-circle-check\"></i></button>\r\n               <button class=\"button button-toolbar\"><i class=\"icon-download\"></i></button>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n\r\n      <h2 class=\"subtitle\">Table with special content (charts, images)</h2>\r\n      <st-table [fields]=\"fields\" [sortable]=\"false\"\r\n                [hasHoverMenu]=\"false\">\r\n         <tbody>\r\n         <tr st-table-row *ngFor=\"let userData of data\">\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.id}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.name}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.lastName}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <label>{{userData.phone}}</label>\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <img style=\"width: 50px;\" src=\"assets/images/stratio.png\">\r\n            </td>\r\n            <td st-table-cell st-table-row-content>\r\n               <div style=\"width: 25px;  height: 25px;\">\r\n                  <svg viewBox=\"0 0 100 100\" style=\"display: block; width: 100%;\">\r\n                     <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"#eee\" stroke-width=\"1\"\r\n                           fill-opacity=\"0\"></path>\r\n                     <path d=\"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94\" stroke=\"rgb(55,181,228)\"\r\n                           stroke-width=\"6\" fill-opacity=\"0\"\r\n                           style=\"stroke-dasharray: 295.416, 295.416; stroke-dashoffset: 59.0832;\"></path>\r\n                  </svg>\r\n               </div>\r\n            </td>\r\n         </tr>\r\n         </tbody>\r\n      </st-table>\r\n   </section>\r\n\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-table-demo/st-table-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-table-demo/st-table-demo.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nst-table {\n  position: relative; }\n.st-table__popover-button {\n  margin-top: 20px;\n  width: 100%; }\n.row-menu {\n  position: absolute;\n  right: 24px;\n  min-height: 96px;\n  top: 52px; }\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 1.143rem;\n  line-height: 20px;\n  vertical-align: middle; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  height: 150px; }\n.subtitle {\n  font-weight: 400;\n  font-size: 1.429rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.714rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding: 26px 0;\n  display: inline-block; }\n.paragraph {\n  font-weight: normal;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.571rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding-bottom: 20px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtdGFibGUtZGVtb1xcc3QtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2NvbG9ycy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC10YWJsZS1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3JDRjtFQUNHLGtCQUFrQixFQUFBO0FBSWxCO0VBQ0csZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUlqQjtFQUNHLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQTtBQUdaO0VBQ0csZUFBZTtFQUNmLG1CR1J5QjtFSFN6QixpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7QUFHekI7RUFDRyxpQkFBaUIsRUFBQTtBQUlqQjtFQUNHLGFBQWEsRUFBQTtBQUluQjtFQUNHLGdCQUFnQjtFQUNoQixtQkd2QnlCO0VId0J6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCR2IyQjtFSGMzQixzQkFBc0I7RUFDdEIsY0VEYztFRkVkLGVBQWU7RUFDZixxQkFBcUIsRUFBQTtBQUd4QjtFQUNHLG1CQUFtQjtFQUNuQixtQkdwQ3lCO0VIcUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCRzFCMkI7RUgyQjNCLHNCQUFzQjtFQUN0QixjRWJjO0VGY2Qsb0JBQW9CLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFibGUtZGVtby9zdC10YWJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuc3QtdGFibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnN0LXRhYmxlX19wb3BvdmVyLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5yb3ctbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0cHg7XG4gIG1pbi1oZWlnaHQ6IDk2cHg7XG4gIHRvcDogNTJweDsgfVxuXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMTQzcmVtO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuXG4uYnV0dG9uLXRvb2xiYXIge1xuICBtYXJnaW4tcmlnaHQ6IDZweDsgfVxuXG4udGFibGUtLWZpeGVkLWhlYWRlciB7XG4gIGhlaWdodDogMTUwcHg7IH1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjQyOXJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE0cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzExMTExMTtcbiAgcGFkZGluZzogMjZweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cblxuLnBhcmFncmFwaCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS4yODZyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU3MXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xyXG5cclxuc3QtdGFibGUge1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdC10YWJsZSB7XHJcbiAgICZfX3BvcG92ZXItYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxufVxyXG5cclxuLnJvdy1tZW51IHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICByaWdodDogMjRweDtcclxuICAgbWluLWhlaWdodDogOTZweDtcclxuICAgdG9wOiA1MnB4O1xyXG59XHJcblxyXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xNjtcclxuICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5idXR0b24tdG9vbGJhciB7XHJcbiAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAmLS1maXhlZC1oZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICB9XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTIwO1xyXG4gICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQtMjQ7XHJcbiAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgIGNvbG9yOiAkbmV1dHJhbDtcclxuICAgcGFkZGluZzogMjZweCAwO1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5wYXJhZ3JhcGgge1xyXG4gICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTIyO1xyXG4gICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICBjb2xvcjogJG5ldXRyYWw7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdCNUU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uOiAjMDc3NkRGICFkZWZhdWx0O1xuJGFjdGlvbi0xMDogI0U2RjFGQyAhZGVmYXVsdDtcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTYwOiAjNkFBREVDICFkZWZhdWx0O1xuJGFjdGlvbi04MDogIzM5OTFFNSAhZGVmYXVsdDtcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xuJGFjdGlvbi0xNTA6ICMwMzNCNzAgIWRlZmF1bHQ7XG5cbi8vIHNwYWNlOlxuJHNwYWNlOiAjMjczMjNEICFkZWZhdWx0O1xuJHNwYWNlLTU6ICNGM0Y2RjggIWRlZmF1bHQ7XG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XG4kc3BhY2UtMjA6ICNDREQ2REYgIWRlZmF1bHQ7XG4kc3BhY2UtMzA6ICNBQUI3QzQgIWRlZmF1bHQ7XG4kc3BhY2UtNDA6ICM5QUE5QjggIWRlZmF1bHQ7XG4kc3BhY2UtNTA6ICM4ODk4QTcgIWRlZmF1bHQ7XG4kc3BhY2UtNzA6ICM2QzdCOEIgIWRlZmF1bHQ7XG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XG4kc3BhY2UtMTEwOiAjMEYxQjI3ICFkZWZhdWx0O1xuXG4vLyBzdWNjZXNzOlxuJHN1Y2Nlc3M6ICMwQ0FBNzAgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMDogI0U3RjdGMSAhZGVmYXVsdDtcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcbiRzdWNjZXNzLTE0MDogIzA3NjY0MyAhZGVmYXVsdDtcblxuLy8gd2FybmluZzpcbiR3YXJuaW5nOiAjRUM3RTEzICFkZWZhdWx0O1xuJHdhcm5pbmctMTA6ICNGREYyRTcgIWRlZmF1bHQ7XG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XG4kd2FybmluZy0xNDA6ICM4RTRDMEIgIWRlZmF1bHQ7XG5cbi8vIGVycm9yOlxuJGVycm9yOiAjREYyOTM1ICFkZWZhdWx0O1xuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcbiRlcnJvci0xNDA6ICM4NjE5MjAgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbDogIzExMTExMSAhZGVmYXVsdDtcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xuJG5ldXRyYWwtODogI0VDRUNFQyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yMDogI0NGQ0ZDRiAhZGVmYXVsdDtcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XG4kbmV1dHJhbC01MDogIzg4ODg4OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XG4kbmV1dHJhbC04MDogIzQxNDE0MSAhZGVmYXVsdDtcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBkZXByZWNhdGVkOlxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAjODhjNWVlICFkZWZhdWx0O1xuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemUgKGJhc2UgMTQpOlxyXG4kZWdlby1mb250LXNpemUtMTA6IDAuNzE0cmVtICFkZWZhdWx0OyAvLyAxMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcclxuJGVnZW8tZm9udC1zaXplLTEyOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gMTJweFxyXG4kZWdlby1mb250LXNpemUtMTQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tZm9udC1zaXplLTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1mb250LXNpemUtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcclxuJGVnZW8tZm9udC1zaXplLTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1mb250LXNpemUtNDg6IDMuNDI5cmVtICFkZWZhdWx0OyAvLyA0OHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodCAoYmFzZSAxNCk6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjI6IDEuNTcxcmVtICFkZWZhdWx0OyAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxyXG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTg6IDQuMTQzcmVtICFkZWZhdWx0OyAvLyA1OHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxyXG5cclxuLy8gZGVwcmVjYXRlZDpcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweCAoYmFzZSAxNilcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweCAoYmFzZSAxNilcclxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweCAoYmFzZSAxNilcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweCAoYmFzZSAxNilcclxuXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweCAoYmFzZSAxNilcclxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8gei1pbmRleFxyXG5cclxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxyXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XHJcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xyXG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xyXG4kbWVudS16LWluZGV4OiA3NTAwICFkZWZhdWx0O1xyXG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XHJcblxyXG5cclxuXHJcbiJdfQ== */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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
                            id: '4545-df56-s344',
                            name: '4545-df56-s344'
                        },
                        {
                            id: '4545-df56-s346',
                            name: '4545-df56-s346'
                        }
                    ],
                    title: 'Filter By',
                    buttonText: 'Apply'
                }
            },
            { id: 'name', label: 'Name' },
            {
                id: 'lastName',
                label: 'Last Name',
                filters: {
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
                name: '--egeo-st-table__header--line-height',
                description: 'Header line height',
                default: '$egeo-line-height-18'
            },
            {
                name: '--egeo-st-table__header--color',
                description: 'Header font color',
                default: '$space-80'
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
                name: '--egeo-st-table__header__filter-arrow--line-height',
                description: 'Header filter arrow line height',
                default: '13px'
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
        this.statusFilter = [[], []];
        this.rowActions = [
            {
                value: 'edit',
                icon: 'edit-icon',
                label: 'Edit'
            }, {
                value: 'remove',
                icon: 'trash-icon',
                label: 'Delete',
                iconColor: 'red',
                labelColor: 'red'
            }
        ];
        this.idFilterFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.lastNameFilterFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.phoneFilterFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.sortedData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data);
        this.filterData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data);
        this.customFilterData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.data);
    }
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
    StTableDemoComponent.prototype.onSelectedFilters = function (event, tablePosition) {
        var _this = this;
        if (tablePosition === 0) {
            this.statusFilter[0] = [];
            if (event.length > 0) {
                var filterElement_1 = [];
                event.map(function (filter) {
                    var filterPosition = _this.filterFields.findIndex(function (_field) { return _field.id === filter.id; });
                    _this.statusFilter[0][filterPosition] = true;
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
        }
        else {
            this.onCustomFilter();
        }
        this._cd.markForCheck();
    };
    StTableDemoComponent.prototype.onCustomFilter = function () {
        var id = this.idFilterFormControl.value;
        var lastName = this.lastNameFilterFormControl.value;
        var phone = this.phoneFilterFormControl.value;
        this.customFilterData = this.data.filter(function (_row) {
            return (!id || _row.id === id) &&
                (!phone || String(_row.phone) === phone) &&
                (!lastName || String(_row.lastName) === lastName);
        });
        this.statusFilter[1][0] = Boolean(id && id.length);
        this.statusFilter[1][2] = Boolean(lastName && lastName.length);
        this.statusFilter[1][3] = Boolean(phone && phone.length);
        this._cd.markForCheck();
    };
    StTableDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StTableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-table-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-table-demo/st-table-demo.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_4__["CssPropertyTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDropdownMenuModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [_st_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StTableDemoComponent"]]
        })
    ], StTableDemoModule);
    return StTableDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-table-demo-st-table-demo-module.js.map