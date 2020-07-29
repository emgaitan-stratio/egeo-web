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
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   EventEmitter,
   forwardRef,
   HostBinding,
   Input,
   OnChanges,
   OnDestroy,
   OnInit,
   Output,
   ViewChildren
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

import { StInputError } from './st-input.error.model';
import { StDropDownMenuGroup, StDropDownMenuItem } from '..';

/**
 * @description {Component} Input
 *
 * This component specifies an input field where the user can enter data.
 *
 * @model
 *
 *   [Error messages] {./st-input.error.model.ts#StInputError}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-input class="st-form-field"
 *    type="text"
 *    formControlName="name"
 *    placeholder="Enter your name"
 *    label="Field"
 *    default="default name"
 *    contextualHelp="This is a normal field">
 * </st-input>
 * ```
 */

@Component({
   selector: 'st-input',
   templateUrl: './st-input.component.html',
   styleUrls: ['./st-input.component.scss'],
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StInputComponent), multi: true },
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StInputComponent), multi: true }
   ],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StInputComponent implements ControlValueAccessor, OnChanges, OnInit, OnDestroy {
   /** @input {string} [placeholder=null] The text that appears as placeholder of the input. It is empty by default */
   @Input() placeholder: string = '';
   /** @input {string} [name=''] Input name */
   @Input() name: string = '';
   /** @input {string} [label=''] Label to show over the input. It is empty by default */
   @Input() label: string = '';
   /** @input {'text' | 'number' | 'password'} [fieldType='text'] Input type */
   @Input() fieldType: 'text' | 'number' | 'password' = 'text';
   /** @input {StInputError} [errors=] Customized error messages */
   @Input() errors: StInputError;
   /** @Input {string} [qaTag=''] Id value for qa test */
   @Input() qaTag: string;
   /** @Input {boolean} [forceValidations=false] If you specify it to 'true', the input checks the errors before being modified by user */
   @Input() forceValidations: boolean = false;
   /** @Input {string} [contextualHelp=''] It will be displayed when user clicks on the info button */
   @Input() contextualHelp: string;
   /** @Input {string} [maxLength=''] Define a max-length for input field */
   @Input() maxLength: number;
   /** @Input {string} [min=''] Define a minimum number for number inputs */
   @Input() min: number;
   /** @Input {string} [max=''] Define a maximum number for number inputs */
   @Input() max: number;
   /** @Input {boolean} [isFocused=false] If true, the input will be focused on view init. */
   @Input() isFocused: boolean = false;
   /** @Input {boolean} [readonly=''] This parameter disables the input and it can not be modified by the user */
   @Input() readonly: boolean = false;
   /** @Input {string} [step=''] It specifies the interval between legal numbers in the input field */
   @Input() step: string;
   /** @Input {string} [default=] Default value of input */
   @Input() default: any;
   /** @input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default */
   @Input() autocompleteList: (StDropDownMenuItem | StDropDownMenuGroup)[] = [];
   /** @input {number} [charsToShowAutocompleteList=1] Number of characters before displaying autocomplete list. By default is 1 */
   @Input() charsToShowAutocompleteList: number = 1;

   /** @Input {any} [value=''] Value of the input */

   @Input()
   get value(): any {
      return this._value;
   }

   set value(value: any) {
      this._value = value;
   }

   /** @Output {} [blur] Notify when user leaves a field */
   @Output() blur: EventEmitter<any> = new EventEmitter<any>();

   @ViewChildren('input') vc: any;

   public disabled: boolean = false; // To check disable
   public displayResetButtonValue: boolean = false;
   public focus: boolean = false;
   public internalControl: FormControl;
   public errorMessage: string = undefined;
   public showErrorValue: boolean = false;
   public expandedMenu: boolean = false;

   private sub: Subscription;
   private _value: any;
   private valueChangeSub: Subscription;
   private internalInputModel: any;


   constructor(private _cd: ChangeDetectorRef) {
   }

   onChange = (_: any) => {
   }

   onTouched = () => {
   }

   @HostBinding('class.st-input--autocomplete')
   get showAutocompleteList(): boolean {
      return this.expandedMenu && this.autocompleteList && this.autocompleteList.length > 0;
   }

   validate(control: FormControl): any {
      if (this.sub) {
         this.sub.unsubscribe();
      }
      this.sub = control.statusChanges.subscribe(() => this.checkErrors(control));
   }

   ngOnChanges(change: any): void {
      if (this.forceValidations && this.internalControl) {
         this.writeValue(this.internalControl.value);
      }
   }

   ngOnInit(): void {
      this.internalControl = new FormControl(this.internalInputModel);
      this.valueChangeSub = this.internalControl.valueChanges.subscribe((value) => {
         this.onChange(this.getTypedValue(value));
         this.showAutocompleteMenu();
         this.showErrorValue = this.showError();
         this.displayResetButtonValue = this.displayResetButton();
      });
   }

   ngAfterViewInit(): void {
      if (this.isFocused) {
         this.focus = true;
         this.vc.first.nativeElement.focus();
      }
   }

   ngOnDestroy(): void {
      if (this.valueChangeSub) {
         this.valueChangeSub.unsubscribe();
      }
      if (this.sub) {
         this.sub.unsubscribe();
      }
   }

   // When value is received from outside
   writeValue(value: any): void {
      this.internalInputModel = value;
      this._value = value;
      this.internalControl.setValue(this.getTypedValue(value));
   }

   // Registry the change function to propagate internal model changes
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   // Registry the touch function to propagate internal touch events TODO: make this function.
   registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
   }

   setDisabledState(disable: boolean): void {
      this.disabled = disable;
      if (this.disabled && this.internalControl && this.internalControl.enabled) {
         this.internalControl.disable();
      } else if (!this.disabled && this.internalControl && this.internalControl.disabled) {
         this.internalControl.enable();
      }
      this._cd.markForCheck();
   }

   showError(): boolean {
      return this.errorMessage !== undefined && (!this.internalControl.pristine || this.forceValidations) && !this.focus && !this.disabled;
   }

   get labelQaTag(): string {
      return (this.qaTag || this.name) + '-label';
   }

   displayResetButton(): boolean {
      return this.default !== undefined && this.internalControl.dirty && this.internalControl.value !== this.default;
   }

   resetToDefault(): void {
      this.writeValue(this.default);
      this._cd.markForCheck();
   }

   /**  Autocomplete list actions */

   onListSelect(data: StDropDownMenuItem): void {
      if (data && data.value && data.value.length) {
         this.writeValue(data.value);
      } else {
         this.writeValue('');
      }
      this.expandedMenu = false;
      this._cd.markForCheck();
   }

   onClickOutside(event: Event): void {
      if (this.expandedMenu) {
         this.expandedMenu = false;
      }
   }

   /** Style functions */
   onFocus(event: Event): void {
      this.focus = true;
      this.showErrorValue = this.showError();
      this.showAutocompleteMenu();
   }

   onFocusOut(event: Event, emitEvent: boolean): void {
      this.focus = false;

      if (emitEvent) {
         this.blur.emit();
      }
      this.showErrorValue = this.showError();
   }

   // When status change call this function to check if have errors
   private checkErrors(control: FormControl): void {
      let errors: { [key: string]: any } = control.errors;
      this.errorMessage = this.getErrorMessage(errors);
      this._cd.markForCheck();
   }

   // Get error message in function of error list.
   private getErrorMessage(errors: { [key: string]: any }): string {
      if (!errors) {
         return undefined;
      }

      if (!this.errors) {
         return '';
      }

      if (errors.hasOwnProperty('required')) {
         return this.errors.required || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('fieldType')) {
         return this.errors.type || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('minlength')) {
         return this.errors.minLength || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('maxlength')) {
         return this.errors.maxLength || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('pattern')) {
         return this.errors.pattern || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('min')) {
         return this.errors.min || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('max')) {
         return this.errors.max || this.errors.generic || '';
      }
      return '';
   }

   private getTypedValue(value: string): any {
      switch (this.fieldType) {
         case 'number':
            if (!value || isNaN(Number(value))) {
               return value;
            } else {
               return Number(value);
            }
         default:
            return value;
      }
   }

   private showAutocompleteMenu(): void {
      this.expandedMenu = this.focus && this.internalControl && this.charsToShowAutocompleteList <= (this.internalControl.value || '').length;
      this._cd.markForCheck();
   }

}
