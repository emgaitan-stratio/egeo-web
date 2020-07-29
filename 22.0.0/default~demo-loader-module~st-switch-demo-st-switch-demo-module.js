(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-switch-demo-st-switch-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-switch-demo/st-switch-demo.html":
/*!***************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-switch-demo/st-switch-demo.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n      <form [formGroup]=\"form\" novalidate autocomplete=\"off\">\r\n         <h1>Switch with label at left</h1>\r\n         <st-switch class=\"swicth-demo\" contextualHelp=\"this is a contextual help\" name=\"switch-1\" label=\"Enabled switch\" formControlName=\"switch\"\r\n             qaTag=\"enabled-switch-1\"></st-switch>\r\n      </form>\r\n\r\n      <button class=\"button button-primary\" (click)=\"form.controls['switch'].enable()\">\r\n         <span>ENABLE SWITCH</span>\r\n      </button>\r\n      <button class=\"button button-borderless\" (click)=\"form.controls['switch'].disable()\">\r\n         <span>DISABLE SWITCH</span>\r\n      </button>\r\n      <br>\r\n      <br>\r\n      <br>\r\n      <h1>Disabled switch without a form control</h1>\r\n      <st-switch class=\"swicth-demo\" name=\"switch-2\" [disabled]=\"true\" label=\"Disabled switch\" [(ngModel)]=\"model\"></st-switch>\r\n      <br>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-switch-demo/st-switch-demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-switch-demo/st-switch-demo.module.ts ***!
  \***************************************************************/
/*! exports provided: StSwitchDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSwitchDemoModule", function() { return StSwitchDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_switch_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-switch-demo */ "./src/app/demos/st-switch-demo/st-switch-demo.ts");
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





var StSwitchDemoModule = /** @class */ (function () {
    function StSwitchDemoModule() {
    }
    StSwitchDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDemoGeneratorModule"].withComponents({ components: [_st_switch_demo__WEBPACK_IMPORTED_MODULE_4__["StSwitchDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDocsModule"]
            ],
            declarations: [_st_switch_demo__WEBPACK_IMPORTED_MODULE_4__["StSwitchDemoComponent"]]
        })
    ], StSwitchDemoModule);
    return StSwitchDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-switch-demo/st-switch-demo.scss":
/*!**********************************************************!*\
  !*** ./src/app/demos/st-switch-demo/st-switch-demo.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.loading-content {\n  width: 100%;\n  min-height: 400px;\n  padding: 10%; }\n.content {\n  width: 100%;\n  min-height: 400px;\n  padding: 0;\n  line-height: 400px; }\nh1 {\n  font-family: 'Nunito Sans';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: bold; }\n.swicth-demo {\n  display: block;\n  margin-bottom: 15px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXN3aXRjaC1kZW1vL3N0LXN3aXRjaC1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zd2l0Y2gtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXGRlbW9zXFxzdC1zd2l0Y2gtZGVtb1xcc3Qtc3dpdGNoLWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FDQUY7RUFDRyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTtBQUdmO0VBQ0csV0FBVztFQUNYLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7QUFHckI7RUFDRywwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBO0FBR3BCO0VBQ0csY0FBYztFQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXN3aXRjaC1kZW1vL3N0LXN3aXRjaC1kZW1vLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4ubG9hZGluZy1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiAxMCU7IH1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0MDBweDsgfVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uc3dpY3RoLWRlbW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG4ubG9hZGluZy1jb250ZW50e1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgIHBhZGRpbmc6IDEwJTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgcGFkZGluZzogMDtcclxuICAgbGluZS1oZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN3aWN0aC1kZW1ve1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/st-switch-demo/st-switch-demo.ts":
/*!********************************************************!*\
  !*** ./src/app/demos/st-switch-demo/st-switch-demo.ts ***!
  \********************************************************/
/*! exports provided: StSwitchDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSwitchDemoComponent", function() { return StSwitchDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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


var StSwitchDemoComponent = /** @class */ (function () {
    function StSwitchDemoComponent() {
        this.configDoc = {
            html: 'demo/st-switch-demo/st-switch-demo.html',
            ts: 'demo/st-switch-demo/st-switch-demo.ts',
            component: 'lib/st-switch/st-switch.component.ts'
        };
        this.model = false;
        this.loading = true;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            switch: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.model, disabled: false }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    StSwitchDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-switch-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-switch-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-switch-demo/st-switch-demo.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./st-switch-demo.scss */ "./src/app/demos/st-switch-demo/st-switch-demo.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StSwitchDemoComponent);
    return StSwitchDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-switch-demo-st-switch-demo-module.js.map