(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"/fRu":function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),r=n("Ip0R"),i=n("dIas"),s=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},c=function(){function e(){this.configDoc={html:"demo/st-bubble-demo/st-bubble-demo.component.html",ts:"demo/st-bubble-demo/st-bubble-demo.component.ts",component:"lib/st-bubble/st-bubble.component.ts"},this.text="What needed to deploy Crossdata?",this.hidden=!0}return e.prototype.onClick=function(){this.hidden=!this.hidden},e=s([Object(o.Component)({selector:"st-bubble-demo",template:n("hgMo"),styles:[n("4i5P")]})],e)}();n.d(t,"StBubbleDemoModule",function(){return l});var b=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},l=function(){function e(){}return e=b([Object(o.NgModule)({imports:[r.CommonModule,i.h,i.j.withComponents({components:[c]}),i.k],declarations:[c],providers:[]})],e)}()},"4i5P":function(e,t){e.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.bubble-demo-container {\n  width: 800px;\n  height: 300px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n.bubble-demo-items {\n  float: right; }\n.bubble-demo-button {\n  float: inherit; }\n.bubble-demo-content {\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.bubble-demo-component {\n  position: relative;\n  right: 42px;\n  top: 10px; }\n'},hgMo:function(e,t){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\r\n   <section class="container-liquid">\r\n      <div class="bubble-demo-container">\r\n         <div class="bubble-demo-items">\r\n            <st-bubble class="bubble-demo-component" qaTag="bubble-demo" [text]="text" [hidden]="hidden" [offset]="{x: 38, y: 17}">\r\n\r\n               <button bubble-button class="bubble-demo-button button button-primary" (click)="onClick()">\r\n                  <span>Bubble</span>\r\n               </button>\r\n\r\n            </st-bubble>\r\n         </div>\r\n      </div>\r\n   </section>\r\n</st-docs>\r\n'}}]);