(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cJIv:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.vertical-tabs {\n  height: 100%;\n  width: 250px;\n  margin-bottom: 20px; }\n.info-box {\n  margin-left: 30px;\n  width: 75%; }\n.vertical-tabs-container {\n  height: 500px;\n  display: flex; }\n'},gKOj:function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<section class="container-liquid">\n   <div class="row">\n      <div class="col-sm-12 vertical-tabs-container">\n         <st-vertical-tabs class="vertical-tabs" [options]="options" [qaTag]="qaTag" (changeOption)="onChangeOption($event)" [activeOption]="active"></st-vertical-tabs>\n         <st-info-box title="Info box component" class="info-box">\n            {{active}}\n         </st-info-box>\n      </div>\n   </div>\n</section>\n'},wR3g:function(e,t,n){"use strict";n.r(t);var i=n("CcnG"),o=n("Ip0R"),a=n("dIas"),s=function(e,t,n,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,n,s):o(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},r=function(){function e(){this.options=["Service","Nodes","Cassandra"],this.active=this.options[0],this.qaTag="vertical-tabs-example"}return e.prototype.onChangeOption=function(e){this.active=e},e=s([Object(i.Component)({selector:"st-vertical-tabs-demo",template:n("gKOj"),styles:[n("cJIv")]})],e)}();n.d(t,"StVerticalTabsDemoModule",function(){return l});var c=function(e,t,n,i){var o,a=arguments.length,s=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(s=(a<3?o(s):a>3?o(t,n,s):o(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},l=function(){function e(){}return e=c([Object(i.NgModule)({imports:[o.b,a.Ba,a.v,a.i.withComponents({components:[r]})],declarations:[r],providers:[]})],e)}()}}]);