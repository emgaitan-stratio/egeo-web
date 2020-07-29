(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-sidebar-demo-st-sidebar-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html":
/*!***************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"col-sm-12 demo-layout\">\r\n      <p class=\"introduction\">Sidebar allows to navigate user through content.</p>\r\n      <span class=\"separator\"></span>\r\n      <h1 class=\"title\">Theme customization</h1>\r\n      <p class=\"paragraph\">You can customize some table styles using the following css variables</p>\r\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\r\n\r\n      <h1 class=\"title\">Examples</h1>\r\n      <st-switch (change)=\"enableSearchMode = $event\" label=\"Enable search mode\" class=\"col-sm-12 row\"></st-switch>\r\n\r\n      <div class=\"sidebar-container\">\r\n         <h1>Normal visualization </h1>\r\n\r\n         <st-sidebar class=\"sidebar\"\r\n                     qaTag=\"sidebar-demo\"\r\n                     title=\"Mesos Manager\"\r\n                     [items]=\"filteredItems\"\r\n                     [active]=\"activeItem\"\r\n                     [searchMode]=\"enableSearchMode\"\r\n                     emptyResults=\"Search without results. Try with another term\"\r\n                     (change)=\"onChangeActive($event)\"\r\n                     (search)=\"onSearch($event, false)\">\r\n            <span class=\"header\" sidebar-header> HEADER CONTENT</span>\r\n            <span class=\"footer\" sidebar-footer> FOOTER CONTENT</span>\r\n         </st-sidebar>\r\n      </div>\r\n\r\n      <div class=\"sidebar-container\">\r\n         <h1>Complex visualization </h1>\r\n         <st-sidebar class=\"sidebar\"\r\n                     qaTag=\"sidebar-demo\"\r\n                     title=\"Mesos Manager\"\r\n                     [visualMode]=\"complexMode\"\r\n                     [items]=\"filteredComplexItems\"\r\n                     [active]=\"activeItem\"\r\n                     [searchMode]=\"enableSearchMode\"\r\n                     emptyResults=\"Search without results. Try with another term\"\r\n                     (change)=\"onChangeActive($event)\"\r\n                     (search)=\"onSearch($event, true)\">\r\n            <span sidebar-footer> FOOTER CONTENT</span>\r\n         </st-sidebar>\r\n      </div>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.sidebar {\n  width: 283px; }\n.sidebar-container {\n  float: left;\n  padding: 20px; }\n.header, .footer {\n  display: block;\n  margin-bottom: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNpZGViYXItZGVtby9zdC1zaWRlYmFyLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1zaWRlYmFyLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3Qtc2lkZWJhci1kZW1vXFxzdC1zaWRlYmFyLWRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBQ0NGO0VBQ0csWUFBWSxFQUFBO0FBR2Y7RUFDRyxXQUFXO0VBQ1gsYUFBYSxFQUFBO0FBR2hCO0VBQ0csY0FBYztFQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNpZGViYXItZGVtby9zdC1zaWRlYmFyLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAyODNweDsgfVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uaGVhZGVyLCAuZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgd2lkdGg6IDI4M3B4O1xyXG59XHJcblxyXG4uc2lkZWJhci1jb250YWluZXIge1xyXG4gICBmbG9hdDogbGVmdDtcclxuICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmhlYWRlciwgLmZvb3RlciB7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.ts ***!
  \********************************************************************/
/*! exports provided: StSidebarDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSidebarDemoComponent", function() { return StSidebarDemoComponent; });
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



var StSidebarDemoComponent = /** @class */ (function () {
    function StSidebarDemoComponent() {
        this.configDoc = {
            html: 'demo/st-sidebar-demo/st-sidebar-demo.component.html',
            ts: 'demo/st-sidebar-demo/st-sidebar-demo.component.ts',
            component: 'lib/st-sidebar/st-sidebar.component.ts'
        };
        this.items = [
            { id: 'vault-roles', label: 'Vault Roles' },
            { id: 'identities', label: 'Identities', class: 'warning', disabled: true },
            {
                id: 'masters',
                label: 'Masters',
                result: '-',
                items: [{
                        id: 'sub-item1',
                        label: 'Subitem 1',
                        items: [
                            { id: 'sub-item1.1', label: 'Subitem 1.1', result: '450' },
                            { id: 'sub-item1.2', label: 'Subitem 1.2222222222222222222222222222222222222222222222222222222' }
                        ]
                    }, { id: 'sub-item2', label: 'Subitem 2' }]
            },
            {
                id: 'agents', label: 'So long section name', result: '25',
                items: [
                    { id: 'agents.1', label: 'Subitem 1.1', result: '25' },
                    { id: 'agents.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'agents2', label: 'So long section name 2 without results',
                items: [
                    { id: 'agents2.1.1', label: 'Subitem 1.1.1', result: '25' },
                    { id: 'agents2.1.2', label: 'Subitem 1.1.2' }
                ]
            },
            { id: 'without-children', label: 'No children' },
            {
                id: 'sectionA', label: 'Section A',
                items: [
                    { id: 'sub-sectionA.1', label: 'Subitem 1.1' },
                    { id: 'sub-sectionA.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'sectionB', label: 'Section B', items: [
                    { id: 'sub-sectionB.1', label: 'Subitem 1.1', disabled: true },
                    { id: 'sub-sectionB.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'sectionC', label: 'Section C',
                items: [
                    { id: 'sub-sectionC.1', label: 'Subitem 1.1' },
                    { id: 'sub-sectionC.2', label: 'Subitem 1.2' }
                ]
            },
            {
                id: 'sectionD', label: 'Section D',
                items: [
                    { id: 'sub-sectionD.1', label: 'Subitem 1.1' },
                    { id: 'sub-sectionD.2', label: 'Subitem 1.2' }
                ]
            }
        ];
        this.enableSearchMode = false;
        this.complexMode = _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSidebarVisualMode"].complex;
        this.cssProperties = [
            {
                name: '--egeo-st-sidebar--bg-color',
                description: 'Background color',
                default: '$neutral-full'
            },
            {
                name: '--egeo-st-sidebar--box-shadow',
                description: 'Box shadow color',
                default: '$neutral-8'
            },
            {
                name: '--egeo-st-sidebar--border-color',
                description: 'Sidebar border color',
                default: '$neutral-8'
            },
            {
                name: '--egeo-st-sidebar__item--border-bottom-color',
                description: 'Item border bottom color',
                default: '$neutral-15'
            },
            {
                name: '--egeo-st-sidebar__item--font-size',
                description: 'Item font size',
                default: '$egeo-font-size-16'
            },
            {
                name: '--egeo-st-sidebar__item--color',
                description: 'Item text color',
                default: '$neutral-70'
            },
            {
                name: '--egeo-st-sidebar__title--font-size',
                description: 'Title font size',
                default: '$egeo-font-size-20'
            },
            {
                name: '--egeo-st-sidebar__title--font-weight',
                description: 'Title font weight',
                default: '900'
            },
            {
                name: '--egeo-st-sidebar__title--line-height',
                description: 'Title line height',
                default: '$egeo-line-height-24'
            },
            {
                name: '--egeo-st-sidebar__title--color',
                description: 'Title color',
                default: '$neutral'
            },
            {
                name: '--egeo-st-sidebar__item--line-height',
                description: 'Item line height',
                default: '$egeo-line-height-small'
            },
            {
                name: '--egeo-st-sidebar__complex-item__chevron--color',
                description: 'Complex item chevron color',
                default: '$neutral-30'
            },
            {
                name: '--egeo-st-sidebar__item__mark--color',
                description: 'Item mark color',
                default: '$brand'
            },
            {
                name: '--egeo-st-sidebar__warning--color',
                description: 'Warning icon color',
                default: '$error'
            },
            {
                name: '--egeo-st-sidebar__warning--font-size',
                description: 'Warning icon font size',
                default: '$egeo-font-size-16'
            },
            {
                name: '--egeo-st-sidebar__result--bg-color',
                description: 'Result text color',
                default: '$neutral-15'
            },
            {
                name: '--egeo-st-sidebar__result--font-size',
                description: 'Result font size',
                default: '$egeo-font-size-12'
            },
            {
                name: '--egeo-st-sidebar__result__text--bg-color',
                description: 'Result background color',
                default: '$neutral-60'
            },
            {
                name: '--egeo-st-sidebar__disabled-item--color',
                description: 'Disabled item color',
                default: '$neutral-30'
            },
            {
                name: '--egeo-st-sidebar__chevron-right-icon--content',
                description: 'Chevron right icon',
                default: '\E605'
            },
            {
                name: '--egeo-st-sidebar__chevron-down-icon--content',
                description: 'Chevron down icon',
                default: '\E63F'
            },
            {
                name: '--egeo-st-sidebar__warning-icon--content',
                description: 'Warning icon',
                default: '\E613'
            },
            {
                name: '--egeo-st-sidebar__empty-results--color',
                description: 'Empty results message color',
                default: '$neutral-70'
            },
            {
                name: '--egeo-st-sidebar__empty-results--font-size',
                description: 'Empty results message font size',
                default: '$egeo-font-size-12'
            },
            {
                name: '--egeo-st-sidebar__empty-results--padding',
                description: 'Empty results message padding',
                default: '0 0 20px 0'
            }
        ];
        this.activeItem = this.items[2].items[0].items[1];
        this.complexItems = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.items);
        this.filteredItems = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.items);
        this.filteredComplexItems = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.items);
    }
    StSidebarDemoComponent.prototype.onChangeActive = function (item) {
        this.activeItem = item;
    };
    StSidebarDemoComponent.prototype.onSearch = function (searchText, complex) {
        var list = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(complex ? this.complexItems : this.items);
        if (searchText) {
            list = list.filter(function (_item) { return _item.label.indexOf(searchText) > -1; });
        }
        if (complex) {
            this.filteredComplexItems = list;
        }
        else {
            this.filteredItems = list;
        }
    };
    StSidebarDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-sidebar-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-sidebar-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-sidebar-demo.component.scss */ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StSidebarDemoComponent);
    return StSidebarDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.module.ts ***!
  \*****************************************************************/
/*! exports provided: StSidebarDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StSidebarDemoModule", function() { return StSidebarDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_sidebar_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-sidebar-demo.component */ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.ts");
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





var StSidebarDemoModule = /** @class */ (function () {
    function StSidebarDemoModule() {
    }
    StSidebarDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSidebarModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StSwitchModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_4__["CssPropertyTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_sidebar_demo_component__WEBPACK_IMPORTED_MODULE_3__["StSidebarDemoComponent"]]
                }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_sidebar_demo_component__WEBPACK_IMPORTED_MODULE_3__["StSidebarDemoComponent"]],
            providers: []
        })
    ], StSidebarDemoModule);
    return StSidebarDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-sidebar-demo-st-sidebar-demo-module.js.map