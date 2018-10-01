(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5HTP":function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<section>\n   <h2>Show selected elements in console</h2>\n\n   <button class="button button-primary" (click)="showSelectedElements()">\n      <span>Show</span>\n   </button>\n\n   <br><br><br><br>\n\n   <h2>Full component, view component and behaviour class</h2>\n   <div style="width: 100%; height: 500px">\n      <st-two-list-selection\n         [allElements]="completeUserList"\n         [(selectedElements)]="selectedUserList"\n         (selectExtraLabelAll)="selectExtraLabel($event)"\n         (selectExtraLabelSelected)="selectExtraLabel($event)"\n         [config]="config"\n         [editable]="true"\n         qaTag="container-list"\n      ></st-two-list-selection>\n   </div>\n   <br><br><br>\n   <h2>Only view component</h2>\n   <div style="width: 100%; height: 500px">\n      <st-two-list-selection-view\n         [allElements]="completeUserList"\n         [selectedElements]="selectedUserList"\n         [config]="config"\n         [editable]="true"\n         qaTag="example-two-list"\n         [orderSelectedOptions]="orderOptions"\n         (changeOrderSelected)="changeOrder($event)"\n      ></st-two-list-selection-view>\n   </div>\n\n   <br><br><br>\n   <h2>Only view component in no edition mode</h2>\n   <div style="width: 50%; height: 500px">\n      <st-two-list-selection-view\n         [selectedElements]="selectedUserList"\n         [config]="config"\n         [editable]="false"\n         qaTag="example-two-list-disable"\n         mode="compact"\n      ></st-two-list-selection-view>\n   </div>\n\n   <br><br><br>\n   <h2>Checkbox all, and condition show search</h2>\n   <div style="width: 855px; height: 570px">\n      <st-two-list-selection\n         [allElements]="completeUserList"\n         [(selectedElements)]="selectedUserList"\n         [config]="configWithCheckAll"\n         [editable]="true"\n         (numItemsSelectedAll)="onNumItemsAll($event)"\n         (numItemsSelectedSelected)="onNumItemsSelected($event)"\n         qaTag="container-list"\n         [hasAllListAll]="true"\n         [hasAllListSelected]="true"\n         [itemAll]="itemAll"\n         [moveAllToSelectedButton]="false"\n         [moveAllToAllButton]="false"\n         [showSearchNumber]="0"\n         [orderSelectedOptions]="orderOptions"\n         (change)="onChange($event)"\n      ></st-two-list-selection>\n   </div>\n   <br><br><br>\n\n</section>\n'},cNPf:function(e,t,n){"use strict";n.r(t);var l=n("CcnG"),s=n("Ip0R"),i=n("dIas"),o=n("LvDl"),c=function(e,t,n,l){var s,i=arguments.length,o=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,l);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},r=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.completeUserList=[],this.selectedUserList=[],this.config={allElementsListTitle:"All element",allElementsSearchPlaceholder:"Search...",selectedElementsListTitle:"Selected elements",selectedElementsSearchPlaceholder:"Search..."},this.configWithCheckAll={allElementsListTitle:"All element",allElementsListSubtitle:"0 users",allElementsSearchPlaceholder:"Search...",selectedElementsListTitle:"Selected elements",selectedElementsListSubtitle:"0 users",selectedElementsSearchPlaceholder:"Search...",orderPlaceholder:"Order by alphabet"},this.orderOptions=[{label:"A-Z",value:1},{label:"Z-A",value:2}],this.fillLists()}return e.prototype.onChange=function(e){0===this.completeUserList.length?this.configWithCheckAll.allElementsListSubtitle="0 users":this.configWithCheckAll.allElementsListSubtitle="0/"+this.completeUserList.length+" users selected",0===this.selectedUserList.length?this.configWithCheckAll.selectedElementsListSubtitle="0 users":this.configWithCheckAll.selectedElementsListSubtitle="0/"+this.selectedUserList.length+" users selected"},e.prototype.onNumItemsAll=function(e){this.configWithCheckAll.allElementsListSubtitle=e+"/"+this.completeUserList.length+" users selected"},e.prototype.onNumItemsSelected=function(e){this.configWithCheckAll.selectedElementsListSubtitle=e+"/"+this.selectedUserList.length+" users selected"},e.prototype.showSelectedElements=function(){console.log(JSON.stringify(this.selectedUserList.map(function(e){return e.name})))},e.prototype.selectExtraLabel=function(e){e.event.stopImmediatePropagation(),console.log("Selected label",e)},e.prototype.changeOrder=function(e){console.log("change order, ",e)},e.prototype.fillLists=function(){for(var e=0;e<300;e++)this.completeUserList.push({id:e,name:"User-"+e}),e%4==0&&this.selectedUserList.push(o.clone(this.completeUserList[e]));this.itemAll={id:this.completeUserList.length,name:"All",itemAll:!0}},e=c([Object(l.Component)({selector:"two-list-selection-demo",template:n("5HTP"),styles:[n("g7WD")]}),r("design:paramtypes",[])],e)}();n.d(t,"StTwoListSelectionDemoModule",function(){return d});var h=function(e,t,n,l){var s,i=arguments.length,o=i<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,l);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o},d=function(){function e(){}return e=h([Object(l.NgModule)({imports:[s.b,i.Aa,i.i.withComponents({components:[a]})],declarations:[a]})],e)}()},g7WD:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.page-header span {\n  color: #999; }\n:host /deep/ .example-options {\n  margin-left: 30px; }\n'}}]);