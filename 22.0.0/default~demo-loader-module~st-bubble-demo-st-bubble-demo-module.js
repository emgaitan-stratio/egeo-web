(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-bubble-demo-st-bubble-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-demo/st-bubble-demo.component.html":
/*!*************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-demo/st-bubble-demo.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n\r\n      <h1 class=\"title\">Theme customization</h1>\r\n      <p class=\"paragraph\">You can customize some styles using the following css variables</p>\r\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\r\n\r\n      <section class=\"bubble-demo-container\">\r\n         <h1 class=\"title\">Example</h1>\r\n         <div class=\"buttons\">\r\n            <st-switch label=\"Enabled animation\" [(formControl)]=\"animationFormControl\">\r\n            </st-switch>\r\n\r\n            <st-switch label=\"Small theme\" [(formControl)]=\"smallFormControl\">\r\n            </st-switch>\r\n\r\n            <st-switch label=\"Open to left\" [(formControl)]=\"openToLeftFormControl\">\r\n            </st-switch>\r\n         </div>\r\n         <div class=\"bubble-container\">\r\n            <st-bubble qaTag=\"bubble-demo\" [text]=\"text\" [hidden]=\"hidden\"\r\n                       [animation]=\"animationFormControl.value\"\r\n                       [small]=\" smallFormControl.value\"\r\n                       [offset]=\"{x: 38, y: 17}\"\r\n                       [openToLeft]=\"openToLeftFormControl.value\">\r\n\r\n               <button bubble-button class=\"bubble-demo-button button button-primary\" (click)=\"onClick()\">\r\n                  <span>Bubble</span>\r\n               </button>\r\n            </st-bubble>\r\n         </div>\r\n      </section>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.title {\n  display: block; }\n.bubble-demo-container {\n  width: 800px;\n  height: 300px; }\n.bubble-demo-items {\n  float: right; }\n.bubble-demo-button {\n  float: inherit; }\n.bubble-demo-content {\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.buttons {\n  float: left; }\n.bubble-container {\n  float: right; }\nst-switch {\n  display: block;\n  margin: 15px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWJ1YmJsZS1kZW1vL3N0LWJ1YmJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtYnViYmxlLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtYnViYmxlLWRlbW9cXHN0LWJ1YmJsZS1kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUNDRjtFQUNHLGNBQWMsRUFBQTtBQUdqQjtFQUNHLFlBQVk7RUFDWixhQUFhLEVBQUE7QUFHaEI7RUFDRyxZQUFZLEVBQUE7QUFHZjtFQUNHLGNBQWMsRUFBQTtBQUdqQjtFQUNHLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7QUFHdEI7RUFDRyxXQUFXLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0csY0FBYztFQUNkLFlBQVksRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1idWJibGUtZGVtby9zdC1idWJibGUtZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5idWJibGUtZGVtby1jb250YWluZXIge1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogMzAwcHg7IH1cblxuLmJ1YmJsZS1kZW1vLWl0ZW1zIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5idWJibGUtZGVtby1idXR0b24ge1xuICBmbG9hdDogaW5oZXJpdDsgfVxuXG4uYnViYmxlLWRlbW8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG5cbi5idXR0b25zIHtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuLmJ1YmJsZS1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7IH1cblxuc3Qtc3dpdGNoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTVweDsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLnRpdGxlIHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5idWJibGUtZGVtby1jb250YWluZXIge1xyXG4gICB3aWR0aDogODAwcHg7XHJcbiAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5idWJibGUtZGVtby1pdGVtcyB7XHJcbiAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmJ1YmJsZS1kZW1vLWJ1dHRvbiB7XHJcbiAgIGZsb2F0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uYnViYmxlLWRlbW8tY29udGVudCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uYnViYmxlLWNvbnRhaW5lciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5zdC1zd2l0Y2gge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: StBubbleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleDemoComponent", function() { return StBubbleDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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


var StBubbleDemoComponent = /** @class */ (function () {
    function StBubbleDemoComponent() {
        this.configDoc = {
            html: 'demo/st-bubble-demo/st-bubble-demo.component.html',
            ts: 'demo/st-bubble-demo/st-bubble-demo.component.ts',
            component: 'lib/st-bubble/st-bubble.component.ts'
        };
        this.text = 'What needed to deploy Crossdata?';
        this.hidden = true;
        this.animationFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.smallFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.openToLeftFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.cssProperties = [
            {
                name: '--egeo-st-bubble__arrow--margin-right',
                description: 'Bubble arrow margin right',
                default: '15px'
            },
            {
                name: '--egeo-st-bubble__text--font-size',
                description: 'Bubble text font size',
                default: '$egeo-font-size-14'
            },
            {
                name: '--egeo-st-bubble__text--padding',
                description: 'Bubble text padding',
                default: '15px 20px'
            },
            {
                name: '--egeo-st-bubble__small__text--padding',
                description: 'Small bubble text padding',
                default: '10px 15px'
            }
        ];
    }
    StBubbleDemoComponent.prototype.onClick = function () {
        this.hidden = !this.hidden;
    };
    StBubbleDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-bubble-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-bubble-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-demo/st-bubble-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-bubble-demo.component.scss */ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.scss")).default]
        })
    ], StBubbleDemoComponent);
    return StBubbleDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-bubble-demo/st-bubble-demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-bubble-demo/st-bubble-demo.module.ts ***!
  \***************************************************************/
/*! exports provided: StBubbleDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleDemoModule", function() { return StBubbleDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-bubble-demo.component */ "./src/app/demos/st-bubble-demo/st-bubble-demo.component.ts");
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







var StBubbleDemoModule = /** @class */ (function () {
    function StBubbleDemoModule() {
    }
    StBubbleDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StBubbleModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_5__["CssPropertyTableModule"]
            ],
            declarations: [_st_bubble_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleDemoComponent"]],
            providers: []
        })
    ], StBubbleDemoModule);
    return StBubbleDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-bubble-demo-st-bubble-demo-module.js.map