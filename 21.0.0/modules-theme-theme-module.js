(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-theme-theme-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/colors/color/color.html":
/*!**************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/colors/color/color.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"color\" (click)=\"onClick()\">\n   <div [style.background-color]=\"color.hex\" class=\"color-sample\"></div>\n   <div class=\"name\">\n      <span>{{color.name}}</span>\n      <span>{{color.hex}}</span>\n      <span>{{rgb}}</span>\n   </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/colors/colors.html":
/*!*********************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/colors/colors.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"demo-layout\">\n   <div class=\"head\">\n      <egeo-title title=\"Colors\"></egeo-title>\n      <div class=\"notification-container \">\n         <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\n            {{notification}}\n            <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\n         </div>\n      </div>\n      <st-search placeholder=\"Search color\" [value]=\"searched\" [debounce]=\"200\"\n                 (search)=\"onSearchResult($event)\">\n      </st-search>\n   </div>\n   <p class=\"paragraph\">Here you can see the available colors of our palette. You can customize any of them using css\n      variables with the prefix \"egeo-theme-\".\n      For example, if you want to modify the brand color, you need to define a css variable with the name\n      \"--egeo-theme-brand\"</p>\n   <div class=\"list\">\n      <div *ngFor=\"let colorGroup of ((colorsList | async) || [])\" class=\"group\">\n         <span class=\"subtitle\">{{colorGroup[0].category}}</span>\n         <div class=\"category\">\n            <div *ngFor=\"let color of colorGroup | stFilterList:searchBy:searchValue\">\n               <color-demo [color]=\"color\" (copyColorName)=\"onCopyColorName($event)\"></color-demo>\n            </div>\n         </div>\n      </div>\n   </div>\n</section>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/fonts/font/font.html":
/*!***********************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/fonts/font/font.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"font\" (click)=\"onClick()\">\n   <div class=\"name\" [style.font-family]=\"fontFamily\" [style.font-size]=\"fontSize\">\n      <span class=\"font-name\">{{font.name}}:</span>\n      <span class=\"font-value\">{{font.value}}</span>\n      <span *ngIf=\"hasFontPixels\" >{{font.pixels}}</span>\n   </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/fonts/fonts.html":
/*!*******************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/fonts/fonts.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"head\">\n   <div class=\"header-container\">\n      <egeo-title title=\"Fonts\"></egeo-title>\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\n         {{notification}}\n         <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\n      </div>\n      <st-search placeholder=\"Search font\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\n   </div>\n</div>\n<div class=\"list\">\n   <div *ngFor=\"let fontGroup of fontsList\" class=\"group\">\n      <span class=\"subtitle\">{{categoryToString(fontGroup[0].category)}}</span>\n      <div class=\"category\">\n         <div *ngFor=\"let font of fontGroup | stFilterList:searchBy:searchValue\">\n            <font-demo [font]=\"font\" (copyFontName)=\"onCopyFontName($event)\"></font-demo>\n         </div>\n      </div>\n   </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/grid/grid.html":
/*!*****************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/grid/grid.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<section class=\"container-fluid grid-example\">\n   <egeo-title title=\"Grid\"></egeo-title>\n   <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 example\">\n            <div class=\"row col-example-12 demo-box\">\n               <div class=\"col-lg-12, col-md-12 col-sm-12 col-xs-12\">\n                  <p class=\"box\">12</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-6 demo-box\">\n               <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                  <p class=\"box\">6</p>\n               </div>\n               <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\n                  <p class=\"box\">6</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-4 demo-box\">\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <p class=\"box\">4</p>\n               </div>\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <p class=\"box\">4</p>\n               </div>\n               <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\n                  <p class=\"box\">4</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-2 demo-box\">\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\n                  <p class=\"box\">2</p>\n               </div>\n            </div>\n\n            <div class=\"row col-example-1 demo-box\">\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n               <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1\">\n                  <p class=\"box\">1</p>\n               </div>\n            </div>\n\n         </div>\n      </div>\n   </div>\n</section>\n\n\n<section class=\"container-fluid\">\n      <egeo-title title=\"Reponsive grid example\"></egeo-title>\n   <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 example\">\n            <div class=\"row col-example-2 demo-box\">\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n               <div class=\"col-lg-2 col-md-4 col-sm-8 col-xs-12\">\n                  <p class=\"box\">2</p>\n               </div>\n            </div>\n\n         </div>\n      </div>\n   </div>\n</section>\n\n<section>\n   <egeo-title title=\"Without row class\"></egeo-title>\n   <div class=\"container-fluid example\">\n      <div class=\"col-md-6\">\n         <p class=\"box\">6</p>\n      </div>\n      <div class=\"col-md-6\">\n         <p class=\"box\">6</p>\n      </div>\n   </div>\n</section>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/icons-demo/icon-demo/icon-demo.html":
/*!**************************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/icons-demo/icon-demo/icon-demo.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"icon-demo\" (click)=\"onClick()\" >\n   <i [ngClass]=\"getClass()\" class=\"glyph\"></i>\n   <span class=\"name\" #nameEl>icon-{{icon.name}}</span>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/icons-demo/icons-demo.html":
/*!*****************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/icons-demo/icons-demo.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"head\">\n   <div class=\"header-container\">\n      <egeo-title title=\"Icons\"></egeo-title>\n      <div *ngIf=\"hasNotification\" class=\"notification\" [style.opacity]=\"opacity\">\n         {{notification}} <i class=\"icon-cross close-button\" (click)=\"closeNotification()\"></i>\n      </div>\n      <st-search placeholder=\"Search Icon\" [value]=\"searched\" [debounce]=\"200\" (search)=\"onSearchResult($event)\"></st-search>\n   </div>\n</div>\n<div class=\"list\">\n   <div *ngFor=\"let icon of ((iconList | async) || []) | stFilterList:searchBy:searchValue\">\n      <icon-demo [icon]=\"icon\" (copyIconName)=\"onCopyIconName($event)\"></icon-demo>\n   </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/theme.html":
/*!*************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/theme.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"content\">\n   <demo-menu class=\"side-menu\" [options]=\"menu\"></demo-menu>\n   <div class=\"main-content\">\n      <router-outlet></router-outlet>\n   </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/theme/colors/color/color.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/theme/colors/color/color.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.color {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #FFFFFF;\n  height: 170px;\n  width: 170px;\n  margin: 2px;\n  padding: 15px; }\n.color .color-sample {\n    height: 60px;\n    width: 100px;\n    margin-bottom: 10px; }\n.color .name {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    font-weight: normal;\n    font-size: 1rem;\n    color: #888888; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9yL2NvbG9yLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9jb2xvcnMvY29sb3IvY29sb3Iuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUk5QkY7Ozs7Ozs7OztFSndDRTtBS3hDRjs7Ozs7Ozs7O0VMa0RFO0FDdENGO0VBQ0csYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJFbURtQjtFRmxEbkIsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYSxFQUFBO0FBUmhCO0lBV00sWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUIsRUFBQTtBQWJ6QjtJQWlCTSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUdUa0I7SUhVbEIsY0U2QmMsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2NvbG9ycy9jb2xvci9jb2xvci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLmNvbG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgaGVpZ2h0OiAxNzBweDtcbiAgd2lkdGg6IDE3MHB4O1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMTVweDsgfVxuICAuY29sb3IgLmNvbG9yLXNhbXBsZSB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4gIC5jb2xvciAubmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogIzg4ODg4ODsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcblxuLmNvbG9yIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLWZ1bGw7XG4gICBoZWlnaHQ6IDE3MHB4O1xuICAgd2lkdGg6IDE3MHB4O1xuICAgbWFyZ2luOiAycHg7XG4gICBwYWRkaW5nOiAxNXB4O1xuXG4gICAuY29sb3Itc2FtcGxlIHtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICB9XG5cbiAgIC5uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE0O1xuICAgICAgY29sb3I6ICRuZXV0cmFsLTUwO1xuICAgfVxufVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vLyBWQVJTOlxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBmb250LWZhbWlseTpcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xuXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcblxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxuXG4vLyBkZXByZWNhdGVkOlxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweCAoYmFzZSAxNilcblxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/theme/colors/color/color.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/theme/colors/color/color.ts ***!
  \*****************************************************/
/*! exports provided: ColorDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDemoComponent", function() { return ColorDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/app/modules/theme/utils.ts");
/* harmony import */ var _colors_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colors.model */ "./src/app/modules/theme/colors/colors.model.ts");
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



var ColorDemoComponent = /** @class */ (function () {
    function ColorDemoComponent() {
        this.copyColorName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ColorDemoComponent.prototype.onClick = function () {
        var name = "$" + this.color.name;
        var result = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["copyToClipboard"])(name);
        if (result) {
            this.copyColorName.emit(name);
        }
    };
    Object.defineProperty(ColorDemoComponent.prototype, "rgb", {
        get: function () {
            return "rgb(" + this.color.rgb.r + ", " + this.color.rgb.g + ", " + this.color.rgb.b + ")";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _colors_model__WEBPACK_IMPORTED_MODULE_2__["Color"])
    ], ColorDemoComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ColorDemoComponent.prototype, "copyColorName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ColorDemoComponent.prototype, "textElement", void 0);
    ColorDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'color-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./color.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/colors/color/color.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./color.scss */ "./src/app/modules/theme/colors/color/color.scss")).default]
        })
    ], ColorDemoComponent);
    return ColorDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/colors/colors.model.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.model.ts ***!
  \******************************************************/
/*! exports provided: Color, RGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGB", function() { return RGB; });
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
var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());

var RGB = /** @class */ (function () {
    function RGB() {
    }
    return RGB;
}());



/***/ }),

/***/ "./src/app/modules/theme/colors/colors.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  background-color: #FFFFFF;\n  width: 100%; }\n.head .header-container {\n    display: flex;\n    width: 100%;\n    flex-wrap: nowrap;\n    align-items: center; }\n.head .notification-container {\n    position: absolute;\n    width: 100%;\n    left: 0; }\n.head .notification-container .notification {\n      position: relative;\n      margin: auto;\n      height: 40px;\n      width: 614px;\n      border-radius: 5px;\n      background-color: #FFFFFF;\n      color: #0776DF;\n      display: flex;\n      align-items: center;\n      flex-wrap: nowrap;\n      box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n      font-weight: 400;\n      font-size: 0.938rem;\n      text-align: center;\n      justify-content: center; }\n.head .notification-container .notification i {\n        margin-right: 5px; }\n.head .notification-container .notification .close-button {\n        position: absolute;\n        right: 20px;\n        top: 10px;\n        color: #CFCFCF;\n        font-size: 1.429rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.group {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px; }\n.group .subtitle {\n    font-weight: 400;\n    font-size: 1.375rem;\n    color: #585858;\n    text-transform: capitalize;\n    margin-bottom: 5px; }\n.group .category {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n.list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9ycy5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9ycy5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9faW5kZXguc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2NvbG9ycy5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fZm9udHMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX3NldHRpbmdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBRVZGOzs7Ozs7Ozs7RUZvQkU7QUdwQkY7Ozs7Ozs7OztFSDhCRTtBSTlCRjs7Ozs7Ozs7O0VKd0NFO0FLeENGOzs7Ozs7Ozs7RUxrREU7QUN0Q0Y7RUFDRyxXQUFXLEVBQUE7QUFHZDtFQUNHLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkU4Q21CO0VGN0NuQixXQUFXLEVBQUE7QUFOZDtJQVNNLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0FBWnpCO0lBZ0JNLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTyxFQUFBO0FBbEJiO01BcUJTLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTtNQUNaLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIseUJFeUJhO01GeEJiLGNFNUJPO01GNkJQLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLG1EQUFtRDtNQUNuRCxnQkFBZ0I7TUFDaEIsbUJHTTBCO01ITDFCLGtCQUFrQjtNQUNsQix1QkFBdUIsRUFBQTtBQW5DaEM7UUFxQ1ksaUJBQWlCLEVBQUE7QUFyQzdCO1FBeUNZLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGNFQVE7UUZDUixtQkdsQ2dCLEVBQUE7QUhYNUI7SUFtRE0sZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtBQUl2QjtFQUNHLGdCQUFnQixFQUFBO0FBR25CO0VBQ0csYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBTHRCO0lBUU0sZ0JBQWdCO0lBQ2hCLG1CR2hDNkI7SUhpQzdCLGNFdEJjO0lGdUJkLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTtBQVp4QjtJQWdCTSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQUlyQjtFQUNHLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvY29sb3JzL2NvbG9ycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICB3aWR0aDogMTAwJTsgfVxuICAuaGVhZCAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5oZWFkIC5ub3RpZmljYXRpb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDsgfVxuICAgIC5oZWFkIC5ub3RpZmljYXRpb24tY29udGFpbmVyIC5ub3RpZmljYXRpb24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDYxNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgIGNvbG9yOiAjMDc3NkRGO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDAuOTM4cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAgIC5oZWFkIC5ub3RpZmljYXRpb24tY29udGFpbmVyIC5ub3RpZmljYXRpb24gaSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gICAgICAuaGVhZCAubm90aWZpY2F0aW9uLWNvbnRhaW5lciAubm90aWZpY2F0aW9uIC5jbG9zZS1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjQ0ZDRkNGO1xuICAgICAgICBmb250LXNpemU6IDEuNDI5cmVtOyB9XG4gIC5oZWFkIHN0LXNlYXJjaCB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG4uZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG4gIC5ncm91cCAuc3VidGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgICBjb2xvcjogIzU4NTg1ODtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cbiAgLmdyb3VwIC5jYXRlZ29yeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDsgfVxuXG4ubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XG5cbjpob3N0IHtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLWZ1bGw7XG4gICB3aWR0aDogMTAwJTtcblxuICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxuXG4gICAubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG5cbiAgICAgIC5ub3RpZmljYXRpb24ge1xuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgd2lkdGg6IDYxNHB4O1xuICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcbiAgICAgICAgIGNvbG9yOiAkYWN0aW9uO1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14c21hbGw7XG4gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgIGkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICB9XG5cbiAgICAgICAgIC5jbG9zZS1idXR0b24ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogJG5ldXRyYWwtMjA7XG4gICAgICAgICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0yMDtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgc3Qtc2VhcmNoIHtcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICB9XG59XG5cbnVsIHtcbiAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5ncm91cCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgLnN1YnRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U7XG4gICAgICBjb2xvcjogJG5ldXRyYWwtNzA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgIH1cblxuICAgLmNhdGVnb3J5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgfVxufVxuXG4ubGlzdCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIGZsZXgtd3JhcDogd3JhcDtcbiAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vLyBWQVJTOlxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBmb250LWZhbWlseTpcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xuXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcblxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxuXG4vLyBkZXByZWNhdGVkOlxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweCAoYmFzZSAxNilcblxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/theme/colors/colors.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.service.ts ***!
  \********************************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
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



var ColorsService = /** @class */ (function () {
    function ColorsService(http) {
        this.http = http;
    }
    ColorsService.prototype.getColorsList = function () {
        var _this = this;
        return this.http.get(location.pathname + 'assets/_colors.scss', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (text) { return _this.getColors(text); }));
    };
    ColorsService.prototype.getColors = function (text) {
        var _this = this;
        var colors = [];
        text = text.replace(/\/\*\*(.|[\r\n])*\*\//g, '');
        var lines = text.split(/\n/);
        var group = '';
        var regex = /\$(.*?)\:\s*?\#(.*?)\s*\!/;
        var execResult;
        lines.forEach(function (line) {
            if (line.startsWith('//')) {
                group = line.substring(2, line.length - 1).trim();
            }
            else if (line.startsWith('$')) {
                execResult = regex.exec(line);
                var color = '';
                var hex = '';
                if (execResult) {
                    colors.push({
                        category: group,
                        name: execResult[1] || '',
                        hex: '#' + execResult[2] || false,
                        rgb: _this.hexToRgb('#' + execResult[2])
                    });
                }
            }
        });
        return colors;
    };
    ColorsService.prototype.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    };
    ColorsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ColorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColorsService);
    return ColorsService;
}());



/***/ }),

/***/ "./src/app/modules/theme/colors/colors.ts":
/*!************************************************!*\
  !*** ./src/app/modules/theme/colors/colors.ts ***!
  \************************************************/
/*! exports provided: ColorsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsDemoComponent", function() { return ColorsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./colors.service */ "./src/app/modules/theme/colors/colors.service.ts");
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



var ColorsDemoComponent = /** @class */ (function () {
    function ColorsDemoComponent(_service, _cd) {
        var _this = this;
        this._service = _service;
        this._cd = _cd;
        this.searchValue = '';
        this.searchBy = 'name';
        this.notification = '';
        this.hasNotification = false;
        this.opacity = 0;
        this.colorsList = this._service.getColorsList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (list) { return _this.getGroupedList(list); }));
    }
    ColorsDemoComponent.prototype.onSearchResult = function (searchData) {
        this.searchValue = searchData.text;
    };
    ColorsDemoComponent.prototype.onCopyColorName = function (name) {
        this.notification = "Copied in clipboard '" + name + "'";
        this.animate(true);
    };
    ColorsDemoComponent.prototype.closeNotification = function () {
        this.stopAnimation(false);
        this.animate(false);
    };
    ColorsDemoComponent.prototype.getGroupedList = function (list) {
        var groups = {};
        list.forEach(function (color) {
            if (!groups[color.category]) {
                groups[color.category] = [];
            }
            groups[color.category].push(color);
        });
        return Object.keys(groups).map(function (key) { return groups[key]; });
    };
    ColorsDemoComponent.prototype.animate = function (show) {
        var _this = this;
        this.stopAnimation(true);
        this.hasNotification = true;
        this.animationInterval = setInterval(function () { return show ? _this.increaseOpacity() : _this.decreaseOpacity(); }, 50);
    };
    ColorsDemoComponent.prototype.stopAnimation = function (clear) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        if (clear) {
            this.hasNotification = false;
        }
    };
    ColorsDemoComponent.prototype.increaseOpacity = function () {
        var _this = this;
        if (this.opacity >= 1) {
            this.stopAnimation(false);
            setTimeout(function () { return _this.animate(false); }, 2000);
        }
        else {
            this.opacity += 0.05;
            this._cd.markForCheck();
        }
    };
    ColorsDemoComponent.prototype.decreaseOpacity = function () {
        if (this.opacity <= 0) {
            this.stopAnimation(true);
        }
        else {
            this.opacity -= 0.05;
            this._cd.markForCheck();
        }
    };
    ColorsDemoComponent.ctorParameters = function () { return [
        { type: _colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ColorsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'colors-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./colors.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/colors/colors.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./colors.scss */ "./src/app/modules/theme/colors/colors.scss")).default]
        }),
        __metadata("design:paramtypes", [_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ColorsDemoComponent);
    return ColorsDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/fonts/font/font.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/theme/fonts/font/font.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.font {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-left: 5px;\n  font-weight: 400;\n  font-size: 1rem; }\n.font .name {\n    display: flex;\n    flex-direction: row;\n    text-align: center;\n    color: #888888; }\n.font .font-name {\n    margin-right: 10px; }\n.font .font-value {\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9mb250LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9mb250cy9mb250L2ZvbnQuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUk5QkY7Ozs7Ozs7OztFSndDRTtBS3hDRjs7Ozs7Ozs7O0VMa0RFO0FDdENGO0VBQ0csYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlR01xQixFQUFBO0FIWnhCO0lBU00sYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0V1Q2MsRUFBQTtBRm5EcEI7SUFnQk0sa0JBQWtCLEVBQUE7QUFoQnhCO0lBb0JNLGtCQUFrQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udC9mb250LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4uZm9udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDFyZW07IH1cbiAgLmZvbnQgLm5hbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM4ODg4ODg7IH1cbiAgLmZvbnQgLmZvbnQtbmFtZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gIC5mb250IC5mb250LXZhbHVlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XG5cbi5mb250IHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE0O1xuXG4gICAubmFtZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkbmV1dHJhbC01MDtcbiAgIH1cblxuICAgLmZvbnQtbmFtZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICB9XG5cbiAgIC5mb250LXZhbHVlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgIH1cbn1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdCNUU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uOiAjMDc3NkRGICFkZWZhdWx0O1xuJGFjdGlvbi0xMDogI0U2RjFGQyAhZGVmYXVsdDtcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTYwOiAjNkFBREVDICFkZWZhdWx0O1xuJGFjdGlvbi04MDogIzM5OTFFNSAhZGVmYXVsdDtcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xuJGFjdGlvbi0xNTA6ICMwMzNCNzAgIWRlZmF1bHQ7XG5cbi8vIHNwYWNlOlxuJHNwYWNlOiAjMjczMjNEICFkZWZhdWx0O1xuJHNwYWNlLTU6ICNGM0Y2RjggIWRlZmF1bHQ7XG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XG4kc3BhY2UtMjA6ICNDREQ2REYgIWRlZmF1bHQ7XG4kc3BhY2UtMzA6ICNBQUI3QzQgIWRlZmF1bHQ7XG4kc3BhY2UtNDA6ICM5QUE5QjggIWRlZmF1bHQ7XG4kc3BhY2UtNTA6ICM4ODk4QTcgIWRlZmF1bHQ7XG4kc3BhY2UtNzA6ICM2QzdCOEIgIWRlZmF1bHQ7XG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XG4kc3BhY2UtMTEwOiAjMEYxQjI3ICFkZWZhdWx0O1xuXG4vLyBzdWNjZXNzOlxuJHN1Y2Nlc3M6ICMwQ0FBNzAgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMDogI0U3RjdGMSAhZGVmYXVsdDtcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcbiRzdWNjZXNzLTE0MDogIzA3NjY0MyAhZGVmYXVsdDtcblxuLy8gd2FybmluZzpcbiR3YXJuaW5nOiAjRUM3RTEzICFkZWZhdWx0O1xuJHdhcm5pbmctMTA6ICNGREYyRTcgIWRlZmF1bHQ7XG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XG4kd2FybmluZy0xNDA6ICM4RTRDMEIgIWRlZmF1bHQ7XG5cbi8vIGVycm9yOlxuJGVycm9yOiAjREYyOTM1ICFkZWZhdWx0O1xuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcbiRlcnJvci0xNDA6ICM4NjE5MjAgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbDogIzExMTExMSAhZGVmYXVsdDtcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xuJG5ldXRyYWwtODogI0VDRUNFQyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yMDogI0NGQ0ZDRiAhZGVmYXVsdDtcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XG4kbmV1dHJhbC01MDogIzg4ODg4OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XG4kbmV1dHJhbC04MDogIzQxNDE0MSAhZGVmYXVsdDtcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBkZXByZWNhdGVkOlxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAjODhjNWVlICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZSAoYmFzZSAxNCk6XG4kZWdlby1mb250LXNpemUtMTA6IDAuNzE0cmVtICFkZWZhdWx0OyAvLyAxMHB4XG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XG4kZWdlby1mb250LXNpemUtMTQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLyAxNHB4XG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1mb250LXNpemUtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XG4kZWdlby1mb250LXNpemUtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XG4kZWdlby1mb250LXNpemUtNDg6IDMuNDI5cmVtICFkZWZhdWx0OyAvLyA0OHB4XG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XG5cbi8vLyBsaW5lLWhlaWdodCAoYmFzZSAxNCk6XG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxuJGVnZW8tbGluZS1oZWlnaHQtMjI6IDEuNTcxcmVtICFkZWZhdWx0OyAvLyAyMnB4XG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxuJGVnZW8tbGluZS1oZWlnaHQtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxuJGVnZW8tbGluZS1oZWlnaHQtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxuJGVnZW8tbGluZS1oZWlnaHQtNTg6IDQuMTQzcmVtICFkZWZhdWx0OyAvLyA1OHB4XG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcblxuLy8gZGVwcmVjYXRlZDpcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXG5cbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweCAoYmFzZSAxNilcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gei1pbmRleFxuXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XG4kbWVudS16LWluZGV4OiA3NTAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/modules/theme/fonts/font/font.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/theme/fonts/font/font.ts ***!
  \**************************************************/
/*! exports provided: FontDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontDemoComponent", function() { return FontDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/app/modules/theme/utils.ts");
/* harmony import */ var _fonts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts.model */ "./src/app/modules/theme/fonts/fonts.model.ts");
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



var FontDemoComponent = /** @class */ (function () {
    function FontDemoComponent() {
        this.copyFontName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FontDemoComponent.prototype.onClick = function () {
        var result = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["copyToClipboard"])(this.font.name);
        if (result) {
            this.copyFontName.emit(this.font.name);
        }
    };
    Object.defineProperty(FontDemoComponent.prototype, "fontFamily", {
        get: function () {
            return this.font.category === _fonts_model__WEBPACK_IMPORTED_MODULE_2__["CATEGORY"].FONT_FAMILY ? this.font.value : 'Nunito Sans';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontDemoComponent.prototype, "fontSize", {
        get: function () {
            return this.font.category === _fonts_model__WEBPACK_IMPORTED_MODULE_2__["CATEGORY"].FONT_SIZE ? this.font.value : '1rem';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FontDemoComponent.prototype, "hasFontPixels", {
        get: function () {
            return this.font && this.font.pixels !== undefined && this.font.pixels !== null && this.font.pixels.trim().length > 0;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _fonts_model__WEBPACK_IMPORTED_MODULE_2__["Font"])
    ], FontDemoComponent.prototype, "font", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FontDemoComponent.prototype, "copyFontName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FontDemoComponent.prototype, "textElement", void 0);
    FontDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'font-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./font.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/fonts/font/font.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./font.scss */ "./src/app/modules/theme/fonts/font/font.scss")).default]
        })
    ], FontDemoComponent);
    return FontDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/fonts/fonts.model.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/theme/fonts/fonts.model.ts ***!
  \****************************************************/
/*! exports provided: CATEGORY, Font, FONTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
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
var CATEGORY;
(function (CATEGORY) {
    CATEGORY[CATEGORY["FONT_FAMILY"] = 0] = "FONT_FAMILY";
    CATEGORY[CATEGORY["FONT_SIZE"] = 1] = "FONT_SIZE";
    CATEGORY[CATEGORY["LINE_HEIGHT"] = 2] = "LINE_HEIGHT";
})(CATEGORY || (CATEGORY = {}));
var Font = /** @class */ (function () {
    function Font() {
    }
    return Font;
}());

var FONTS = [
    // Font family
    [
        { category: CATEGORY.FONT_FAMILY, name: '$egeo-nunito-sans', value: 'Nunito Sans' }
    ],
    // Font size
    [
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-32', value: '2rem', pixels: '32px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxxlarge', value: '1.813rem', pixels: '29px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xxlarge', value: '1.563rem', pixels: '25px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xlarge', value: '1.375rem', pixels: '22px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-20', value: '1.25rem', pixels: '20px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-18', value: '1.125rem', pixels: '18px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-16', value: '1rem', pixels: '16px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-xsmall', value: '0.938rem', pixels: '15px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-14', value: '0.875rem', pixels: '14px' },
        { category: CATEGORY.FONT_SIZE, name: '$egeo-font-size-12', value: '0.75rem', pixels: '12px' }
    ],
    // Line height:
    [
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-giant', value: '2.375rem', pixels: '38px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxxlarge', value: '2.125rem', pixels: '34px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxlarge', value: '1.875rem', pixels: '30px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-26', value: '1.625rem', pixels: '26px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-24', value: '1.5rem', pixels: '24px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-22', value: '1.375rem', pixels: '22px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-small', value: '1.313rem', pixels: '21px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-20', value: '1.25rem', pixels: '20px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-18', value: '1.125rem', pixels: '18px' },
        { category: CATEGORY.LINE_HEIGHT, name: '$egeo-line-height-xxxsmall', value: '1.063rem', pixels: '17px' }
    ]
];


/***/ }),

/***/ "./src/app/modules/theme/fonts/fonts.scss":
/*!************************************************!*\
  !*** ./src/app/modules/theme/fonts/fonts.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  left: 0;\n  width: 100%;\n  background-color: #FFFFFF; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    color: #0776DF;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #CFCFCF;\n      font-size: 1.429rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto; }\nul {\n  list-style: none; }\n.group {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 20px; }\n.group .subtitle {\n    font-weight: 400;\n    font-size: 1.375rem;\n    color: #585858;\n    text-transform: capitalize;\n    margin-bottom: 5px; }\n.group .category {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n.list {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZm9udHMvZm9udHMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2ZvbnRzL2ZvbnRzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19pbmRleC5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fY29sb3JzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3RDRDtFQUNHLFdBQVcsRUFBQTtBQUdkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJFNENtQixFQUFBO0FGbkRyQjtJQVdNLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQixFQUFBO0FBZHpCO0lBa0JNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJFNEJlO0lGM0JmLGNFekJTO0lGMEJULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1EQUFtRDtJQUNuRCxnQkFBZ0I7SUFDaEIsbUJHUzRCO0lIUjVCLGtCQUFrQjtJQUNsQix1QkFBdUIsRUFBQTtBQWhDN0I7TUFrQ1MsaUJBQWlCLEVBQUE7QUFsQzFCO01Bc0NTLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsU0FBUztNQUNULGNFR1U7TUZGVixtQkcvQmtCLEVBQUE7QUhYM0I7SUErQ00sZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtBQUt2QjtFQUNHLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0csYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBTHRCO0lBUU0sZ0JBQWdCO0lBQ2hCLG1CRzdCNkI7SUg4QjdCLGNFbkJjO0lGb0JkLDBCQUEwQjtJQUMxQixrQkFBa0IsRUFBQTtBQVp4QjtJQWdCTSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTtBQUlwQjtFQUNHLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9mb250cy9mb250cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfVxuICAuaGVhZCAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5oZWFkIC5ub3RpZmljYXRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA2MTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBjb2xvcjogIzA3NzZERjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDFweCByZ2JhKDEyNCwgMTI0LCAxMjQsIDAuMTUpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAwLjkzOHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICAuaGVhZCAubm90aWZpY2F0aW9uIGkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cbiAgICAuaGVhZCAubm90aWZpY2F0aW9uIC5jbG9zZS1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICBjb2xvcjogI0NGQ0ZDRjtcbiAgICAgIGZvbnQtc2l6ZTogMS40MjlyZW07IH1cbiAgLmhlYWQgc3Qtc2VhcmNoIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IH1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbiAgLmdyb3VwIC5zdWJ0aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgIGNvbG9yOiAjNTg1ODU4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDsgfVxuICAuZ3JvdXAgLmNhdGVnb3J5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbiBAaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG4gOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuIH1cblxuIC5oZWFkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgZmxleC13cmFwOiBub3dyYXA7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgbGVmdDogMDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcblxuXG4gICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICB3aWR0aDogNjE0cHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLWZ1bGw7XG4gICAgICAgY29sb3I6ICRhY3Rpb247XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXhzbWFsbDtcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgaSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgfVxuXG4gICAgICAgLmNsb3NlLWJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICBjb2xvcjogJG5ldXRyYWwtMjA7XG4gICAgICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMjA7XG4gICAgICAgfVxuICAgIH1cblxuICAgIHN0LXNlYXJjaCB7XG4gICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiB9XG5cblxuIHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuIH1cblxuLmdyb3VwIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgZmxleC13cmFwOiB3cmFwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAuc3VidGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXhsYXJnZTtcbiAgICAgIGNvbG9yOiAkbmV1dHJhbC03MDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgfVxuXG4gICAuY2F0ZWdvcnkge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICB9XG59XG5cbiAubGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuIH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICdmb250cyc7XG5AaW1wb3J0ICdzZXR0aW5ncyc7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdCNUU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uOiAjMDc3NkRGICFkZWZhdWx0O1xuJGFjdGlvbi0xMDogI0U2RjFGQyAhZGVmYXVsdDtcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTYwOiAjNkFBREVDICFkZWZhdWx0O1xuJGFjdGlvbi04MDogIzM5OTFFNSAhZGVmYXVsdDtcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xuJGFjdGlvbi0xNTA6ICMwMzNCNzAgIWRlZmF1bHQ7XG5cbi8vIHNwYWNlOlxuJHNwYWNlOiAjMjczMjNEICFkZWZhdWx0O1xuJHNwYWNlLTU6ICNGM0Y2RjggIWRlZmF1bHQ7XG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XG4kc3BhY2UtMjA6ICNDREQ2REYgIWRlZmF1bHQ7XG4kc3BhY2UtMzA6ICNBQUI3QzQgIWRlZmF1bHQ7XG4kc3BhY2UtNDA6ICM5QUE5QjggIWRlZmF1bHQ7XG4kc3BhY2UtNTA6ICM4ODk4QTcgIWRlZmF1bHQ7XG4kc3BhY2UtNzA6ICM2QzdCOEIgIWRlZmF1bHQ7XG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XG4kc3BhY2UtMTEwOiAjMEYxQjI3ICFkZWZhdWx0O1xuXG4vLyBzdWNjZXNzOlxuJHN1Y2Nlc3M6ICMwQ0FBNzAgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMDogI0U3RjdGMSAhZGVmYXVsdDtcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcbiRzdWNjZXNzLTE0MDogIzA3NjY0MyAhZGVmYXVsdDtcblxuLy8gd2FybmluZzpcbiR3YXJuaW5nOiAjRUM3RTEzICFkZWZhdWx0O1xuJHdhcm5pbmctMTA6ICNGREYyRTcgIWRlZmF1bHQ7XG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XG4kd2FybmluZy0xNDA6ICM4RTRDMEIgIWRlZmF1bHQ7XG5cbi8vIGVycm9yOlxuJGVycm9yOiAjREYyOTM1ICFkZWZhdWx0O1xuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcbiRlcnJvci0xNDA6ICM4NjE5MjAgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbDogIzExMTExMSAhZGVmYXVsdDtcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xuJG5ldXRyYWwtODogI0VDRUNFQyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yMDogI0NGQ0ZDRiAhZGVmYXVsdDtcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XG4kbmV1dHJhbC01MDogIzg4ODg4OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XG4kbmV1dHJhbC04MDogIzQxNDE0MSAhZGVmYXVsdDtcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBkZXByZWNhdGVkOlxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAjODhjNWVlICFkZWZhdWx0O1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLy8gVkFSUzpcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gZm9udC1mYW1pbHk6XG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcblxuLy8vIGZvbnQtc2l6ZSAoYmFzZSAxNCk6XG4kZWdlby1mb250LXNpemUtMTA6IDAuNzE0cmVtICFkZWZhdWx0OyAvLyAxMHB4XG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XG4kZWdlby1mb250LXNpemUtMTQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLyAxNHB4XG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1mb250LXNpemUtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XG4kZWdlby1mb250LXNpemUtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XG4kZWdlby1mb250LXNpemUtNDg6IDMuNDI5cmVtICFkZWZhdWx0OyAvLyA0OHB4XG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XG5cbi8vLyBsaW5lLWhlaWdodCAoYmFzZSAxNCk6XG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxuJGVnZW8tbGluZS1oZWlnaHQtMjI6IDEuNTcxcmVtICFkZWZhdWx0OyAvLyAyMnB4XG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxuJGVnZW8tbGluZS1oZWlnaHQtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxuJGVnZW8tbGluZS1oZWlnaHQtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxuJGVnZW8tbGluZS1oZWlnaHQtNTg6IDQuMTQzcmVtICFkZWZhdWx0OyAvLyA1OHB4XG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcblxuLy8gZGVwcmVjYXRlZDpcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXG5cbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweCAoYmFzZSAxNilcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweCAoYmFzZSAxNilcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gei1pbmRleFxuXG4vLyBUaGlzIHBvc2l0aW9ucyBoYXZlIHRvIGJlIHNvcnRlZCBpbiBhIGRlc2NlbmRhbnQgb3JkZXIuIFdoZW4geW91IGFkZCBhIG5ldyBwb3NpdGlvbiwgbWFrZSBzdXJlIHRoZXkgYXJlIHNvcnRlZCBjb3JyZWN0bHkuXG4kbW9kYWwtei1pbmRleDogMTAwMDAgIWRlZmF1bHQ7XG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcbiRmdWxsc2NyZWVuLXotaW5kZXg6IDgwMDAgIWRlZmF1bHQ7XG4kbWVudS16LWluZGV4OiA3NTAwICFkZWZhdWx0O1xuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/modules/theme/fonts/fonts.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/theme/fonts/fonts.ts ***!
  \**********************************************/
/*! exports provided: FontsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontsDemoComponent", function() { return FontsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fonts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts.model */ "./src/app/modules/theme/fonts/fonts.model.ts");
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


var FontsDemoComponent = /** @class */ (function () {
    function FontsDemoComponent(_cd) {
        this._cd = _cd;
        this.fontsList = _fonts_model__WEBPACK_IMPORTED_MODULE_1__["FONTS"];
        this.searchValue = '';
        this.searchBy = 'name';
        this.notification = '';
        this.hasNotification = false;
        this.opacity = 0;
    }
    FontsDemoComponent.prototype.onSearchResult = function (search) {
        this.searchValue = search;
    };
    FontsDemoComponent.prototype.onCopyFontName = function (name) {
        this.notification = "Copied in clipboard '" + name + "'";
        this.animate(true);
    };
    FontsDemoComponent.prototype.closeNotification = function () {
        this.stopAnimation(false);
        this.animate(false);
    };
    FontsDemoComponent.prototype.categoryToString = function (category) {
        switch (category) {
            case _fonts_model__WEBPACK_IMPORTED_MODULE_1__["CATEGORY"].FONT_FAMILY: return 'Font Family';
            case _fonts_model__WEBPACK_IMPORTED_MODULE_1__["CATEGORY"].FONT_SIZE: return 'Font Size';
            case _fonts_model__WEBPACK_IMPORTED_MODULE_1__["CATEGORY"].LINE_HEIGHT: return 'Line Height';
            default: return '';
        }
    };
    FontsDemoComponent.prototype.animate = function (show) {
        var _this = this;
        this.stopAnimation(true);
        this.hasNotification = true;
        this.animationInterval = setInterval(function () { return show ? _this.increaseOpacity() : _this.decreaseOpacity(); }, 50);
    };
    FontsDemoComponent.prototype.stopAnimation = function (clear) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        if (clear) {
            this.hasNotification = false;
        }
    };
    FontsDemoComponent.prototype.increaseOpacity = function () {
        var _this = this;
        if (this.opacity >= 1) {
            this.stopAnimation(false);
            setTimeout(function () { return _this.animate(false); }, 2000);
        }
        else {
            this.opacity += 0.05;
            this._cd.markForCheck();
        }
    };
    FontsDemoComponent.prototype.decreaseOpacity = function () {
        if (this.opacity <= 0) {
            this.stopAnimation(true);
        }
        else {
            this.opacity -= 0.05;
            this._cd.markForCheck();
        }
    };
    FontsDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    FontsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fonts-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fonts.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/fonts/fonts.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fonts.scss */ "./src/app/modules/theme/fonts/fonts.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], FontsDemoComponent);
    return FontsDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/grid/grid.scss":
/*!**********************************************!*\
  !*** ./src/app/modules/theme/grid/grid.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\nsection {\n  margin-bottom: 40px; }\n.grid-example {\n  font-weight: 400;\n  font-size: 1.143rem;\n  margin-bottom: 40px;\n  margin-left: 2px; }\n.example .row {\n  background-color: #bce7f6; }\n.example .box {\n  margin: 10px 0;\n  background-color: #77b1e1;\n  color: #707070;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvZ3JpZC9ncmlkLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9ncmlkL2dyaWQuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUk5QkY7Ozs7Ozs7OztFSndDRTtBS3hDRjs7Ozs7Ozs7O0VMa0RFO0FDdENGO0VBQ0csV0FBVyxFQUFBO0FBR2Q7RUFDRyxtQkFBbUIsRUFBQTtBQUd0QjtFQUNHLGdCQUFnQjtFQUNoQixtQkdHeUI7RUhGekIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBR25CO0VBRU0seUJFb0R5QixFQUFBO0FGdEQvQjtFQUtNLGNBQWM7RUFDZCx5QkVpRHlCO0VGaER6QixjRThCYztFRjdCZCxrQkFBa0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL2dyaWQvZ3JpZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuOmhvc3Qge1xuICB3aWR0aDogMTAwJTsgfVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDsgfVxuXG4uZ3JpZC1leGFtcGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjE0M3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDsgfVxuXG4uZXhhbXBsZSAucm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjZTdmNjsgfVxuXG4uZXhhbXBsZSAuYm94IHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2IxZTE7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XG5cbjpob3N0IHtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG5zZWN0aW9uIHtcbiAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5ncmlkLWV4YW1wbGUge1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE2O1xuICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5leGFtcGxlIHtcbiAgIC5yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1pc2MtYXF1YS1saWdodDtcbiAgIH1cbiAgIC5ib3gge1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWlzYy12aWtpbmc7XG4gICAgICBjb2xvcjogJG5ldXRyYWwtNjA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB9XG59XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemUgKGJhc2UgMTQpOlxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxuJGVnZW8tZm9udC1zaXplLTEyOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gMTJweFxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxuJGVnZW8tZm9udC1zaXplLTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tZm9udC1zaXplLTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxuJGVnZW8tZm9udC1zaXplLTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxuXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxuXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJG1lbnUtei1pbmRleDogNzUwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/theme/grid/grid.ts":
/*!********************************************!*\
  !*** ./src/app/modules/theme/grid/grid.ts ***!
  \********************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./grid.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/grid/grid.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./grid.scss */ "./src/app/modules/theme/grid/grid.scss")).default]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%;\n  display: flex; }\n.icon-demo {\n  padding: 20px;\n  color: #707070;\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  width: 120px;\n  height: 125px;\n  margin: 2px; }\n.icon-demo:hover {\n    background-color: rgba(6, 94, 178, 0.8);\n    color: #E6F1FC; }\n.icon-demo .glyph {\n    align-self: center;\n    padding: 10px;\n    font-size: 1.563rem;\n    font-family: \"ico_stratio\"; }\n.icon-demo .name {\n    font-weight: 400;\n    font-family: \"Nunito Sans\";\n    font-size: 0.938rem;\n    align-self: center;\n    white-space: pre-wrap;\n    text-align: center;\n    padding-top: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29uLWRlbW8vaWNvbi1kZW1vLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9pY29ucy1kZW1vL2ljb24tZGVtby9pY29uLWRlbW8uc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUk5QkY7Ozs7Ozs7OztFSndDRTtBS3hDRjs7Ozs7Ozs7O0VMa0RFO0FDdENGO0VBQ0csV0FBVztFQUNYLGFBQWEsRUFBQTtBQUdoQjtFQUNHLGFBQWE7RUFDYixjRTZDaUI7RUY1Q2pCLHlCRStDbUI7RUY5Q25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXLEVBQUE7QUFSZDtJQVdNLHVDRVJjO0lGU2QsY0ViYSxFQUFBO0FGQ25CO0lBZ0JNLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJHa0I2QjtJSGpCN0IsMEJHbEIyQyxFQUFBO0FIRGpEO0lBdUJNLGdCQUFnQjtJQUNoQiwwQkd4QjJDO0lIeUIzQyxtQkdhNkI7SUhaN0Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9pY29ucy1kZW1vL2ljb24tZGVtby9pY29uLWRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLmljb24tZGVtbyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTI1cHg7XG4gIG1hcmdpbjogMnB4OyB9XG4gIC5pY29uLWRlbW86aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNiwgOTQsIDE3OCwgMC44KTtcbiAgICBjb2xvcjogI0U2RjFGQzsgfVxuICAuaWNvbi1kZW1vIC5nbHlwaCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjU2M3JlbTtcbiAgICBmb250LWZhbWlseTogXCJpY29fc3RyYXRpb1wiOyB9XG4gIC5pY29uLWRlbW8gLm5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIjtcbiAgICBmb250LXNpemU6IDAuOTM4cmVtO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAzcHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbkBpbXBvcnQgJ2NvbnN0YW50cy9pbmRleCc7XG5cbjpob3N0IHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgZGlzcGxheTogZmxleDtcbn1cblxuLmljb24tZGVtbyB7XG4gICBwYWRkaW5nOiAyMHB4O1xuICAgY29sb3I6ICRuZXV0cmFsLTYwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgd2lkdGg6IDEyMHB4O1xuICAgaGVpZ2h0OiAxMjVweDtcbiAgIG1hcmdpbjogMnB4O1xuXG4gICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGFjdGlvbi0xMjAsIDAuOCk7XG4gICAgICBjb2xvcjogJGFjdGlvbi0xMDtcbiAgIH1cblxuICAgLmdseXBoIHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlO1xuICAgICAgZm9udC1mYW1pbHk6ICRlZ2VvLXN0cmF0aW8taWNvbnM7XG4gICB9XG5cbiAgIC5uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LWZhbWlseTogJGVnZW8tbnVuaXRvLXNhbnM7XG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14c21hbGw7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgfVxufVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuQGltcG9ydCAnY29sb3JzJztcbkBpbXBvcnQgJ2ZvbnRzJztcbkBpbXBvcnQgJ3NldHRpbmdzJztcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vLyBWQVJTOlxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBmb250LWZhbWlseTpcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xuXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcblxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxuXG4vLyBkZXByZWNhdGVkOlxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweCAoYmFzZSAxNilcblxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyB6LWluZGV4XG5cbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cbiRtb2RhbC16LWluZGV4OiAxMDAwMCAhZGVmYXVsdDtcbiRhbGVydC16LWluZGV4OiA5MDAwICFkZWZhdWx0O1xuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcbiRtZW51LXotaW5kZXg6IDc1MDAgIWRlZmF1bHQ7XG4kaGVhZGVyLXotaW5kZXg6IDcwMDAgIWRlZmF1bHQ7XG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icon-demo/icon-demo.ts ***!
  \*****************************************************************/
/*! exports provided: IconDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDemoComponent", function() { return IconDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var IconDemoComponent = /** @class */ (function () {
    function IconDemoComponent() {
        this.copyIconName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    IconDemoComponent.prototype.getClass = function () {
        return "icon-" + this.icon.name;
    };
    IconDemoComponent.prototype.getCode = function () {
        return String.fromCharCode(+this.icon.key.substr(2));
    };
    IconDemoComponent.prototype.onClick = function () {
        this.copyToClipboard();
    };
    IconDemoComponent.prototype.copyToClipboard = function () {
        var success = true;
        var range = document.createRange();
        var selection;
        var inputEL = this.textElement.nativeElement;
        var text = inputEL.textContent;
        // For IE.
        if (window.clipboardData) {
            window.clipboardData.setData('Text', text);
        }
        else {
            // Create a temporary element off screen.
            var tmpElem = document.createElement('div');
            tmpElem.style.position = 'fixed';
            tmpElem.style.left = '-1000px';
            tmpElem.style.top = '-1000px';
            // Add the input value to the temp element.
            tmpElem.textContent = text;
            document.body.appendChild(tmpElem);
            // Select temp element.
            range.selectNodeContents(tmpElem);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            // Lets copy.
            try {
                success = document.execCommand('copy', false, null);
            }
            catch (e) {
                console.error('Error on copy: ', e);
            }
            tmpElem.remove();
            if (success && text) {
                this.copyIconName.emit(text);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], IconDemoComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IconDemoComponent.prototype, "copyIconName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nameEl', { static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IconDemoComponent.prototype, "textElement", void 0);
    IconDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icon-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./icon-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/icons-demo/icon-demo/icon-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./icon-demo.scss */ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.scss")).default]
        })
    ], IconDemoComponent);
    return IconDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%;\n  font-family: \"Nunito Sans\"; }\n.head {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  left: 0;\n  width: 100%;\n  background-color: #FFFFFF; }\n.head .header-container {\n    display: flex;\n    flex-wrap: nowrap;\n    width: 100%;\n    align-items: center; }\n.head .notification {\n    position: relative;\n    margin: auto;\n    height: 40px;\n    width: 614px;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    color: #0776DF;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    box-shadow: 0 1px 4px 1px rgba(124, 124, 124, 0.15);\n    font-weight: 400;\n    font-size: 0.938rem;\n    text-align: center;\n    justify-content: center; }\n.head .notification i {\n      margin-right: 5px; }\n.head .notification .close-button {\n      position: absolute;\n      right: 20px;\n      top: 10px;\n      color: #CFCFCF;\n      font-size: 1.429rem; }\n.head st-search {\n    max-width: 200px;\n    min-width: 100px;\n    margin-left: auto;\n    margin-right: 100px; }\nul {\n  list-style: none; }\n.list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvaWNvbnMtZGVtby9pY29ucy1kZW1vLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9pY29ucy1kZW1vL2ljb25zLWRlbW8uc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2luZGV4LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19jb2xvcnMuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvL3NyYy90aGVtZS9jb25zdGFudHMvX2ZvbnRzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19zZXR0aW5ncy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUk5QkY7Ozs7Ozs7OztFSndDRTtBS3hDRjs7Ozs7Ozs7O0VMa0RFO0FDdENGO0VBQ0csV0FBVztFQUNYLDBCR0c4QyxFQUFBO0FIQWpEO0VBQ0csYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxXQUFXO0VBQ1gseUJFMkNtQixFQUFBO0FGbER0QjtJQVVNLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQixFQUFBO0FBYnpCO0lBaUJNLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJFNEJnQjtJRjNCaEIsY0V6QlU7SUYwQlYsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbURBQW1EO0lBQ25ELGdCQUFnQjtJQUNoQixtQkdTNkI7SUhSN0Isa0JBQWtCO0lBQ2xCLHVCQUF1QixFQUFBO0FBL0I3QjtNQWlDUyxpQkFBaUIsRUFBQTtBQWpDMUI7TUFxQ1Msa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxTQUFTO01BQ1QsY0VHVztNRkZYLG1CRy9CbUIsRUFBQTtBSFY1QjtJQThDTSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtBQUl6QjtFQUNHLGdCQUFnQixFQUFBO0FBR25CO0VBQ0csYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvbW9kdWxlcy90aGVtZS9pY29ucy1kZW1vL2ljb25zLWRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCI7IH1cblxuLmhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cbiAgLmhlYWQgLmhlYWRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaGVhZCAubm90aWZpY2F0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNjE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgY29sb3I6ICMwNzc2REY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAxcHggcmdiYSgxMjQsIDEyNCwgMTI0LCAwLjE1KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiBpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4OyB9XG4gICAgLmhlYWQgLm5vdGlmaWNhdGlvbiAuY2xvc2UtYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICNDRkNGQ0Y7XG4gICAgICBmb250LXNpemU6IDEuNDI5cmVtOyB9XG4gIC5oZWFkIHN0LXNlYXJjaCB7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7IH1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwOyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4gQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcblxuOmhvc3Qge1xuICAgd2lkdGg6IDEwMCU7XG4gICBmb250LWZhbWlseTogJGVnZW8tbnVuaXRvLXNhbnM7XG59XG5cbi5oZWFkIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgZmxleC13cmFwOiBub3dyYXA7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgbGVmdDogMDtcbiAgIHdpZHRoOiAxMDAlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcblxuICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgfVxuXG4gICAubm90aWZpY2F0aW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA2MTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLWZ1bGw7XG4gICAgICBjb2xvcjogJGFjdGlvbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMXB4IHJnYmEoMTI0LCAxMjQsIDEyNCwgMC4xNSk7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteHNtYWxsO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBpIHtcbiAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICAuY2xvc2UtYnV0dG9uIHtcbiAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgY29sb3I6ICRuZXV0cmFsLTIwO1xuICAgICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMjA7XG4gICAgICB9XG4gICB9XG5cbiAgIHN0LXNlYXJjaCB7XG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgIH1cbn1cblxudWwge1xuICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmxpc3Qge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemUgKGJhc2UgMTQpOlxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxuJGVnZW8tZm9udC1zaXplLTEyOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gMTJweFxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxuJGVnZW8tZm9udC1zaXplLTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tZm9udC1zaXplLTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxuJGVnZW8tZm9udC1zaXplLTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxuXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxuXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJG1lbnUtei1pbmRleDogNzUwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.service.ts ***!
  \****************************************************************/
/*! exports provided: IconsDemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsDemoService", function() { return IconsDemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
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



var IconsDemoService = /** @class */ (function () {
    function IconsDemoService(_http) {
        this._http = _http;
    }
    IconsDemoService.prototype.getIconList = function () {
        var _this = this;
        return this._http.get(location.pathname + 'assets/stratio-fonticon.css', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (text) { return _this.getIconClasses(text); }));
    };
    IconsDemoService.prototype.getIconClasses = function (text) {
        var result = [];
        var execResult;
        var regex = /.icon-(.*?)\:before {[\n].*?content: \"(.*?)"/gm;
        do {
            execResult = regex.exec(text);
            if (execResult) {
                result.push({
                    name: execResult[1] || '',
                    key: execResult[2] || ''
                });
            }
        } while (execResult);
        return result.sort(this.strComparator);
    };
    IconsDemoService.prototype.strComparator = function (item1, item2) {
        return item1.name.localeCompare(item2.name);
    };
    IconsDemoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    IconsDemoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IconsDemoService);
    return IconsDemoService;
}());



/***/ }),

/***/ "./src/app/modules/theme/icons-demo/icons-demo.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/theme/icons-demo/icons-demo.ts ***!
  \********************************************************/
/*! exports provided: IconsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsDemoComponent", function() { return IconsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _icons_demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons-demo.service */ "./src/app/modules/theme/icons-demo/icons-demo.service.ts");
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


var IconsDemoComponent = /** @class */ (function () {
    function IconsDemoComponent(_service, _cd) {
        this._service = _service;
        this._cd = _cd;
        this.searchValue = '';
        this.searchBy = 'name';
        this.notification = '';
        this.hasNotification = false;
        this.opacity = 0;
        this.iconList = this._service.getIconList();
    }
    IconsDemoComponent.prototype.onSearchResult = function (search) {
        this.searchValue = search.text;
    };
    IconsDemoComponent.prototype.onCopyIconName = function (name) {
        this.notification = "Copied in clipboard '" + name + "'";
        this.animate(true);
    };
    IconsDemoComponent.prototype.closeNotification = function () {
        this.stopAnimation(false);
        this.animate(false);
    };
    IconsDemoComponent.prototype.animate = function (show) {
        var _this = this;
        this.stopAnimation(true);
        this.hasNotification = true;
        this.animationInterval = setInterval(function () { return show ? _this.increaseOpacity() : _this.decreaseOpacity(); }, 50);
    };
    IconsDemoComponent.prototype.stopAnimation = function (clear) {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        if (clear) {
            this.hasNotification = false;
        }
    };
    IconsDemoComponent.prototype.increaseOpacity = function () {
        var _this = this;
        if (this.opacity >= 1) {
            this.stopAnimation(false);
            setTimeout(function () { return _this.animate(false); }, 2000);
        }
        else {
            this.opacity += 0.05;
            this._cd.markForCheck();
        }
    };
    IconsDemoComponent.prototype.decreaseOpacity = function () {
        if (this.opacity <= 0) {
            this.stopAnimation(true);
        }
        else {
            this.opacity -= 0.05;
            this._cd.markForCheck();
        }
    };
    IconsDemoComponent.ctorParameters = function () { return [
        { type: _icons_demo_service__WEBPACK_IMPORTED_MODULE_1__["IconsDemoService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    IconsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'icons-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./icons-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/icons-demo/icons-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./icons-demo.scss */ "./src/app/modules/theme/icons-demo/icons-demo.scss")).default]
        }),
        __metadata("design:paramtypes", [_icons_demo_service__WEBPACK_IMPORTED_MODULE_1__["IconsDemoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], IconsDemoComponent);
    return IconsDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/theme.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/theme/theme.module.ts ***!
  \***********************************************/
/*! exports provided: routes, ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _icons_demo_icon_demo_icon_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-demo/icon-demo/icon-demo */ "./src/app/modules/theme/icons-demo/icon-demo/icon-demo.ts");
/* harmony import */ var _icons_demo_icons_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons-demo/icons-demo */ "./src/app/modules/theme/icons-demo/icons-demo.ts");
/* harmony import */ var _icons_demo_icons_demo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons-demo/icons-demo.service */ "./src/app/modules/theme/icons-demo/icons-demo.service.ts");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme */ "./src/app/modules/theme/theme.ts");
/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid/grid */ "./src/app/modules/theme/grid/grid.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _colors_color_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./colors/color/color */ "./src/app/modules/theme/colors/color/color.ts");
/* harmony import */ var _colors_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colors/colors */ "./src/app/modules/theme/colors/colors.ts");
/* harmony import */ var _colors_colors_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./colors/colors.service */ "./src/app/modules/theme/colors/colors.service.ts");
/* harmony import */ var _fonts_font_font__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fonts/font/font */ "./src/app/modules/theme/fonts/font/font.ts");
/* harmony import */ var _fonts_fonts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fonts/fonts */ "./src/app/modules/theme/fonts/fonts.ts");
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















var routes = [
    {
        path: '', component: _theme__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'icons' },
            { path: 'icons', component: _icons_demo_icons_demo__WEBPACK_IMPORTED_MODULE_5__["IconsDemoComponent"] },
            { path: 'colors', component: _colors_colors__WEBPACK_IMPORTED_MODULE_11__["ColorsDemoComponent"] },
            { path: 'fonts', component: _fonts_fonts__WEBPACK_IMPORTED_MODULE_14__["FontsDemoComponent"] },
            { path: 'grid', component: _grid_grid__WEBPACK_IMPORTED_MODULE_8__["GridComponent"] }
        ]
    }
];
var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StSearchModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _theme__WEBPACK_IMPORTED_MODULE_7__["ThemeComponent"],
                _icons_demo_icons_demo__WEBPACK_IMPORTED_MODULE_5__["IconsDemoComponent"],
                _icons_demo_icon_demo_icon_demo__WEBPACK_IMPORTED_MODULE_4__["IconDemoComponent"],
                _grid_grid__WEBPACK_IMPORTED_MODULE_8__["GridComponent"],
                _colors_colors__WEBPACK_IMPORTED_MODULE_11__["ColorsDemoComponent"],
                _colors_color_color__WEBPACK_IMPORTED_MODULE_10__["ColorDemoComponent"],
                _fonts_fonts__WEBPACK_IMPORTED_MODULE_14__["FontsDemoComponent"],
                _fonts_font_font__WEBPACK_IMPORTED_MODULE_13__["FontDemoComponent"]
            ],
            providers: [
                _icons_demo_icons_demo_service__WEBPACK_IMPORTED_MODULE_6__["IconsDemoService"],
                _colors_colors_service__WEBPACK_IMPORTED_MODULE_12__["ColorsService"]
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ }),

/***/ "./src/app/modules/theme/theme.scss":
/*!******************************************!*\
  !*** ./src/app/modules/theme/theme.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n:host {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL21vZHVsZXMvdGhlbWUvdGhlbWUuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL3RoZW1lLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19pbmRleC5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fY29sb3JzLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby9zcmMvdGhlbWUvY29uc3RhbnRzL19mb250cy5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8vc3JjL3RoZW1lL2NvbnN0YW50cy9fc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3JDRjtFQUNHLFdBQVcsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9tb2R1bGVzL3RoZW1lL3RoZW1lLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlOyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb25zdGFudHMvaW5kZXgnO1xuXG5cbjpob3N0IHtcbiAgIHdpZHRoOiAxMDAlO1xufVxuXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8vIFZBUlM6XG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIGZvbnQtZmFtaWx5OlxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XG5cbi8vLyBmb250LXNpemUgKGJhc2UgMTQpOlxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxuJGVnZW8tZm9udC1zaXplLTEyOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gMTJweFxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxuJGVnZW8tZm9udC1zaXplLTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxuJGVnZW8tZm9udC1zaXplLTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxuJGVnZW8tZm9udC1zaXplLTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxuXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweCAoYmFzZSAxNilcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxuXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHggKGJhc2UgMTYpXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIHotaW5kZXhcblxuLy8gVGhpcyBwb3NpdGlvbnMgaGF2ZSB0byBiZSBzb3J0ZWQgaW4gYSBkZXNjZW5kYW50IG9yZGVyLiBXaGVuIHlvdSBhZGQgYSBuZXcgcG9zaXRpb24sIG1ha2Ugc3VyZSB0aGV5IGFyZSBzb3J0ZWQgY29ycmVjdGx5LlxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xuJGFsZXJ0LXotaW5kZXg6IDkwMDAgIWRlZmF1bHQ7XG4kZnVsbHNjcmVlbi16LWluZGV4OiA4MDAwICFkZWZhdWx0O1xuJG1lbnUtei1pbmRleDogNzUwMCAhZGVmYXVsdDtcbiRoZWFkZXItei1pbmRleDogNzAwMCAhZGVmYXVsdDtcblxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/theme/theme.ts":
/*!****************************************!*\
  !*** ./src/app/modules/theme/theme.ts ***!
  \****************************************/
/*! exports provided: ThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeComponent", function() { return ThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
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

var ThemeComponent = /** @class */ (function () {
    function ThemeComponent() {
        this.menu = [
            { label: 'Icons', url: '/theme/icons' },
            { label: 'Fonts', url: '/theme/fonts' },
            { label: 'Colors', url: '/theme/colors' },
            { label: 'Grid', url: '/theme/grid' }
        ];
    }
    ThemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'theme-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./theme.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/theme/theme.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./theme.scss */ "./src/app/modules/theme/theme.scss")).default]
        })
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/utils.ts":
/*!****************************************!*\
  !*** ./src/app/modules/theme/utils.ts ***!
  \****************************************/
/*! exports provided: copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
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
function copyToClipboard(value) {
    var success = true;
    var range = document.createRange();
    var selection;
    // For IE.
    if (window.clipboardData) {
        window.clipboardData.setData('Text', value);
        return true;
    }
    else {
        // Create a temporary element off screen.
        var tmpElem = document.createElement('div');
        tmpElem.style.position = 'fixed';
        tmpElem.style.left = '-1000px';
        tmpElem.style.top = '-1000px';
        // Add the input value to the temp element.
        tmpElem.textContent = value;
        document.body.appendChild(tmpElem);
        // Select temp element.
        range.selectNodeContents(tmpElem);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        // Lets copy.
        try {
            success = document.execCommand('copy', false, null);
        }
        catch (e) {
            console.error('Error on copy: ', e);
        }
        tmpElem.remove();
        return success;
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-theme-theme-module.js.map