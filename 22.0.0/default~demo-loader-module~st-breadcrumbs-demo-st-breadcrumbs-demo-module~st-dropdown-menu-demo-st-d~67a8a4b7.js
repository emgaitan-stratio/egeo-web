(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html":
/*!**********************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<div class=\"st-logger\" [ngStyle]=\"{'width': width + 'px', 'right': expanded ? 0 : ((width * -1) + 'px')}\">\r\n   <div class=\"st-logger-tab\" (click)=\"toggle()\"></div>\r\n   <div class=\"drag-icon\" draggable=\"true\"(dragend)=\"notifyEnd($event)\"><i class=\"icon-actions\"></i><i class=\"icon-actions\"></i></div>\r\n   <div class=\"st-logger-container\">\r\n      <p *ngFor=\"let log of ((logStream | async) || [])\" [ngClass]=\"getSeverityClass(log)\">{{log.message}}</p>\r\n   </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts":
/*!********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts ***!
  \********************************************************************/
/*! exports provided: StDemoLoggerSeverity, StDemoLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerSeverity", function() { return StDemoLoggerSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLogger", function() { return StDemoLogger; });
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
var StDemoLoggerSeverity;
(function (StDemoLoggerSeverity) {
    StDemoLoggerSeverity[StDemoLoggerSeverity["INFO"] = 0] = "INFO";
    StDemoLoggerSeverity[StDemoLoggerSeverity["WARN"] = 1] = "WARN";
    StDemoLoggerSeverity[StDemoLoggerSeverity["ERROR"] = 2] = "ERROR";
    StDemoLoggerSeverity[StDemoLoggerSeverity["DEBUG"] = 3] = "DEBUG";
})(StDemoLoggerSeverity || (StDemoLoggerSeverity = {}));
var StDemoLogger = /** @class */ (function () {
    function StDemoLogger(message) {
        this.severity = StDemoLoggerSeverity.INFO;
        this.message = message;
    }
    return StDemoLogger;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.module.ts ***!
  \**********************************************************************/
/*! exports provided: StDemoLoggerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerModule", function() { return StDemoLoggerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _st_demo_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-logger */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.ts");
/* harmony import */ var _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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




var StDemoLoggerModule = /** @class */ (function () {
    function StDemoLoggerModule() {
    }
    StDemoLoggerModule_1 = StDemoLoggerModule;
    StDemoLoggerModule.withService = function () {
        return {
            ngModule: StDemoLoggerModule_1,
            providers: [_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_3__["StDemoLoggerService"]]
        };
    };
    var StDemoLoggerModule_1;
    StDemoLoggerModule = StDemoLoggerModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_st_demo_logger__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerComponent"]],
            exports: [_st_demo_logger__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerComponent"]]
        })
    ], StDemoLoggerModule);
    return StDemoLoggerModule;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.st-logger {\n  position: fixed;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 400px;\n  transition: right 0.8s ease; }\n.drag-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  height: 20px; }\n.st-logger-tab {\n  background-color: #FFFFFF;\n  box-shadow: 0px 2px 14px 0 #DBDBDB;\n  position: relative;\n  border-radius: 0 0 0 5px;\n  position: absolute;\n  left: -32px; }\n.st-logger-tab:after {\n    height: 100%;\n    width: 5px;\n    background-color: #FFFFFF;\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: -5px; }\n.st-logger-tab:before {\n    display: flex;\n    padding: 7px;\n    font-family: \"ico_stratio\";\n    font-size: 1.429rem;\n    line-height: 1.429rem;\n    content: '\\e90c';\n    cursor: pointer; }\n.st-logger-container {\n  height: 100%;\n  padding: 30px;\n  box-shadow: 0 2px 14px 0 #DBDBDB;\n  border-left: solid 1px #f6f6f6;\n  background-color: #FFFFFF;\n  overflow-y: auto;\n  flex-grow: 1; }\n.st-logger-container p:first-child {\n    border-top: solid 1px #E7E7E7; }\n.info,\n.warning,\n.critical,\n.debug {\n  color: #707070;\n  font-weight: 400;\n  font-size: 0.938rem;\n  line-height: 1.286rem;\n  display: inline-flex;\n  border-bottom: solid 1px #E7E7E7;\n  padding: 3px;\n  width: 100%; }\n.info:before,\n  .warning:before,\n  .critical:before,\n  .debug:before {\n    font-size: 1.143rem;\n    line-height: 1.063rem;\n    font-family: \"ico_stratio\";\n    margin-right: 7px; }\n.info {\n  color: #065EB2; }\n.info:before {\n    content: '\\e615'; }\n.warning {\n  color: #EC7E13; }\n.warning:before {\n    content: '\\e613'; }\n.critical {\n  color: #DF2935; }\n.critical:before {\n    content: '\\e043'; }\n.debug {\n  padding-left: 23px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3NoYXJlZC9zdC1kZW1vLWxvZ2dlci9zdC1kZW1vLWxvZ2dlci5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHNoYXJlZFxcc3QtZGVtby1sb2dnZXJcXHN0LWRlbW8tbG9nZ2VyLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zaGFyZWQvc3QtZGVtby1sb2dnZXIvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9pbmRleC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zaGFyZWQvc3QtZGVtby1sb2dnZXIvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc2hhcmVkL3N0LWRlbW8tbG9nZ2VyL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfc2V0dGluZ3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FJOUJGOzs7Ozs7Ozs7RUp3Q0U7QUt4Q0Y7Ozs7Ozs7OztFTGtERTtBQ3RDRjtFQUNHLGVBQWU7RUFDZixRQUFRO0VBQ1IsTUFBTTtFQUNOLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCLEVBQUE7QUFHOUI7RUFDRyxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVksRUFBQTtBQUdmO0VBQ0cseUJFb0NtQjtFRm5DbkIsa0NFMkJpQjtFRjFCakIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBTmQ7SUFRTSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlCRTJCZ0I7SUYxQmhCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXLEVBQUE7QUFmakI7SUFrQk0sYUFBYTtJQUNiLFlBQVk7SUFDWiwwQkdoQzJDO0lIaUMzQyxtQkd4QnNCO0lIeUJ0QixxQkdkd0I7SUhleEIsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQUlyQjtFQUNHLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NFRmlCO0VGR2pCLDhCQUF5QztFQUN6Qyx5QkVJbUI7RUZIbkIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBQVBmO0lBVU0sNkJFVmMsRUFBQTtBRmNwQjs7OztFQUlHLGNFWmlCO0VGYWpCLGdCQUFnQjtFQUNoQixtQkd2QmdDO0VId0JoQyxxQkcxQzJCO0VIMkMzQixvQkFBb0I7RUFDcEIsZ0NFdkJpQjtFRndCakIsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQVhkOzs7O0lBYU0sbUJHNURzQjtJSDZEdEIscUJHMUJnQztJSDJCaEMsMEJHckUyQztJSHNFM0MsaUJBQWlCLEVBQUE7QUFJdkI7RUFDRyxjRXpFaUIsRUFBQTtBRndFcEI7SUFHTSxnQkFBZ0IsRUFBQTtBQUl0QjtFQUNHLGNFMURjLEVBQUE7QUZ5RGpCO0lBR00sZ0JBQWdCLEVBQUE7QUFJdEI7RUFDRyxjRTNEWSxFQUFBO0FGMERmO0lBR00sZ0JBQWdCLEVBQUE7QUFJdEI7RUFDRyxrQkFBa0IsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zaGFyZWQvc3QtZGVtby1sb2dnZXIvc3QtZGVtby1sb2dnZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cbi5zdC1sb2dnZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiA0MDBweDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC44cyBlYXNlOyB9XG5cbi5kcmFnLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMjBweDsgfVxuXG4uc3QtbG9nZ2VyLXRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTRweCAwICNEQkRCREI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zMnB4OyB9XG4gIC5zdC1sb2dnZXItdGFiOmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC01cHg7IH1cbiAgLnN0LWxvZ2dlci10YWI6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LWZhbWlseTogXCJpY29fc3RyYXRpb1wiO1xuICAgIGZvbnQtc2l6ZTogMS40MjlyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI5cmVtO1xuICAgIGNvbnRlbnQ6ICdcXGU5MGMnO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc3QtbG9nZ2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTRweCAwICNEQkRCREI7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2Y2ZjZmNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZmxleC1ncm93OiAxOyB9XG4gIC5zdC1sb2dnZXItY29udGFpbmVyIHA6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjRTdFN0U3OyB9XG5cbi5pbmZvLFxuLndhcm5pbmcsXG4uY3JpdGljYWwsXG4uZGVidWcge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjkzOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjg2cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNFN0U3RTc7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLmluZm86YmVmb3JlLFxuICAud2FybmluZzpiZWZvcmUsXG4gIC5jcml0aWNhbDpiZWZvcmUsXG4gIC5kZWJ1ZzpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMS4xNDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMDYzcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBcImljb19zdHJhdGlvXCI7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7IH1cblxuLmluZm8ge1xuICBjb2xvcjogIzA2NUVCMjsgfVxuICAuaW5mbzpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdcXGU2MTUnOyB9XG5cbi53YXJuaW5nIHtcbiAgY29sb3I6ICNFQzdFMTM7IH1cbiAgLndhcm5pbmc6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFxlNjEzJzsgfVxuXG4uY3JpdGljYWwge1xuICBjb2xvcjogI0RGMjkzNTsgfVxuICAuY3JpdGljYWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFxlMDQzJzsgfVxuXG4uZGVidWcge1xuICBwYWRkaW5nLWxlZnQ6IDIzcHg7IH1cbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuQGltcG9ydCAnY29uc3RhbnRzL2luZGV4JztcclxuXHJcbi5zdC1sb2dnZXIge1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICB0b3A6IDA7XHJcbiAgIGhlaWdodDogMTAwdmg7XHJcbiAgIHdpZHRoOiA0MDBweDtcclxuICAgdHJhbnNpdGlvbjogcmlnaHQgMC44cyBlYXNlOztcclxufVxyXG5cclxuLmRyYWctaWNvbiB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgbGVmdDogMDtcclxuICAgdG9wOiAwO1xyXG4gICBib3R0b206IDA7XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uc3QtbG9nZ2VyLXRhYiB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICRuZXV0cmFsLWZ1bGw7XHJcbiAgIGJveC1zaGFkb3c6IDBweCAycHggMTRweCAwICRuZXV0cmFsLTE1O1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDVweDtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBsZWZ0OiAtMzJweDtcclxuICAgJjphZnRlciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtZnVsbDtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IC01cHg7XHJcbiAgIH1cclxuICAgJjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZWdlby1zdHJhdGlvLWljb25zO1xyXG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0yMDtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTIwO1xyXG4gICAgICBjb250ZW50OiAnXFxlOTBjJztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB9XHJcbn1cclxuXHJcbi5zdC1sb2dnZXItY29udGFpbmVyIHtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBwYWRkaW5nOiAzMHB4O1xyXG4gICBib3gtc2hhZG93OiAwIDJweCAxNHB4IDAgJG5ldXRyYWwtMTU7XHJcbiAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiKDI0NiwgMjQ2LCAyNDYpO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC1mdWxsO1xyXG4gICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICBwOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRuZXV0cmFsLTEwO1xyXG4gICB9XHJcbn1cclxuXHJcbi5pbmZvLFxyXG4ud2FybmluZyxcclxuLmNyaXRpY2FsLFxyXG4uZGVidWcge1xyXG4gICBjb2xvcjogJG5ldXRyYWwtNjA7XHJcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLXhzbWFsbDtcclxuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTE4O1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRuZXV0cmFsLTEwO1xyXG4gICBwYWRkaW5nOiAzcHg7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICAmOmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE2O1xyXG4gICAgICBsaW5lLWhlaWdodDogJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZWdlby1zdHJhdGlvLWljb25zO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgfVxyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgIGNvbG9yOiAkYWN0aW9uLTEyMDtcclxuICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnXFxlNjE1JztcclxuICAgfVxyXG59XHJcblxyXG4ud2FybmluZyB7XHJcbiAgIGNvbG9yOiAkd2FybmluZztcclxuICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnXFxlNjEzJztcclxuICAgfVxyXG59XHJcblxyXG4uY3JpdGljYWwge1xyXG4gICBjb2xvcjogJGVycm9yO1xyXG4gICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcXGUwNDMnO1xyXG4gICB9XHJcbn1cclxuXHJcbi5kZWJ1ZyB7XHJcbiAgIHBhZGRpbmctbGVmdDogMjNweDtcclxufVxyXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5AaW1wb3J0ICdjb2xvcnMnO1xuQGltcG9ydCAnZm9udHMnO1xuQGltcG9ydCAnc2V0dGluZ3MnO1xuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcclxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxyXG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcclxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxyXG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxyXG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxyXG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXHJcblxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXHJcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vIHotaW5kZXhcclxuXHJcbi8vIFRoaXMgcG9zaXRpb25zIGhhdmUgdG8gYmUgc29ydGVkIGluIGEgZGVzY2VuZGFudCBvcmRlci4gV2hlbiB5b3UgYWRkIGEgbmV3IHBvc2l0aW9uLCBtYWtlIHN1cmUgdGhleSBhcmUgc29ydGVkIGNvcnJlY3RseS5cclxuJG1vZGFsLXotaW5kZXg6IDEwMDAwICFkZWZhdWx0O1xyXG4kYWxlcnQtei1pbmRleDogOTAwMCAhZGVmYXVsdDtcclxuJGZ1bGxzY3JlZW4tei1pbmRleDogODAwMCAhZGVmYXVsdDtcclxuJG1lbnUtei1pbmRleDogNzUwMCAhZGVmYXVsdDtcclxuJGhlYWRlci16LWluZGV4OiA3MDAwICFkZWZhdWx0O1xyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts ***!
  \***********************************************************************/
/*! exports provided: StDemoLoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerService", function() { return StDemoLoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-loger.model */ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts");
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



var StDemoLoggerService = /** @class */ (function () {
    function StDemoLoggerService() {
        this._logList = [];
        this._logStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._maxMessages = 20;
    }
    Object.defineProperty(StDemoLoggerService.prototype, "logStream", {
        get: function () {
            return this._logStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    StDemoLoggerService.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        var strMessages = messages.map(function (message) { return message.toString(); });
        this.notifyAlert(new _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLogger"](strMessages.join(' ')));
    };
    StDemoLoggerService.prototype.notifyAlert = function (severityOrLog, message) {
        if (severityOrLog instanceof _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_2__["StDemoLogger"]) {
            this._logList.push(severityOrLog);
        }
        else {
            this._logList.push({ severity: severityOrLog, message: message });
        }
        // First check if its over limit
        this.checkLogListCapacity();
        // Then notify new elements to observers
        this._logStream.next(this._logList);
    };
    Object.defineProperty(StDemoLoggerService.prototype, "maxMessages", {
        set: function (maxMessages) {
            this._maxMessages = maxMessages;
        },
        enumerable: true,
        configurable: true
    });
    StDemoLoggerService.prototype.checkLogListCapacity = function () {
        var firstToShow = this._logList.length - this._maxMessages;
        if (firstToShow > 0) {
            this._logList = this._logList.slice(firstToShow);
        }
    };
    StDemoLoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StDemoLoggerService);
    return StDemoLoggerService;
}());



/***/ }),

/***/ "./src/app/demos/shared/st-demo-logger/st-demo-logger.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/shared/st-demo-logger/st-demo-logger.ts ***!
  \***************************************************************/
/*! exports provided: StDemoLoggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StDemoLoggerComponent", function() { return StDemoLoggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./st-demo-loger.model */ "./src/app/demos/shared/st-demo-logger/st-demo-loger.model.ts");
/* harmony import */ var _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./st-demo-logger.service */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.service.ts");
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



var StDemoLoggerComponent = /** @class */ (function () {
    function StDemoLoggerComponent(_loggerService) {
        this._loggerService = _loggerService;
        this.width = 400;
        this.logStream = this._loggerService.logStream;
    }
    StDemoLoggerComponent.prototype.getSeverityClass = function (log) {
        switch (log.severity) {
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].ERROR: return 'critical';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].WARN: return 'warning';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].INFO: return 'info';
            case _st_demo_loger_model__WEBPACK_IMPORTED_MODULE_1__["StDemoLoggerSeverity"].DEBUG: return 'debug';
            default: return 'debug';
        }
    };
    StDemoLoggerComponent.prototype.notifyEnd = function (event) {
        this.width = window.screen.width - event.screenX;
    };
    StDemoLoggerComponent.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    StDemoLoggerComponent.ctorParameters = function () { return [
        { type: _st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"] }
    ]; };
    StDemoLoggerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-demo-logger',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-demo-logger.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/shared/st-demo-logger/st-demo-logger.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-demo-logger.scss */ "./src/app/demos/shared/st-demo-logger/st-demo-logger.scss")).default]
        }),
        __metadata("design:paramtypes", [_st_demo_logger_service__WEBPACK_IMPORTED_MODULE_2__["StDemoLoggerService"]])
    ], StDemoLoggerComponent);
    return StDemoLoggerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-breadcrumbs-demo-st-breadcrumbs-demo-module~st-dropdown-menu-demo-st-d~67a8a4b7.js.map