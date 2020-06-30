(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-modal-demo-st-modal-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-modal-demo/st-modal-demo.component.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-modal-demo/st-modal-demo.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-fluid col-md-24\">\n      <div class=\"st-live-example\">\n         <h1 class=\"st-live-example-title\">Modals by type of content:</h1>\n\n         <button class=\"button button-primary\" (click)=\"showModal()\">\n            <span>Simple Message Modal</span>\n         </button>\n         <button class=\"button button-primary\" (click)=\"showModalWithHtml()\">\n            <span>Modal with HTML</span>\n         </button>\n         <button class=\"button button-primary\" (click)=\"showModalWithComponent()\">\n            <span>Modal with component</span>\n         </button>\n         <button class=\"button button-primary\" (click)=\"showModalWithComponentAndIcon()\">\n               <span>Modal with component and custom icon</span>\n            </button>\n         <button class=\"button button-primary\" (click)=\"showModalWithoutButtons()\">\n            <span>Modal without buttons</span>\n         </button>\n         <button class=\"button button-primary\" (click)=\"showFullscreenModalWithComponentAndWithoutContent()\">\n            <span>Modal fullscreen only with component</span>\n         </button>\n\n         <br>\n         <br>\n         <h1 class=\"st-live-example-title\">Modals by size:</h1>\n         <button class=\"button button-primary\" (click)=\"showFullscreenModal()\">\n            <span>Fullscreen modal</span>\n         </button>\n\n         <br>\n         <br>\n         <h1 class=\"st-live-example-title\">Other modals:</h1>\n         <button class=\"button button-primary\" (click)=\"showBasic('delete')\">\n            <span>Delete modal</span>\n         </button>\n         <button class=\"button button-primary\" (click)=\"showBasic('warning')\">\n            <span>Warning modal</span>\n         </button>\n         <button class=\"button button-primary\" (click)=\"showBasic('confirm')\">\n            <span>Confirmation modal</span>\n         </button>\n         <button class=\"button button-primary\" (click)=\"showBasic('info')\">\n            <span>Info modal</span>\n         </button>\n\n\n\n      </div>\n   </section>\n   <st-demo-logger></st-demo-logger>\n   <div #loadModal id=\"modal-container\"></div>\n\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-modal-demo/st-modal-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-modal-demo/st-modal-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: StModalDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StModalDemoComponent", function() { return StModalDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/st-demo-logger/st-demo-loger.model */ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts");
/* harmony import */ var _st_modal_test_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-modal-test-demo.component */ "./src/app/demos/st-modal-demo/st-modal-test-demo.component.ts");
/* harmony import */ var _st_modal_test_buttons_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-modal-test-buttons-demo.component */ "./src/app/demos/st-modal-demo/st-modal-test-buttons-demo.component.ts");
/* harmony import */ var _st_modal_test_fullscreen_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./st-modal-test-fullscreen-layout.component */ "./src/app/demos/st-modal-demo/st-modal-test-fullscreen-layout.component.ts");
/* harmony import */ var _shared_st_demo_logger_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/st-demo-logger/st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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







var StModalDemoComponent = /** @class */ (function () {
    function StModalDemoComponent(_modalService, _logger) {
        this._modalService = _modalService;
        this._logger = _logger;
        this.configDoc = {
            html: 'demo/st-modal-demo/st-modal-demo.component.html',
            ts: 'demo/st-modal-demo/st-modal-demo.component.ts',
            component: 'lib/st-modal/st-modal.component.ts'
        };
        this.buttons = [
            { label: 'Cancel', classes: 'button-secondary', responseValue: _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalResponse"].NO, closeOnClick: true },
            { label: 'Confirm', classes: 'button-primary', responseValue: _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalResponse"].YES, closeOnClick: true }
        ];
        this._logger.maxMessages = 15;
    }
    StModalDemoComponent.prototype.ngAfterViewInit = function () {
        this._modalService.container = this.target;
    };
    StModalDemoComponent.prototype.showModal = function () {
        var _this = this;
        var message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque\n      porttitor non nulla quis rhoncus. Cras vitae pretium arcu, ac semper justo.";
        this._modalService.show({
            modalTitle: 'Title',
            buttons: this.buttons,
            messageTitle: 'Copy',
            message: message,
            maxWidth: 600,
            minWidth: 400,
            showCloseBtn: true
        }).subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.showModalWithHtml = function () {
        var _this = this;
        var html = "\n      <h1 class=\"st-modal-example-test-class-h1\">Main title<h1>\n      <br>\n      <p>paragraph of some text between p html tags, and now a list:</p>\n      <br>\n      <div>\n         <ul class=\"st-modal-example-test-class-list\">\n            <li>Item 1</li>\n            <li>Item 2</li>\n            <li>Item 3</li>\n            <li>Item 4</li>\n            <li>Item 5</li>\n         </ul>\n      </div>\n      ";
        this._modalService.show({
            modalTitle: 'With HTML',
            buttons: this.buttons,
            html: html,
            maxWidth: 600,
            minWidth: 400
        }).subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.showModalWithComponent = function () {
        var _this = this;
        this._modalService.show({
            modalTitle: 'With component',
            buttons: this.buttons,
            maxWidth: 600,
            minWidth: 400
        }, _st_modal_test_demo_component__WEBPACK_IMPORTED_MODULE_3__["StModalDemoTestComponent"])
            .subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.showModalWithComponentAndIcon = function () {
        var _this = this;
        this._modalService.show({
            modalTitle: 'With component',
            buttons: this.buttons,
            maxWidth: 600,
            minWidth: 400,
            iconStatus: 'icon-home'
        }, _st_modal_test_demo_component__WEBPACK_IMPORTED_MODULE_3__["StModalDemoTestComponent"])
            .subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.showModalWithoutButtons = function () {
        var _this = this;
        this._modalService.show({
            modalTitle: 'With component',
            maxWidth: 600,
            minWidth: 400,
            outputs: { close: this.onCloseModalWithoutButtons.bind(this) }
        }, _st_modal_test_buttons_demo_component__WEBPACK_IMPORTED_MODULE_4__["StModalDemoTestButtonsComponent"])
            .subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.showFullscreenModal = function () {
        var _this = this;
        var message = 'Are you sure of delete this?';
        this._modalService.show({
            modalTitle: 'Title for this full-screen modal view',
            buttons: this.buttons,
            fullscreen: true
        }, _st_modal_test_demo_component__WEBPACK_IMPORTED_MODULE_3__["StModalDemoTestComponent"])
            .subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.showFullscreenModalWithComponentAndWithoutContent = function () {
        var _this = this;
        this._modalService.show({
            modalTitle: 'With component',
            maxWidth: 600,
            minWidth: 400,
            fullscreen: true,
            empty: true,
            outputs: { close: this.onCloseModalWithoutButtons.bind(this) }
        }, _st_modal_test_fullscreen_layout_component__WEBPACK_IMPORTED_MODULE_5__["StModalDemoTestFullscreenLayoutComponent"])
            .subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.showBasic = function (type) {
        var _this = this;
        this._modalService.showBasicModal(this.getBasicType(type), this.getTitle(type), 'Title', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor non nulla quis rhoncus. Cras vitae pretium arcu, ac semper justo.', this.getAcceptButton(type), this.getCancelButton(type)).subscribe(function (response) { return _this._logger.notifyAlert(_shared_st_demo_logger_st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerSeverity"].INFO, _this.evaluateResponse(response)); });
    };
    StModalDemoComponent.prototype.onCloseModalWithoutButtons = function (event) {
        this._modalService.close();
    };
    StModalDemoComponent.prototype.evaluateResponse = function (response) {
        switch (response) {
            case _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalResponse"].YES: return 'Click on confirm';
            case _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalResponse"].NO: return 'Click on cancel';
            case _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalResponse"].CLOSE: return 'Get event close';
            default: return 'Error response not found';
        }
    };
    StModalDemoComponent.prototype.getTitle = function (text) {
        switch (text) {
            case 'delete': return 'Delete';
            case 'warning': return 'Warning';
            case 'confirm': return 'Confirmation';
            case 'info': return 'Info';
            default: return '';
        }
    };
    StModalDemoComponent.prototype.getAcceptButton = function (text) {
        switch (text) {
            case 'delete': return 'Delete';
            case 'warning': return 'Accept';
            case 'confirm': return 'Accept';
            case 'info': return 'Accept';
            default: return '';
        }
    };
    StModalDemoComponent.prototype.getCancelButton = function (text) {
        switch (text) {
            case 'delete': return 'Cancel';
            case 'warning': return 'Cancel';
            case 'confirm': return 'Not now';
            case 'info': return '';
            default: return '';
        }
    };
    StModalDemoComponent.prototype.getBasicType = function (text) {
        switch (text) {
            case 'delete': return _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalBasicType"].DELETE;
            case 'warning': return _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalBasicType"].WARNING;
            case 'confirm': return _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalBasicType"].CONFIRM;
            case 'info': return _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalBasicType"].INFO;
            default: return _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalBasicType"].INFO;
        }
    };
    StModalDemoComponent.ctorParameters = function () { return [
        { type: _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalService"] },
        { type: _shared_st_demo_logger_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_6__["StDemoLoggerService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loadModal', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: false }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], StModalDemoComponent.prototype, "target", void 0);
    StModalDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-example',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-modal-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-modal-demo/st-modal-demo.component.html")).default
        }),
        __metadata("design:paramtypes", [_stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StModalService"], _shared_st_demo_logger_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_6__["StDemoLoggerService"]])
    ], StModalDemoComponent);
    return StModalDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-modal-demo/st-modal-demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demos/st-modal-demo/st-modal-demo.module.ts ***!
  \*************************************************************/
/*! exports provided: StModalDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StModalDemoModule", function() { return StModalDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_modal_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-modal-demo.component */ "./src/app/demos/st-modal-demo/st-modal-demo.component.ts");
/* harmony import */ var _st_modal_test_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./st-modal-test-demo.component */ "./src/app/demos/st-modal-demo/st-modal-test-demo.component.ts");
/* harmony import */ var _st_modal_test_buttons_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./st-modal-test-buttons-demo.component */ "./src/app/demos/st-modal-demo/st-modal-test-buttons-demo.component.ts");
/* harmony import */ var _st_modal_test_fullscreen_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./st-modal-test-fullscreen-layout.component */ "./src/app/demos/st-modal-demo/st-modal-test-fullscreen-layout.component.ts");
/* harmony import */ var _shared_st_demo_logger_st_demo_logger_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/st-demo-logger/st-demo-logger.module */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts");
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








var StModalDemoModule = /** @class */ (function () {
    function StModalDemoModule() {
    }
    StModalDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StFullscreenLayoutModule"],
                _shared_st_demo_logger_st_demo_logger_module__WEBPACK_IMPORTED_MODULE_7__["StDemoLoggerModule"].withService(),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StModalModule"].withComponents([
                    _st_modal_test_demo_component__WEBPACK_IMPORTED_MODULE_4__["StModalDemoTestComponent"],
                    _st_modal_test_buttons_demo_component__WEBPACK_IMPORTED_MODULE_5__["StModalDemoTestButtonsComponent"],
                    _st_modal_test_fullscreen_layout_component__WEBPACK_IMPORTED_MODULE_6__["StModalDemoTestFullscreenLayoutComponent"]
                ]),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_modal_demo_component__WEBPACK_IMPORTED_MODULE_3__["StModalDemoComponent"]]
                }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [
                _st_modal_demo_component__WEBPACK_IMPORTED_MODULE_3__["StModalDemoComponent"],
                _st_modal_test_demo_component__WEBPACK_IMPORTED_MODULE_4__["StModalDemoTestComponent"],
                _st_modal_test_buttons_demo_component__WEBPACK_IMPORTED_MODULE_5__["StModalDemoTestButtonsComponent"],
                _st_modal_test_fullscreen_layout_component__WEBPACK_IMPORTED_MODULE_6__["StModalDemoTestFullscreenLayoutComponent"]
            ],
            providers: [_stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StModalService"]]
        })
    ], StModalDemoModule);
    return StModalDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-modal-demo/st-modal-test-buttons-demo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/demos/st-modal-demo/st-modal-test-buttons-demo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StModalDemoTestButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StModalDemoTestButtonsComponent", function() { return StModalDemoTestButtonsComponent; });
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

var StModalDemoTestButtonsComponent = /** @class */ (function () {
    function StModalDemoTestButtonsComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StModalDemoTestButtonsComponent.prototype.onClick = function (event) {
        this.close.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StModalDemoTestButtonsComponent.prototype, "close", void 0);
    StModalDemoTestButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-modal-test',
            template: "\n   <h1>Hello World</h1>\n   <br>\n   <button class=\"button button-primary\" (click)=\"onClick($event)\">Close modal</button>\n   <br>\n   <br>\n   <p>This is a modal with a component inside</p>\n   ",
            styles: ["\n         h1 {\n            font-weight: bold;\n            font-size: 23px;\n         }\n         p {\n            color: #2d96bd;\n            font-weight: normal;\n         }\n   "]
        })
    ], StModalDemoTestButtonsComponent);
    return StModalDemoTestButtonsComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-modal-demo/st-modal-test-demo.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demos/st-modal-demo/st-modal-test-demo.component.ts ***!
  \*********************************************************************/
/*! exports provided: StModalDemoTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StModalDemoTestComponent", function() { return StModalDemoTestComponent; });
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

var StModalDemoTestComponent = /** @class */ (function () {
    function StModalDemoTestComponent() {
    }
    StModalDemoTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-modal-test',
            template: "\n   <h1>Hello World</h1>\n   <br>\n   <p>This is a modal with a component inside</p>\n   ",
            styles: ["\n         h1 {\n            font-weight: bold;\n            font-size: 23px;\n         }\n         p {\n            color: #2d96bd;\n            font-weight: normal;\n         }\n   "]
        })
    ], StModalDemoTestComponent);
    return StModalDemoTestComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-modal-demo/st-modal-test-fullscreen-layout.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/demos/st-modal-demo/st-modal-test-fullscreen-layout.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StModalDemoTestFullscreenLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StModalDemoTestFullscreenLayoutComponent", function() { return StModalDemoTestFullscreenLayoutComponent; });
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

var StModalDemoTestFullscreenLayoutComponent = /** @class */ (function () {
    function StModalDemoTestFullscreenLayoutComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StModalDemoTestFullscreenLayoutComponent.prototype, "close", void 0);
    StModalDemoTestFullscreenLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-modal-test-fullscreen-layout',
            template: "\n      <st-fullscreen-layout [title]=\"'Edition'\">\n         <div class=\"st-fullscreen-layout-buttons\">\n            <button class=\"button button-secondary button-separator\" (click)=\"close.emit($event)\">Cancel</button>\n            <button class=\"button button-primary\" (click)=\"close.emit($event)\">Save</button>\n         </div>\n         <div class=\"st-fullscreen-layout-content\">\n            <h1>TEST</h1>\n         </div>\n      </st-fullscreen-layout>\n   ",
            styles: ["\n      .button-separator {\n         margin-right: 30px;\n      }\n   "]
        })
    ], StModalDemoTestFullscreenLayoutComponent);
    return StModalDemoTestFullscreenLayoutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-modal-demo-st-modal-demo-module.js.map