(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-dynamic-table-demo-st-dynamic-table-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <div class=\"demo-layout\">\n         <p class=\"introduction\">Dynamic tables are structured grids of information created automatically using a json\n            schema to define their structures</p>\n         <span class=\"separator\"></span>\n         <h1 class=\"title\">Design and behaviour</h1>\n         <p class=\"paragraph\">\n            Dynamic tables are based on egeo table component so they have the same design and behaviour.\n         </p>\n         <h1 class=\"title\">Theme customization</h1>\n         <p class=\"paragraph\">You can customize some table styles using the following css variables</p>\n      </div>\n\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\n\n      <h2 class=\"subtitle\">Selectable and filterable tables</h2>\n      <div class=\"row\">\n         <div class=\"col-sm-12 col-lg-12 col-xs-12\">\n            <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                              [items]=\"users\"\n                              [sortable]=\"false\"\n                              [filterable]=\"true\"\n                              [selectable]=\"true\"\n                              [selectableAll]=\"true\"\n                              [hasHoverMenu]=\"true\"\n                              [activeHoverMenu]=\"activeHoverMenuPosition[0]\"\n                              (selectAll)=\"onSelectAll($event, 0)\"\n                              (selectRow)=\"onSelectRow($event, 0)\"\n                              (showHoverMenu)=\"onShowHoverMenu($event, 0)\">\n               <st-dropdown-menu st-dynamic-table-hover-menu\n                                 class=\"hover-menu\"\n                                 [items]=\"rowActions\"\n                                 [active]=\"activeHoverMenuPosition[0] !== undefined\"\n                                 [visualMode]=\"1\">\n               </st-dropdown-menu>\n            </st-dynamic-table>\n         </div>\n      </div>\n\n      <h2 class=\"subtitle\">Sortable table</h2>\n      <p class=\"paragraph\">Table can be configured as sortable or not. Moreover, it allows to configure only specific\n         fields as sortable using <b>uiDefinition</b> input. In this example, we have marked \"company\" column as not sortable.</p>\n      <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                        [items]=\"sortedUsers\"\n                        [sortable]=\"true\"\n                        [filterable]=\"false\"\n                        [currentOrder]=\"currentOrder\"\n                        [hasHoverMenu]=\"true\"\n                        [uiDefinitions]=\"{company: {sortable: false}}\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[1]\"\n                        (changeOrder)=\"onSortTable($event)\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 1)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"hover-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[1] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Filterable and sortable table</h2>\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\n         fields as filterable </p>\n      <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                        [items]=\"sortedUsers\"\n                        [sortable]=\"true\"\n                        [filterable]=\"true\"\n                        [hasHoverMenu]=\"true\"\n                        [currentOrder]=\"currentOrder\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[2]\"\n                        (changeOrder)=\"onSortTable($event)\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 2)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"hover-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[2] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Filterable table with custom template</h2>\n      <p class=\"paragraph\">Table can be configured as filterable or not. Moreover, it allows to configure only specific\n         fields as filterable </p>\n\n      <ng-template #filterContent>\n         <div>\n            <st-checkbox name=\"nameA\" value=\"1\">\n               <span>Option A</span>\n            </st-checkbox>\n            <st-checkbox name=\"nameB\" value=\"2\">\n               <span>Option B</span>\n            </st-checkbox>\n            <st-checkbox name=\"nameC\" value=\"3\">\n               <span>Option C</span>\n            </st-checkbox>\n         </div>\n         <button class=\"button button-primary small st-table__popover-button\"\n                 (click)=\"onFilter(index); checkIcon(index)\">\n            <span>Apply</span>\n         </button>\n      </ng-template>\n      <st-dynamic-table [jsonSchema]=\"jsonSchema\"\n                        [items]=\"sortedUsers\"\n                        [sortable]=\"true\"\n                        [filterable]=\"true\"\n                        [hasHoverMenu]=\"true\"\n                        [currentOrder]=\"currentOrder\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[3]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (changeOrder)=\"onSortTable($event)\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 3)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"hover-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[3] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Table with fixed header</h2>\n      <p class=\"paragraph\">In order to fix the header, it is needed to set the input 'fixedHeader' to true and specify\n         to st-table tag from outside <i><b>\"display:flex; height: 'the desired height'</b></i>\"</p>\n\n      <st-dynamic-table class=\"fixed-header-table\"\n                        [jsonSchema]=\"jsonSchema\"\n                        [items]=\"users\"\n                        [hasHoverMenu]=\"true\"\n                        [fixedHeader]=\"true\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"hover-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[4] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n\n      <h2 class=\"subtitle\">Table without header</h2>\n      <st-dynamic-table\n                        [jsonSchema]=\"jsonSchema\"\n                        [items]=\"users\"\n                        [hasHoverMenu]=\"true\"\n                        [header]=\"false\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[5]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 5)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"hover-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[5] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Table with custom class 'separated rows'</h2>\n      <st-dynamic-table\n                        [jsonSchema]=\"jsonSchema\"\n                        [items]=\"users\"\n                        [hasHoverMenu]=\"true\"\n                        [header]=\"true\"\n                        [sortable]=\"false\"\n                        customClasses=\"separated-rows\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 4)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"hover-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[4] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Table with custom css definitions</h2>\n      <st-dynamic-table\n                        [jsonSchema]=\"jsonSchema\"\n                        [uiDefinitions]=\"uiDefinition\"\n                        [currentOrder]=\"currentOrder\"\n                        [items]=\"sortedUsers\"\n                        [hasHoverMenu]=\"true\"\n                        [header]=\"true\"\n                        [activeHoverMenu]=\"activeHoverMenuPosition[4]\"\n                        [templateContentFilter]=\"filterContent\"\n                        (showHoverMenu)=\"onShowHoverMenu($event, 4)\"\n                        (changeOrder)=\"onSortTable($event)\">\n         <st-dropdown-menu st-dynamic-table-hover-menu\n                           class=\"hover-menu\"\n                           [items]=\"rowActions\"\n                           [active]=\"activeHoverMenuPosition[4] !== undefined\"\n                           [visualMode]=\"1\">\n         </st-dropdown-menu>\n      </st-dynamic-table>\n\n      <h2 class=\"subtitle\">Tables with Fks and groups</h2>\n      <div class=\"row\">\n         <div class=\"col-sm-12 col-lg-12 col-xs-12\">\n            <st-dynamic-table [jsonSchema]=\"jsonSchemaFk\" [items]=\"fks\" [sortable]=\"false\" [filterable]=\"true\"\n               [selectable]=\"true\" [selectableAll]=\"true\" [hasHoverMenu]=\"true\" [activeHoverMenu]=\"activeHoverMenuPosition[0]\"\n               (selectAll)=\"onSelectAll($event, 0)\" (selectRow)=\"onSelectRow($event, 0)\"\n               (showHoverMenu)=\"onShowHoverMenu($event, 0)\">\n               <st-dropdown-menu st-dynamic-table-hover-menu class=\"hover-menu\" [items]=\"rowActions\"\n                  [active]=\"activeHoverMenuPosition[0] !== undefined\" [visualMode]=\"1\">\n               </st-dropdown-menu>\n            </st-dynamic-table>\n         </div>\n      </div>\n   </section>\n\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nst-table {\n  position: relative; }\n.st-table__popover-button {\n  margin-top: 20px;\n  width: 100%; }\n.hover-menu {\n  position: absolute;\n  left: 11px;\n  bottom: 18px; }\n.fixed-header-table {\n  width: 100%;\n  display: flex;\n  height: 200px; }\ntd > .icon-ellipsis {\n  cursor: pointer;\n  font-size: 1.143rem;\n  line-height: 4px;\n  vertical-align: top; }\n.button-toolbar {\n  margin-right: 6px; }\n.table--fixed-header {\n  display: flex;\n  height: 150px; }\n.subtitle {\n  font-weight: 400;\n  font-size: 1.429rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.714rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding: 26px 0;\n  display: inline-block; }\n.paragraph {\n  font-weight: normal;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.571rem;\n  letter-spacing: normal;\n  color: #111111;\n  padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWR5bmFtaWMtdGFibGUtZGVtby9zdC1keW5hbWljLXRhYmxlLWRlbW8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZHluYW1pYy10YWJsZS1kZW1vL3N0LWR5bmFtaWMtdGFibGUtZGVtby5jb21wb25lbnQuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUk5QkY7Ozs7Ozs7OztFSndDRTtBS3hDRjs7Ozs7Ozs7O0VMa0RFO0FDckNGO0VBQ0csa0JBQWtCLEVBQUE7QUFJbEI7RUFDRyxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBSWpCO0VBQ0csa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZLEVBQUE7QUFHZjtFQUNHLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBR2hCO0VBQ0csZUFBZTtFQUNmLG1CR2J5QjtFSGN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdEI7RUFDRyxpQkFBaUIsRUFBQTtBQUlqQjtFQUNHLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFJbkI7RUFDRyxnQkFBZ0I7RUFDaEIsbUJHN0J5QjtFSDhCekIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkduQjJCO0VIb0IzQixzQkFBc0I7RUFDdEIsY0VQYztFRlFkLGVBQWU7RUFDZixxQkFBcUIsRUFBQTtBQUd4QjtFQUNHLG1CQUFtQjtFQUNuQixtQkcxQ3lCO0VIMkN6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCR2hDMkI7RUhpQzNCLHNCQUFzQjtFQUN0QixjRW5CYztFRm9CZCxvQkFBb0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1keW5hbWljLXRhYmxlLWRlbW8vc3QtZHluYW1pYy10YWJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuc3QtdGFibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLnN0LXRhYmxlX19wb3BvdmVyLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5ob3Zlci1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMXB4O1xuICBib3R0b206IDE4cHg7IH1cblxuLmZpeGVkLWhlYWRlci10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIwMHB4OyB9XG5cbnRkID4gLmljb24tZWxsaXBzaXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xNDNyZW07XG4gIGxpbmUtaGVpZ2h0OiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cblxuLmJ1dHRvbi10b29sYmFyIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7IH1cblxuLnRhYmxlLS1maXhlZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDE1MHB4OyB9XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS40MjlyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjcxNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIHBhZGRpbmc6IDI2cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5wYXJhZ3JhcGgge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMjg2cmVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41NzFyZW07XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMTExMTExO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG5zdC10YWJsZSB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdC10YWJsZSB7XG4gICAmX19wb3BvdmVyLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG59XG5cbi5ob3Zlci1tZW51IHtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIGxlZnQ6IDExcHg7XG4gICBib3R0b206IDE4cHg7XG59XG5cbi5maXhlZC1oZWFkZXItdGFibGUge1xuICAgd2lkdGg6IDEwMCU7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgaGVpZ2h0OiAyMDBweDtcbn1cblxudGQgPiAuaWNvbi1lbGxpcHNpcyB7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xNjtcbiAgIGxpbmUtaGVpZ2h0OiA0cHg7XG4gICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uYnV0dG9uLXRvb2xiYXIge1xuICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi50YWJsZSB7XG4gICAmLS1maXhlZC1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICB9XG59XG5cbi5zdWJ0aXRsZSB7XG4gICBmb250LXdlaWdodDogNDAwO1xuICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMjA7XG4gICBmb250LXN0eWxlOiBub3JtYWw7XG4gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgIGxpbmUtaGVpZ2h0OiAkZWdlby1saW5lLWhlaWdodC0yNDtcbiAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICBjb2xvcjogJG5ldXRyYWw7XG4gICBwYWRkaW5nOiAyNnB4IDA7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wYXJhZ3JhcGgge1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE4O1xuICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQtMjI7XG4gICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgY29sb3I6ICRuZXV0cmFsO1xuICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemUgKGJhc2UgMTQpOlxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxuJGVnZW8tZm9udC1zaXplLTEyOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gMTJweFxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxuJGVnZW8tZm9udC1zaXplLTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tZm9udC1zaXplLTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxuJGVnZW8tZm9udC1zaXplLTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxuXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxuXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJG1lbnUtei1pbmRleDogNzUwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */");

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
            html: 'demo/st-table-demo/st-table-demo.component.html',
            ts: 'demo/st-table-demo/st-table-demo.component.ts',
            component: 'lib/st-table/st-table.component.ts'
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
                }
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
                    'description': 'Tipo User',
                    'fk': {
                        'table': 'user.bank_user',
                        'field': 'id'
                    },
                    'group_field': {
                        'name': 'tipo_id - descripcion'
                    }
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
            }
        };
        this.users = [
            {
                id: '4545-df56-s341',
                name: 'Antonio',
                lastName: 'López',
                phone: 60052520145,
                company: 'Stratio',
                status: 'Employed'
            },
            {
                id: '4545-df56-s342',
                name: 'Marina',
                lastName: 'Lara',
                phone: 600456520145,
                company: 'Stratio',
                status: 'Free'
            },
            {
                id: '4545-df56-s343',
                name: 'Álvaro',
                lastName: 'García',
                phone: 60052320145,
                company: 'Stratio',
                status: 'Busy'
            },
            {
                id: '4545-df56-s344',
                name: 'Marina',
                lastName: 'González',
                phone: 600455640145,
                company: 'Stratio',
                status: 'Employed'
            }, {
                id: '4545-df56-s345',
                name: 'Pepe',
                lastName: 'Guerrero',
                phone: 6005276845,
                company: 'Stratio',
                status: 'Employed'
            },
            {
                id: '4545-df56-s346',
                name: 'María',
                lastName: 'Rodríguez',
                phone: 60065620145,
                company: 'Stratio',
                status: 'Busy'
            }
        ];
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
        this.sortedUsers = [];
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
        this.sortedUsers = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.users);
    }
    StDynamicTableDemoComponent.prototype.ngOnInit = function () {
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
    StDynamicTableDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StDynamicTableDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-dynamic-table-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dynamic-table-demo/st-dynamic-table-demo.component.html")).default,
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
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__["CssPropertyTableModule"]
            ],
            declarations: [_st_dynamic_table_demo_component__WEBPACK_IMPORTED_MODULE_3__["StDynamicTableDemoComponent"]]
        })
    ], StDynamicTableDemoModule);
    return StDynamicTableDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-dynamic-table-demo-st-dynamic-table-demo-module.js.map