(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{cSmf:function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<section class="container-liquid">\n   <div class="launcher-container">\n      <st-launcher\n         qaTag="launcher-demo"\n         [items]="items"\n         [groupLimit]="4"\n         [groupLimitLabel]="\'View more\'"\n         (toggle)="onToggle($event)"\n         (select)="onSelect($event)"\n         (viewMore)="onViewMore($event)">\n      </st-launcher>\n   </div>\n</section>\n'},wNxY:function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),r=n("Ip0R"),i=n("dIas"),l=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},a=function(){function e(){this.items=[{label:"Egeo",items:[{label:"Egeo",url:"https://github.com/Stratio/egeo"},{label:"Egeo Web",url:"https://github.com/Stratio/egeo-web"},{label:"Egeo Starter",url:"https://github.com/Stratio/egeo-starter"}]},{label:"Angular",items:[{label:"Docs",url:"https://angular.io/docs"},{label:"Github",url:"https://github.com/angular/angular"}]},{label:"Stratio",items:[{label:"Stratio",url:"http://www.stratio.com/"},{label:"Linkedn",url:"https://www.linkedin.com/company/5122962/"},{label:"Twitter",url:"https://twitter.com/stratiobd"},{label:"Youtube",url:"https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw"},{label:"Paradigma Digital",url:"https://www.paradigmadigital.com"}]}]}return e.prototype.onToggle=function(e){console.log("toggle group item:",e);for(var t=0,n=this.items;t<n.length;t++){var o=n[t];e!==o&&(o.expanded=!1)}},e.prototype.onSelect=function(e){console.log("select item:",e),window.open(e.url,"_blank")},e.prototype.onViewMore=function(e){console.log("view more group item:",e)},e=l([Object(o.Component)({selector:"st-launcher-demo",template:n("cSmf"),styles:[n("xt0G")]})],e)}();n.d(t,"StLauncherDemoModule",function(){return s});var c=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},s=function(){function e(){}return e=c([Object(o.NgModule)({imports:[r.b,i.A,i.i.withComponents({components:[a]})],declarations:[a],providers:[]})],e)}()},xt0G:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.launcher-container {\n  width: 800px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n'}}]);