(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-zero-page-demo-st-zero-page-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.html":
/*!*******************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n      <p class=\"introduction\">Zero page is displayed when there are no results to show in a table</p>\r\n      <span class=\"separator\"></span>\r\n      <h1 class=\"title\">Design and behaviour</h1>\r\n      <p class=\"paragraph\">This component is displayed with a button when users can perform a main action, usually create a new asset. This component can appear without button for informational purpose only in case the users can't perform any action when the table appears. In case the users could perform an action when the regular table view is displayed, like creating a new asset, please insert a button under the texts.\r\n      </p>\r\n      <span class=\"separator\"></span>\r\n      <h1 class=\"title\">Theme customization</h1>\r\n      <p class=\"paragraph\">You can customize some styles using the following css variables</p>\r\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\r\n      <span class=\"separator\"></span>\r\n\r\n      <h1 class=\"title\">Zero page without content</h1>\r\n      <st-zero-page class=\"zero-page-example\"\r\n                    title=\"Ups! There are no results for this search.\"\r\n                    info=\"Try with other terms.\"\r\n                    imageSource=\"assets/images/empty-box-icon.svg\">\r\n      </st-zero-page>\r\n\r\n      <h1 class=\"title\">Zero page with button in content</h1>\r\n      <st-zero-page class=\"zero-page-example\"\r\n                    title=\"There are no Variables created yet \"\r\n                    info=\"Variables help you to have consistent values through your Quality Rules, Attributes…\"\r\n                    imageSource=\"assets/images/variable-icon.svg\">\r\n                    <button class=\"button button-primary\">Create Variable</button>\r\n      </st-zero-page>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.zero-page-example {\n  width: 100%;\n  height: 500px; }\nbutton {\n  width: 25%;\n  margin: 15px auto; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXplcm8tcGFnZS1kZW1vL3N0LXplcm8tcGFnZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtemVyby1wYWdlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtemVyby1wYWdlLWRlbW9cXHN0LXplcm8tcGFnZS1kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUNDRjtFQUNHLFdBQVc7RUFDWCxhQUFhLEVBQUE7QUFHaEI7RUFDRyxVQUFVO0VBQ1YsaUJBQWlCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtemVyby1wYWdlLWRlbW8vc3QtemVyby1wYWdlLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uemVyby1wYWdlLWV4YW1wbGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDsgfVxuXG5idXR0b24ge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IDE1cHggYXV0bzsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLnplcm8tcGFnZS1leGFtcGxlIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgIHdpZHRoOiAyNSU7XHJcbiAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: StZeroPageDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StZeroPageDemoComponent", function() { return StZeroPageDemoComponent; });
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

var StZeroPageDemoComponent = /** @class */ (function () {
    function StZeroPageDemoComponent() {
        this.configDoc = {
            html: 'demo/st-zero-page-demo/st-zero-page-demo.component.html',
            ts: 'demo/st-zero-page-demo/st-zero-page-demo.component.ts',
            component: 'lib/st-zero-page/st-zero-page.component.ts'
        };
        this.cssProperties = [
            {
                name: '--egeo-st-zero-page__title--color',
                description: 'Title color',
                default: '$neutral'
            },
            {
                name: '--egeo-st-zero-page__title--font-size',
                description: 'Title font size',
                default: '$egeo-font-size-xlarge'
            },
            {
                name: '--egeo-st-zero-page__title--line-height',
                description: 'Title line height',
                default: '$egeo-line-height-18'
            },
            {
                name: '--egeo-st-zero-page__info--color',
                description: 'Info color',
                default: '$neutral-40'
            },
            {
                name: '--egeo-st-zero-page__info--font-size',
                description: 'Info font size',
                default: '$egeo-font-size-16'
            },
            {
                name: '--egeo-st-zero-page__info--line-height',
                description: 'Info line height',
                default: '$egeo-line-height-small'
            },
            {
                name: '--egeo-st-zero-page__info--padding',
                description: 'Info padding',
                default: '20px 0 30px'
            }
        ];
    }
    StZeroPageDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-zero-page-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-zero-page-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./st-zero-page-demo.component.scss */ "./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.scss")).default]
        })
    ], StZeroPageDemoComponent);
    return StZeroPageDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-zero-page-demo/st-zero-page-demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demos/st-zero-page-demo/st-zero-page-demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: StZeroPageDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StZeroPageDemoModule", function() { return StZeroPageDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_zero_page_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-zero-page-demo.component */ "./src/app/demos/st-zero-page-demo/st-zero-page-demo.component.ts");
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





var StZeroPageDemoModule = /** @class */ (function () {
    function StZeroPageDemoModule() {
    }
    StZeroPageDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StZeroPageModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_zero_page_demo_component__WEBPACK_IMPORTED_MODULE_3__["StZeroPageDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_4__["CssPropertyTableModule"]
            ],
            declarations: [_st_zero_page_demo_component__WEBPACK_IMPORTED_MODULE_3__["StZeroPageDemoComponent"]]
        })
    ], StZeroPageDemoModule);
    return StZeroPageDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-zero-page-demo-st-zero-page-demo-module.js.map