(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-dynamic-table-demo-st-dynamic-table-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html":
/*!***************************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n      <div class=\"demo-layout\">\r\n         <p class=\"introduction\">Dynamic tables are structured grids of information created automatically using a json\r\n            schema to define their structures</p>\r\n         <span class=\"separator\"></span>\r\n         <h1 class=\"title\">Design and behaviour</h1>\r\n         <p class=\"paragraph\">\r\n            Dynamic tables are based on egeo table component so they have the same design and behaviour.\r\n         </p>\r\n         <h1 class=\"title\">Theme customization</h1>\r\n         <p class=\"paragraph\">You can customize some table styles using the following css variables</p>\r\n      </div>\r\n\r\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\r\n      <div class=\"demo-layout\">\r\n\r\n         <h2 class=\"subtitle\">Selectable tables</h2>\r\n         <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-12 col-xs-12\">\r\n               <st-dynamic-table [jsonSchema]=\"jsonSchema\"\r\n                                 [items]=\"users\"\r\n                                 [sortable]=\"false\"\r\n                                 [filterable]=\"false\"\r\n                                 [selectable]=\"true\"\r\n                                 [selectableAll]=\"true\"\r\n                                 [hasHoverMenu]=\"true\"\r\n                                 [activeHoverMenu]=\"activeHoverMenuPosition[0]\"\r\n                                 (selectAll)=\"onSelectAll($event, 0)\"\r\n                                 (selectRow)=\"onSelectRow($event, 0)\"\r\n                                 (showHoverMenu)=\"onShowHoverMenu($event, 0)\"\r\n                                 (updateFields)=\"onUpdateFields($event, 0)\">\r\n                  <st-dropdown-menu st-dynamic-table-hover-menu\r\n                                    class=\"row-menu\"\r\n                                    [items]=\"rowActions\"\r\n                                    [active]=\"activeHoverMenuPosition[0] !== undefined\"\r\n                                    [visualMode]=\"1\">\r\n                  </st-dropdown-menu>\r\n               </st-dynamic-table>\r\n            </div>\r\n         </div>\r\n\r\n         <h2 class=\"subtitle\">Sortable table</h2>\r\n         <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific\r\n            fields as sortable using <b>uiDefinition</b> input. In this example, we have marked \"company\" column as not\r\n            sortable.</p>\r\n         <st-dynamic-table [jsonSchema]=\"jsonSchema\"\r\n                           [items]=\"sortedUsers\"\r\n                           [sortable]=\"true\"\r\n                           [filterable]=\"false\"\r\n                           [currentOrder]=\"currentOrder\"\r\n                           [hasHoverMenu]=\"true\"\r\n                           [uiDefinitions]=\"{company: {sortable: false}}\"\r\n                           [activeHoverMenu]=\"activeHoverMenuPosition[1]\"\r\n                           (changeOrder)=\"onSortTable($event)\"\r\n                           (showHoverMenu)=\"onShowHoverMenu($event, 1)\"\r\n                           (updateFields)=\"onUpdateFields($event, 1)\">\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[1] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n         <h2 class=\"subtitle\">Filterable table</h2>\r\n         <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only\r\n            specific\r\n            fields as filterable </p>\r\n         <st-dynamic-table [jsonSchema]=\"jsonSchema\"\r\n                           [items]=\"filteredUsers\"\r\n                           [sortable]=\"false\"\r\n                           [filterable]=\"true\"\r\n                           [hasHoverMenu]=\"true\"\r\n                           [activeHoverMenu]=\"activeHoverMenuPosition[2]\"\r\n                           [activeFilterFields]=\"activeFilters[2]\"\r\n                           (showHoverMenu)=\"onShowHoverMenu($event, 2)\"\r\n                           (updateFields)=\"onUpdateFields($event, 2)\"\r\n                           (selectFilters)=\"onFilter($event, 2)\">\r\n            >\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[2] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n         <h2 class=\"subtitle\">Filterable table with custom template</h2>\r\n         <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only\r\n            specific\r\n            fields as filterable </p>\r\n\r\n         <ng-template #filterContent>\r\n            <div class=\"custom-filter-container\">\r\n               <st-input [formControl]=\"customFilterFormControl\"\r\n                         (click)=\"$event.stopPropagation()\">\r\n               </st-input>\r\n\r\n               <button class=\"button button-primary small st-table__popover-button\"\r\n                       (click)=\"onCustomStatusFilter(3)\" popover-filter-submit>\r\n                  <span>Apply</span>\r\n               </button>\r\n            </div>\r\n         </ng-template>\r\n         <st-dynamic-table [jsonSchema]=\"jsonSchema\"\r\n                           [items]=\"customFilteredUsers\"\r\n                           [sortable]=\"false\"\r\n                           [filterable]=\"true\"\r\n                           [hasHoverMenu]=\"true\"\r\n                           [activeFilterFields]=\"activeFilters[3]\"\r\n                           [activeHoverMenu]=\"activeHoverMenuPosition[3]\"\r\n                           [templateContentFilter]=\"filterContent\"\r\n                           (showHoverMenu)=\"onShowHoverMenu($event, 3)\"\r\n                           (updateFields)=\"onUpdateFields($event, 3)\"\r\n                           (selectFilters)=\"onFilter($event, 3)\">\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[3] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n         <h2 class=\"subtitle\">Table with fixed header</h2>\r\n         <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and\r\n            specify\r\n            to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\r\n\r\n         <st-dynamic-table class=\"fixed-header-table\"\r\n                           [jsonSchema]=\"jsonSchema\"\r\n                           [items]=\"users\"\r\n                           [hasHoverMenu]=\"true\"\r\n                           [fixedHeader]=\"true\"\r\n                           [filterable]=\"false\"\r\n                           [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\r\n                           (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[4] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n\r\n         <h2 class=\"subtitle\">Table with fixed header and sticky hover menu</h2>\r\n\r\n         <st-dynamic-table class=\"fixed-header-table\"\r\n                           style=\"max-width: 60%\"\r\n                           [jsonSchema]=\"jsonSchema\"\r\n                           [items]=\"users\"\r\n                           [hasHoverMenu]=\"true\"\r\n                           [fixedHeader]=\"true\"\r\n                           [stickyHoverMenu]=\"true\"\r\n                           [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\r\n                           [templateContentFilter]=\"filterContent\"\r\n                           (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[4] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n\r\n         <h2 class=\"subtitle\">Table without header</h2>\r\n         <st-dynamic-table\r\n            [jsonSchema]=\"jsonSchema\"\r\n            [items]=\"users\"\r\n            [hasHoverMenu]=\"true\"\r\n            [header]=\"false\"\r\n            [activeHoverMenu]=\"activeHoverMenuPosition[5]\"\r\n            [templateContentFilter]=\"filterContent\"\r\n            (showHoverMenu)=\"onShowHoverMenu($event, 5)\">\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[5] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n         <h2 class=\"subtitle\">Table with custom class 'separated rows'</h2>\r\n         <st-dynamic-table\r\n            [jsonSchema]=\"jsonSchema\"\r\n            [items]=\"users\"\r\n            [hasHoverMenu]=\"true\"\r\n            [filterable]=\"false\"\r\n            [header]=\"true\"\r\n            [sortable]=\"false\"\r\n            customClasses=\"separated-rows\"\r\n            [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\r\n            (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[4] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n         <h2 class=\"subtitle\">Table with custom css definitions</h2>\r\n         <st-dynamic-table\r\n            [jsonSchema]=\"jsonSchema\"\r\n            [uiDefinitions]=\"uiDefinition\"\r\n            [currentOrder]=\"currentOrder\"\r\n            [items]=\"sortedUsers\"\r\n            [hasHoverMenu]=\"true\"\r\n            [header]=\"true\"\r\n            [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\r\n            [templateContentFilter]=\"filterContent\"\r\n            (showHoverMenu)=\"onShowHoverMenu($event, 4)\"\r\n            (changeOrder)=\"onSortTable($event)\">\r\n            <st-dropdown-menu st-dynamic-table-hover-menu\r\n                              class=\"row-menu\"\r\n                              [items]=\"rowActions\"\r\n                              [active]=\"activeHoverMenuPosition[4] !== undefined\"\r\n                              [visualMode]=\"1\">\r\n            </st-dropdown-menu>\r\n         </st-dynamic-table>\r\n\r\n         <h2 class=\"subtitle\">Tables with Fks and groups</h2>\r\n         <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-12 col-xs-12\">\r\n               <st-dynamic-table [jsonSchema]=\"jsonSchemaFk\"\r\n                                 [items]=\"fks\"\r\n                                 [sortable]=\"false\"\r\n                                 [filterable]=\"true\"\r\n                                 [selectable]=\"true\"\r\n                                 [selectableAll]=\"true\"\r\n                                 [hasHoverMenu]=\"true\"\r\n                                 [uiDefinitions]=\"uiDefinition\"\r\n                                 [activeHoverMenu]=\"activeHoverMenuPosition[0]\"\r\n                                 (selectAll)=\"onSelectAll($event, 0)\" (selectRow)=\"onSelectRow($event, 0)\"\r\n                                 (showHoverMenu)=\"onShowHoverMenu($event, 0)\">\r\n                  <st-dropdown-menu st-dynamic-table-hover-menu class=\"row-menu\" [items]=\"rowActions\"\r\n                                    [active]=\"activeHoverMenuPosition[0] !== undefined\" [visualMode]=\"1\">\r\n                  </st-dropdown-menu>\r\n               </st-dynamic-table>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </section>\r\n\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nst-table {\n  position: relative; }\n.st-table__popover-button {\n  margin-top: 20px;\n  width: 100%; }\n.row-menu {\n  position: absolute;\n  right: 24px;\n  bottom: 14px; }\n.fixed-header-table {\n  width: 100%;\n  display: flex;\n  height: 200px; }\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 1.143rem;\n  line-height: 4px;\n  vertical-align: top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  display: flex;\n  height: 150px; }\n.custom-filter-container {\n  display: block; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWR5bmFtaWMtdGFibGUtZGVtby9zdC1keW5hbWljLXRhYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1keW5hbWljLXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtZHluYW1pYy10YWJsZS1kZW1vXFxzdC1keW5hbWljLXRhYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1keW5hbWljLXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZHluYW1pYy10YWJsZS1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1keW5hbWljLXRhYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZHluYW1pYy10YWJsZS1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3JDRjtFQUNHLGtCQUFrQixFQUFBO0FBSWxCO0VBQ0csZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUlqQjtFQUNHLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBR2Y7RUFDRyxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWEsRUFBQTtBQUdoQjtFQUNHLGVBQWU7RUFDZixtQkdieUI7RUhjekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3RCO0VBQ0csaUJBQWlCLEVBQUE7QUFJakI7RUFDRyxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBSW5CO0VBQ0csY0FBYyxFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWR5bmFtaWMtdGFibGUtZGVtby9zdC1keW5hbWljLXRhYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG5zdC10YWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uc3QtdGFibGVfX3BvcG92ZXItYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnJvdy1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgYm90dG9tOiAxNHB4OyB9XG5cbi5maXhlZC1oZWFkZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMDBweDsgfVxuXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMTQzcmVtO1xuICBsaW5lLWhlaWdodDogNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XG5cbi5idXR0b24tdG9vbGJhciB7XG4gIG1hcmdpbi1yaWdodDogNnB4OyB9XG5cbi50YWJsZS0tZml4ZWQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxNTBweDsgfVxuXG4uY3VzdG9tLWZpbHRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jazsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcclxuXHJcbnN0LXRhYmxlIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3QtdGFibGUge1xyXG4gICAmX19wb3BvdmVyLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbn1cclxuXHJcbi5yb3ctbWVudSB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgcmlnaHQ6IDI0cHg7XHJcbiAgIGJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLmZpeGVkLWhlYWRlci10YWJsZSB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG50ZCA+IC5pY29uLWVsbGlwc2lzIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xNjtcclxuICAgbGluZS1oZWlnaHQ6IDRweDtcclxuICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuLmJ1dHRvbi10b29sYmFyIHtcclxuICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICYtLWZpeGVkLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1maWx0ZXItY29udGFpbmVyIHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZSAoYmFzZSAxNCk6XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcclxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxyXG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxyXG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcclxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcclxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxyXG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxyXG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XHJcblxyXG4vLyBkZXByZWNhdGVkOlxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxyXG5cclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxyXG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLyB6LWluZGV4XHJcblxyXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXHJcbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcclxuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XHJcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XHJcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XHJcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.ts ***!
  \********************************************************************************/
/*! exports provided: StDynamicTableDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDynamicTableDemoComponent", function() { return StDynamicTableDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
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




var StDynamicTableDemoComponent = /** @class */ (function () {
    function StDynamicTableDemoComponent(_cd) {
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-table-demo/st-dynamic-table-demo.component.html',
            ts: 'demo/st-table-demo/st-dynamic-table-demo.component.ts',
            component: 'lib/st-table/st-dynamic-table.component.ts'
        };
        this.jsonSchema = {
            '$schema': 'http://json-schema.org/schema#',
            'title': 'User Table',
            'type': 'object',
            'description': 'User properties',
            'optional': true,
            'properties': {
                'id': {
                    'title': 'Id',
                    'description': 'User identification',
                    'type': 'string'
                },
                'name': {
                    'title': 'Name',
                    'description': 'User name',
                    'type': 'string'
                },
                'lastName': {
                    'title': 'Last Name',
                    'description': 'User last name',
                    'type': 'string'
                },
                'phone': {
                    'title': 'Sub executor',
                    'type': 'string',
                    'description': 'Spark executor properties'
                },
                'company': {
                    'title': 'Company',
                    'type': 'string',
                    'description': 'User company',
                    '$ref': '/companies/names'
                },
                'status': {
                    'title': 'Status',
                    'type': 'string',
                    'description': 'User status',
                    'enum': ['Employed', 'Free', 'Busy']
                },
                'fecha_creacion': { 'title': 'Fecha creacion', 'description': 'fecha_creacion' }
            }
        };
        this.jsonSchemaFk = {
            '$schema': 'http://json-schema.org/schema#',
            'title': 'Fks Table',
            'type': 'object',
            'description': 'Fks properties',
            'optional': true,
            'properties': {
                'id': {
                    'title': 'Identificador',
                    'description': 'Identificador'
                },
                'codigo': {
                    'title': 'Codigo',
                    'description': 'Codigo'
                },
                'tipo_id': {
                    'title': 'Tipo User Fk',
                    'description': 'Tipo User'
                },
                'descripcion': {
                    'title': 'Descripción',
                    'description': 'Descripción'
                }
            }
        };
        this.uiDefinition = {
            company: { sortable: false },
            id: {
                styles: {
                    width: '25%'
                }
            },
            status: {
                styles: {
                    color: '#DF2935'
                }
            },
            tipo_id: {
                fk: {
                    table: 'user.bank_user',
                    field: 'id'
                },
                group_field: {
                    view: 'tipo_id - descripcion',
                    fkTable: 'id'
                }
            },
            fecha_creacion: {
                dateFormat: 'yyyy-MM-d / HH:mm'
            }
        };
        this.users = [
            {
                id: '4545-df56-s341',
                name: 'Antonio',
                lastName: 'López',
                phone: 60052520145,
                company: 'Stratio',
                status: 'Employed',
                fecha_creacion: '2020-04-15T07:19:50'
            },
            {
                id: '4545-df56-s342',
                name: 'Marina',
                lastName: 'Lara',
                phone: 600456520145,
                company: 'Stratio',
                status: 'Free',
                fecha_creacion: '2020-04-15T07:19:50'
            },
            {
                id: '4545-df56-s343',
                name: 'Álvaro',
                lastName: 'García',
                phone: 60052320145,
                company: 'Stratio',
                status: 'Busy',
                fecha_creacion: '2020-04-15T07:19:50'
            },
            {
                id: '4545-df56-s344',
                name: 'Marina',
                lastName: 'González',
                phone: 600455640145,
                company: 'Stratio',
                status: 'Employed',
                fecha_creacion: '2020-04-15T07:19:50'
            }, {
                id: '4545-df56-s345',
                name: 'Pepe',
                lastName: 'Guerrero',
                phone: 6005276845,
                company: 'Stratio',
                status: 'Employed',
                fecha_creacion: '2020-04-15T07:19:50'
            },
            {
                id: '4545-df56-s346',
                name: 'María',
                lastName: 'Rodríguez',
                phone: 60065620145,
                company: 'Stratio',
                status: 'Busy',
                fecha_creacion: '2020-04-15T07:19:50'
            }
        ];
        this.sortedUsers = [];
        this.filteredUsers = [];
        this.customFilteredUsers = [];
        this.fks = [
            {
                codigo: 'K',
                descripcion: 'admin',
                id: 6,
                tipo_id: 6
            },
            {
                codigo: 'W',
                descripcion: 'read',
                id: 14,
                tipo_id: 6
            },
            {
                codigo: 'D',
                descripcion: 'write',
                id: 2,
                tipo_id: 2
            },
            {
                codigo: 'H',
                descripcion: 'admin',
                id: 4,
                tipo_id: 4
            },
            {
                codigo: 'I',
                descripcion: 'read',
                id: 5,
                tipo_id: 5
            },
            {
                codigo: 'P',
                descripcion: 'write',
                id: 8,
                tipo_id: 8
            },
            {
                codigo: 'C',
                descripcion: 'special',
                id: 1,
                tipo_id: 1
            },
            {
                codigo: 'X',
                descripcion: 'read',
                id: 16,
                tipo_id: 13
            }
        ];
        this.selectedCheckboxes = [[], []];
        this.statusFilter = [];
        this.selected = [];
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
        this.activeHoverMenuPosition = [];
        this.cssProperties = [
            {
                name: '--egeo-st-dynamic-table__hover-button--font-size',
                description: 'Hover button font size',
                default: '$egeo-font-size-20'
            },
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
            }
        ];
        this.customFilterFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.tableFields = [];
        this.activeFilters = [[], [], [], []];
        this.sortedUsers = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.users);
        this.filteredUsers = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.users);
        this.customFilteredUsers = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.users);
    }
    StDynamicTableDemoComponent.prototype.onUpdateFields = function (fields, tablePosition) {
        this.tableFields[tablePosition] = fields;
    };
    // Selectable tables
    StDynamicTableDemoComponent.prototype.onSelectRow = function (event, tablePosition) {
        if (!this.selected[tablePosition]) {
            this.selected[tablePosition] = [];
        }
        this.selected[tablePosition][event.row] = event.checked;
    };
    StDynamicTableDemoComponent.prototype.onSelectAll = function (selected, tablePosition) {
        this.selectedCheckboxes[tablePosition] = [];
        for (var i = 0; i < this.users.length; ++i) {
            this.selectedCheckboxes[tablePosition].push(selected);
        }
    };
    StDynamicTableDemoComponent.prototype.onShowHoverMenu = function (row, tablePosition) {
        this.activeHoverMenuPosition[tablePosition] = this.activeHoverMenuPosition[tablePosition] === row ? undefined : row;
        this._cd.markForCheck();
    };
    // Sortable tables
    StDynamicTableDemoComponent.prototype.onSortTable = function (order) {
        this.currentOrder = order;
        var reverseConst = order.type === _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["ORDER_TYPE"].ASC ? 1 : -1;
        this.sortedUsers = __spread(this.sortedUsers).sort(function (a, b) {
            return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
        });
    };
    // Filterable tables
    StDynamicTableDemoComponent.prototype.onCustomStatusFilter = function (tablePosition) {
        var filter = this.customFilterFormControl.value;
        this.customFilteredUsers = this.users.filter(function (_user) { return _user.status === filter; });
        if (filter && filter.length > 0) {
            this.activeFilters[tablePosition] = ['status'];
        }
        else {
            this.activeFilters[tablePosition] = [];
        }
        this._cd.markForCheck();
    };
    StDynamicTableDemoComponent.prototype.onFilter = function (tableFields, tablePosition) {
        var _this = this;
        if (tablePosition < 3) {
            this.statusFilter = [];
            if (tableFields.length > 0) {
                var filterElement_1 = [];
                tableFields.map(function (filter) {
                    var filterPosition = _this.tableFields[tablePosition].findIndex(function (_field) { return _field.id === filter.id; });
                    _this.statusFilter[filterPosition] = true;
                    filterElement_1.push([].concat.apply([], filter.filters.filterConfig.map(function (config) {
                        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(_this.users, function (user) {
                            return user[filter.id] === config.name;
                        });
                    })));
                });
                this.filteredUsers = lodash__WEBPACK_IMPORTED_MODULE_1__["intersectionBy"].apply(void 0, __spread(filterElement_1, ['id']));
            }
            else {
                this.filteredUsers = this.users;
            }
            this._cd.markForCheck();
        }
        else {
            this.onCustomStatusFilter(tablePosition);
        }
    };
    StDynamicTableDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StDynamicTableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-dynamic-table-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./st-dynamic-table-demo.component.scss */ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StDynamicTableDemoComponent);
    return StDynamicTableDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: StDynamicTableDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDynamicTableDemoModule", function() { return StDynamicTableDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_dynamic_table_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-dynamic-table-demo.component */ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.ts");
/* harmony import */ var _egeo_src_lib_st_dynamic_table_st_dynamic_table_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../egeo/src/lib/st-dynamic-table/st-dynamic-table.module */ "../egeo/src/lib/st-dynamic-table/st-dynamic-table.module.ts");
/* harmony import */ var _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/css-property-table/css-property-table.module */ "./src/app/shared/css-property-table/css-property-table.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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







var StDynamicTableDemoModule = /** @class */ (function () {
    function StDynamicTableDemoModule() {
    }
    StDynamicTableDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _egeo_src_lib_st_dynamic_table_st_dynamic_table_module__WEBPACK_IMPORTED_MODULE_4__["StDynamicTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StCheckboxModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_dynamic_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StDynamicTableDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StToggleButtonsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDropdownMenuModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__["CssPropertyTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_st_dynamic_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StDynamicTableDemoComponent"]]
        })
    ], StDynamicTableDemoModule);
    return StDynamicTableDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-dynamic-table-demo-st-dynamic-table-demo-module.js.map