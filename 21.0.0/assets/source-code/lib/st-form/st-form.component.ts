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
import {
   AfterViewChecked,
   AfterViewInit,
   ChangeDetectionStrategy,
   Component,
   EventEmitter,
   forwardRef,
   Input,
   OnDestroy,
   Output,
   ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { FORM_UI_COMPONENT } from './shared/ui-component.interface';
import { JSONSchema4 } from 'json-schema';
import { StInputError } from '../st-input/st-input.error.model';
import { StFormSchema } from './st-form.model';

/**
 * @description {Component} [Dynamic form]
 *
 * The form component allows to generate forms dynamically using a JSON schema.
 *
 * @model
 *
 *   [Form Schema] {./st-form.model.ts#StFormSchema}
 *   [Form UI Definition] {./st-form.model.ts#StFormUIDefinition}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-form [schema]="jsonSchema" [(ngModel)]="model" #formModel="ngModel">
 * </st-form>
 *
 * ```
 *
 */
@Component({
   selector: 'st-form',
   templateUrl: './st-form.component.html',
   styleUrls: ['./st-form.component.scss'],
   host: { class: 'st-form' },
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StFormComponent), multi: true },
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StFormComponent), multi: true }
   ]
})

export class StFormComponent implements AfterViewInit, AfterViewChecked, ControlValueAccessor, OnDestroy {
   /** @Input {string} [parentName=] Name of the parent section. By default, it is undefined */
   @Input() parentName: string;
   /** @Input {string} [nestingLevel=0] This informs about the nesting level of the form. This input is only used for design purposes */
   @Input() nestingLevel: number = 0;
   /** @Input {boolean} [forceValidations=] Boolean to force the field validations */
   @Input() forceValidations: boolean;
   /** @Input {string} [disabledSectionMessage='for this instance is disabled.']
    *  Message displayed when a section is disabled. This is always displayed after the section name
    */
   @Input() disabledSectionMessage: string = 'for this instance is disabled.';

   /** @Input {number} [sectionDescriptionLevel=-1] Level of the section to which description is displayed.
    * By default, section descriptions are not displayed.
    */
   @Input() sectionDescriptionLevel: number = -1;

   /** @Input {number} [textFieldMaxWidth=] Maximum width of a field needed to paint a input or textarea */
   @Input() textFieldMaxWidth: number;

   /** @Input {StInputError} [errorMessages=] Field error translations */
   @Input() errorMessages: StInputError;

   /** @Input {boolean} [showTooltips=-1] Enable or disable displaying of tooltips
    * By default, tooltips are displayed
    */
   @Input() showTooltips: boolean = true;
   /** @Output {any} [valueChange=] Event emitted when value is changed. This emits the current form value */
   @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
   /** @Output {string} [clickLink=] Event emitted when link is clicked. It returns the field path */
   @Output() clickLink: EventEmitter<string> = new EventEmitter<string>();

   @ViewChild('form', { static: false }) form: NgForm;

   public showCollapsedSectionFields: boolean = false;
   public innerValue: any = {};
   private _value: any = {};
   private _parentFieldSubscription: Subscription[] = [];
   private _parentFields: string[];
   private _schema: StFormSchema;

   /** @Input {StFormSchema [schema=] Form schema needed to generate the form */
   @Input() get schema(): StFormSchema {
      return this._schema;
   }

   set schema(schema: StFormSchema) {
      this._schema = schema;
      this._value = {};
      if (this._schema.dependencies) {
         this._parentFields = Object.keys(this._schema.dependencies);
      }
   }

   ngAfterViewInit(): void {
      if (!this.forceValidations) {
         this.form.form.markAsPristine();
      }
   }

   ngAfterViewChecked(): void {
      if (this._parentFields && this.form.control && this.form.control.controls) {
         for (let i = 0; i < this._parentFields.length; ++i) {
            let parentField: string = this._parentFields[i];
            if (!this._parentFieldSubscription[i] && this.form.control.controls[parentField]) {

               this._parentFieldSubscription[i] = this.form.control.controls[this._parentFields[i]].valueChanges.subscribe((value) => {
                  if (!value) {
                     let childrenFields: JSONSchema4 | string[] = this.schema.dependencies[parentField];
                     for (let j = 0; j < childrenFields.length; ++j) {
                        if (this.form.controls[childrenFields[j]]) {
                           this._value[childrenFields[j]] = undefined;
                        }
                     }
                  }
               });
            }
         }
      }
   }

   // Function to call when the value changes.
   onChange(_: any): void {
   }

   onTouched = () => {
   }

   validate(control: FormControl): any {
      let errors: any = null;
      if (this.form) {
         Object.keys(this.form.controls).forEach((propertyName) => {
            if (this.form.controls[propertyName] && this.form.controls[propertyName].errors) {
               if (!errors) {
                  errors = {};
               }
               errors[propertyName] = this.form.controls[propertyName].errors;
            }
         });

         this.form.control.setErrors(errors);
      }
      return errors;
   }

   isRequired(propertyName: string): boolean {
      return propertyName && this.schema.required && this.schema.required.indexOf(propertyName) !== -1;
   }

   isCollapsedSection(): boolean {
      return this.schema.type === 'object' && this.schema.ui &&
         (this.schema.ui.component === FORM_UI_COMPONENT.SHOW_MORE || this.schema.ui.component === FORM_UI_COMPONENT.ACCORDION);
   }

   iShowMoreSection(): boolean {
      return this.schema.type === 'object' && this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.SHOW_MORE;
   }

   isAParentField(propertyName: string): boolean {
      return this.schema.dependencies && this.schema.dependencies[propertyName] && this.schema.dependencies[propertyName].length > 0;
   }

   getOptionalButtonLabel(): string {
      let label: string = 'Additional options';

      if (this.parentName || this.schema.title) {
         label += ' of ';
         label += this.parentName || this.schema.title;
      }

      return label;
   }

   onChangeOptionalFieldsVisibility(): void {
      this.showCollapsedSectionFields = !this.showCollapsedSectionFields;
   }

   getFieldClasses(propertyName: string): any {
      return {
         'hidden': this.isCollapsedSection() && !this.showCollapsedSectionFields,
         'parent-field': this.isAParentField(propertyName) || (this.isASwitchSection() && this.isTheFirstField(propertyName))
      };
   }

   fieldHasToBeCreated(propertyName: string): boolean {
      let createField: boolean = true;
      let parentField: string = this.getParentField(propertyName);
      if (((parentField && !this._value[parentField]) || (this.isInADisabledSection() && !this.isTheFirstField(propertyName)))
         || !this.fulfillDependencyVisibility(propertyName)) {
         createField = false;
         this._value[propertyName] = undefined;
      }
      return createField;
   }

   isRelatedField(propertyName: string): boolean {
      return this._schema.properties[propertyName].ui && this.schema.properties[propertyName].ui.relatedTo
         && this.schema.properties[propertyName].ui.relatedTo.length > 0;
   }

   // When value is received from outside
   writeValue(value: any): void {
      if (value) {
         this.onChange(value);
         this.innerValue = value;
      }
   }

   onChangeProperty(value: any, property: string): void {
      this._value[property] = value;
      this.valueChange.emit(this._value);
      setTimeout(() => {
         this.onChange(this._value);
      });
   }

   // Registry the change function to propagate internal model changes
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   // Registry the touch function to propagate internal touch events TODO: make this function.
   registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
   }

   // Allows Angular to disable the form.
   setDisabledState(disable: boolean): void {
      if (disable) {
         this.form.control.disable();
      } else {
         this.form.control.enable();
      }
   }

   ngOnDestroy(): void {
      if (this._parentFieldSubscription) {
         for (let i = 0; i < this._parentFieldSubscription.length; ++i) {
            this._parentFieldSubscription[i].unsubscribe();
         }
      }
   }

   isInADisabledSection(): boolean {
      if (this.isASwitchSection()) {
         let sectionEnabler: string = Object.keys(this.schema.properties)[0];
         return !(this.form && this.form.controls[sectionEnabler] && this.form.controls[sectionEnabler].value);
      }
      return false;
   }

   isASwitchSection(): boolean {
      return this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.SWITCH;
   }

   isAnAccordion(): boolean {
      return this.schema.ui && this.schema.ui.component === FORM_UI_COMPONENT.ACCORDION;
   }

   onClickTitle(): void {
      if (this.isAnAccordion()) {
         this.onChangeOptionalFieldsVisibility();
      }
   }

   isTheFirstField(propertyName: string): boolean {
      return propertyName === Object.keys(this.schema.properties)[0];
   }

   onClickLink(fieldKey: string): void {
      this.clickLink.emit(fieldKey);
   }

   private getParentField(propertyName: string): string {
      let parentField: string = undefined;
      if (this.schema.dependencies) {
         Object.keys(this.schema.dependencies).forEach((key: string) => {
            if (this.schema.dependencies[key].indexOf(propertyName) !== -1) {
               parentField = key;
            }
         });
      }
      return parentField;
   }

   private fulfillDependencyVisibility(propertyName: string): boolean {
      let fulfill: boolean = true;
      let propertySchema: any = this.schema.properties[propertyName];
      if (propertySchema.ui && propertySchema.ui.visible) {
         const keys: string[] = Object.keys(propertySchema.ui.visible);
         let i = 0;
         while (fulfill && i < keys.length && propertySchema.ui.visible.hasOwnProperty(keys[i])) {
            if (this._value[keys[i]] !== propertySchema.ui.visible[keys[i]]) {
               fulfill = false;
            }
            ++i;
         }
      }
      return fulfill;
   }
}
