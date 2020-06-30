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
import { StDynamicTableUtils } from './st-dynamic-table.utils';
import { StDynamicTableHeader } from '../st-dynamic-table.model';


describe('StDynamicTableUtils', () => {
   const jsonSchema: JSONSchema4 = {
      '$schema': 'http://json-schema.org/schema#',

      'title': 'Executor Table',
      'type': 'object',
      'description': 'Spark executor properties',
      'optional': true,
      'properties': {
         'cores': {
            'title': 'Cores',
            'description': 'Number of per spark`s executor',
            'type': 'integer',
            'default': 4,
            'minimumExclusive': 0,
            'maximum': 8
         },
         'memory': {
            'title': 'Memory',
            'description': 'Spark executor memory',
            'type': 'integer',
            'default': 512,
            'minimum': 512,
            'maximum': 4096
         },
         'home': {
            'title': 'Executor home',
            'description': 'Set the directory in which Spark is installed on the executors in Mesos.',
            'type': 'string',
            'default': '/opt/spark/dist',
            'enum': ['house', 'flat', 'duplex']
         },
         'subexecutor': {
            'title': 'Sub executor',
            'type': 'object',
            'description': 'Spark executor properties',
            'properties': {
               'subcores': {
                  'title': 'Sub cores',
                  'type': 'integer'
               },
               'submemory': {
                  'title': 'Sub memory',
                  'type': 'integer'
               }
            }
         }
      }
   };

   describe('Should be able to convert a json schema in a list of header fields', () => {

      it('If json schema is null, undefined or it does not have any property, it should return an empty list', () => {
         expect(StDynamicTableUtils.getHeaderFieldsFromJsonSchema(undefined)).toEqual([]);
         expect(StDynamicTableUtils.getHeaderFieldsFromJsonSchema(null)).toEqual([]);
         expect(StDynamicTableUtils.getHeaderFieldsFromJsonSchema({})).toEqual([]);
         expect(StDynamicTableUtils.getHeaderFieldsFromJsonSchema({ properties: {} })).toEqual([]);
      });

      describe('If it is a valid json schema', () => {
         let headerFields: StDynamicTableHeader[];

         beforeEach(() => {
            headerFields = StDynamicTableUtils.getHeaderFieldsFromJsonSchema(jsonSchema);
         });

         it('All the root properties (non object) are added as a header field', () => {
            expect(headerFields.length).toEqual(3);
            expect(headerFields[0].id).toEqual('cores');
            expect(headerFields[0].label).toEqual(jsonSchema.properties.cores.title);
            expect(headerFields[1].id).toEqual('memory');
            expect(headerFields[1].label).toEqual(jsonSchema.properties.memory.title);
            expect(headerFields[2].id).toEqual('home');
            expect(headerFields[2].label).toEqual(jsonSchema.properties.home.title);
         });

         it('When property is an enum, filter config is added', () => {
            expect(headerFields[2].filters).toEqual({
               title: headerFields[2].label,
               filterConfig: [
                  {
                     id: <string> jsonSchema.properties.home.enum[0],
                     name: <string>  jsonSchema.properties.home.enum[0]
                  },
                  {
                     id: <string> jsonSchema.properties.home.enum[1],
                     name: <string>  jsonSchema.properties.home.enum[1]
                  },
                  {
                     id: <string> jsonSchema.properties.home.enum[2],
                     name: <string>  jsonSchema.properties.home.enum[2]
                  }
               ]

            });
            expect(headerFields[2].filterable).toBeTruthy();
         });
      });
   });

});
