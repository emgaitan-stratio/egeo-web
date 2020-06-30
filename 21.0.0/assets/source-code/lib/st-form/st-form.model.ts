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


import { JSONSchema4 } from 'json-schema';
import { FORM_UI_COMPONENT } from './shared/ui-component.interface';

export interface StFormUIDefinition {
   relatedTo?: string;
   visible?: { [key: string]: any };
   component?: FORM_UI_COMPONENT;
   link?: string;
}

export interface StFormSchema extends JSONSchema4 {
   ui?: StFormUIDefinition;
   properties?: { [key: string]: StFormSchema };

   [key: string]: any;
}
