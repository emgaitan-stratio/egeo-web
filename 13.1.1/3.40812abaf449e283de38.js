(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{K5eF:function(e,t,n){"use strict";n.r(t);var i=n("Ip0R"),o=n("CcnG"),d=n("dIas"),s=function(e,t,n,i){var o,d=arguments.length,s=d<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(d<3?o(s):d>3?o(t,n,s):o(t,n))||s);return d>3&&s&&Object.defineProperty(t,n,s),s},c=function(){function e(){}return e=s([Object(o.Component)({selector:"st-widget-demo",template:n("zbpU"),styles:[n("Ymkm")],changeDetection:o.ChangeDetectionStrategy.OnPush})],e)}();n.d(t,"StWidgetDemoModule",function(){return r});var a=function(e,t,n,i){var o,d=arguments.length,s=d<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(s=(d<3?o(s):d>3?o(t,n,s):o(t,n))||s);return d>3&&s&&Object.defineProperty(t,n,s),s},r=function(){function e(){}return e=a([Object(o.NgModule)({imports:[i.b,d.Ca,d.i.withComponents({components:[c]})],declarations:[c]})],e)}()},Ymkm:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.row {\n  margin-bottom: 30px; }\n.widget-demo {\n  height: 443px; }\n.widget-demo__content {\n    height: 100%;\n    width: 100%; }\n'},zbpU:function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<section class="container">\n   <h2>Loading Data</h2>\n   <div class="row">\n      <div class="col-md-4">\n         <st-widget title="widget" class="widget-demo" [loading]=true>\n            <div class="widget-demo__content"></div>\n         </st-widget>\n      </div>\n      <div class="col-md-4">\n         <st-widget title="widget" class="widget-demo" [loading]=true overwriteLoadingData="Text overwrited">\n            <div class="widget-demo__content"></div>\n         </st-widget>\n      </div>\n   </div>\n   <h2>Loaded Data</h2>\n   <div class="row">\n      <div class="col-md-4">\n         <st-widget title="widget" class="widget-demo">\n            <div class="widget-demo__content"></div>\n         </st-widget>\n      </div>\n      <div class="col-md-4">\n         <st-widget title="widget" class="widget-demo" [draggable]="false">\n            <div class="widget-demo__content">\n               Not draggable widget\n            </div>\n         </st-widget>\n      </div>\n      <div class="col-md-4">\n         <st-widget title="widget" class="widget-demo" [displaySettingsButton]="false">\n            <div class="widget-demo__content">\n               Widget without settings button\n            </div>\n         </st-widget>\n      </div>\n   </div>\n\n</section>\n'}}]);