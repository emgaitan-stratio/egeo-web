(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-input-demo-st-input-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-input-demo/st-input-demo.html":
/*!***************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-input-demo/st-input-demo.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"col-sm-4\">\n      <h1>Without form control</h1>\n      <st-input class=\"st-form-field\" type=\"text\" name=\"outForm\" placeholder=\"Enter your name\" value=\"Peter\" default=\"def\" label=\"Name\"></st-input>\n\n      <br>\n\n      <h1>Inside form</h1>\n\n      <form [formGroup]=\"myForm\" novalidate>\n         <st-input class=\"st-form-field\" type=\"text\" formControlName=\"name\" placeholder=\"Enter your name\" label=\"Field\" default=\"default name\"\n                   contextualHelp=\"This is a normal field\"></st-input>\n         <st-input class=\"st-form-field\" type=\"text\" formControlName=\"disabledField\" placeholder=\"This field is disabled\" label=\"Disabled field\"></st-input>\n         <st-input class=\"st-form-field\" type=\"text\" formControlName=\"disabledFieldWithValue\" placeholder=\"This field is disabled\" label=\"Disabled field\"></st-input>\n\n         <st-input class=\"st-form-field\" type=\"text\" formControlName=\"requiredField\" placeholder=\"This field is required\" [errors]=\"requiredError\"\n                   label=\"Required field\" contextualHelp=\"This is a required field\"></st-input>\n\n         <st-input class=\"st-form-field\" type=\"text\" formControlName=\"numberField\" placeholder=\"This is a number field\" label=\"Number field\"\n                   fieldType=\"number\" step=\"0.6\"></st-input>\n\n         <st-input class=\"st-form-field\" type=\"text\" formControlName=\"autocompletedField\" placeholder=\"This field has an autocomplete list\"\n                   [autocompleteList]=\"autocompleteList\" [charsToShowAutocompleteList]=\"0\"\n                   label=\"Field with autocomplete list\" contextualHelp=\"Only one character is required to display the autocomplete list\"></st-input>\n\n         <div class=\"st-form-field\">\n            <label class=\"st-label\">Native Input with st-input class</label>\n            <input class=\"st-input st-form-field\" formControlName=\"requiredField\" placeholder=\"This field is created with st-input class\" />\n\n            <input class=\"st-input st-form-field\" formControlName=\"numberField\" placeholder=\"Number field\" type=\"number\" [min]=\"1\" [maxlength]=\"1\" />\n         </div>\n         <div class=\"st-form-field\">\n            <label class=\"st-label\">Native disabled Input with class</label>\n            <input class=\"st-input st-form-field\" formControlName=\"disabledField\" placeholder=\"This field is disabled\" />\n         </div>\n      </form>\n      <button class=\"button button-primary\" (click)=\"disableInput()\">DISABLE/ENABLE INPUTS</button>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-input-demo/st-input-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-input-demo/st-input-demo.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nst-input, input {\n  margin-bottom: 10px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWlucHV0LWRlbW8vc3QtaW5wdXQtZGVtby5jb21wb25lbnQuc2NzcyIsIi9ob21lL2Zqc2V2aWxsYS93b3Jrc3BhY2UvZWdlby9wcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1pbnB1dC1kZW1vL3N0LWlucHV0LWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBQ0NGO0VBQ0csbUJBQW1CO0VBQ25CLGNBQWMsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1pbnB1dC1kZW1vL3N0LWlucHV0LWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5zdC1pbnB1dCwgaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jazsgfVxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5zdC1pbnB1dCwgaW5wdXQge1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-input-demo/st-input-demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demos/st-input-demo/st-input-demo.module.ts ***!
  \*************************************************************/
/*! exports provided: StInputDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StInputDemoModule", function() { return StInputDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _st_input_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-input-demo */ "./src/app/demos/st-input-demo/st-input-demo.ts");
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





var StInputDemoModule = /** @class */ (function () {
    function StInputDemoModule() {
    }
    StInputDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StInputModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_input_demo__WEBPACK_IMPORTED_MODULE_4__["StInputDemoComponent"]]
                }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_st_input_demo__WEBPACK_IMPORTED_MODULE_4__["StInputDemoComponent"]],
            providers: []
        })
    ], StInputDemoModule);
    return StInputDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-input-demo/st-input-demo.ts":
/*!******************************************************!*\
  !*** ./src/app/demos/st-input-demo/st-input-demo.ts ***!
  \******************************************************/
/*! exports provided: StInputDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StInputDemoComponent", function() { return StInputDemoComponent; });
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


var StInputDemoComponent = /** @class */ (function () {
    function StInputDemoComponent(fb) {
        this.fb = fb;
        this.configDoc = {
            html: 'demo/st-input-demo/st-input-demo.html',
            ts: 'demo/st-input-demo/st-input-demo.ts',
            component: 'lib/st-input/st-input.component.ts'
        };
        this.requiredError = { required: 'This field is required' };
        this.disabled = false;
        this.autocompleteList = [
            { label: 'China', value: 'CN' },
            { label: 'Russia', value: 'RU' },
            { label: 'United States', value: 'US' },
            { label: 'Egypt', value: 'EG' },
            { label: 'Panama', value: 'PA' },
            { label: 'Canada', value: 'CA' },
            { label: 'Indonesia', value: 'ID' },
            { label: 'North Korea', value: 'KP' },
            { label: 'France', value: 'FR' },
            { label: 'Burundi', value: 'BI' },
            { label: 'Poland', value: 'PL' },
            { label: 'Vanuatu', value: 'VU' },
            { label: 'Venezuela', value: 'VE' }
        ];
        this.myForm = fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            disabledField: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            disabledFieldWithValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Disabled value', []),
            requiredField: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            numberField: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            autocompletedField: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.myForm.controls.disabledField.disable();
        this.myForm.controls.disabledFieldWithValue.disable();
        this.myForm.valueChanges.subscribe(function (res) { return console.log(res); });
    }
    StInputDemoComponent.prototype.disableInput = function () {
        this.disabled = !this.disabled;
        if (this.disabled) {
            this.myForm.controls.name.disable();
            this.myForm.controls.disabledField.disable();
            this.myForm.controls.disabledFieldWithValue.disable();
            this.myForm.controls.requiredField.disable();
            this.myForm.controls.numberField.disable();
        }
        else {
            this.myForm.controls.name.enable();
            this.myForm.controls.disabledField.enable();
            this.myForm.controls.disabledFieldWithValue.enable();
            this.myForm.controls.requiredField.enable();
            this.myForm.controls.numberField.enable();
        }
    };
    StInputDemoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    StInputDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-input-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-input-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-input-demo/st-input-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-input-demo.component.scss */ "./src/app/demos/st-input-demo/st-input-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StInputDemoComponent);
    return StInputDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-input-demo-st-input-demo-module.js.map