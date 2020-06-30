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
import { StDynamicTableHeader, StDynamicTableUISpecification, StDynamicTableUserInterface } from '../st-dynamic-table.model';
import { StFilterHeader } from '../../st-table/shared/table-header.interface';

export class StDynamicTableUtils {

   public static getHeaderFieldsFromJsonSchema(jsonSchema: JSONSchema4, uiDefinitions?: StDynamicTableUserInterface): StDynamicTableHeader[] {
      const fields: StDynamicTableHeader[] = [];

      if (jsonSchema && jsonSchema.properties) {
         const properties = Object.keys(jsonSchema.properties);
         if (properties) {
            properties.forEach(_propertyKey => {
               const _property = jsonSchema.properties[_propertyKey];
               if (_property && _property.type !== 'object') {
                  const uiDefinition: StDynamicTableUISpecification = uiDefinitions && uiDefinitions[_propertyKey];
                  const filters: StFilterHeader = StDynamicTableUtils.getHeaderFiltersFromJsonSchema(_property, uiDefinition);
                  const isSortable = uiDefinition && uiDefinitions[_propertyKey].sortable;

                  fields.push({
                     id: _propertyKey,
                     label: _property.title || _propertyKey,
                     reference: _property.$ref,
                     fk: uiDefinition && uiDefinition.fk,
                     group: uiDefinition && uiDefinition.group_field ? uiDefinition.group_field.name : null,
                     filters: filters,
                     filterable: filters && (filters.templateRef !== undefined || (filters.filterConfig && filters.filterConfig.length > 0)),
                     sortable: isSortable,
                     type: _property.type ? this._getTypes(_propertyKey, _property.type.toString(), jsonSchema, uiDefinition) : null
                  });
               }
            });
         }
      }
      return fields;
   }

   public static getHeaderFiltersFromJsonSchema(propertyDefinition: JSONSchema4, uiDefinition: StDynamicTableUISpecification): StFilterHeader {
      let filters: StFilterHeader;
      if (propertyDefinition.enum && propertyDefinition.enum.length) {
         filters = {
            title: propertyDefinition.title,
            filterConfig: []
         };
         propertyDefinition.enum.forEach(_value => {
            filters.filterConfig.push({
               id: <any> _value,
               name: <any> _value
            });
         });
      } else if (uiDefinition && uiDefinition.templateRef) {
         filters = {
            title: propertyDefinition.title,
            templateRef: uiDefinition.templateRef
         };
      }

      return filters;
   }

   private static _getTypes(key: string, type: string, jsonSchema: JSONSchema4, uiDefinition: StDynamicTableUISpecification): {field: string; type: string}[] {
      if (uiDefinition && uiDefinition.group_field && uiDefinition.group_field.name) {
         const fields = uiDefinition.group_field.name.split(' - ');
         return fields.map(field => ({ field: field, type: jsonSchema.properties[field].type.toString()}));
      }
      return [{ field: key, type: type}];
   }
}
