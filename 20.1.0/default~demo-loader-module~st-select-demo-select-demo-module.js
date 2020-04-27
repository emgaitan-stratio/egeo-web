(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-select-demo-select-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-select-demo/select-demo.html":
/*!************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-select-demo/select-demo.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n      <st-select placeholder=\"Select option\" [options]=\"options\" [disabled]=\"disabled\" [keyBoardMove]=\"true\"\r\n                 [default]=\"options[2].value\">\r\n      </st-select>\r\n\r\n      <div class=\"separator\"></div>\r\n      <button class=\"button button-primary\" (click)=\"changeOptions()\">Change options</button>\r\n\r\n      <div class=\"separator\"></div>\r\n\r\n      <h1>TEMPLATE DRIVEN EXAMPLE</h1>\r\n      <form #templateDrivenForm=\"ngForm\" novalidate autocomplete=\"off\" class=\"col-md-3\">\r\n         <div class=\"form-group\">\r\n\r\n            <st-select stCheckValidations errorMessage=\"This field is required\" label=\"Option 1\"\r\n                       [forceValidations]=\"true\" [formControl]=\"formControl\" tooltip=\"This field is required\"\r\n                       placeholder=\"Select option\" [options]=\"options\" name=\"option1\" required id=\"test\"\r\n                       (select)=\"onSelect($event)\" class=\"st-form-field\">\r\n            </st-select>\r\n            <div class=\"separator\"></div>\r\n\r\n\r\n            Disabled select\r\n\r\n            <st-select stCheckValidations label=\"Option 1\" tooltip=\"Disabled field\" placeholder=\"Select option\"\r\n                       [options]=\"options\" [(ngModel)]=\"model.option1\"\r\n                       name=\"option1\" required [disabled]=\"true\" id=\"disabled-test\" (select)=\"onSelect($event)\"\r\n                       class=\"st-form-field\">\r\n            </st-select>\r\n\r\n            <button class=\"button button-primary\"><span>Submit</span></button>\r\n\r\n            <div class=\"separator\"></div>\r\n\r\n            <p>Form value: {{ templateDrivenForm.value | json }}</p>\r\n            <p>Form status: {{ templateDrivenForm.disabled ? 'DISABLED' : templateDrivenForm.valid ? 'VALID' : 'INVALID'\r\n               }}</p>\r\n         </div>\r\n      </form>\r\n\r\n      <div class=\"separator\"></div>\r\n      <div class=\"separator\"></div>\r\n      <div class=\"separator\"></div>\r\n\r\n      <h1>MODEL DRIVEN / REACTIVE EXAMPLE</h1>\r\n      <form [formGroup]=\"reactiveForm\" novalidate autocomplete=\"off\" class=\"col-md-3\">\r\n         <div class=\"form-group\">\r\n\r\n            <st-select stCheckValidations formControlName=\"option1\" placeholder=\"Select option\" [options]=\"options\"\r\n                       class=\"st-form-field\">\r\n            </st-select>\r\n         </div>\r\n\r\n         <div class=\"separator\"></div>\r\n\r\n         <button class=\"button button-primary\"><span>Submit</span></button>\r\n\r\n         <div class=\"separator\"></div>\r\n\r\n         <p>Form value: {{ reactiveForm.value | json }}</p>\r\n         <p>Form status: {{ reactiveForm.status | json }}</p>\r\n      </form>\r\n\r\n\r\n      <h1>TEMPLATE DRIVEN EXAMPLE</h1>\r\n      <br>\r\n      <br>\r\n      <button class=\"button button-primary\" (click)=\"changeDisabled()\">Change disable</button>\r\n\r\n      <div class=\"separator\"></div>\r\n\r\n      <h1>SEARCH OPTION EXAMPLE</h1>\r\n\r\n      <st-select [enabledSearcher]=\"true\" placeholder=\"Select option\" placeholderSearch=\"Search...\"\r\n                 [options]=\"filteredOptions\"\r\n                 [disabled]=\"disabled\"\r\n                 (search)=\"onSearch($event)\">\r\n      </st-select>\r\n\r\n      <div class=\"separator\"></div>\r\n\r\n      <h1>SCROLL WITH SPINNER OPTION</h1>\r\n      <st-select [enabledSearcher]=\"true\" placeholder=\"Select option\" placeholderSearch=\"Search...\" [options]=\"filteredOptions\"\r\n                 [disabled]=\"disabled\" [isLoading]=\"isLoading\" (scrollAtBottom)=\"onScrollAtBottom()\" (search)=\"onSearch($event)\">\r\n      </st-select>\r\n\r\n      <div class=\"separator\"></div>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.module.ts":
/*!************************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.module.ts ***!
  \************************************************************/
/*! exports provided: StSelectDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSelectDemoModule", function() { return StSelectDemoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _select_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-demo */ "./src/app/demos/st-select-demo/select-demo.ts");
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





var StSelectDemoModule = /** @class */ (function () {
    function StSelectDemoModule() {
    }
    StSelectDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDemoGeneratorModule"].withComponents({ components: [_select_demo__WEBPACK_IMPORTED_MODULE_4__["SelectDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_3__["StDocsModule"]
            ],
            declarations: [_select_demo__WEBPACK_IMPORTED_MODULE_4__["SelectDemoComponent"]]
        })
    ], StSelectDemoModule);
    return StSelectDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.scss":
/*!*******************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nh1 {\n  font-family: 'Nunito Sans Bold';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: lighter; }\np {\n  font-family: 'Nunito Sans';\n  margin: 0;\n  padding: 0; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\nst-select {\n  width: 100%;\n  position: relative;\n  display: block; }\nform {\n  border: 1px solid black;\n  padding: 20px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNlbGVjdC1kZW1vL3NlbGVjdC1kZW1vLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zZWxlY3QtZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW8tZGVtb1xcc3JjXFxhcHBcXGRlbW9zXFxzdC1zZWxlY3QtZGVtb1xcc2VsZWN0LWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FDQUY7RUFDRywrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBO0FBR3ZCO0VBQ0csMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxVQUNILEVBQUE7QUFFQTtFQUNHLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7QUFHbkI7RUFDRyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUdqQjtFQUNHLHVCQUF1QjtFQUN2QixhQUFhLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3Qtc2VsZWN0LWRlbW8vc2VsZWN0LWRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbmgxIHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucyBCb2xkJztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IH1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7IH1cblxuLnNlcGFyYXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuc3Qtc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuZm9ybSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4OyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbmgxIHtcclxuICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucyBCb2xkJztcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICBmb250LWZhbWlseTogJ051bml0byBTYW5zJztcclxuICAgbWFyZ2luOiAwO1xyXG4gICBwYWRkaW5nOiAwXHJcbn1cclxuXHJcbi5zZXBhcmF0b3Ige1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5zdC1zZWxlY3Qge1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-select-demo/select-demo.ts":
/*!*****************************************************!*\
  !*** ./src/app/demos/st-select-demo/select-demo.ts ***!
  \*****************************************************/
/*! exports provided: SelectDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDemoComponent", function() { return SelectDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
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



var SelectDemoComponent = /** @class */ (function () {
    function SelectDemoComponent(_fb, _cd) {
        this._fb = _fb;
        this._cd = _cd;
        this.configDoc = {
            html: 'demo/st-select-demo/select-demo.html',
            ts: 'demo/st-select-demo/select-demo.ts',
            component: 'lib/st-select/st-select.ts'
        };
        this.options = [];
        this.filteredOptions = [];
        this.model = {
            option1: null
        };
        this.disabled = false;
        this.isLoading = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.formControl.markAsDirty();
        this.options.push({ label: 'Select an option', value: undefined });
        for (var i = 0; i < 10; i++) {
            this.options.push({
                label: "option-" + i,
                value: i
            });
        }
        this.model.option1 = 3;
        this.options[5].selected = true;
        this.filteredOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.options);
        this.reactiveForm = this._fb.group({
            option1: [this.model.option1, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    SelectDemoComponent.prototype.onSelect = function (value) {
        if (value === undefined) {
            this.model.option1 = undefined;
        }
    };
    SelectDemoComponent.prototype.changeDisabled = function () {
        var controlName = 'option1';
        this.disabled = !this.disabled;
        if (this.disabled) {
            this.reactiveForm.get(controlName).disable();
            this.templateDrivenForm.controls[controlName].disable();
        }
        else {
            this.reactiveForm.get(controlName).enable();
            this.templateDrivenForm.controls[controlName].enable();
        }
    };
    SelectDemoComponent.prototype.onScrollAtBottom = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.options = __spread(_this.options, _this.generateOptions(_this.options.length));
            _this.isLoading = false;
            _this._cd.markForCheck();
        }, 2000);
    };
    SelectDemoComponent.prototype.generateOptions = function (optionsLength) {
        if (optionsLength === void 0) { optionsLength = 0; }
        return Array.from(Array(10)).map(function (_value, i) { return ({
            label: "Option " + (optionsLength + i),
            value: "option-" + (optionsLength + i)
        }); });
    };
    SelectDemoComponent.prototype.onSearch = function (search) {
        this.filteredOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.options);
        this.filteredOptions.forEach(function (option) { return option.selected = false; });
        if (search) {
            this.filteredOptions = this.filteredOptions.filter(function (option) { return option.label.indexOf(search) !== -1; });
        }
        this._cd.markForCheck();
    };
    SelectDemoComponent.prototype.changeOptions = function () {
        this.options = [];
        for (var i = 0; i < 10; i++) {
            this.options.push({
                label: "new options-" + i,
                value: (10 + i)
            });
        }
    };
    SelectDemoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateDrivenForm', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], SelectDemoComponent.prototype, "templateDrivenForm", void 0);
    SelectDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./select-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-select-demo/select-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./select-demo.scss */ "./src/app/demos/st-select-demo/select-demo.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-select-demo-select-demo-module.js.map