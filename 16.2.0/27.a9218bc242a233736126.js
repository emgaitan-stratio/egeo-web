(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{cSmf:function(e,t){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\r\n   <section class="container-liquid">\r\n      <div class="launcher-container">\r\n         <st-launcher qaTag="launcher-demo" [items]="items" [groupLimit]="4" [groupLimitLabel]="\'View more\'" (toggle)="onToggle($event)" (select)="onSelect($event)"\r\n             (viewMore)="onViewMore($event)">\r\n         </st-launcher>\r\n      </div>\r\n   </section>\r\n</st-docs>\r\n'},wNxY:function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),r=n("Ip0R"),i=n("dIas"),l=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},c=function(){function e(){this.configDoc={html:"demo/st-launcher-demo/st-launcher-demo.component.html",ts:"demo/st-launcher-demo/st-launcher-demo.component.ts",component:"lib/st-launcher/st-launcher.component.ts"},this.items=[{label:"Egeo",items:[{label:"Egeo",url:"https://github.com/Stratio/egeo"},{label:"Egeo Web",url:"https://github.com/Stratio/egeo-web"},{label:"Egeo Starter",url:"https://github.com/Stratio/egeo-starter"}]},{label:"Angular",items:[{label:"Docs",url:"https://angular.io/docs"},{label:"Github",url:"https://github.com/angular/angular"}]},{label:"Stratio",items:[{label:"Stratio",url:"http://www.stratio.com/"},{label:"Linkedn",url:"https://www.linkedin.com/company/5122962/"},{label:"Twitter",url:"https://twitter.com/stratiobd"},{label:"Youtube",url:"https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw"},{label:"Paradigma Digital",url:"https://www.paradigmadigital.com"}]}]}return e.prototype.onToggle=function(e){console.log("toggle group item:",e);for(var t=0,n=this.items;t<n.length;t++){var o=n[t];e!==o&&(o.expanded=!1)}},e.prototype.onSelect=function(e){console.log("select item:",e),window.open(e.url,"_blank")},e.prototype.onViewMore=function(e){console.log("view more group item:",e)},e=l([Object(o.Component)({selector:"st-launcher-demo",template:n("cSmf"),styles:[n("xt0G")]})],e)}();n.d(t,"StLauncherDemoModule",function(){return s});var a=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},s=function(){function e(){}return e=a([Object(o.NgModule)({imports:[r.CommonModule,i.E,i.j.withComponents({components:[c]}),i.k],declarations:[c],providers:[]})],e)}()},xt0G:function(e,t){e.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.launcher-container {\n  width: 800px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n'}}]);