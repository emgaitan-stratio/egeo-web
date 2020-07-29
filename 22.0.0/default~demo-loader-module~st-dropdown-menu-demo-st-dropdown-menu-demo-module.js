(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-dropdown-menu-demo-st-dropdown-menu-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.html":
/*!*****************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <st-demo-logger></st-demo-logger>\r\n   <section class=\"container-liquid demo-layout\">\r\n      <h1 class=\"title\">Theme customization</h1>\r\n      <p class=\"paragraph\">You can customize some styles using the following css variables</p>\r\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\r\n\r\n      <h1 class=\"title\">Examples</h1>\r\n\r\n      <div *ngFor=\"let menu of menus; let idx = index\">\r\n         <ng-container *ngIf=\"idx < 5\">\r\n            <h1>{{titles[idx]}}</h1>\r\n            <br>\r\n            <st-dropdown-menu\r\n               [keyBoardMove]=\"true\"\r\n               [items]=\"menu\"\r\n               [active]=\"active[idx]\"\r\n               [selectedItem]=\"selectedValue[idx]\"\r\n               [visualMode]=\"getVisualMode(idx)\"\r\n               [attr.id]=\"'dropdown-' + idx\"\r\n               (change)=\"onChange($event, idx)\">\r\n               <button class=\"button button-primary\" (click)=\"changeActive(idx)\">Show {{titles[idx]}}</button>\r\n            </st-dropdown-menu>\r\n            <br>\r\n            <p>Value: {{selectedValue[idx] | json}}</p>\r\n            <br>\r\n            <br>\r\n         </ng-container>\r\n      </div>\r\n   </section>\r\n   <section class=\"container-liquid demo-layout\">\r\n      <div>\r\n         <h1 class=\"title\">Scroll with Loading more spinner</h1>\r\n         <br>\r\n         <st-dropdown-menu [keyBoardMove]=\"true\" [items]=\"menus[5]\" [active]=\"active[5]\"\r\n                           [selectedItem]=\"selectedValue[5]\"\r\n                           [attr.id]=\"'dropdown-' + 5\" (change)=\"onChange($event, 5)\"\r\n                           (scrollAtBottom)=\"onScrollAtBottom()\" [isLoading]=\"isLoading\">\r\n            <button class=\"button button-primary\" (click)=\"changeActive(5)\">Show\r\n               with Loading more spinner\r\n            </button>\r\n         </st-dropdown-menu>\r\n         <br>\r\n         <p>Value: {{selectedValue[5] | json}}</p>\r\n         <br>\r\n         <br>\r\n      </div>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nst-dropdown-menu {\n  position: relative;\n  display: block; }\n.logout-button {\n  border-top: 1px solid #ECECEC;\n  padding: 10px 20px; }\n.logout-button:hover {\n    background-color: #F3F6F8; }\n.logout-button i {\n    display: inline-flex;\n    margin-right: 10px;\n    font-size: 1.143rem; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWRyb3Bkb3duLW1lbnUtZGVtby9zdC1kcm9wZG93bi1tZW51LWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1kcm9wZG93bi1tZW51LWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtZHJvcGRvd24tbWVudS1kZW1vXFxzdC1kcm9wZG93bi1tZW51LWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1kcm9wZG93bi1tZW51LWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZHJvcGRvd24tbWVudS1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1kcm9wZG93bi1tZW51LWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZHJvcGRvd24tbWVudS1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3JDRjtFQUNHLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7QUFHakI7RUFDRyw2QkVzQ2dCO0VGckNoQixrQkFBa0IsRUFBQTtBQUZyQjtJQUtNLHlCRUVXLEVBQUE7QUZQakI7SUFTTSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CR0pzQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWRyb3Bkb3duLW1lbnUtZGVtby9zdC1kcm9wZG93bi1tZW51LWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG5zdC1kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRUNFQ0VDO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7IH1cbiAgLmxvZ291dC1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y2Rjg7IH1cbiAgLmxvZ291dC1idXR0b24gaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xNDNyZW07IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XHJcblxyXG5zdC1kcm9wZG93bi1tZW51IHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ291dC1idXR0b24ge1xyXG4gICBib3JkZXItdG9wOiAxcHggc29saWQgJG5ldXRyYWwtODtcclxuICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5cclxuICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzcGFjZS01O1xyXG4gICB9XHJcblxyXG4gICBpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMTY7XHJcbiAgIH1cclxufVxyXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcclxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxyXG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcclxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxyXG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxyXG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxyXG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXHJcblxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIHotaW5kZXhcclxuXHJcbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cclxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xyXG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcclxuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcclxuJG1lbnUtei1pbmRleDogNzUwMCAhZGVmYXVsdDtcclxuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.module.ts ***!
  \*****************************************************************************/
/*! exports provided: StDropdownMenuDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDropdownMenuDemoModule", function() { return StDropdownMenuDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _shared_st_demo_logger_st_demo_logger_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/st-demo-logger/st-demo-logger.module */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts");
/* harmony import */ var _st_dropdown_menu_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-dropdown-menu-demo */ "./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.ts");
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






var StDropdownMenuDemoModule = /** @class */ (function () {
    function StDropdownMenuDemoModule() {
    }
    StDropdownMenuDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDropdownMenuModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StPopModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__["CssPropertyTableModule"],
                _shared_st_demo_logger_st_demo_logger_module__WEBPACK_IMPORTED_MODULE_3__["StDemoLoggerModule"].withService(),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_dropdown_menu_demo__WEBPACK_IMPORTED_MODULE_4__["StDropdownMenuDemoComponent"]] })
            ],
            declarations: [_st_dropdown_menu_demo__WEBPACK_IMPORTED_MODULE_4__["StDropdownMenuDemoComponent"]]
        })
    ], StDropdownMenuDemoModule);
    return StDropdownMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.ts ***!
  \**********************************************************************/
/*! exports provided: StDropdownMenuDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDropdownMenuDemoComponent", function() { return StDropdownMenuDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _shared_st_demo_logger_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/st-demo-logger/st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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



var StDropdownMenuDemoComponent = /** @class */ (function () {
    function StDropdownMenuDemoComponent(_logger, _cd) {
        this._logger = _logger;
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-dropdown-menu-demo/st-dropdown-menu-demo.html',
            ts: 'demo/st-dropdown-menu-demo/st-dropdown-menu-demo.ts',
            component: 'lib/st-dropdown-menu/st-dropdown-menu.component.ts'
        };
        this.cssProperties = [
            {
                name: '--egeo-st-dropdown-menu__title--color',
                description: 'Title color',
                default: '$neutral-40'
            },
            {
                name: '--egeo-st-dropdown-menu__title--font-weight',
                description: 'Title font weight',
                default: 'bold'
            },
            {
                name: '--egeo-st-dropdown-menu__title--font-size',
                description: 'Title font size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-dropdown-menu__title--line-height',
                description: 'Title line height',
                default: '$egeo-line-height-xxxsmall'
            }, {
                name: '--egeo-st-dropdown-menu--color',
                description: 'Text color',
                default: '$space-110'
            },
            {
                name: '--egeo-st-dropdown-menu--font-weight',
                description: 'Text font weight',
                default: '400'
            },
            {
                name: '--egeo-st-dropdown-menu--font-size',
                description: 'Text font size',
                default: '$egeo-font-size-xsmall'
            },
            {
                name: '--egeo-st-dropdown-menu--line-height',
                description: 'Text line height',
                default: '$egeo-line-height-20'
            },
            {
                name: '--egeo-st-dropdown-menu--bg-color',
                description: 'Menu background color',
                default: '$neutral-full'
            },
            {
                name: '--egeo-st-dropdown-menu--border-color',
                description: 'Menu border color',
                default: '$neutral-30'
            },
            {
                name: '--egeo-st-dropdown-menu--border-radius',
                description: 'Menu border radius',
                default: '4px'
            },
            {
                name: '--egeo-st-dropdown-menu__item--padding',
                description: 'Item padding',
                default: '9px 15px'
            },
            {
                name: '--egeo-st-dropdown-menu__item--font-weight',
                description: 'Item font weight',
                default: '400'
            },
            {
                name: '--egeo-st-dropdown-menu__active--border-color',
                description: 'Active menu border color',
                default: '$input-field-onfocus'
            },
            {
                name: '--egeo-st-dropdown-menu__item__hover--bg-color',
                description: 'Hover item background color',
                default: '$space-5'
            },
            {
                name: '--egeo-st-dropdown-menu__item__selected--bg-color',
                description: 'Selected item background color',
                default: '$action-10'
            },
            {
                name: '--egeo-st-dropdown-menu__item__disabled--color',
                description: 'Disabled item color',
                default: '$space-40'
            },
            {
                name: '--egeo-st-dropdown-menu__separator--color',
                description: 'Separator color',
                default: '$space-20'
            },
            {
                name: '--egeo-st-dropdown-menu__icon--color',
                description: 'Item icon color',
                default: '$space-70'
            },
            {
                name: '--egeo-st-dropdown-menu__icon--font-size',
                description: 'Icon font size',
                default: '$egeo-font-size-12'
            },
            {
                name: '--egeo-st-dropdown-menu__icon--line-height',
                description: 'Icon line height',
                default: '$egeo-line-height-20'
            },
            {
                name: '--egeo-st-dropdown-menu__text-info--color',
                description: 'Text info color',
                default: '$neutral-40'
            },
            {
                name: '--egeo-st-dropdown-menu__text-info--font-size',
                description: 'Text info font size',
                default: '$egeo-font-size-12'
            },
            {
                name: '--egeo-st-dropdown-menu__text-info--line-height',
                description: 'Text info line height',
                default: '12px'
            },
            {
                name: '--egeo-st-dropdown-menu__without-results--color',
                description: 'Without results label color',
                default: '$neutral-50'
            },
            {
                name: '--egeo-st-dropdown-menu__without-results--font-size',
                description: 'Without results label font size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-dropdown-menu__without-results--font-weight',
                description: 'Without results label font weight',
                default: '300'
            },
            {
                name: '--egeo-st-dropdown-menu__without-results--padding',
                description: 'Without results label padding',
                default: ' 20px'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list--bg-color',
                description: 'Menu list background color',
                default: '$neutral-full'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list--border-radius',
                description: 'Menu list border radius',
                default: '4px'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list--box-shadow',
                description: 'Menu list box shadow',
                default: '0 3px 9px 0 rgba(17, 17, 17, 0.25)'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list--padding',
                description: 'Menu list padding',
                default: '4px 0'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list__item--color',
                description: 'Menu list item color',
                default: '$space-110'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list__item--font-size',
                description: 'Menu list item font-size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list__item--min-height',
                description: 'Menu list item min height',
                default: '40px'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list__item--padding',
                description: 'Menu list item padding',
                default: '10px 20px'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list__item__hover--bg-color',
                description: 'Menu list hover item background color',
                default: '$action-10'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list__item--font-size',
                description: 'Menu list item font size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-dropdown-menu__menu-list__item--line-height',
                description: 'Menu list item line height',
                default: '$egeo-line-height-22'
            }
        ];
        this.titles = [];
        this.menus = [];
        this.active = [];
        this.selectedValue = [];
        this.visualMode = _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StDropDownVisualMode"].MENU_LIST;
        this.isLoading = false;
        var menus = 6;
        this.active = Array.from(Array(menus)).map(function () { return false; });
        this.selectedValue = Array.from(Array(menus)).map(function () { return undefined; });
        this.titles = ['Normal', 'With Scroll', 'Large Text', 'Group', 'Group With Scroll'];
        this.menus.push(this.generateNormal());
        this.menus.push(this.generateWithScroll());
        this.menus.push(this.generateLargeText());
        this.menus.push(this.generateGroup());
        this.menus.push(this.generateGroupWithScroll());
        this.menus.push(this.generateWithScroll());
    }
    StDropdownMenuDemoComponent.prototype.changeActive = function (position) {
        this.active[position] = !this.active[position];
        this._logger.log('click button and active is: ', this.active[position]);
    };
    StDropdownMenuDemoComponent.prototype.onChange = function (selected, position) {
        this.active[position] = false;
        this.selectedValue[position] = selected;
        this._logger.log('select value and hide menu', JSON.stringify(selected));
    };
    StDropdownMenuDemoComponent.prototype.getVisualMode = function (menuId) {
        return menuId % 2 ? _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StDropDownVisualMode"].OPTION_LIST : _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StDropDownVisualMode"].MENU_LIST;
    };
    StDropdownMenuDemoComponent.prototype.onScrollAtBottom = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.menus[1].push.apply(_this.menus[5], _this.generateWithScroll(_this.menus[5].length));
            _this.isLoading = false;
            _this._cd.markForCheck();
        }, 2000);
    };
    StDropdownMenuDemoComponent.prototype.generateNormal = function () {
        return [
            {
                label: 'Edit',
                value: 'edit',
                icon: 'icon-cogs'
            },
            {
                label: 'Rename',
                value: 'rename',
                icon: 'icon-cogs'
            },
            {
                label: 'Schedule',
                value: 'schedule',
                icon: 'icon-eye',
                topSeparator: true,
                bottomSeparator: true
            },
            {
                label: 'Security',
                value: 'security',
                icon: 'icon-lock',
                disabled: true
            },
            {
                label: 'Archived',
                value: 'archived',
                iconColor: 'gray',
                icon: 'icon-grid-2',
                textInfo: 'This is an optional text'
            },
            {
                label: 'Publish',
                value: 'published',
                iconColor: 'blue',
                icon: 'icon-cloud-upload',
                disabled: true
            },
            {
                label: 'province of birth',
                value: 'fk',
                iconColor: '#000000',
                icon: 'icon-arrow-up',
                extraIcon: 'icon-info',
                extraIconColor: '#8898a7',
                extraIconBubble: 'To connect this table you have to set “Province” as root',
                textInfo: 'This is an optional text'
            },
            {
                label: 'Delete',
                value: 'delete',
                iconColor: 'red',
                labelColor: 'red',
                icon: 'icon-trash',
                topSeparator: true
            }
        ];
    };
    StDropdownMenuDemoComponent.prototype.generateWithScroll = function (length) {
        if (length === void 0) { length = 0; }
        return Array.from(Array(20)).map(function (_value, i) { return ({
            label: "Option " + (length + i),
            value: "option-" + (length + i)
        }); });
    };
    StDropdownMenuDemoComponent.prototype.generateLargeText = function () {
        return Array.from(Array(10)).map(function (_value, i) { return ({
            label: i === 3 ? "Option " + i + " with large text that not fit in button size" : "Option " + i,
            value: "option-" + i
        }); });
    };
    StDropdownMenuDemoComponent.prototype.generateGroup = function () {
        return [
            {
                title: 'Severity', items: [
                    { label: 'Critical Error', value: 'critical' },
                    { label: 'Warning', value: 'Warning' }
                ]
            },
            {
                title: 'Status', items: [
                    { label: 'Active', value: 'active' },
                    { label: 'Inactive', value: 'inactive' }
                ]
            }
        ];
    };
    StDropdownMenuDemoComponent.prototype.generateGroupWithScroll = function () {
        return [
            {
                title: 'Severity', items: [
                    { label: 'Critical Error', value: 'critical' },
                    { label: 'Warning', value: 'Warning' }
                ]
            },
            {
                title: 'Status', items: [
                    { label: 'Active', value: 'active' },
                    { label: 'Inactive', value: 'inactive' },
                    { label: 'Paused', value: 'paused' },
                    { label: 'Stopped', value: 'stopped' },
                    { label: 'Running', value: 'running' },
                    { label: 'Waiting', value: 'waiting' },
                    { label: 'Delayed', value: 'delayed' },
                    { label: 'Unknown', value: 'unknown' }
                ]
            }
        ];
    };
    StDropdownMenuDemoComponent.ctorParameters = function () { return [
        { type: _shared_st_demo_logger_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    StDropdownMenuDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-dropdown-menu-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-dropdown-menu-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-dropdown-menu-demo.component.scss */ "./src/app/demos/st-dropdown-menu-demo/st-dropdown-menu-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_shared_st_demo_logger_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StDropdownMenuDemoComponent);
    return StDropdownMenuDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-dropdown-menu-demo-st-dropdown-menu-demo-module.js.map