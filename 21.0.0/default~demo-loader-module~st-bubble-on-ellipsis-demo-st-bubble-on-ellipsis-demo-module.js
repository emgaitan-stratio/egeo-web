(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-bubble-on-ellipsis-demo-st-bubble-on-ellipsis-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n      <div class=\"bubble-demo-container\">\n         <div class=\"buttons\">\n            <st-switch label=\"Open to left\" [(formControl)]=\"openToLeftFormControl\">\n            </st-switch>\n            <st-input label=\"Max with of container\" [(formControl)]=\"containerMaxWidthFormControl\"\n                      [fieldType]=\"'number'\"></st-input>\n         </div>\n         <div class=\"bubble-container\" [style.max-width]=\"containerMaxWidthFormControl.value + 'px'\">\n            <st-bubble-on-ellipsis\n               [text]=\"'Put mouse over to display a bubble when there is ellipsis'\"\n               [openToLeft]=\"openToLeftFormControl.value\">\n               Put mouse over to display a bubble when there is ellipsis\n            </st-bubble-on-ellipsis>\n            <br>\n            <st-bubble-on-ellipsis\n               [text]=\"'This is a long text and we want to display it with ellipsis only if it takes up more than two lines'\"\n               [openToLeft]=\"openToLeftFormControl.value\"\n               [lines]=\"2\">\n               This is a long text and we want to display it with ellipsis only if it takes up more than <b>two lines</b>\n            </st-bubble-on-ellipsis>\n            <br>\n            <st-bubble-on-ellipsis\n               [text]=\"'This is a long text and we want to display it with ellipsis only if it takes up more than three lines'\"\n               [openToLeft]=\"openToLeftFormControl.value\"\n               [lines]=\"3\">\n               This is a long text and we want to display it with ellipsis only if it takes up more than <b>three lines</b>\n            </st-bubble-on-ellipsis>\n         </div>\n      </div>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.bubble-demo-container {\n  width: 800px;\n  height: 300px;\n  padding: 20px; }\n.bubble-demo-items {\n  float: right; }\n.bubble-demo-button {\n  float: inherit; }\n.bubble-demo-content {\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.buttons {\n  float: left; }\n.bubble-container {\n  float: right; }\nst-switch {\n  display: block;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy1kZW1vL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy1kZW1vLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZmpzZXZpbGxhL3dvcmtzcGFjZS9lZ2VvL3Byb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy1kZW1vL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy1kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUNFRjtFQUNHLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBR2hCO0VBQ0csWUFBWSxFQUFBO0FBR2Y7RUFDRyxjQUFjLEVBQUE7QUFHakI7RUFDRyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3RCO0VBQ0csV0FBVyxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNHLGNBQWM7RUFDZCxZQUFZLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtYnViYmxlLW9uLWVsbGlwc2lzLWRlbW8vc3QtYnViYmxlLW9uLWVsbGlwc2lzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4uYnViYmxlLWRlbW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5idWJibGUtZGVtby1pdGVtcyB7XG4gIGZsb2F0OiByaWdodDsgfVxuXG4uYnViYmxlLWRlbW8tYnV0dG9uIHtcbiAgZmxvYXQ6IGluaGVyaXQ7IH1cblxuLmJ1YmJsZS1kZW1vLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuXG4uYnV0dG9ucyB7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbi5idWJibGUtY29udGFpbmVyIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbnN0LXN3aXRjaCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDE1cHg7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuXG4uYnViYmxlLWRlbW8tY29udGFpbmVyIHtcbiAgIHdpZHRoOiA4MDBweDtcbiAgIGhlaWdodDogMzAwcHg7XG4gICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYnViYmxlLWRlbW8taXRlbXMge1xuICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYnViYmxlLWRlbW8tYnV0dG9uIHtcbiAgIGZsb2F0OiBpbmhlcml0O1xufVxuXG4uYnViYmxlLWRlbW8tY29udGVudCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleC13cmFwOiBub3dyYXA7XG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYnV0dG9ucyB7XG4gICBmbG9hdDogbGVmdDtcbn1cblxuLmJ1YmJsZS1jb250YWluZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbnN0LXN3aXRjaCB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIG1hcmdpbjogMTVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StBubbleOnEllipsisDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleOnEllipsisDemoComponent", function() { return StBubbleOnEllipsisDemoComponent; });
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


var StBubbleOnEllipsisDemoComponent = /** @class */ (function () {
    function StBubbleOnEllipsisDemoComponent() {
        this.configDoc = {
            html: 'demo/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html',
            ts: 'demo/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts',
            component: 'lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.component.ts'
        };
        this.text = 'What needed to deploy Crossdata?';
        this.hidden = true;
        this.openToLeftFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true);
        this.containerMaxWidthFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](500);
    }
    StBubbleOnEllipsisDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-bubble-on-ellipsis-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-bubble-on-ellipsis-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-bubble-on-ellipsis-demo.component.scss */ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.scss")).default]
        })
    ], StBubbleOnEllipsisDemoComponent);
    return StBubbleOnEllipsisDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.module.ts ***!
  \***************************************************************************************/
/*! exports provided: StBubbleOnEllipsisDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StBubbleOnEllipsisDemoModule", function() { return StBubbleOnEllipsisDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _st_bubble_on_ellipsis_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-bubble-on-ellipsis-demo.component */ "./src/app/demos/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts");
/* harmony import */ var _egeo_src_lib_st_bubble_on_ellipsis_st_bubble_on_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../egeo/src/lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.module */ "../egeo/src/lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.module.ts");
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







var StBubbleOnEllipsisDemoModule = /** @class */ (function () {
    function StBubbleOnEllipsisDemoModule() {
    }
    StBubbleOnEllipsisDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _egeo_src_lib_st_bubble_on_ellipsis_st_bubble_on_ellipsis_module__WEBPACK_IMPORTED_MODULE_5__["StBubbleOnEllipsisModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_bubble_on_ellipsis_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleOnEllipsisDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"]
            ],
            declarations: [_st_bubble_on_ellipsis_demo_component__WEBPACK_IMPORTED_MODULE_4__["StBubbleOnEllipsisDemoComponent"]],
            providers: []
        })
    ], StBubbleOnEllipsisDemoModule);
    return StBubbleOnEllipsisDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-bubble-on-ellipsis-demo-st-bubble-on-ellipsis-demo-module.js.map