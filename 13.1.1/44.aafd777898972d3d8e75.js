(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"/fRu":function(e,n,t){"use strict";t.r(n);var o=t("CcnG"),i=t("Ip0R"),r=t("dIas"),s=function(e,n,t,o){var i,r=arguments.length,s=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(n,t,s):i(n,t))||s);return r>3&&s&&Object.defineProperty(n,t,s),s},c=function(){function e(){this.text="What needed to deploy Crossdata?",this.hidden=!0}return e.prototype.onClick=function(){this.hidden=!this.hidden},e=s([Object(o.Component)({selector:"st-bubble-demo",template:t("hgMo"),styles:[t("4i5P")]})],e)}();t.d(n,"StBubbleDemoModule",function(){return b});var a=function(e,n,t,o){var i,r=arguments.length,s=r<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(r<3?i(s):r>3?i(n,t,s):i(n,t))||s);return r>3&&s&&Object.defineProperty(n,t,s),s},b=function(){function e(){}return e=a([Object(o.NgModule)({imports:[i.b,r.g,r.i.withComponents({components:[c]})],declarations:[c],providers:[]})],e)}()},"4i5P":function(e,n){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.bubble-demo-container {\n  width: 800px;\n  height: 300px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n.bubble-demo-items {\n  float: right; }\n.bubble-demo-button {\n  float: inherit; }\n.bubble-demo-content {\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.bubble-demo-component {\n  position: relative;\n  right: 42px;\n  top: 10px; }\n'},hgMo:function(e,n){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<section class="container-liquid">\n   <div class="bubble-demo-container">\n      <div class="bubble-demo-items">\n         <st-bubble class="bubble-demo-component" qaTag="bubble-demo" [text]="text" [hidden]="hidden" [offset]="{x: 38, y: 17}">\n\n            <button bubble-button class="bubble-demo-button button button-primary" (click)="onClick()">\n               <span>Bubble</span>\n            </button>\n\n         </st-bubble>\n      </div>\n   </div>\n</section>\n'}}]);