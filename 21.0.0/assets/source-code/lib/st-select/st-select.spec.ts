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
import { ChangeDetectionStrategy, Component, DebugElement, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { cloneDeep as _cloneDeep } from 'lodash';

import { StDropDownMenuGroup, StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StSelectComponent } from './st-select';
import { StSelectModule } from './st-select.module';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StDropdownMenuComponent } from '../st-dropdown-menu/st-dropdown-menu.component';
import { StClickOutside } from '../directives/st-click-outside/st-click-outside.directive';


const simpleItems: StDropDownMenuItem[] = [
   { label: 'example 1', value: 1 },
   { label: 'example 2', value: 2 },
   { label: 'example 3', value: 3 },
   { label: 'example 4', value: 4 },
   { label: 'example 5', value: 5 },
   { label: 'example 6', value: 6 },
   { label: 'example 7', value: 7 },
   { label: 'example 8', value: 8 },
   { label: 'example 9', value: 9 },
   { label: 'example 10', value: 10 },
   { label: 'example 11', value: 11 }
];

const simpleItems2: StDropDownMenuItem[] = [
   { label: 'test 1', value: 11 },
   { label: 'test 2', value: 12 },
   { label: 'test 3', value: 13 },
   { label: 'test 4', value: 14 },
   { label: 'test 5', value: 15 },
   { label: 'test 6', value: 16 }
];

const groupOptions: StDropDownMenuGroup[] = [
   { title: 'Group 1', items: simpleItems },
   { title: 'Group 2', items: simpleItems2 }
];

describe('StSelectComponent', () => {
   let fixture: ComponentFixture<StSelectComponent>;
   let component: StSelectComponent;
   const id: string = 'test-id';

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StDropdownMenuModule, FormsModule, ReactiveFormsModule],
         declarations: [StSelectComponent, StClickOutside],
         schemas: [NO_ERRORS_SCHEMA]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StSelectComponent, {
            set: { changeDetection: ChangeDetectionStrategy.OnPush }
         })
         .overrideComponent(StDropdownMenuComponent, {
            set: { changeDetection: ChangeDetectionStrategy.OnPush }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StSelectComponent);
      component = fixture.componentInstance;
   });

   it('Should init correctly', () => {
      (fixture.elementRef.nativeElement as HTMLElement).removeAttribute('id');
      fixture.detectChanges();

      expect(component.placeholder).toEqual('');
      expect(component.name).toEqual('');
      expect(component.label).toEqual('');
      expect(component.tooltip).toBeNull();
      expect(component.errorMessage).toBeUndefined();
      expect(component.selected).toBeUndefined();
      expect(component.expandedMenu).toBeFalsy();

      expect(component.disabled).toBeFalsy();
      expect(component.options).toEqual([]);
      expect(component.selectedValue).toEqual('');
      expect(component.disableValue).toBeNull();
      expect(component.hasLabel).toBeFalsy();
      expect(component.showError()).toBeFalsy();

      expect(component.selectId).toBeNull();
      expect(component.inputId).toBeNull();
      expect(component.labelId).toBeNull();
      expect(component.optionsId).toBeNull();
      expect(component.inputName).toBeNull();

   });

   it('Should propagate id to internal elements', () => {
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.label = 'Test Label';
      fixture.detectChanges();

      const input: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const label: HTMLElement = fixture.debugElement.query(By.css('label')).nativeElement;
      const dropdownMenu: HTMLElement = fixture.debugElement.query(By.css('st-dropdown-menu')).nativeElement;

      expect(component.selectId).toEqual(id);

      expect(component.inputId).toEqual(`${id}-input`);
      expect(input.getAttribute('id')).toEqual(`${id}-input`);

      expect(component.labelId).toEqual(`${id}-label`);
      expect(label.getAttribute('id')).toEqual(`${id}-label`);

      expect(component.optionsId).toEqual(`${id}-options`);
      expect(dropdownMenu.getAttribute('id')).toEqual(`${id}-options`);
   });

   it('Should have a placeholder', () => {
      component.placeholder = 'Placeholder sample';
      fixture.detectChanges();

      const input: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
      expect(input.getAttribute('placeholder')).toContain('Placeholder sample');
   });

   it('Should set a name', () => {
      component.name = 'test-name';
      fixture.detectChanges();

      const input: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
      expect(component.inputName).toContain(component.name);
      expect(input.getAttribute('name')).toContain(component.name);
   });

   it('Should not have a label', () => {
      fixture.detectChanges();
      let label: DebugElement = fixture.debugElement.query(By.css('label'));
      expect(label).toBeNull();
      expect(component.hasLabel).toBeFalsy();
   });

   it('Should have a label and tooltip', () => {
      component.label = 'test label';
      component.tooltip = 'Test help';
      fixture.detectChanges();

      const label: DebugElement = fixture.debugElement.query(By.css('label'));

      expect(component.hasLabel).toBeTruthy();
      expect(label).toBeDefined();
      expect(label.nativeElement).toBeDefined();
      expect((label.nativeElement as HTMLLabelElement).textContent).toEqual(component.label);
      expect((label.nativeElement as HTMLLabelElement).title).toEqual(component.tooltip);
   });

   it('Should change active on click on label', () => {
      spyOn(component.expand, 'emit');
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.options = simpleItems;
      component.label = 'Test';
      fixture.detectChanges();

      expect(component.expandedMenu).toBeFalsy();
      expect(component.expand.emit).not.toHaveBeenCalled();
      const label: DebugElement = fixture.debugElement.query(By.css('label'));
      (label.nativeElement as HTMLLabelElement).click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeTruthy();
      expect(component.expand.emit).toHaveBeenCalled();
   });

   it('Should change active on click on input', () => {
      spyOn(component.expand, 'emit');
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.options = simpleItems;
      fixture.detectChanges();

      expect(component.expandedMenu).toBeFalsy();
      expect(component.expand.emit).not.toHaveBeenCalled();
      const input: DebugElement = fixture.debugElement.query(By.css('input'));
      (input.nativeElement as HTMLInputElement).click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeTruthy();
      expect(component.expand.emit).toHaveBeenCalled();
   });

   it('Should change active on click on arrow', () => {
      spyOn(component.expand, 'emit');
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.options = simpleItems;
      fixture.detectChanges();

      expect(component.expandedMenu).toBeFalsy();
      expect(component.expand.emit).not.toHaveBeenCalled();
      const icon: DebugElement = fixture.debugElement.query(By.css('i'));
      (icon.nativeElement as HTMLElement).click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeTruthy();
      expect(component.expand.emit).toHaveBeenCalled();
   });

   it('Should change active on press enter', () => {
      spyOn(component.expand, 'emit');
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.options = simpleItems;
      fixture.detectChanges();

      expect(component.expandedMenu).toBeFalsy();
      expect(component.expand.emit).not.toHaveBeenCalled();
      const div: DebugElement = fixture.debugElement.query(By.css('.button-container'));

      div.triggerEventHandler('keypress', { code: 'Enter' });
      fixture.detectChanges();
      expect(component.expandedMenu).toBeTruthy();
      expect(component.expand.emit).toHaveBeenCalled();

      div.triggerEventHandler('keypress', { code: 'Space' });
      fixture.detectChanges();
      expect(component.expandedMenu).toBeTruthy();
      expect(component.expand.emit).toHaveBeenCalled();
      expect(component.expand.emit).toHaveBeenCalledTimes(1);
   });

   it('Should change active on click outside', () => {
      spyOn(component.expand, 'emit');
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.options = simpleItems;
      fixture.detectChanges();

      expect(component.expandedMenu).toBeFalsy();
      expect(component.expand.emit).not.toHaveBeenCalled();
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      input.click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeTruthy();
      expect(component.expand.emit).toHaveBeenCalled();
      expect(component.expand.emit).toHaveBeenCalledWith(true);

      input.parentElement.parentElement.click();
      expect(component.expandedMenu).toBeFalsy();
      expect(component.expand.emit).toHaveBeenCalled();
      expect(component.expand.emit).toHaveBeenCalledTimes(2);
      expect(component.expand.emit).toHaveBeenCalledWith(false);
   });

   it('Should change input focus on click on label', () => {
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      spyOn(input, 'focus');
      spyOn(input, 'blur');
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.label = 'Test';
      component.options = simpleItems;
      fixture.detectChanges();

      expect(component.expandedMenu).toBeFalsy();
      expect(input.focus).not.toHaveBeenCalled();
      expect(input.blur).not.toHaveBeenCalled();

      const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
      label.click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeTruthy();
      expect(input.focus).toHaveBeenCalled();
      expect(input.blur).not.toHaveBeenCalled();

      label.click();
      fixture.detectChanges();
      expect(input.blur).toHaveBeenCalled();
   });

   it('Should preselect an option with selected property', () => {
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      const options: StDropDownMenuItem[] = _cloneDeep(simpleItems);
      options[3].selected = true;
      component.options = options;
      fixture.detectChanges();

      expect(component.selected).toEqual(component.options[3]); // Select element
      expect(component.options[3].selected).toBeFalsy(); // Remove selected
   });

   it('Should preselect an option of group with selected property', () => {
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      const options: StDropDownMenuGroup[] = _cloneDeep(groupOptions);
      options[0].items[3].selected = true;
      component.options = options;
      fixture.detectChanges();

      expect(component.selected).toEqual(component.options[0].items[3]); // Select element
      expect(component.options[0].items[3].selected).toBeFalsy(); // Remove selected
   });

   it('Should try to select an unknown type of option', () => {
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      const options: any = { test: 'a', selected: true };
      component.options = options;
      fixture.detectChanges();

      expect(component.selected).toBeUndefined();
   });

   it('Should set input and label as disabled', () => {
      spyOn(component.expand, 'emit');
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.options = simpleItems;
      component.label = 'Test';
      component.disabled = true;
      fixture.detectChanges();

      expect(component.expandedMenu).toBeFalsy();
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
      const icon: HTMLElement = fixture.debugElement.query(By.css('i')).nativeElement;

      input.click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeFalsy();

      label.click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeFalsy();

      icon.click();
      fixture.detectChanges();
      expect(component.expandedMenu).toBeFalsy();

      component.onButtonClick();
      expect(component.expandedMenu).toBeFalsy();
      expect(component.expand.emit).not.toHaveBeenCalled();

      expect(label.classList).toContain('disabled');
   });

   it('Should emit on change option', () => {
      spyOn(component.select, 'emit');
      component.options = simpleItems;
      component.label = 'Test';

      fixture.detectChanges();
      expect(component.select.emit).not.toHaveBeenCalled();

      component.onChangeOption(simpleItems[1]);
      expect(component.select.emit).toHaveBeenCalled();
      expect(component.select.emit).toHaveBeenCalledWith(simpleItems[1].value);

      component.onChangeOption(undefined);
      expect(component.select.emit).toHaveBeenCalled();
      expect(component.select.emit).toHaveBeenCalledWith(undefined);
   });

   it('should display a tooltip if it has a label and tooltip input is introduced', () => {
      component.tooltip = 'fake tooltip text';
      component.label = 'Test';
      fixture.detectChanges();

      let label: DebugElement = fixture.debugElement.query(By.css('.st-label'));

      expect(component.hasLabel).toBeTruthy();
      expect(label).toBeDefined();
      expect(label.nativeElement).toBeDefined();
      expect((label.nativeElement as HTMLLabelElement).textContent).toEqual(component.label);
      expect((label.nativeElement as HTMLLabelElement).title).toEqual(component.tooltip);
   });

   it('should not display a tooltip if it has a label but tooltip input is not introduced', () => {
      component.label = 'Test';
      fixture.detectChanges();

      let label: DebugElement = fixture.debugElement.query(By.css('.st-label'));

      expect(component.hasLabel).toBeTruthy();
      expect(label).toBeDefined();
      expect(label.nativeElement).toBeDefined();
      expect((label.nativeElement as HTMLLabelElement).textContent).toEqual(component.label);
      expect((label.nativeElement as HTMLLabelElement).title).toBe('');
   });

   describe('When a default value is introduced, user will be able to reset the select', () => {
      let fakeDefault: string;
      let input: HTMLInputElement;
      let items: DebugElement[];

      beforeEach(() => {
         component.label = 'Test';
         component.options = [<StDropDownMenuItem>{ label: 'select one', value: undefined }, ...simpleItems];
         fakeDefault = component.options[4].value;
         component.default = fakeDefault;
         fixture.detectChanges();
         input = fixture.debugElement.query(By.css('input')).nativeElement;
      });

      it('reset icon is only created if default input is introduced and current select value is different to it', () => {
         input.click();
         fixture.detectChanges();

         items = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();
         (items[1].nativeElement as HTMLElement).click();
         fixture.detectChanges();

         input.click();
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).not.toBeNull();
      });

      it('reset icon is only displayed when select is open and it has a value and is different to default', () => {
         input.click();
         fixture.detectChanges();

         items = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();
         (items[1].nativeElement as HTMLElement).click();
         fixture.detectChanges();

         input.click();
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).not.toBeNull();
         expect(fixture.debugElement.query(By.css('.st-form-control-reset-button')).styles.opacity).toEqual('1');

         fixture.nativeElement.click();
         fixture.detectChanges();

         expect(fixture.debugElement.query(By.css('.st-form-control-reset-button')).styles.opacity).toEqual('0');

         input.click();
         fixture.detectChanges();

         expect(fixture.debugElement.query(By.css('.st-form-control-reset-button')).styles.opacity).toEqual('1');

         items = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));

         (items[4].nativeElement as HTMLElement).click();  // select the default option
         fixture.detectChanges();

         input.click();
         fixture.detectChanges();
         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();
      });


      it('when user clicks on the reset button, value of input will turn to the default value', () => {
         const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
         label.click();
         fixture.detectChanges();
         items = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();

         label.click();
         (items[1].nativeElement as HTMLElement).click();
         fixture.detectChanges();

         label.click();
         fixture.nativeElement.querySelector('.st-form-control-reset-button').click();
         fixture.detectChanges();

         expect(component.selected.value).toEqual(fakeDefault);
      });

      it('after user selects an empty option, he can return to the default', () => {
         const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
         label.click();
         fixture.detectChanges();
         items = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();

         label.click();
         (items[0].nativeElement as HTMLElement).click(); // empty option
         fixture.detectChanges();

         label.click();
         fixture.nativeElement.querySelector('.st-form-control-reset-button').click();
         fixture.detectChanges();

         expect(component.selected.value).toEqual(fakeDefault);
      });

   });

   describe('Error message should be displayed', () => {
      beforeEach(() => {
         component.disabled = false;
         component.inputFormControl.markAsTouched();
         component.errorMessage = 'fake error message';
      });

      it('If it has been touched, error message is defined and it is not disabled', () => {
         fixture.detectChanges();

         expect(component.showError()).toBeTruthy();
         expect(fixture.nativeElement.querySelector('.st-input-error-message').innerHTML).toContain(component.errorMessage);
      });

      it('If it is disabled, error is not displayed', () => {
         component.disabled = true;

         fixture.detectChanges();

         expect(component.showError()).toBeFalsy();
         expect(fixture.nativeElement.querySelector('.st-input-error-message')).toBeNull();
      });

      it('If error is empty, error is not displayed', () => {
         component.errorMessage = '';

         fixture.detectChanges();

         expect(component.showError()).toBeFalsy();
         expect(fixture.nativeElement.querySelector('.st-input-error-message')).toBeNull();
      });

      it('If error is not touched, error is not displayed', () => {
         component.inputFormControl.markAsUntouched();

         fixture.detectChanges();

         expect(component.showError()).toBeFalsy();
         expect(fixture.nativeElement.querySelector('.st-input-error-message')).toBeNull();
      });
   });
});

@Component({
   template: `
      <form [formGroup]="reactiveForm" novalidate autocomplete="off">
         <st-select #select
                    stCheckValidations
                    formControlName="option"
                    placeholder="placeholder"
                    placeholderSearch="'search..."
                    name="option"
                    label="Test"
                    tooltip="Test Help"
                    [options]="options"
                    [errorMessage]="errorMessage"
                    [selected]="selected"
                    [itemsBeforeScroll]="itemsBeforeScroll"
                    [enabledSearcher]="enabledSearcher"
                    class="st-form-field">
         </st-select>
      </form>
   `
})
class StSelectTestReactiveComponent {
   itemsBeforeScroll: number = null;
   errorMessage: string | undefined = null;
   selected: StDropDownMenuItem = null;
   options: StDropDownMenuItem[];
   enabledSearcher: boolean = false;
   reactiveForm: FormGroup;
   model: any = { option: undefined };
   @ViewChild('select', {static: true}) select: StSelectComponent;

   constructor(private _fb: FormBuilder) {
      this.reactiveForm = this._fb.group({
         option: [this.model.description, [Validators.required]]
      });
   }
}

describe('StSelectComponent', () => {
   describe('Reactive form instance', () => {
      let fixture: ComponentFixture<StSelectTestReactiveComponent>;
      let component: StSelectTestReactiveComponent;
      let compSelect: StSelectComponent;
      let input: HTMLInputElement;
      let inputSearch: HTMLInputElement;
      beforeEach(async(() => {
         TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, StDropdownMenuModule, StSelectModule],
            declarations: [StSelectTestReactiveComponent]
         })
            .compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(StSelectTestReactiveComponent);
         component = fixture.componentInstance;
         compSelect = component.select;
         input = fixture.debugElement.query(By.css('input')).nativeElement;
      });

      afterEach(() => {
         fixture.destroy();
      });

      describe('Should be able to enable a search box', () => {

         it('If "enabledSearcher" is true, a search box is displayed on top and event is emitted when user types something on it', () => {
            spyOn(component.select.search, 'emit');
            component.enabledSearcher = true;
            compSelect.expandedMenu = false;
            compSelect.searchInput.setValue('example 4');
            fixture.detectChanges();
            component.options = [<StDropDownMenuItem>{ label: 'select one', value: undefined }, ...simpleItems];
            component.selected = component.options[4];
            fixture.detectChanges();
            input.click();
            input.focus();
            fixture.detectChanges();

            inputSearch = fixture.debugElement.query(By.css('.search-input input')).nativeElement;
            inputSearch.click();
            inputSearch.focus();
            compSelect.searchInput.setValue('example 4');
            inputSearch.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            expect(component.select.search.emit).toHaveBeenCalledWith('example 4');
         });

         it('Should clean search input when user clicks on cross button', () => {
            component.enabledSearcher = true;
            compSelect.expandedMenu = false;
            compSelect.searchInput.setValue('example 4');
            fixture.detectChanges();
            component.options = [<StDropDownMenuItem>{ label: 'select one', value: undefined }, ...simpleItems];
            component.selected = component.options[4];
            fixture.detectChanges();
            input.click();
            input.focus();
            fixture.detectChanges();

            inputSearch = fixture.debugElement.query(By.css('.search-input input')).nativeElement;
            inputSearch.click();
            inputSearch.focus();
            compSelect.searchInput.setValue('example 4');
            fixture.detectChanges();
            (<HTMLElement> fixture.nativeElement.querySelector('.icon-cross')).click();
            fixture.detectChanges();

            expect(compSelect.searchInput.value).toEqual('');
         });
      });

      it('Should be possible to set disabled', () => {
         component.options = simpleItems;
         fixture.detectChanges();
         expect(compSelect.disableValue).toBeNull();
         component.reactiveForm.get('option').disable();
         expect(compSelect.disableValue).toEqual('');
      });

      it('Should change value from formControl', () => {
         component.options = simpleItems;
         fixture.detectChanges();
         expect(compSelect.selected).toBeUndefined();

         component.reactiveForm.get('option').setValue(simpleItems[1].value);
         fixture.detectChanges();
         expect(compSelect.selected).toEqual(simpleItems[1]);

         component.reactiveForm.get('option').setValue(simpleItems[1].value);
         fixture.detectChanges();
         expect(compSelect.selected).toEqual(simpleItems[1]);
      });

      it('Should change model when select', () => {
         const responseFunction = jasmine.createSpy('response');
         component.options = simpleItems;
         component.reactiveForm.get('option').valueChanges.subscribe(responseFunction);
         fixture.detectChanges();

         // Open menu and select option 3
         const itemToClick: number = 2;
         expect(compSelect.expandedMenu).toBeFalsy();

         const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
         label.click();
         fixture.detectChanges();
         expect(compSelect.expandedMenu).toBeTruthy();

         const items: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));
         expect(items).toBeDefined();
         expect(items.length).toEqual(simpleItems.length);
         (items[itemToClick].nativeElement as HTMLElement).click();
         fixture.detectChanges();
         expect(compSelect.expandedMenu).toBeFalsy();

         expect(compSelect.selected).toEqual(simpleItems[itemToClick]);
         expect(component.reactiveForm.get('option').value).toEqual(simpleItems[itemToClick].value);
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith(simpleItems[itemToClick].value);

         (items[itemToClick].nativeElement as HTMLElement).dispatchEvent(new CustomEvent('click', {
            bubbles: true
         }));
      });

      it('Should validate required status', () => {
         component.options = simpleItems;
         fixture.detectChanges();

         component.reactiveForm.get('option').setValue(undefined);
         fixture.detectChanges();
         const select: HTMLElement = fixture.debugElement.query(By.css('st-select')).nativeElement;
         expect(select.classList).toContain('ng-invalid');
      });
      it('Propagate itemsBeforeScroll variable to dropdownmenu', () => {
         component.itemsBeforeScroll = 4;
         fixture.detectChanges();
         const dropdownElement = fixture.nativeElement.querySelector('.st-select-menu');
         expect(dropdownElement.getAttribute('ng-reflect-items-before-scroll')).toEqual('4');
      });
   });
});

@Component({
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <form #templateDrivenForm="ngForm" novalidate autocomplete="off">
         <st-select #select
                    stCheckValidations
                    class="st-form-field"
                    id="test"
                    placeholder="placeholder"
                    name="model"
                    label="Test"
                    tooltip="Test Help"
                    required
                    [options]="options"
                    [(ngModel)]="model"
                    (select)="onSelect($event)"
         >
         </st-select>
      </form>
   `
})
class StSelectTestTemplateComponent {
   errorMessage: string | undefined = null;
   selected: StDropDownMenuItem = null;
   options: StDropDownMenuItem[];
   model: number;
   @ViewChild('select', {static: true}) select: StSelectComponent;
   @ViewChild('templateDrivenForm', {static: true}) templateDrivenForm: NgForm;

   onSelect(element: StDropDownMenuItem): void {
      this.selected = element;
   }
}

describe('StSelectComponent', () => {
   describe('Template form instance', () => {
      let fixture: ComponentFixture<StSelectTestTemplateComponent>;
      let component: StSelectTestTemplateComponent;
      let compSelect: StSelectComponent;
      const optionName: string = 'model';

      beforeEach(async(() => {
         TestBed.configureTestingModule({
            imports: [FormsModule, StSelectModule],
            declarations: [StSelectTestTemplateComponent]
         }).compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(StSelectTestTemplateComponent);
         component = fixture.componentInstance;
         compSelect = component.select;
      });

      afterEach(() => {
         fixture.destroy();
      });

      it('Should be possible to set disabled', async(() => {
         component.options = simpleItems;
         fixture.detectChanges();
         fixture.whenStable().then(() => { // Form generation it's asynchronous
            component.templateDrivenForm.form.updateValueAndValidity();
            expect(compSelect.disableValue).toBeNull();
            component.templateDrivenForm.form.get(optionName).disable();
            expect(compSelect.disableValue).toEqual('');
         });
      }));

      it('Should change value from formControl', async(() => {
         component.options = simpleItems;
         fixture.detectChanges();
         fixture.whenStable().then(() => { // Form generation it's asynchronous
            expect(compSelect.selected).toBeUndefined();

            component.templateDrivenForm.form.get(optionName).setValue(simpleItems[1].value);
            fixture.detectChanges();
            expect(compSelect.selected).toEqual(simpleItems[1]);

            component.templateDrivenForm.form.get(optionName).setValue(simpleItems[1].value);
            fixture.detectChanges();
            expect(compSelect.selected).toEqual(simpleItems[1]);
         });
      }));

      it('Should change model when select', async(() => {
         const responseFunction = jasmine.createSpy('response');
         component.options = simpleItems;
         fixture.detectChanges();

         fixture.whenStable().then(() => { // Form generation it's asynchronous
            component.templateDrivenForm.form.get(optionName).valueChanges.subscribe(responseFunction);
            // Open menu and select option 3
            const itemToClick: number = 2;
            expect(compSelect.expandedMenu).toBeFalsy();

            const label: HTMLLabelElement = fixture.debugElement.query(By.css('label')).nativeElement;
            label.click();
            fixture.detectChanges();
            expect(compSelect.expandedMenu).toBeTruthy();

            const items: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));
            expect(items).toBeDefined();
            expect(items.length).toEqual(simpleItems.length);
            (items[itemToClick].nativeElement as HTMLElement).click();
            fixture.detectChanges();
            expect(compSelect.expandedMenu).toBeFalsy();

            expect(compSelect.selected).toEqual(simpleItems[itemToClick]);
            expect(component.templateDrivenForm.form.get(optionName).value).toEqual(simpleItems[itemToClick].value);
            expect(responseFunction).toHaveBeenCalled();
            expect(responseFunction).toHaveBeenCalledWith(simpleItems[itemToClick].value);
         });
      }));

      it('Should validate required status', async(() => {
         component.options = simpleItems;
         fixture.detectChanges();
         fixture.whenStable().then(() => { // Form generation it's asynchronous
            component.templateDrivenForm.form.get(optionName).setValue(undefined);
            fixture.detectChanges();
            const select: HTMLElement = fixture.debugElement.query(By.css('st-select')).nativeElement;
            expect(select.classList).toContain('ng-invalid');
         });
      }));
   });
});
