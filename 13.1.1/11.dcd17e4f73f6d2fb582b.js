(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{PwPB:function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n\n<h1>MODEL DRIVEN / REACTIVE EXAMPLE</h1>\n<form [formGroup]="reactiveForm" novalidate (ngSubmit)="onSubmitReactiveForm()">\n\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-reactive"\n      formControlName="tag-input-reactive"\n      [label]="\'Tag Input with fordidden value: test\'"\n      [id]="\'tag-input-reactive-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'"\n      [forbiddenValues]="[\'test\']">\n   </st-tag-input>\n   <span>Generated model: {{reactiveForm.controls[\'tag-input-reactive\'].value | json}}</span>\n\n   <div class="separator"></div>\n\n   <st-tag-input\n      class="st-form-field"\n      name="number-tag-input"\n      formControlName="tag-input-number"\n      [label]="\'Tag Input of numbers\'"\n      [id]="\'tag-input-reactive-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'"\n      type="number">\n   </st-tag-input>\n   <span>Generated model: {{reactiveForm.controls[\'tag-input-number\'].value | json}}</span>\n\n   <div class="separator"></div>\n\n   <st-tag-input\n      class="st-form-field"\n      name="number-tag-input-integer"\n      formControlName="tag-input-integer"\n      [label]="\'Tag Input of integers\'"\n      [id]="\'tag-input-reactive-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'"\n      type="integer">\n   </st-tag-input>\n   <span>Generated model: {{reactiveForm.controls[\'tag-input-integer\'].value | json}}</span>\n\n\n   <div class="separator"></div>\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-reactive-required"\n      formControlName="tag-input-reactive-required"\n      [regularExpression]="pattern"\n      [errorMessage]="errorReactiveMessage"\n      [label]="\'Tag Input with pattern of a valid IP\'"\n      [id]="\'tag-input-reactive-required-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'">\n   </st-tag-input>\n   <span>Generated model: {{reactiveForm.controls[\'tag-input-reactive-required\'].value | json}}</span>\n\n   <div class="separator"></div>\n\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-reactive-disabled"\n      formControlName="tag-input-reactive-disabled"\n      [disabled]="disabledReactive"\n      [label]="\'Tag Input with disable\'"\n      [id]="\'tag-input-reactive-disabled-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'">\n   </st-tag-input>\n\n   <div class="separator"></div>\n\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-reactive-autocomplete"\n      formControlName="tag-input-reactive-autocomplete"\n      [autocompleteList]="filteredlist"\n      [withAutocomplete]="true"\n      [label]="\'Tag Input with autocomplete\'"\n      [id]="\'tag-input-reactive-autocomplete-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'"\n      (input)="onFilterList($event)">\n   </st-tag-input>\n   <span>Generated model: {{reactiveForm.controls[\'tag-input-reactive-autocomplete\'].value | json}}</span>\n\n   <div class="separator"></div>\n\n   <button type="submit" class="button button-primary"><span>Validate</span></button>\n   <button type="button" class="button button-secondary-gray" (click)="changeReactiveFormDisabled()"><span>Disable</span></button>\n\n</form>\n\n<div class="separator"></div>\n<div class="separator"></div>\n<div class="separator"></div>\n\n<h1>TEMPLATE DRIVEN EXAMPLE</h1>\n<form #templateDrivenForm="ngForm" novalidate autocomplete="off" (ngSubmit)="onSubmitTemplateDrivenForm()">\n\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-template-driven"\n      [(ngModel)]="tags.templateDriven"\n      [label]="\'Tag Input\'"\n      [id]="\'tag-input-template-driven-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'">\n   </st-tag-input>\n\n   <div class="separator"></div>\n\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-template-driven-required"\n      [(ngModel)]="tags.templateDrivenRequired"\n      [errorMessage]="errorTemplateDriveMessage"\n      required\n      [label]="\'Tag Input with require\'"\n      [id]="\'tag-input-template-driven-required-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'">\n   </st-tag-input>\n\n   <div class="separator"></div>\n\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-template-driven-disabled"\n      [(ngModel)]="tags.templateDrivenDisabled"\n      [disabled]="disabledTemplateDrive"\n      [label]="\'Tag Input with disable\'"\n      [id]="\'tag-input-template-driven-disabled-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'">\n   </st-tag-input>\n\n   <div class="separator"></div>\n\n   <st-tag-input\n      class="st-form-field"\n      name="tag-input-template-driven-autocomplete"\n      [(ngModel)]="tags.templateDrivenAutocomplete"\n      [autocompleteList]="filteredlist"\n      [withAutocomplete]="true"\n      [label]="\'Tag Input with autocomplete\'"\n      [id]="\'tag-input-template-driven-autocomplete-demo\'"\n      [placeholder]="\'Add tags separated by commas\'"\n      [tooltip]="\'This is a Tag Input component tooltip\'"\n      (input)="onFilterList($event)">\n   </st-tag-input>\n\n   <div class="separator"></div>\n\n   <button type="submit" class="button button-primary"><span>Validate</span></button>\n   <button type="button" class="button button-secondary-gray" (click)="changeTemplateDrivenFormDisabled()"><span>Disable</span></button>\n\n</form>\n'},V7ym:function(e,t){e.exports="@charset \"UTF-8\";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nh1 {\n  font-family: 'Nunito Sans Bold';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: lighter; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\nbutton {\n  float: right;\n  margin-left: 10px; }\n"},rZ7O:function(e,t,n){"use strict";n.r(t);var a=n("CcnG"),i=n("Ip0R"),o=n("dIas"),r=n("gIcY"),s=n("LvDl"),l=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},p=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e){this._fb=e,this.tags={reactive:[],reactiveRequired:[],reactiveDisabled:[],reactiveAutocomplete:[],templateDriven:["Tag Template Driven1","Tag Template Driven2"],templateDrivenRequired:[],templateDrivenDisabled:[],templateDrivenAutocomplete:[]},this.list=[{label:"China",value:"CN"},{label:"Russia",value:"RU"},{label:"United States",value:"US"},{label:"Egypt",value:"EG"},{label:"Panama",value:"PA"},{label:"Canada",value:"CA"},{label:"Indonesia",value:"ID"},{label:"North Korea",value:"KP"},{label:"France",value:"FR"},{label:"Burundi",value:"BI"},{label:"Poland",value:"PL"},{label:"Vanuatu",value:"VU"},{label:"Venezuela",value:"VE"}],this.filteredlist=[],this.forceReactiveValidations=!1,this.forceTemplateDriveValidations=!1,this.errorReactiveMessage=null,this.errorTemplateDriveMessage=null,this.disabledReactive=!0,this.disabledTemplateDrive=!0,this.pattern=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,this.reactiveForm=e.group({"tag-input-reactive":[this.tags.reactive],"tag-input-number":[],"tag-input-integer":[],"tag-input-reactive-required":[this.tags.reactiveRequired,r.l.required],"tag-input-reactive-disabled":[this.tags.reactiveDisabled],"tag-input-reactive-autocomplete":[this.tags.reactiveDisabled]})}return e.prototype.ngOnInit=function(){this.reactiveForm.valueChanges.subscribe(function(e){return console.log("Reactive Form",e)}),this.templateDrivenForm.valueChanges.subscribe(function(e){return console.log("Template Driven Form",e)})},e.prototype.onSubmitReactiveForm=function(){this.forceReactiveValidations=!0,this.errorReactiveMessage=this.reactiveForm.valid?null:"Error"},e.prototype.onSubmitTemplateDrivenForm=function(){this.forceTemplateDriveValidations=!0,this.errorTemplateDriveMessage=this.templateDrivenForm.valid?null:"Error"},e.prototype.changeReactiveFormDisabled=function(){this.disabledReactive=!this.disabledReactive,this.disabledReactive?this.reactiveForm.get("tag-input-reactive-disabled").disable():this.reactiveForm.get("tag-input-reactive-disabled").enable()},e.prototype.changeTemplateDrivenFormDisabled=function(){this.disabledTemplateDrive=!this.disabledTemplateDrive,this.disabledTemplateDrive?this.templateDrivenForm.controls["tag-input-template-driven-disabled"].disable():this.templateDrivenForm.controls["tag-input-template-driven-disabled"].enable()},e.prototype.onFilterList=function(e){var t=e.target.innerText;this.filteredlist=t?Object(s.cloneDeep)(this.list.filter(function(e){return e.label.toLowerCase().search(t.toLowerCase())>-1})):[]},l([Object(a.ViewChild)("templateDrivenForm"),p("design:type",r.i)],e.prototype,"templateDrivenForm",void 0),e=l([Object(a.Component)({selector:"st-tag-input-demo",template:n("PwPB"),styles:[n("V7ym")]}),p("design:paramtypes",[r.b])],e)}();n.d(t,"StTagInputDemoModule",function(){return c});var u=function(e,t,n,a){var i,o=arguments.length,r=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(r=(o<3?i(r):o>3?i(t,n,r):i(t,n))||r);return o>3&&r&&Object.defineProperty(t,n,r),r},c=function(){function e(){}return e=u([Object(a.NgModule)({imports:[i.b,o.U,o.i.withComponents({components:[d]}),r.e,r.k],declarations:[d]})],e)}()}}]);