(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-sidebar-demo-st-sidebar-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"col-sm-12 demo-layout\">\n      <p class=\"introduction\">Sidebar allows to navigate user through content.</p>\n      <span class=\"separator\"></span>\n      <h1 class=\"title\">Theme customization</h1>\n      <p class=\"paragraph\">You can customize some table styles using the following css variables</p>\n      <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\n\n\n      <h1 class=\"title\">Examples</h1>\n      <st-switch (change)=\"enableSearchMode = $event\" label=\"Enable search mode\" class=\"col-sm-12 row\"></st-switch>\n\n      <div class=\"sidebar-container\">\n         <h1>Normal visualization </h1>\n\n         <st-sidebar class=\"sidebar\" title=\"Mesos Manager\" [items]=\"items\" qaTag=\"sidebar-demo\" [active]=\"activeItem\" [searchMode]=\"enableSearchMode\"\n             (change)=\"onChangeActive($event)\">\n            <span class=\"header\" sidebar-header> HEADER CONTENT</span>\n            <span class=\"footer\" sidebar-footer> FOOTER CONTENT</span>\n         </st-sidebar>\n      </div>\n\n      <div class=\"sidebar-container\">\n         <h1>Complex visualization </h1>\n         <st-sidebar class=\"sidebar\" title=\"Mesos Manager\" [visualMode]=\"complexMode\" [items]=\"items\" qaTag=\"sidebar-demo\" [active]=\"activeItem\"\n             [searchMode]=\"enableSearchMode\" (change)=\"onChangeActive($event)\">\n            <span sidebar-footer> FOOTER CONTENT</span>\n\n         </st-sidebar>\n      </div>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/demos/st-sidebar-demo/st-sidebar-demo.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.sidebar {\n  width: 283px; }\n.sidebar-container {\n  float: left;\n  padding: 20px; }\n.header, .footer {\n  margin-top: -10px;\n  display: block;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNpZGViYXItZGVtby9zdC1zaWRlYmFyLWRlbW8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3Qtc2lkZWJhci1kZW1vL3N0LXNpZGViYXItZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FDQ0Y7RUFDRyxZQUFZLEVBQUE7QUFHZjtFQUNHLFdBQVc7RUFDWCxhQUFhLEVBQUE7QUFHaEI7RUFDRyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LXNpZGViYXItZGVtby9zdC1zaWRlYmFyLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4uc2lkZWJhciB7XG4gIHdpZHRoOiAyODNweDsgfVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMjBweDsgfVxuXG4uaGVhZGVyLCAuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi5zaWRlYmFyIHtcbiAgIHdpZHRoOiAyODNweDtcbn1cblxuLnNpZGViYXItY29udGFpbmVyIHtcbiAgIGZsb2F0OiBsZWZ0O1xuICAgcGFkZGluZzogMjBweDtcbn1cblxuLmhlYWRlciwgLmZvb3RlciB7XG4gICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */");

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
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
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
        this.complexMode = _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StSidebarVisualMode"].complex;
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
                name: '--egeo-st-sidebar__item--margin-bottom',
                description: 'Item margin bottom',
                default: '15px'
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
            }
        ];
        this.activeItem = this.items[2].items[0].items[1];
    }
    StSidebarDemoComponent.prototype.onChangeActive = function (item) {
        this.activeItem = item;
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