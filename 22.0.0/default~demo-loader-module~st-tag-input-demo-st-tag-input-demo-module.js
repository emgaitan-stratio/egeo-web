(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-tag-input-demo-st-tag-input-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.html":
/*!*******************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n\r\n      <p class=\"introduction\"> Tags are used for items that need to be labeled, categorized, or organized using keywords\r\n         that describe them. Inside an input you can enter your own tags or be force to select among a list of them.\r\n      </p>\r\n      <span class=\"separator\"></span>\r\n\r\n      <h1 class=\"title\">Design and behaviour</h1>\r\n\r\n      <p class=\"paragraph\">In a Tag input you write your tag and press enter to consolidate it. If you want to remove it\r\n         you select it and press Delete key.</p>\r\n      <span class=\"separator\"></span>\r\n\r\n\r\n      <h1 class=\"subtitle\">Model driven / Reactive example</h1>\r\n      <form [formGroup]=\"reactiveForm\" novalidate (ngSubmit)=\"onSubmitReactiveForm()\">\r\n\r\n         <div class=\"example\">\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-reactive\" formControlName=\"tag-input-reactive\" [label]=\"'Tag Input with fordidden value: test'\"\r\n                [id]=\"'tag-input-reactive-demo'\" [placeholder]=\"'Add tags separated by commas'\" infoMessage=\"This is an informative message\"\r\n                [tooltip]=\"'This is a Tag Input component tooltip'\" [forbiddenValues]=\"['test']\">\r\n            </st-tag-input>\r\n            <span>Output: {{reactiveForm.controls['tag-input-reactive'].value | json}}</span>\r\n         </div>\r\n         <div class=\"example\">\r\n            <st-tag-input class=\"st-form-field\" name=\"number-tag-input\" formControlName=\"tag-input-number\" [label]=\"'Tag Input of numbers'\" [id]=\"'tag-input-reactive-demo'\"\r\n                infoMessage=\"This is an informative message\" [placeholder]=\"'Add tags separated by commas'\" [tooltip]=\"'This is a Tag Input component tooltip'\"\r\n                type=\"number\">\r\n            </st-tag-input>\r\n            <span>Output: {{reactiveForm.controls['tag-input-number'].value | json}}</span>\r\n         </div>\r\n         <div class=\"example\">\r\n\r\n            <st-tag-input class=\"st-form-field\" name=\"number-tag-input-integer\" formControlName=\"tag-input-integer\" [label]=\"'Tag Input of integers'\"\r\n                [id]=\"'tag-input-reactive-demo'\" [placeholder]=\"'Add tags separated by commas'\" infoMessage=\"This is an informative message\"\r\n                [tooltip]=\"'This is a Tag Input component tooltip'\" type=\"integer\">\r\n            </st-tag-input>\r\n            <span>Output: {{reactiveForm.controls['tag-input-integer'].value | json}}</span>\r\n         </div>\r\n\r\n         <div class=\"example\">\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-reactive-required\" formControlName=\"tag-input-reactive-required\" [regularExpression]=\"pattern\"\r\n                [errorMessage]=\"errorReactiveMessage\" [label]=\"'Tag Input with pattern of a valid IP'\" [id]=\"'tag-input-reactive-required-demo'\"\r\n                [placeholder]=\"'Add tags separated by commas'\" infoMessage=\"This is an informative message\" [tooltip]=\"'This is a Tag Input component tooltip'\">\r\n            </st-tag-input>\r\n            <span>Output: {{reactiveForm.controls['tag-input-reactive-required'].value | json}}</span>\r\n         </div>\r\n         <div class=\"example\">\r\n\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-reactive-disabled\" formControlName=\"tag-input-reactive-disabled\" [disabled]=\"disabledReactive\"\r\n                [label]=\"'Tag Input with disable'\" [id]=\"'tag-input-reactive-disabled-demo'\" [placeholder]=\"'Add tags separated by commas'\"\r\n                infoMessage=\"This is an informative message\" [tooltip]=\"'This is a Tag Input component tooltip'\">\r\n            </st-tag-input>\r\n\r\n         </div>\r\n         <div class=\"example\">\r\n\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-reactive-autocomplete\" formControlName=\"tag-input-reactive-autocomplete\"\r\n                [autocompleteList]=\"filteredList\" [withAutocomplete]=\"true\" [label]=\"'Tag Input with autocomplete'\" [id]=\"'tag-input-reactive-autocomplete-demo'\"\r\n                [placeholder]=\"'Add tags separated by commas'\" [tooltip]=\"'This is a Tag Input component tooltip'\" infoMessage=\"This is an informative message\"\r\n                (input)=\"onFilterList($event)\">\r\n            </st-tag-input>\r\n            <span>Output: {{reactiveForm.controls['tag-input-reactive-autocomplete'].value | json}}</span>\r\n\r\n         </div>\r\n\r\n         <div class=\"example\">\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-auto-completed-group-list\" formControlName=\"tag-input-auto-completed-group-list\"\r\n                [label]=\"'Tag Input with group autocomplete list'\" [id]=\"'tag-input-reactive-demo'\" [placeholder]=\"'Add tags separated by commas'\"\r\n                [tooltip]=\"'This is a Tag Input component tooltip'\" [withAutocomplete]=\"true\" [autocompleteList]=\"filteredGroupList\" [errorMessage]=\"getGroupAutoCompletedErrorMessage()\"\r\n                infoMessage=\"This is an informative message\" (input)=\"onFilterGroupList($event)\" [charsToShowAutocompleteList]=\"0\">\r\n            </st-tag-input>\r\n            <span>Output: {{reactiveForm.controls['tag-input-auto-completed-group-list'].value | json}}</span>\r\n         </div>\r\n\r\n         <button type=\"submit\" class=\"button button-primary\"><span>Validate</span></button>\r\n         <button type=\"button\" class=\"button button-borderless\" (click)=\"changeReactiveFormDisabled()\">Disable</button>\r\n\r\n      </form>\r\n\r\n      <h1 class=\"subtitle\">Template driven example</h1>\r\n\r\n      <form #templateDrivenForm=\"ngForm\" novalidate autocomplete=\"off\" (ngSubmit)=\"onSubmitTemplateDrivenForm()\">\r\n         <div class=\"example\">\r\n\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-template-driven\" [(ngModel)]=\"tags.templateDriven\" [label]=\"'Tag Input'\" [disabled]=\"true\"\r\n                [id]=\"'tag-input-template-driven-demo'\" [placeholder]=\"'Add tags separated by commas'\" infoMessage=\"This is an informative message\"\r\n                [tooltip]=\"'This is a Tag Input component tooltip'\">\r\n            </st-tag-input>\r\n         </div>\r\n         <div class=\"example\">\r\n\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-template-driven-required\" [(ngModel)]=\"tags.templateDrivenRequired\" [errorMessage]=\"errorTemplateDriveMessage\"\r\n                required [forceValidations]=\"true\" minlength=\"2\" maxlength=\"3\" [label]=\"'Tag Input with require'\" [id]=\"'tag-input-template-driven-required-demo'\"\r\n                [placeholder]=\"'Add tags separated by commas'\" infoMessage=\"This is an informative message\" [tooltip]=\"'This is a Tag Input component tooltip'\">\r\n            </st-tag-input>\r\n         </div>\r\n         <div class=\"example\">\r\n\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-template-driven-disabled\" [(ngModel)]=\"tags.templateDrivenDisabled\" [disabled]=\"disabledTemplateDrive\"\r\n                [label]=\"'Tag Input with disable'\" [id]=\"'tag-input-template-driven-disabled-demo'\" [placeholder]=\"'Add tags separated by commas'\"\r\n                infoMessage=\"This is an informative message\" [tooltip]=\"'This is a Tag Input component tooltip'\">\r\n            </st-tag-input>\r\n         </div>\r\n         <div class=\"example\">\r\n\r\n            <st-tag-input class=\"st-form-field\" name=\"tag-input-template-driven-autocomplete\" [(ngModel)]=\"tags.templateDrivenAutocomplete\"\r\n                [autocompleteList]=\"filteredlist\" [withAutocomplete]=\"true\" [label]=\"'Tag Input with autocomplete'\" [id]=\"'tag-input-template-driven-autocomplete-demo'\"\r\n                [placeholder]=\"'Add tags separated by commas'\" infoMessage=\"This is an informative message\" [tooltip]=\"'This is a Tag Input component tooltip'\"\r\n                (input)=\"onFilterList($event)\">\r\n            </st-tag-input>\r\n         </div>\r\n         <button type=\"submit\" class=\"button button-primary\"><span>Validate</span></button>\r\n         <button type=\"button\" class=\"button button-borderless\" (click)=\"changeTemplateDrivenFormDisabled()\"><span>Disable</span>\r\n         </button>\r\n\r\n      </form>\r\n\r\n      <span class=\"separator\"></span>\r\n\r\n      <h1 class=\"title\">Usage and best practices</h1>\r\n\r\n      <ul class=\"list\">\r\n\r\n         <li> Multiple or single tags can be used to categorize items.</li>\r\n         <li> Use Tags when content is mapped to multiple categories, and the user needs a way to differentiate between\r\n            them. </li>\r\n         <li> Tags can also be used as a method of filtering data, to show only items within that particular category.</li>\r\n      </ul>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nh1 {\n  font-family: 'Nunito Sans';\n  font-weight: bold;\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\nbutton {\n  float: right;\n  margin-left: 10px; }\n.example {\n  padding-bottom: 20px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXRhZy1pbnB1dC1kZW1vL3N0LXRhZy1pbnB1dC1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFnLWlucHV0LWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtdGFnLWlucHV0LWRlbW9cXHN0LXRhZy1pbnB1dC1kZW1vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUNDRDtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7QUFHcEI7RUFDRyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR25CO0VBQ0csWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBR3BCO0VBQ0csb0JBQW9CLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtdGFnLWlucHV0LWRlbW8vc3QtdGFnLWlucHV0LWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjVweDsgfVxuXG4uc2VwYXJhdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG5idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG5cbi5leGFtcGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbiBoMSB7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnNlcGFyYXRvciB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXJnaW46IDEwcHg7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgIGZsb2F0OiByaWdodDtcclxuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlIHtcclxuICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: StTagInputDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTagInputDemoComponent", function() { return StTagInputDemoComponent; });
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



var StTagInputDemoComponent = /** @class */ (function () {
    function StTagInputDemoComponent(_fb) {
        this._fb = _fb;
        this.configDoc = {
            html: 'demo/st-tag-input-demo/st-tag-input-demo.component.html',
            ts: 'demo/st-tag-input-demo/st-tag-input-demo.component.ts',
            component: 'lib/st-tag-input/st-tag-input.component.ts'
        };
        this.tags = {
            reactive: [],
            reactiveRequired: [],
            reactiveDisabled: [],
            reactiveAutocomplete: [],
            templateDriven: ['Tag Template Driven1', 'Tag Template Driven2'],
            templateDrivenRequired: [],
            templateDrivenDisabled: [],
            templateDrivenAutocomplete: [],
            autoCompletedGroupList: []
        };
        this.list = [
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
        this.filteredList = [];
        this.groupList = [
            {
                title: 'Group1', items: [
                    { label: 'Option 1.1', value: 'option11' },
                    { label: 'Option 1.2', value: 'option12' }
                ]
            },
            {
                title: 'Group2', items: [
                    { label: 'Option 2.1', value: 'option21' },
                    { label: 'Option 2.2', value: 'option22' },
                    { label: 'Option 2.3', value: 'option23' },
                    { label: 'Option 2.4', value: 'option24' }
                ]
            },
            {
                title: 'Group3', items: [
                    { label: 'Option 3.1', value: 'option31' },
                    { label: 'Option 3.2', value: 'option32' }
                ]
            },
            {
                title: 'Group4', items: [
                    { label: 'Option 4.1', value: 'option41' },
                    { label: 'Option 4.2', value: 'option42' },
                    { label: 'Option 4.3', value: 'option43' }
                ]
            },
            {
                title: 'Group5', items: [
                    { label: 'Option 5.1', value: 'option51' },
                    { label: 'Option 5.2', value: 'option52' }
                ]
            },
            {
                title: 'Group6', items: [
                    { label: 'Option 6.1', value: 'option61' },
                    { label: 'Option 6.2', value: 'option62' }
                ]
            }
        ];
        this.filteredGroupList = [];
        this.forceReactiveValidations = false;
        this.forceTemplateDriveValidations = false;
        this.errorReactiveMessage = null;
        this.errorTemplateDriveMessage = null;
        this.disabledReactive = true;
        this.disabledTemplateDrive = true;
        this.pattern = new RegExp("/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9]\n      [0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/");
        this.reactiveForm = _fb.group({
            'tag-input-reactive': [this.tags.reactive],
            'tag-input-number': [],
            'tag-input-integer': [],
            'tag-input-reactive-required': [this.tags.reactiveRequired, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'tag-input-reactive-disabled': [this.tags.reactiveDisabled],
            'tag-input-reactive-autocomplete': [this.tags.reactiveDisabled],
            'tag-input-auto-completed-group-list': [this.tags.autoCompletedGroupList, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5)])]
        });
    }
    StTagInputDemoComponent.prototype.ngOnInit = function () {
        this.reactiveForm.valueChanges.subscribe(function (res) { return console.log('Reactive Form', res); });
        this.templateDrivenForm.valueChanges.subscribe(function (res) { return console.log('Template Driven Form', res); });
        this.filteredGroupList = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.groupList);
    };
    StTagInputDemoComponent.prototype.onSubmitReactiveForm = function () {
        this.forceReactiveValidations = true;
        this.errorReactiveMessage = this.reactiveForm.valid ? null : 'Error';
    };
    StTagInputDemoComponent.prototype.onSubmitTemplateDrivenForm = function () {
        this.forceTemplateDriveValidations = true;
        this.errorTemplateDriveMessage = this.templateDrivenForm.valid ? null : 'Error';
    };
    StTagInputDemoComponent.prototype.changeReactiveFormDisabled = function () {
        this.disabledReactive = !this.disabledReactive;
        if (this.disabledReactive) {
            this.reactiveForm.get('tag-input-reactive-disabled').disable();
        }
        else {
            this.reactiveForm.get('tag-input-reactive-disabled').enable();
        }
    };
    StTagInputDemoComponent.prototype.changeTemplateDrivenFormDisabled = function () {
        this.disabledTemplateDrive = !this.disabledTemplateDrive;
        if (this.disabledTemplateDrive) {
            this.templateDrivenForm.controls['tag-input-template-driven-disabled'].disable();
        }
        else {
            this.templateDrivenForm.controls['tag-input-template-driven-disabled'].enable();
        }
    };
    StTagInputDemoComponent.prototype.onFilterList = function (event) {
        var text = event.target.innerText;
        this.filteredList = text ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.list.filter(function (country) { return country.label.toLowerCase().indexOf(text.toLowerCase()) !== -1; })) : [];
    };
    StTagInputDemoComponent.prototype.onFilterGroupList = function (event) {
        var text = event.target.innerText;
        console.log('voy a buscar con ' + text);
        this.filteredGroupList = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.groupList);
        this.filteredGroupList = this.filteredGroupList.filter(function (item) {
            var result = item.items.filter(function (_item) {
                return _item.label.toLowerCase().indexOf(text.toLowerCase()) !== -1;
            });
            item.items = result;
            return result && result.length ? item : undefined;
        });
        console.log(this.filteredGroupList);
    };
    StTagInputDemoComponent.prototype.getGroupAutoCompletedErrorMessage = function () {
        var currentValue = this.reactiveForm.controls['tag-input-auto-completed-group-list'].value;
        if (currentValue.length < 2) {
            return 'You have to enter two items at leas';
        }
        else if (currentValue.length > 5) {
            return 'Only 5 items are allowed';
        }
        return null;
    };
    StTagInputDemoComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateDrivenForm', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], StTagInputDemoComponent.prototype, "templateDrivenForm", void 0);
    StTagInputDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-tag-input-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-tag-input-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-tag-input-demo.component.scss */ "./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StTagInputDemoComponent);
    return StTagInputDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-tag-input-demo/st-tag-input-demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demos/st-tag-input-demo/st-tag-input-demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: StTagInputDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StTagInputDemoModule", function() { return StTagInputDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _st_tag_input_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-tag-input-demo.component */ "./src/app/demos/st-tag-input-demo/st-tag-input-demo.component.ts");
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





var StTagInputDemoModule = /** @class */ (function () {
    function StTagInputDemoModule() {
    }
    StTagInputDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StTagInputModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_tag_input_demo_component__WEBPACK_IMPORTED_MODULE_4__["StTagInputDemoComponent"]]
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_tag_input_demo_component__WEBPACK_IMPORTED_MODULE_4__["StTagInputDemoComponent"]]
        })
    ], StTagInputDemoModule);
    return StTagInputDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-tag-input-demo-st-tag-input-demo-module.js.map