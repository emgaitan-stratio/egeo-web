(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{VGMC:function(e,n,t){"use strict";t.r(n);var i=t("CcnG"),o=t("Ip0R"),r=t("dIas"),a=t("gIcY"),s=function(e,n,t,i){var o,r=arguments.length,a=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(n,t,a):o(n,t))||a);return r>3&&a&&Object.defineProperty(n,t,a),a},l=function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},c=function(){function e(e){this.fb=e;var n=new a.c("",[]);n.disable();var t=new a.c("",[]),i=new a.c("",[a.l.required,a.l.minLength(2)]);this.myForm=e.group({disabledField:n,enabledField:t,requiredField:i}),this.myForm.valueChanges.subscribe(function(e){return console.log(e)})}return e=s([Object(i.Component)({selector:"st-textarea-demo",template:t("d+I8"),styles:[t("isuV")]}),l("design:paramtypes",[a.b])],e)}();t.d(n,"StTextareaDemoModule",function(){return p});var d=function(e,n,t,i){var o,r=arguments.length,a=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(n,t,a):o(n,t))||a);return r>3&&a&&Object.defineProperty(n,t,a),a},p=function(){function e(){}return e=d([Object(i.NgModule)({imports:[o.b,r.V,r.i.withComponents({components:[c]}),a.e,a.k],declarations:[c],providers:[]})],e)}()},"d+I8":function(e,n){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n\n<form [formGroup]="myForm" novalidate>\n   <h1>In a form</h1>\n   <div class="example">\n      <st-textarea name="Disabled"\n                   placeholder="Enter description"\n                   value="This is a description"\n                   label="Description"\n                   contextualHelp="This is the contextual help of the components"\n                   formControlName="disabledField"\n                   class="st-form-field"\n                   [cols]="50"\n                   [rows]="3">\n      </st-textarea>\n   </div>\n\n   <div class="example">\n\n      <st-textarea name="enabledFormControl"\n                   placeholder="Enter description"\n                   value="This is a description"\n                   label="Enabled"\n                   contextualHelp="This is the contextual help of the components"\n                   formControlName="enabledField"\n                   class="st-form-field"\n                   [cols]="50"\n                   [rows]="3">\n      </st-textarea>\n   </div>\n\n   <div class="example">\n      <st-textarea name="requiredField"\n                   placeholder="Enter description"\n                   value="This is a description"\n                   label="Required field"\n                   [required]="true"\n                   contextualHelp="This is the contextual help of the components"\n                   formControlName="requiredField"\n                   class="st-form-field"\n                   [cols]="50"\n                   [rows]="3">\n      </st-textarea>\n   </div>\n   <h1>Out a form</h1>\n   <div class="example">\n      <st-textarea\n         placeholder="Enter description"\n         value="This is a description"\n         label="Description"\n         contextualHelp="This is the contextual help of the components"\n         [cols]="50"\n         [rows]="3">\n      </st-textarea>\n   </div>\n</form>\n\n\n'},isuV:function(e,n){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.example {\n  width: 100%; }\n.example-title {\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  width: 280px; }\n'}}]);