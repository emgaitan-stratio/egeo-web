(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-horizontal-tabs-demo-st-horizontal-tabs-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n      <p class=\"introduction\">Tabs are designed to quickly navigate between views within the same context.</p>\r\n      <span class=\"separator\"></span>\r\n      <h1 class=\"title\">Design and behaviour</h1>\r\n      <p class=\"paragraph\">Tabs appear in a single, non-scrollable row, above their content. The width of each tab is\r\n         dependent on its label. To ensure that all tabs appear in the container, avoid using more than seven tabs and\r\n         limit labels to one or two words.</p>\r\n      <st-horizontal-tabs class=\"demo\" [options]=\"options\" [activeOption]=\"active\" qaTag=\"horizontal-tabs-demo\">\r\n         <st-filter-selector class=\"filter\"\r\n                             [filterList]=\"filterList\"\r\n                             [selected]=\"selectedFilter\"\r\n                             (clickFilter)=\"onChangeFilter($event)\"\r\n                             [openFilter]=\"openFilter\"\r\n                             (changeFilterVisibility)=\"openFilter = !openFilter\"\r\n                             (closeFilter)=\"openFilter = false\">\r\n         </st-filter-selector>\r\n      </st-horizontal-tabs>\r\n      <span class=\"separator\"></span>\r\n      <h1 class=\"title\">Usage and best practices</h1>\r\n      <ul class=\"list\">\r\n         <li> Use tabs for alternate views within the sidenav, the aside or main content area.</li>\r\n         <li> Don’t use tabs to break user interactions into a series of steps. Serial workflows are best presented in a\r\n            wizard.\r\n         </li>\r\n         <li> Avoid using tabs in cards and modals.</li>\r\n         <li> Ensure that the content in each view is independent of the content in other views.</li>\r\n         <li> Don’t force users to navigate back and forth to compare data–keep such content in the same view.</li>\r\n         <li> Avoid cross-linking between tabs.</li>\r\n         <li> If the content within a view is broad, divide it into subsections.</li>\r\n         <li> Users should not have to move between tabs in order to complete a task</li>\r\n         <li> Favor nouns over verbs, for example, Settings, Permissions, and Performance.</li>\r\n         <li> Use title-style caps.</li>\r\n         <li> Avoid using icons in labels.</li>\r\n      </ul>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.horizontal-tabs {\n  width: 100%;\n  display: block; }\n.demo {\n  display: block;\n  padding: 60px 0; }\n.filter {\n  text-align: right;\n  margin-left: auto; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWhvcml6b250YWwtdGFicy1kZW1vL3N0LWhvcml6b250YWwtdGFicy1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtaG9yaXpvbnRhbC10YWJzLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtaG9yaXpvbnRhbC10YWJzLWRlbW9cXHN0LWhvcml6b250YWwtdGFicy1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtaG9yaXpvbnRhbC10YWJzLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWhvcml6b250YWwtdGFicy1kZW1vL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FDakJGO0VBQ0csV0FBVztFQUNYLGNBQWMsRUFBQTtBQUdqQjtFQUNHLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFHbEI7RUFDRyxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtaG9yaXpvbnRhbC10YWJzLWRlbW8vc3QtaG9yaXpvbnRhbC10YWJzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uaG9yaXpvbnRhbC10YWJzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5kZW1vIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDYwcHggMDsgfVxuXG4uZmlsdGVyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdjb25zdGFudHMvZm9udHMnO1xyXG5cclxuLmhvcml6b250YWwtdGFicyB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRlbW8ge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZSAoYmFzZSAxNCk6XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcclxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxyXG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxyXG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcclxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcclxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxyXG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxyXG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XHJcblxyXG4vLyBkZXByZWNhdGVkOlxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxyXG5cclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.ts ***!
  \************************************************************************************/
/*! exports provided: StHorizontalTabsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StHorizontalTabsDemoComponent", function() { return StHorizontalTabsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
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


var StHorizontalTabsDemoComponent = /** @class */ (function () {
    function StHorizontalTabsDemoComponent() {
        this.configDoc = {
            html: 'demo/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.html',
            ts: 'demo/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.ts',
            component: 'lib/st-horizontal-tabs/st-horizontal-tabs.component.ts'
        };
        this.options = [
            { id: 'overview', text: 'Overview', status: _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StHorizontalTabStatus"].warning },
            { id: 'activity', text: 'Activity' },
            { id: 'dashboard', text: 'Dashboard', status: _stratio_egeo__WEBPACK_IMPORTED_MODULE_1__["StHorizontalTabStatus"].error },
            { id: 'nodes', text: 'Nodes' }
        ];
        this.active = this.options[1];
        this.openFilter = false;
        this.filterList = [
            { label: 'Any', icon: 'icon-activity', value: 'any' },
            { label: 'Last updated', icon: 'icon-timer', value: 'updated' },
            { label: 'Modified date', icon: 'icon-datetime', value: 'modified' },
            { label: 'Size', icon: 'icon-code', value: 'size' }
        ];
        this.selectedFilter = this.filterList[0];
    }
    StHorizontalTabsDemoComponent.prototype.onChangeFilter = function (selectedFilter) {
        this.selectedFilter = selectedFilter;
        this.openFilter = false;
    };
    StHorizontalTabsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-horizontal-tabs-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-horizontal-tabs-demo.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-horizontal-tabs-demo.component.scss */ "./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.scss")).default]
        })
    ], StHorizontalTabsDemoComponent);
    return StHorizontalTabsDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.module.ts ***!
  \*********************************************************************************/
/*! exports provided: StHorizontalTabsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StHorizontalTabsDemoModule", function() { return StHorizontalTabsDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_horizontal_tabs_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-horizontal-tabs-demo.component */ "./src/app/demos/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.ts");
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




var StHorizontalTabsDemoModule = /** @class */ (function () {
    function StHorizontalTabsDemoModule() {
    }
    StHorizontalTabsDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StHorizontalTabsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({
                    components: [_st_horizontal_tabs_demo_component__WEBPACK_IMPORTED_MODULE_3__["StHorizontalTabsDemoComponent"]]
                }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StFilterSelectorModule"]
            ],
            declarations: [_st_horizontal_tabs_demo_component__WEBPACK_IMPORTED_MODULE_3__["StHorizontalTabsDemoComponent"]],
            providers: []
        })
    ], StHorizontalTabsDemoModule);
    return StHorizontalTabsDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-horizontal-tabs-demo-st-horizontal-tabs-demo-module.js.map