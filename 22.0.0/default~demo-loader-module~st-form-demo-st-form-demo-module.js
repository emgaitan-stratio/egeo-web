(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-form-demo-st-form-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.html":
/*!******************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<section>\r\n   <h1 class=\"title\">Try it by yourself</h1>\r\n   <p class=\"paragraph\">Dynamic forms are generating using a json schema to define its fields. Here you can try it\r\n      making modifications on the json schema of the editor.</p>\r\n\r\n   <div class=\"textarea-container\">\r\n      <h2 class=\"subtitle\">JSON Schema</h2>\r\n      <textarea class=\"textarea st-custom-scrollbar\" spellcheck=\"false\" [ngClass]=\"{error: schemaError}\"\r\n                [ngModel]=\"jsonSchema | json\"\r\n                (ngModelChange)=\"onChangeSchema($event)\">\r\n      </textarea>\r\n\r\n      <div class=\"form-output\">\r\n         <h2>Form Output</h2>\r\n         {{model | json}}\r\n         <h2>Form Validation</h2>\r\n         <p *ngIf=\"formModel?.valid\">Valid</p>\r\n         <p *ngIf=\"formModel?.invalid\">Invalid</p>\r\n      </div>\r\n      <div class=\"button-toolbar\">\r\n         <button class=\"button button-primary\" (click)=\"changeFormStatus()\">\r\n            <span>Disable/Enable form</span>\r\n         </button>\r\n      </div>\r\n   </div>\r\n\r\n   <div class=\"form-result\">\r\n      <h2 class=\"subtitle\">Generated Form</h2>\r\n\r\n      <p *ngIf=\"schemaError\" class=\"schema-error\">{{schemaError}}</p>\r\n\r\n      <st-form *ngIf=\"jsonSchema\" #formModel=\"ngModel\" class=\"form\" [schema]=\"jsonSchema\" sectionDescriptionLevel=\"2\"\r\n               [(ngModel)]=\"model\"\r\n               [textFieldMaxWidth]=\"70\"\r\n               [errorMessages]=\"errorMessages\"\r\n               (clickLink)=\"onClickLink($event)\">\r\n      </st-form>\r\n   </div>\r\n</section>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/st-form-demo.html":
/*!***********************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/st-form-demo.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid demo-layout\">\r\n\r\n      <div class=\"demo-container\">\r\n         <st-vertical-icon-tabs class=\"vertical-tabs\"\r\n                                [options]=\"options\"\r\n                                (changeOption)=\"onChangeOption($event)\"\r\n                                [activeOption]=\"activeOption\">\r\n         </st-vertical-icon-tabs>\r\n\r\n         <div class=\"tab-container st-custom-scrollbar\">\r\n            <st-form-editor-demo [hidden]=\"activeOption !== options[0]\"></st-form-editor-demo>\r\n            <st-theme-customization-demo [hidden]=\"activeOption !== options[1]\"></st-theme-customization-demo>\r\n            <st-visual-section-improvements-demo\r\n               [hidden]=\"activeOption !== options[2]\"></st-visual-section-improvements-demo>\r\n            <st-visual-field-improvements-demo\r\n               [hidden]=\"activeOption !== options[3]\"></st-visual-field-improvements-demo>\r\n         </div>\r\n      </div>\r\n   </section>\r\n</st-docs>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.html":
/*!***********************************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<section class=\"demo-layout\">\r\n   <h1 class=\"title\">Theme customization</h1>\r\n   <p class=\"paragraph\">You can customize some styles using the following css variables</p>\r\n   <demo-css-property-table [cssProperties]=\"cssProperties\"></demo-css-property-table>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<section>\r\n   <h2 class=\"subtitle\">Show/Hide fields</h2>\r\n   <p class=\"paragraph\">Fields can be hidden or displayed dynamically according to the value of another field. Next, you can see an example to configure the conditions for which a field will be visible. Take into account that all conditions have to be fulfilled to display a field.</p>\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      visible: {field_key1: 'field_value1', field_key2: 'field_value2'}\r\n      }\r\n      } | json }}\r\n   </p>\r\n   <h2 class=\"subtitle\">Related fields</h2>\r\n   <p class=\"paragraph\">When there are some fields related with each other, they can be placed together in the same line. To place a field next to the next one, you have to add this:</p>\r\n\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      relatedTo: 'next_field_key'\r\n      }\r\n      }| json }}\r\n   </p>\r\n\r\n   <h2 class=\"subtitle\">Customization of options in a select</h2>\r\n   <p class=\"paragraph\">When we want to give a more descriptive label to options in a select, we can use the property <b>options</b> of ui.\r\n      There we can define a list of pair of name and value that will be used to create the option menu.</p>\r\n   <p class=\"paragraph\"> If you use this property, you have to know that options will be combined with the options specified in <b>enum</b> property from json schema.\r\n   The options defined in enum property but not in options property will be displayed without label.\r\n   </p>\r\n\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      options: [\r\n      {label: 'Spanish',\r\n      value: 'es'},\r\n      {\r\n      label: 'English',\r\n      value: 'en'\r\n      }\r\n      ]\r\n      } }| json }}\r\n   </p>\r\n</section>\r\n\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** D:/projects/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<section>\r\n   <h2 class=\"subtitle\">Section Switch</h2>\r\n   <p class=\"paragraph\">This section can be used when it contains fields that depend on another one. When switch is\r\n      disabled, only field associated to switch is added to the form output. First field has to be a boolean</p>\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      component: 'switch'\r\n      }\r\n      } | json }}\r\n   </p>\r\n\r\n   <h2 class=\"subtitle\">Section Accordion</h2>\r\n   <p class=\"paragraph\">It displays all its fields collapsed by default and its name only is visible.\r\n      This section has only visual effects and always section fields are added to the form output</p>\r\n\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      component: 'accordion'\r\n      }\r\n      } | json }}\r\n   </p>\r\n\r\n   <h2 class=\"subtitle\">Optional Section</h2>\r\n   <p class=\"paragraph\">This type of section can be choose for fields which user does not need to modify them. This section has only visual effects and it displays all its fields hidden by default.</p>\r\n\r\n   <p class=\"code-demo\">\r\n      {{ {\r\n      ui: {\r\n      component: 'show-more'\r\n      }\r\n      } | json }}\r\n   </p>\r\n\r\n</section>\r\n\r\n");

/***/ }),

/***/ "./src/app/demos/st-form-demo/form-editor/json-schema.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-form-demo/form-editor/json-schema.ts ***!
  \***************************************************************/
/*! exports provided: JSON_SCHEMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_SCHEMA", function() { return JSON_SCHEMA; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
var JSON_SCHEMA = {
    'type': 'object',
    'additionalProperties': false,
    'properties': {
        'general': {
            'type': 'object',
            'additionalProperties': false,
            'ui': {
                'component': 'standard'
            },
            'name': 'general',
            'title': 'General',
            'description': '',
            'properties': {
                'serviceId': {
                    'description': 'Service ID of the Service',
                    'type': 'string',
                    'readOnly': false,
                    'pattern': '(.*)',
                    'title': 'Service ID',
                    'default': '/discovery/discovery'
                },
                'marathonlb': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'marathonlb',
                    'title': 'Marathon LB',
                    'description': 'Host & Path to connect to our Discovery service.',
                    'properties': {
                        'haproxyhost': {
                            'description': 'HA Proxy host',
                            'type': 'string',
                            'title': 'HA Proxy host',
                            'default': 'discovery.labs.demo.com'
                        },
                        'haproxypath': {
                            'description': 'HA Proxy path to expose',
                            'type': 'string',
                            'title': 'Path HA Proxy',
                            'default': '/discovery'
                        }
                    },
                    'required': [
                        'haproxyhost',
                        'haproxypath'
                    ]
                },
                'datastore': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'datastore',
                    'title': 'PostgreSQL',
                    'description': 'Datastore where Discovery will place the configuration settings.',
                    'properties': {
                        'dbSslEnabled': {
                            'description': 'TLS secured connection with PostgreSQL',
                            'type': 'boolean',
                            'readOnly': true,
                            'title': 'Connection with SSL',
                            'default': true
                        },
                        'dbType': {
                            'description': '',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Type of database',
                            'default': 'postgres'
                        },
                        'metadataDbHost': {
                            'description': 'The host of the database uses as metadata repository',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'readOnly': false,
                            'title': 'Host',
                            'default': 'pg-0001.test.mesos'
                        },
                        'dbPort': {
                            'description': 'The port of the database used as metadata repository',
                            'type': 'integer',
                            'minimum': 1,
                            'readOnly': false,
                            'title': 'Port of the database',
                            'default': 5432
                        },
                        'metadataDbName': {
                            'description': 'The database name used in the database with the metadata repository',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'readOnly': false,
                            'title': 'Database name',
                            'default': 'discovery'
                        },
                        'tenantName': {
                            'description': 'The tenant name used in vault to store de secrets of this instance',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'readOnly': false,
                            'title': 'Tenant Name',
                            'default': 'discovery'
                        },
                        'metadataDbUser': {
                            'description': 'The user name of the database with the metabase repository if we are using user to connect to the database',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'readOnly': false,
                            'title': 'Database user'
                        }
                    },
                    'required': [
                        'metadataDbHost',
                        'dbPort'
                    ]
                },
                'identity': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'identity',
                    'title': 'Service indentity',
                    'description': '',
                    'properties': {
                        'approlename': {
                            'description': 'App role used to recover a Vault token with a pre-defined policy',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Vault role',
                            'default': 'open'
                        }
                    },
                    'required': []
                },
                'calico': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'calico',
                    'title': 'Calico Network',
                    'description': '',
                    'properties': {
                        'networkSegmentation': {
                            'description': 'Enable Calico network for PostgreSQL Agent.',
                            'type': 'boolean',
                            'readOnly': true,
                            'title': 'Network segmentation',
                            'default': true
                        },
                        'useDynamicAuthentication': {
                            'description': 'Enable dynamic authentication',
                            'type': 'boolean',
                            'readOnly': true,
                            'title': 'Dynamic authentication',
                            'default': true
                        },
                        'calicoNetwork': {
                            'description': 'Network\'s name where PostgreSQL Agent will be added.',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Calico network'
                        },
                        'networkName': {
                            'description': 'Docker user network name',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Network name',
                            'enum': [
                                'demo'
                            ]
                        }
                    },
                    'required': [
                        'networkName'
                    ]
                },
                'resources': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'accordion'
                    },
                    'name': 'resources',
                    'title': 'Resources',
                    'description': '',
                    'properties': {
                        'instances': {
                            'description': 'Number of Discovery instances to run.',
                            'type': 'integer',
                            'readOnly': false,
                            'title': 'Instances',
                            'default': 1
                        },
                        'cpus': {
                            'description': 'CPU shares to allocate to each Discovery instance.',
                            'type': 'integer',
                            'readOnly': false,
                            'level': 1,
                            'title': 'CPU',
                            'default': 1
                        },
                        'mem': {
                            'description': 'Memory (MB) to allocate to each Bootstrap instance.',
                            'type': 'integer',
                            'readOnly': false,
                            'title': 'Memory (MB)',
                            'default': 2048
                        }
                    },
                    'required': [
                        'instances',
                        'cpus',
                        'mem'
                    ]
                }
            },
            'required': [
                'serviceId'
            ]
        },
        'settings': {
            'type': 'object',
            'additionalProperties': false,
            'ui': {
                'component': 'standard'
            },
            'name': 'settings',
            'title': 'Settings',
            'description': '',
            'properties': {
                'jdbcParameters': {
                    'description': 'An optional variable to append to the connection string additional JDBC configuration parameters',
                    'type': 'string',
                    'maxLength': 100,
                    'minLength': 3,
                    'readOnly': false,
                    'title': 'Additional JDBC configuration parameters',
                    'default': 'prepareThreshold=0'
                },
                'calico': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'switch'
                    },
                    'name': 'calico',
                    'title': 'Calico security',
                    'description': 'Use Calico security to this Sparta instance',
                    'properties': {
                        'calicoEnabled': {
                            'description': 'Whether or not enable the Calico security.',
                            'type': 'boolean',
                            'readOnly': false,
                            'ui': {
                                'name': 'scp-sc-sparta-andromeda-calicoenabled'
                            },
                            'title': 'Use calico',
                            'default': true
                        },
                        'networkName': {
                            'description': 'Docker user network name',
                            'type': 'string',
                            'readOnly': false,
                            'ui': {
                                'name': 'scp-sc-sparta-andromeda-networkname'
                            },
                            'title': 'Network name',
                            'enum': [
                                'stratio'
                            ]
                        },
                        'calicoNetwork': {
                            'description': 'Name of the calico network where sparta and the workflows' +
                                'are deployed if calico security is enabled. It uses the same value of Network name.',
                            'type': 'string',
                            'readOnly': false,
                            'ui': {
                                'name': 'scp-sc-sparta-andromeda-caliconetwork'
                            },
                            'title': 'Calico network'
                        }
                    },
                    'required': [
                        'networkName'
                    ]
                },
                'init': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'init',
                    'title': 'Admin user',
                    'description': 'When installing discovery for the first time, It will create an admin user with this parameters',
                    'properties': {
                        'mb-init-admin-user': {
                            'description': 'The name of the admin user created as admin when Discovery is deployed.',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'readOnly': false,
                            'title': 'Name of the admin user',
                            'default': 'Demo'
                        },
                        'mb-init-admin-password': {
                            'description': 'The password of the admin user created as admin when Discovery is deployed.',
                            'type': 'integer',
                            'minimum': 1,
                            'readOnly': false,
                            'title': 'Password of the admin user',
                            'default': 123456
                        },
                        'mb-init-admin-mail': {
                            'description': 'The mail of the admin user created as admin when Discovery is deployed.',
                            'type': 'string',
                            'maxLength': 100,
                            'minLength': 3,
                            'readOnly': false,
                            'title': 'Mail of the admin user',
                            'default': 'demo@demo.com'
                        }
                    },
                    'required': []
                },
                'Login': {
                    'type': 'object',
                    'additionalProperties': false,
                    'ui': {
                        'component': 'standard'
                    },
                    'name': 'Login',
                    'title': 'Login by headers',
                    'description': '',
                    'properties': {
                        'mb-user-header': {
                            'description': '',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'User'
                        },
                        'mb-group-header': {
                            'description': '',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Group'
                        },
                        'mb-admin-group-header': {
                            'description': '',
                            'type': 'string',
                            'readOnly': false,
                            'title': 'Admin groups'
                        }
                    },
                    'required': []
                }
            },
            'required': []
        },
        'environment': {
            'type': 'object',
            'additionalProperties': false,
            'ui': {
                'component': 'standard'
            },
            'name': 'environment',
            'title': 'Environment',
            'description': '',
            'properties': {
                'VAULT_HOST': {
                    'type': 'string',
                    'maxLength': 100,
                    'minLength': 3,
                    'readOnly': true,
                    'title': 'Vault host',
                    'default': 'vault.service.paas.labs.demo.com'
                },
                'VAULT_PORT': {
                    'type': 'integer',
                    'minimum': 1,
                    'readOnly': true,
                    'level': 1,
                    'title': 'Vault port',
                    'default': 8200
                }
            },
            'required': []
        }
    }
};


/***/ }),

/***/ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n:host {\n  padding: 20px 0; }\n:host .form-result, :host .textarea-container {\n    display: inline-block;\n    vertical-align: top;\n    width: 50%; }\n:host .title {\n    padding-top: 14px; }\n:host .subtitle {\n    padding-top: 0; }\n:host .textarea-container {\n    height: 50vh;\n    padding-right: 20px; }\n:host .textarea-container .textarea-title {\n      color: #111111;\n      display: inline-block;\n      font-size: 1.375rem;\n      font-stretch: normal;\n      font-style: normal;\n      font-weight: bold;\n      letter-spacing: normal;\n      line-height: 1.857rem;\n      padding: 26px 0; }\n:host .textarea-container .textarea {\n      border: 1px solid #CFCFCF;\n      color: #707070;\n      font-family: monospace;\n      font-size: 14px;\n      height: 100%;\n      line-height: 1.6em;\n      padding: 15px 20px;\n      width: 100%;\n      resize: none; }\n:host .form-result .form {\n    display: block;\n    padding-right: 30px; }\n:host .schema-error {\n    color: #DF2935;\n    font-size: 0.938rem;\n    font-weight: 100;\n    width: 100%; }\n:host .button-toolbar {\n    margin-top: 20px;\n    text-align: right; }\n:host .form-output {\n    background-color: #FAFAFA;\n    font-size: 1rem;\n    font-weight: 100;\n    line-height: 1.286rem;\n    margin-top: 20px;\n    padding: 5px 20px 20px;\n    width: 100%; }\n:host .form-output h2 {\n      color: #707070;\n      font-size: 1.143rem;\n      font-stretch: normal;\n      font-style: normal;\n      font-weight: bold;\n      letter-spacing: normal;\n      line-height: 1.143rem;\n      padding-bottom: 15px;\n      padding-top: 15px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9mb3JtLWVkaXRvci9zdC1mb3JtLWVkaXRvci1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1kZW1vL2Zvcm0tZWRpdG9yL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHN0LWZvcm0tZGVtb1xcZm9ybS1lZGl0b3JcXHN0LWZvcm0tZWRpdG9yLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vZm9ybS1lZGl0b3IvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9mb3JtLWVkaXRvci9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBRVZGOzs7Ozs7Ozs7RUZvQkU7QUdwQkY7Ozs7Ozs7OztFSDhCRTtBQ2pCRjtFQUNHLGVBQWUsRUFBQTtBQURsQjtJQUlNLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsVUFBVSxFQUFBO0FBTmhCO0lBVU0saUJBQWlCLEVBQUE7QUFWdkI7SUFjTSxjQUFjLEVBQUE7QUFkcEI7SUFrQk0sWUFBWTtJQUNaLG1CQUFtQixFQUFBO0FBbkJ6QjtNQXNCUyxjQ21CUTtNRGxCUixxQkFBcUI7TUFDckIsbUJFaUIwQjtNRmhCMUIsb0JBQW9CO01BQ3BCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsc0JBQXNCO01BQ3RCLHFCRURxQjtNRkVyQixlQUFlLEVBQUE7QUE5QnhCO01Ba0NTLHlCQ2FXO01EWlgsY0NnQlc7TURmWCxzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxZQUFZLEVBQUE7QUExQ3JCO0lBZ0RTLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTtBQWpENUI7SUFzRE0sY0NuQlM7SURvQlQsbUJFYjZCO0lGYzdCLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7QUF6RGpCO0lBNkRNLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtBQTlEdkI7SUFrRU0seUJDeEJhO0lEeUJiLGVFeERrQjtJRnlEbEIsZ0JBQWdCO0lBQ2hCLHFCRXhEc0I7SUZ5RHRCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0FBeEVqQjtNQTJFUyxjQ3hCVztNRHlCWCxtQkVoRW1CO01GaUVuQixvQkFBb0I7TUFDcEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEIscUJFckVtQjtNRnNFbkIsb0JBQW9CO01BQ3BCLGlCQUFpQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9mb3JtLWVkaXRvci9zdC1mb3JtLWVkaXRvci1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuOmhvc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7IH1cbiAgOmhvc3QgLmZvcm0tcmVzdWx0LCA6aG9zdCAudGV4dGFyZWEtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogNTAlOyB9XG4gIDpob3N0IC50aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDE0cHg7IH1cbiAgOmhvc3QgLnN1YnRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxuICA6aG9zdCAudGV4dGFyZWEtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDsgfVxuICAgIDpob3N0IC50ZXh0YXJlYS1jb250YWluZXIgLnRleHRhcmVhLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxLjM3NXJlbTtcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuODU3cmVtO1xuICAgICAgcGFkZGluZzogMjZweCAwOyB9XG4gICAgOmhvc3QgLnRleHRhcmVhLWNvbnRhaW5lciAudGV4dGFyZWEge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NGQ0ZDRjtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcmVzaXplOiBub25lOyB9XG4gIDpob3N0IC5mb3JtLXJlc3VsdCAuZm9ybSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDsgfVxuICA6aG9zdCAuc2NoZW1hLWVycm9yIHtcbiAgICBjb2xvcjogI0RGMjkzNTtcbiAgICBmb250LXNpemU6IDAuOTM4cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgOmhvc3QgLmJ1dHRvbi10b29sYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIDpob3N0IC5mb3JtLW91dHB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yODZyZW07XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiA1cHggMjBweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgOmhvc3QgLmZvcm0tb3V0cHV0IGgyIHtcbiAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgZm9udC1zaXplOiAxLjE0M3JlbTtcbiAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTQzcmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTVweDsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb25zdGFudHMvY29sb3JzJztcclxuQGltcG9ydCAnY29uc3RhbnRzL2ZvbnRzJztcclxuXHJcbjpob3N0IHtcclxuICAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICAgLmZvcm0tcmVzdWx0LCAudGV4dGFyZWEtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICB9XHJcblxyXG4gICAudGl0bGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgfVxyXG5cclxuICAgLnN1YnRpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgIH1cclxuXHJcbiAgIC50ZXh0YXJlYS1jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAudGV4dGFyZWEtdGl0bGUge1xyXG4gICAgICAgICBjb2xvcjogJG5ldXRyYWw7XHJcbiAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUteGxhcmdlO1xyXG4gICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWxpbmUtaGVpZ2h0LTI2O1xyXG4gICAgICAgICBwYWRkaW5nOiAyNnB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0YXJlYSB7XHJcbiAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRuZXV0cmFsLTIwO1xyXG4gICAgICAgICBjb2xvcjogJG5ldXRyYWwtNjA7XHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICBsaW5lLWhlaWdodDogMS42ZW07XHJcbiAgICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAuZm9ybS1yZXN1bHQge1xyXG4gICAgICAuZm9ybSB7XHJcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC5zY2hlbWEtZXJyb3Ige1xyXG4gICAgICBjb2xvcjogJGVycm9yO1xyXG4gICAgICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS14c21hbGw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcblxyXG4gICAuYnV0dG9uLXRvb2xiYXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgfVxyXG5cclxuICAgLmZvcm0tb3V0cHV0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5ldXRyYWwtMjtcclxuICAgICAgZm9udC1zaXplOiAkZWdlby1mb250LXNpemUtMTQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkZWdlby1mb250LXNpemUtMTg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgICBjb2xvcjogJG5ldXRyYWwtNjA7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE2O1xyXG4gICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWZvbnQtc2l6ZS0xNjtcclxuICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG4iLCIvKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbi8vIGJyYW5kOlxuJGJyYW5kOiAjMzdCNUU0ICFkZWZhdWx0O1xuXG4vLyBhY3Rpb246XG4kYWN0aW9uOiAjMDc3NkRGICFkZWZhdWx0O1xuJGFjdGlvbi0xMDogI0U2RjFGQyAhZGVmYXVsdDtcbiRhY3Rpb24tNDA6ICM5Q0M4RjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTYwOiAjNkFBREVDICFkZWZhdWx0O1xuJGFjdGlvbi04MDogIzM5OTFFNSAhZGVmYXVsdDtcbiRhY3Rpb24tMTIwOiAjMDY1RUIyICFkZWZhdWx0O1xuJGFjdGlvbi0xNTA6ICMwMzNCNzAgIWRlZmF1bHQ7XG5cbi8vIHNwYWNlOlxuJHNwYWNlOiAjMjczMjNEICFkZWZhdWx0O1xuJHNwYWNlLTU6ICNGM0Y2RjggIWRlZmF1bHQ7XG4kc3BhY2UtMTA6ICNFQUVGRjUgIWRlZmF1bHQ7XG4kc3BhY2UtMjA6ICNDREQ2REYgIWRlZmF1bHQ7XG4kc3BhY2UtMzA6ICNBQUI3QzQgIWRlZmF1bHQ7XG4kc3BhY2UtNDA6ICM5QUE5QjggIWRlZmF1bHQ7XG4kc3BhY2UtNTA6ICM4ODk4QTcgIWRlZmF1bHQ7XG4kc3BhY2UtNzA6ICM2QzdCOEIgIWRlZmF1bHQ7XG4kc3BhY2UtODA6ICM1NjY1NzQgIWRlZmF1bHQ7XG4kc3BhY2UtMTEwOiAjMEYxQjI3ICFkZWZhdWx0O1xuXG4vLyBzdWNjZXNzOlxuJHN1Y2Nlc3M6ICMwQ0FBNzAgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMDogI0U3RjdGMSAhZGVmYXVsdDtcbiRzdWNjZXNzLTEyMDogIzBBODg1QSAhZGVmYXVsdDtcbiRzdWNjZXNzLTE0MDogIzA3NjY0MyAhZGVmYXVsdDtcblxuLy8gd2FybmluZzpcbiR3YXJuaW5nOiAjRUM3RTEzICFkZWZhdWx0O1xuJHdhcm5pbmctMTA6ICNGREYyRTcgIWRlZmF1bHQ7XG4kd2FybmluZy0xMjA6ICNCRDY1MEYgIWRlZmF1bHQ7XG4kd2FybmluZy0xNDA6ICM4RTRDMEIgIWRlZmF1bHQ7XG5cbi8vIGVycm9yOlxuJGVycm9yOiAjREYyOTM1ICFkZWZhdWx0O1xuJGVycm9yLTEwOiAjRkNFQUVCICFkZWZhdWx0O1xuJGVycm9yLTEyMDogI0IyMjEyQSAhZGVmYXVsdDtcbiRlcnJvci0xNDA6ICM4NjE5MjAgIWRlZmF1bHQ7XG5cbi8vIG5ldXRyYWw6XG4kbmV1dHJhbDogIzExMTExMSAhZGVmYXVsdDtcbiRuZXV0cmFsLTI6ICNGQUZBRkEgIWRlZmF1bHQ7XG4kbmV1dHJhbC00OiAjRjVGNUY1ICFkZWZhdWx0O1xuJG5ldXRyYWwtODogI0VDRUNFQyAhZGVmYXVsdDtcbiRuZXV0cmFsLTEwOiAjRTdFN0U3ICFkZWZhdWx0O1xuJG5ldXRyYWwtMTU6ICNEQkRCREIgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yMDogI0NGQ0ZDRiAhZGVmYXVsdDtcbiRuZXV0cmFsLTMwOiAjQjhCOEI4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNDA6ICNBMEEwQTAgIWRlZmF1bHQ7XG4kbmV1dHJhbC01MDogIzg4ODg4OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTYwOiAjNzA3MDcwICFkZWZhdWx0O1xuJG5ldXRyYWwtNzA6ICM1ODU4NTggIWRlZmF1bHQ7XG4kbmV1dHJhbC04MDogIzQxNDE0MSAhZGVmYXVsdDtcbiRuZXV0cmFsLWZ1bGw6ICNGRkZGRkYgIWRlZmF1bHQ7XG5cbi8vIG1pc2M6XG4kbWlzYy1jb3JhbDogICAgICAgICAgICAjZmE3MTY3ICFkZWZhdWx0O1xuJG1pc2MtY29yYWwtbGlnaHQ6ICAgICAgI2ZmY2FjNiAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZTogICAgICAgICNmYTljN2QgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmUtbGlnaHQ6ICAjZmZkNGM1ICFkZWZhdWx0O1xuJG1pc2MtcGVhY2g6ICAgICAgICAgICAgI2ZkYmQyYiAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoLWxpZ2h0OiAgICAgICNmZmYwYzQgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZTogICAgICAgICAgICAjYWNjOTUyICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmUtbGlnaHQ6ICAgICAgI2U5ZjNkMCAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZTogICAgICAgICMyZGNmYmUgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2UtbGlnaHQ6ICAjYjRlZWVhICFkZWZhdWx0O1xuJG1pc2MtYXF1YTogICAgICAgICAgICAgIzNkYzlmYyAhZGVmYXVsdDtcbiRtaXNjLWFxdWEtbGlnaHQ6ICAgICAgICNiY2U3ZjYgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmc6ICAgICAgICAgICAjNzdiMWUxICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nLWxpZ2h0OiAgICAgI2NkZTNmOCAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyOiAgICAgICAgICNjZDg5ZDIgIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlci1saWdodDogICAjZjVkYWY3ICFkZWZhdWx0O1xuXG4vLyBkZXByZWNhdGVkOlxuJHN0YXR1cy13YXJuaW5nLWRlZmF1bHQ6ICNmYTkzMmYgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNDogI2YwZjBmMCAhZGVmYXVsdDtcbiRpbnB1dC1maWVsZC1vbmZvY3VzOiAjODhjNWVlICFkZWZhdWx0O1xuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5cclxuLy8vIFZBUlM6XHJcbiRlZ2VvLWZvbnRmYWNlLXNyYzogJy4vYXNzZXRzL2ZvbnRzJyAhZGVmYXVsdDtcclxuJGVnZW8taW1hZ2Utc3JjOiAnYXNzZXRzL2ltYWdlcycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWRyb2lkLXNhbnMtbW9ubzogdHJ1ZSAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LWZhbWlseTpcclxuJGVnZW8tbnVuaXRvLXNhbnM6ICAgICAgICAgICAgICAgICAgJ051bml0byBTYW5zJyAhZGVmYXVsdDtcclxuJGVnZW8tc3RyYXRpby1pY29uczogICAgICAgICAgICAgICAgJ2ljb19zdHJhdGlvJyAhZGVmYXVsdDtcclxuXHJcbi8vLyBmb250LXNpemUgKGJhc2UgMTQpOlxyXG4kZWdlby1mb250LXNpemUtMTA6IDAuNzE0cmVtICFkZWZhdWx0OyAvLyAxMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMTogMC43ODZyZW0gIWRlZmF1bHQ7IC8vIDExcHhcclxuJGVnZW8tZm9udC1zaXplLTEyOiAwLjg1N3JlbSAhZGVmYXVsdDsgLy8gMTJweFxyXG4kZWdlby1mb250LXNpemUtMTQ6IDFyZW0gIWRlZmF1bHQ7ICAgICAvLyAxNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNjogMS4xNDNyZW0gIWRlZmF1bHQ7IC8vIDE2cHhcclxuJGVnZW8tZm9udC1zaXplLTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxyXG4kZWdlby1mb250LXNpemUtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tZm9udC1zaXplLTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1mb250LXNpemUtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zODogMi43MTRyZW0gIWRlZmF1bHQ7IC8vIDM4cHhcclxuJGVnZW8tZm9udC1zaXplLTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1mb250LXNpemUtNDg6IDMuNDI5cmVtICFkZWZhdWx0OyAvLyA0OHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS01MjogMy43MTRyZW0gIWRlZmF1bHQ7IC8vIDUycHhcclxuXHJcbi8vLyBsaW5lLWhlaWdodCAoYmFzZSAxNCk6XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTE4OiAxLjI4NnJlbSAhZGVmYXVsdDsgLy8gMThweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjI6IDEuNTcxcmVtICFkZWZhdWx0OyAvLyAyMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNjogMS44NTdyZW0gIWRlZmF1bHQ7IC8vIDI2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1saW5lLWhlaWdodC0zNTogMi41cmVtICFkZWZhdWx0OyAgIC8vIDM1cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQ2OiAzLjI4NnJlbSAhZGVmYXVsdDsgLy8gNDZweFxyXG4kZWdlby1saW5lLWhlaWdodC01MDogMy41NzFyZW0gIWRlZmF1bHQ7IC8vIDUwcHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTg6IDQuMTQzcmVtICFkZWZhdWx0OyAvLyA1OHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTYyOiA0LjQyOXJlbSAhZGVmYXVsdDsgLy8gNjJweFxyXG5cclxuLy8gZGVwcmVjYXRlZDpcclxuJGVnZW8tZm9udC1zaXplLXh4eGxhcmdlOiAgMS44MTNyZW0gIWRlZmF1bHQ7ICAgLy8gMjlweCAoYmFzZSAxNilcclxuJGVnZW8tZm9udC1zaXplLXh4bGFyZ2U6ICAgMS41NjNyZW0gIWRlZmF1bHQ7ICAgLy8gMjVweCAoYmFzZSAxNilcclxuJGVnZW8tZm9udC1zaXplLXhsYXJnZTogICAgMS4zNzVyZW0gIWRlZmF1bHQ7ICAgLy8gMjJweCAoYmFzZSAxNilcclxuJGVnZW8tZm9udC1zaXplLXhzbWFsbDogICAgMC45MzhyZW0gIWRlZmF1bHQ7ICAgLy8gMTVweCAoYmFzZSAxNilcclxuXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eGxhcmdlOiAgIDIuMTI1cmVtICFkZWZhdWx0OyAgLy8gMzRweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQteHhsYXJnZTogICAgMS44NzVyZW0gIWRlZmF1bHQ7ICAvLyAzMHB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC1zbWFsbDogICAgICAxLjMxM3JlbSAhZGVmYXVsdDsgIC8vIDIxcHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4eHNtYWxsOiAgIDEuMDYzcmVtICFkZWZhdWx0OyAgLy8gMTdweCAoYmFzZSAxNilcclxuIl19 */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.ts ***!
  \***********************************************************************/
/*! exports provided: StFormEditorDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormEditorDemoComponent", function() { return StFormEditorDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _json_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json-schema */ "./src/app/demos/st-form-demo/form-editor/json-schema.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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



var StFormEditorDemoComponent = /** @class */ (function () {
    function StFormEditorDemoComponent(_cd) {
        this._cd = _cd;
        this.model = {};
        this.jsonSchema = _json_schema__WEBPACK_IMPORTED_MODULE_2__["JSON_SCHEMA"];
    }
    StFormEditorDemoComponent.prototype.changeFormStatus = function () {
        if (this.formModel.control.enabled) {
            this.formModel.control.disable();
        }
        else {
            this.formModel.control.enable();
        }
    };
    StFormEditorDemoComponent.prototype.onChangeSchema = function (jsonSchema) {
        var _this = this;
        if (this.schemaChangeTimer !== undefined) {
            clearTimeout(this.schemaChangeTimer);
        }
        this.schemaChangeTimer = setTimeout(function () {
            try {
                _this.jsonSchema = JSON.parse(jsonSchema);
                _this.schemaError = undefined;
                _this._cd.markForCheck();
            }
            catch (error) {
                _this.schemaError = error;
            }
        }, 1000);
    };
    StFormEditorDemoComponent.prototype.onClickLink = function (fieldPath) {
        console.log(fieldPath);
    };
    StFormEditorDemoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formModel', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], StFormEditorDemoComponent.prototype, "formModel", void 0);
    StFormEditorDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-form-editor-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-form-editor-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./st-form-editor-demo.component.scss */ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], StFormEditorDemoComponent);
    return StFormEditorDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/st-form-demo.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-form-demo/st-form-demo.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.demo-container {\n  border-top: 1px solid #EAEFF5;\n  display: block;\n  height: 100%; }\n.demo-container .vertical-tabs {\n    display: inline-block;\n    height: 100vh;\n    position: fixed;\n    vertical-align: top;\n    width: 82px; }\n.demo-container .tab-container {\n    display: inline-block;\n    height: 72.5vh;\n    overflow: auto;\n    overflow-x: hidden;\n    padding-left: 106px;\n    padding-right: 20px;\n    width: 100%; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9zdC1mb3JtLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtZm9ybS1kZW1vXFxzdC1mb3JtLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby9EOlxccHJvamVjdHNcXGVnZW8vcHJvamVjdHNcXGVnZW9cXHNyY1xcdGhlbWVcXGNvbnN0YW50c1xcX2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7Ozs7RURVRTtBRVZGOzs7Ozs7Ozs7RUZvQkU7QUdwQkY7Ozs7Ozs7OztFSDhCRTtBQ2hCRjtFQUNHLDZCQ1dlO0VEVmYsY0FBYztFQUNkLFlBQVksRUFBQTtBQUhmO0lBTU0scUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtBQVZqQjtJQWNNLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vc3QtZm9ybS1kZW1vLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xuLmRlbW8tY29udGFpbmVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQUVGRjU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmRlbW8tY29udGFpbmVyIC52ZXJ0aWNhbC10YWJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB3aWR0aDogODJweDsgfVxuICAuZGVtby1jb250YWluZXIgLnRhYi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDcyLjV2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy1sZWZ0OiAxMDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdjb25zdGFudHMvZm9udHMnO1xyXG5cclxuXHJcbi5kZW1vLWNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkc3BhY2UtMTA7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAudmVydGljYWwtdGFicyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICB3aWR0aDogODJweDtcclxuICAgfVxyXG5cclxuICAgLnRhYi1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogNzIuNXZoO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwNnB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG5cclxufVxyXG5cclxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcclxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxyXG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcclxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxyXG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxyXG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxyXG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXHJcblxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/st-form-demo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/demos/st-form-demo/st-form-demo.module.ts ***!
  \***********************************************************/
/*! exports provided: StFormDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormDemoModule", function() { return StFormDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_form_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-form-demo */ "./src/app/demos/st-form-demo/st-form-demo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_editor_st_form_editor_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-editor/st-form-editor-demo */ "./src/app/demos/st-form-demo/form-editor/st-form-editor-demo.ts");
/* harmony import */ var _visual_section_improvements_st_visual_section_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visual-section-improvements/st-visual-section-improvements-editor-demo */ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.ts");
/* harmony import */ var _visual_field_improvements_st_visual_field_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual-field-improvements/st-visual-field-improvements-editor-demo */ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.ts");
/* harmony import */ var _app_demos_st_form_demo_visual_customization_st_theme_customization_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/demos/st-form-demo/visual-customization/st-theme-customization-demo */ "./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.ts");
/* harmony import */ var _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/css-property-table/css-property-table.module */ "./src/app/shared/css-property-table/css-property-table.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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










var StFormDemoModule = /** @class */ (function () {
    function StFormDemoModule() {
    }
    StFormDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StFormModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StTextareaModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StVerticalIconTabsModule"],
                _app_shared_css_property_table_css_property_table_module__WEBPACK_IMPORTED_MODULE_9__["CssPropertyTableModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_form_demo__WEBPACK_IMPORTED_MODULE_3__["StFormDemoComponent"]] })
            ],
            declarations: [_st_form_demo__WEBPACK_IMPORTED_MODULE_3__["StFormDemoComponent"], _form_editor_st_form_editor_demo__WEBPACK_IMPORTED_MODULE_5__["StFormEditorDemoComponent"], _visual_field_improvements_st_visual_field_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_7__["StVisualFieldImprovementsDemoComponent"],
                _visual_section_improvements_st_visual_section_improvements_editor_demo__WEBPACK_IMPORTED_MODULE_6__["StVisualSectionImprovementsDemoComponent"], _app_demos_st_form_demo_visual_customization_st_theme_customization_demo__WEBPACK_IMPORTED_MODULE_8__["StThemeCustomization"]]
        })
    ], StFormDemoModule);
    return StFormDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/st-form-demo.ts":
/*!****************************************************!*\
  !*** ./src/app/demos/st-form-demo/st-form-demo.ts ***!
  \****************************************************/
/*! exports provided: StFormDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormDemoComponent", function() { return StFormDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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

var StFormDemoComponent = /** @class */ (function () {
    function StFormDemoComponent() {
        this.configDoc = {
            html: 'demo/st-form-demo/st-form-demo.html',
            ts: 'demo/st-form-demo/st-form-demo.ts',
            component: 'lib/st-form/st-form.component.ts'
        };
        this.options = [
            {
                id: 'demo',
                iconClass: 'icon-edit-3',
                text: 'Demo'
            },
            {
                id: 'cssProperties',
                iconClass: 'icon-formatter',
                text: 'Theme Customization'
            },
            {
                id: 'visualSectionImprovements',
                iconClass: 'icon-content-left',
                text: 'Visual Section improvements'
            },
            {
                id: 'visualFieldImprovements',
                iconClass: 'icon-eye2',
                text: 'Visual Field improvements'
            }
        ];
        this.activeOption = this.options[0];
    }
    StFormDemoComponent.prototype.onChangeOption = function (selectedOption) {
        this.activeOption = selectedOption;
    };
    StFormDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-form-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-form-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/st-form-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-form-demo.component.scss */ "./src/app/demos/st-form-demo/st-form-demo.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StFormDemoComponent);
    return StFormDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.subtitle {\n  font-weight: bold;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.286rem;\n  letter-spacing: normal;\n  color: #414141;\n  padding: 26px 0; }\n.code-demo {\n  font-family: monospace;\n  font-size: 14px;\n  line-height: 1.6em;\n  color: #707070;\n  padding: 20px;\n  background-color: #fafafafa; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtY3VzdG9taXphdGlvbi9zdC10aGVtZS1jdXN0b21pemF0aW9uLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vdmlzdWFsLWN1c3RvbWl6YXRpb24vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvLWRlbW9cXHNyY1xcYXBwXFxkZW1vc1xcc3QtZm9ybS1kZW1vXFx2aXN1YWwtY3VzdG9taXphdGlvblxcc3QtdGhlbWUtY3VzdG9taXphdGlvbi1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1kZW1vL3Zpc3VhbC1jdXN0b21pemF0aW9uL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfY29sb3JzLnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vdmlzdWFsLWN1c3RvbWl6YXRpb24vRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUNqQkY7RUFDRyxpQkFBaUI7RUFDakIsbUJFV3lCO0VGVnpCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUJFUXlCO0VGUHpCLHNCQUFzQjtFQUN0QixjQzhDaUI7RUQ3Q2pCLGVBQWUsRUFBQTtBQUdsQjtFQUNHLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNDb0NpQjtFRG5DakIsYUFBYTtFQUNiLDJCQUEyQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtY3VzdG9taXphdGlvbi9zdC10aGVtZS1jdXN0b21pemF0aW9uLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjI4NnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjg2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgcGFkZGluZzogMjZweCAwOyB9XG5cbi5jb2RlLWRlbW8ge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmFmYTsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb25zdGFudHMvY29sb3JzJztcclxuQGltcG9ydCAnY29uc3RhbnRzL2ZvbnRzJztcclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgY29sb3I6ICRuZXV0cmFsLTgwO1xyXG4gICBwYWRkaW5nOiAyNnB4IDA7XHJcbn1cclxuXHJcbi5jb2RlLWRlbW8ge1xyXG4gICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgY29sb3I6ICRuZXV0cmFsLTYwO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhZmE7XHJcbn1cclxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcclxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxyXG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcclxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxyXG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxyXG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxyXG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXHJcblxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.ts ***!
  \****************************************************************************************/
/*! exports provided: StThemeCustomization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StThemeCustomization", function() { return StThemeCustomization; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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

var StThemeCustomization = /** @class */ (function () {
    function StThemeCustomization() {
        this.cssProperties = [
            {
                name: '--egeo-st-form-field--padding-bottom',
                description: 'Form field padding bottom',
                default: '20px'
            },
            {
                name: '--egeo-st-form-field--max-width',
                description: 'Form field max width',
                default: '100%'
            },
            {
                name: '--egeo-st-form-field__read-only--bg-color',
                description: 'Read only form field background color',
                default: '100%'
            },
            {
                name: '--egeo-st-form-field__read-only--border',
                description: 'Read only form field border',
                default: '100%'
            },
            {
                name: '--egeo-st-form-field__read-only--padding',
                description: 'Read only form field padding',
                default: '0'
            }
        ];
    }
    StThemeCustomization = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-theme-customization-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-theme-customization-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-theme-customization-demo.component.scss */ "./src/app/demos/st-form-demo/visual-customization/st-theme-customization-demo.component.scss")).default]
        })
    ], StThemeCustomization);
    return StThemeCustomization;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-demo.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-demo.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.subtitle {\n  font-weight: bold;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.286rem;\n  letter-spacing: normal;\n  color: #414141;\n  padding: 26px 0; }\n.code-demo {\n  font-family: monospace;\n  font-size: 14px;\n  line-height: 1.6em;\n  color: #707070;\n  padding: 20px;\n  background-color: #fafafafa; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzL3N0LXZpc3VhbC1maWVsZC1pbXByb3ZlbWVudHMtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHN0LWZvcm0tZGVtb1xcdmlzdWFsLWZpZWxkLWltcHJvdmVtZW50c1xcc3QtdmlzdWFsLWZpZWxkLWltcHJvdmVtZW50cy1kZW1vLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1kZW1vL3Zpc3VhbC1maWVsZC1pbXByb3ZlbWVudHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlb1xcc3JjXFx0aGVtZVxcY29uc3RhbnRzXFxfZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FFVkY7Ozs7Ozs7OztFRm9CRTtBR3BCRjs7Ozs7Ozs7O0VIOEJFO0FDakJGO0VBQ0csaUJBQWlCO0VBQ2pCLG1CRVd5QjtFRlZ6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHFCRVF5QjtFRlB6QixzQkFBc0I7RUFDdEIsY0M4Q2lCO0VEN0NqQixlQUFlLEVBQUE7QUFHbEI7RUFDRyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQ29DaUI7RURuQ2pCLGFBQWE7RUFDYiwyQkFBMkIsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vdmlzdWFsLWZpZWxkLWltcHJvdmVtZW50cy9zdC12aXN1YWwtZmllbGQtaW1wcm92ZW1lbnRzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjI4NnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjg2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgcGFkZGluZzogMjZweCAwOyB9XG5cbi5jb2RlLWRlbW8ge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmFmYTsgfVxuIiwiLyoqXHJcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxyXG4gKlxyXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXHJcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XHJcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXHJcbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuICpcclxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXHJcbiAqL1xyXG5AaW1wb3J0ICdjb25zdGFudHMvY29sb3JzJztcclxuQGltcG9ydCAnY29uc3RhbnRzL2ZvbnRzJztcclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmb250LXNpemU6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgbGluZS1oZWlnaHQ6ICRlZ2VvLWZvbnQtc2l6ZS0xODtcclxuICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgY29sb3I6ICRuZXV0cmFsLTgwO1xyXG4gICBwYWRkaW5nOiAyNnB4IDA7XHJcbn1cclxuXHJcbi5jb2RlLWRlbW8ge1xyXG4gICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgY29sb3I6ICRuZXV0cmFsLTYwO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhZmE7XHJcbn1cclxuIiwiLyoqXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG4vLyBicmFuZDpcbiRicmFuZDogIzM3QjVFNCAhZGVmYXVsdDtcblxuLy8gYWN0aW9uOlxuJGFjdGlvbjogIzA3NzZERiAhZGVmYXVsdDtcbiRhY3Rpb24tMTA6ICNFNkYxRkMgIWRlZmF1bHQ7XG4kYWN0aW9uLTQwOiAjOUNDOEYyICFkZWZhdWx0O1xuJGFjdGlvbi02MDogIzZBQURFQyAhZGVmYXVsdDtcbiRhY3Rpb24tODA6ICMzOTkxRTUgIWRlZmF1bHQ7XG4kYWN0aW9uLTEyMDogIzA2NUVCMiAhZGVmYXVsdDtcbiRhY3Rpb24tMTUwOiAjMDMzQjcwICFkZWZhdWx0O1xuXG4vLyBzcGFjZTpcbiRzcGFjZTogIzI3MzIzRCAhZGVmYXVsdDtcbiRzcGFjZS01OiAjRjNGNkY4ICFkZWZhdWx0O1xuJHNwYWNlLTEwOiAjRUFFRkY1ICFkZWZhdWx0O1xuJHNwYWNlLTIwOiAjQ0RENkRGICFkZWZhdWx0O1xuJHNwYWNlLTMwOiAjQUFCN0M0ICFkZWZhdWx0O1xuJHNwYWNlLTQwOiAjOUFBOUI4ICFkZWZhdWx0O1xuJHNwYWNlLTUwOiAjODg5OEE3ICFkZWZhdWx0O1xuJHNwYWNlLTcwOiAjNkM3QjhCICFkZWZhdWx0O1xuJHNwYWNlLTgwOiAjNTY2NTc0ICFkZWZhdWx0O1xuJHNwYWNlLTExMDogIzBGMUIyNyAhZGVmYXVsdDtcblxuLy8gc3VjY2VzczpcbiRzdWNjZXNzOiAjMENBQTcwICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTA6ICNFN0Y3RjEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xMjA6ICMwQTg4NUEgIWRlZmF1bHQ7XG4kc3VjY2Vzcy0xNDA6ICMwNzY2NDMgIWRlZmF1bHQ7XG5cbi8vIHdhcm5pbmc6XG4kd2FybmluZzogI0VDN0UxMyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEwOiAjRkRGMkU3ICFkZWZhdWx0O1xuJHdhcm5pbmctMTIwOiAjQkQ2NTBGICFkZWZhdWx0O1xuJHdhcm5pbmctMTQwOiAjOEU0QzBCICFkZWZhdWx0O1xuXG4vLyBlcnJvcjpcbiRlcnJvcjogI0RGMjkzNSAhZGVmYXVsdDtcbiRlcnJvci0xMDogI0ZDRUFFQiAhZGVmYXVsdDtcbiRlcnJvci0xMjA6ICNCMjIxMkEgIWRlZmF1bHQ7XG4kZXJyb3ItMTQwOiAjODYxOTIwICFkZWZhdWx0O1xuXG4vLyBuZXV0cmFsOlxuJG5ldXRyYWw6ICMxMTExMTEgIWRlZmF1bHQ7XG4kbmV1dHJhbC0yOiAjRkFGQUZBICFkZWZhdWx0O1xuJG5ldXRyYWwtNDogI0Y1RjVGNSAhZGVmYXVsdDtcbiRuZXV0cmFsLTg6ICNFQ0VDRUMgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xMDogI0U3RTdFNyAhZGVmYXVsdDtcbiRuZXV0cmFsLTE1OiAjREJEQkRCICFkZWZhdWx0O1xuJG5ldXRyYWwtMjA6ICNDRkNGQ0YgIWRlZmF1bHQ7XG4kbmV1dHJhbC0zMDogI0I4QjhCOCAhZGVmYXVsdDtcbiRuZXV0cmFsLTQwOiAjQTBBMEEwICFkZWZhdWx0O1xuJG5ldXRyYWwtNTA6ICM4ODg4ODggIWRlZmF1bHQ7XG4kbmV1dHJhbC02MDogIzcwNzA3MCAhZGVmYXVsdDtcbiRuZXV0cmFsLTcwOiAjNTg1ODU4ICFkZWZhdWx0O1xuJG5ldXRyYWwtODA6ICM0MTQxNDEgIWRlZmF1bHQ7XG4kbmV1dHJhbC1mdWxsOiAjRkZGRkZGICFkZWZhdWx0O1xuXG4vLyBtaXNjOlxuJG1pc2MtY29yYWw6ICAgICAgICAgICAgI2ZhNzE2NyAhZGVmYXVsdDtcbiRtaXNjLWNvcmFsLWxpZ2h0OiAgICAgICNmZmNhYzYgIWRlZmF1bHQ7XG4kbWlzYy10YW5nZXJpbmU6ICAgICAgICAjZmE5YzdkICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lLWxpZ2h0OiAgI2ZmZDRjNSAhZGVmYXVsdDtcbiRtaXNjLXBlYWNoOiAgICAgICAgICAgICNmZGJkMmIgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaC1saWdodDogICAgICAjZmZmMGM0ICFkZWZhdWx0O1xuJG1pc2Mtb2xpdmU6ICAgICAgICAgICAgI2FjYzk1MiAhZGVmYXVsdDtcbiRtaXNjLW9saXZlLWxpZ2h0OiAgICAgICNlOWYzZDAgIWRlZmF1bHQ7XG4kbWlzYy10dXJxdW9pc2U6ICAgICAgICAjMmRjZmJlICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlLWxpZ2h0OiAgI2I0ZWVlYSAhZGVmYXVsdDtcbiRtaXNjLWFxdWE6ICAgICAgICAgICAgICMzZGM5ZmMgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhLWxpZ2h0OiAgICAgICAjYmNlN2Y2ICFkZWZhdWx0O1xuJG1pc2MtdmlraW5nOiAgICAgICAgICAgIzc3YjFlMSAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZy1saWdodDogICAgICNjZGUzZjggIWRlZmF1bHQ7XG4kbWlzYy1sYXZlbmRlcjogICAgICAgICAjY2Q4OWQyICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXItbGlnaHQ6ICAgI2Y1ZGFmNyAhZGVmYXVsdDtcblxuLy8gZGVwcmVjYXRlZDpcbiRzdGF0dXMtd2FybmluZy1kZWZhdWx0OiAjZmE5MzJmICFkZWZhdWx0O1xuJG5ldXRyYWwtMTQ6ICNmMGYwZjAgIWRlZmF1bHQ7XG4kaW5wdXQtZmllbGQtb25mb2N1czogIzg4YzVlZSAhZGVmYXVsdDtcbiIsIi8qKlxyXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cclxuICpcclxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxyXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xyXG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxyXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXHJcbiAqXHJcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxyXG4gKi9cclxuXHJcbi8vLyBWQVJTOlxyXG4kZWdlby1mb250ZmFjZS1zcmM6ICcuL2Fzc2V0cy9mb250cycgIWRlZmF1bHQ7XHJcbiRlZ2VvLWltYWdlLXNyYzogJ2Fzc2V0cy9pbWFnZXMnICFkZWZhdWx0O1xyXG4kZWdlby1kcm9pZC1zYW5zLW1vbm86IHRydWUgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1mYW1pbHk6XHJcbiRlZ2VvLW51bml0by1zYW5zOiAgICAgICAgICAgICAgICAgICdOdW5pdG8gU2FucycgIWRlZmF1bHQ7XHJcbiRlZ2VvLXN0cmF0aW8taWNvbnM6ICAgICAgICAgICAgICAgICdpY29fc3RyYXRpbycgIWRlZmF1bHQ7XHJcblxyXG4vLy8gZm9udC1zaXplIChiYXNlIDE0KTpcclxuJGVnZW8tZm9udC1zaXplLTEwOiAwLjcxNHJlbSAhZGVmYXVsdDsgLy8gMTBweFxyXG4kZWdlby1mb250LXNpemUtMTE6IDAuNzg2cmVtICFkZWZhdWx0OyAvLyAxMXB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMjogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIDEycHhcclxuJGVnZW8tZm9udC1zaXplLTE0OiAxcmVtICFkZWZhdWx0OyAgICAgLy8gMTRweFxyXG4kZWdlby1mb250LXNpemUtMTY6IDEuMTQzcmVtICFkZWZhdWx0OyAvLyAxNnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tZm9udC1zaXplLTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1mb250LXNpemUtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tZm9udC1zaXplLTMyOiAyLjI4NnJlbSAhZGVmYXVsdDsgLy8gMzJweFxyXG4kZWdlby1mb250LXNpemUtMzg6IDIuNzE0cmVtICFkZWZhdWx0OyAvLyAzOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tZm9udC1zaXplLTQ4OiAzLjQyOXJlbSAhZGVmYXVsdDsgLy8gNDhweFxyXG4kZWdlby1mb250LXNpemUtNTI6IDMuNzE0cmVtICFkZWZhdWx0OyAvLyA1MnB4XHJcblxyXG4vLy8gbGluZS1oZWlnaHQgKGJhc2UgMTQpOlxyXG4kZWdlby1saW5lLWhlaWdodC0xODogMS4yODZyZW0gIWRlZmF1bHQ7IC8vIDE4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjA6IDEuNDI5cmVtICFkZWZhdWx0OyAvLyAyMHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIyOiAxLjU3MXJlbSAhZGVmYXVsdDsgLy8gMjJweFxyXG4kZWdlby1saW5lLWhlaWdodC0yNDogMS43MTRyZW0gIWRlZmF1bHQ7IC8vIDI0cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjY6IDEuODU3cmVtICFkZWZhdWx0OyAvLyAyNnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI4OiAycmVtICFkZWZhdWx0OyAgICAgLy8gMjhweFxyXG4kZWdlby1saW5lLWhlaWdodC0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzU6IDIuNXJlbSAhZGVmYXVsdDsgICAvLyAzNXB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTQyOiAzcmVtICFkZWZhdWx0OyAgICAgLy8gNDJweFxyXG4kZWdlby1saW5lLWhlaWdodC00NjogMy4yODZyZW0gIWRlZmF1bHQ7IC8vIDQ2cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNTA6IDMuNTcxcmVtICFkZWZhdWx0OyAvLyA1MHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTU4OiA0LjE0M3JlbSAhZGVmYXVsdDsgLy8gNThweFxyXG4kZWdlby1saW5lLWhlaWdodC02MjogNC40MjlyZW0gIWRlZmF1bHQ7IC8vIDYycHhcclxuXHJcbi8vIGRlcHJlY2F0ZWQ6XHJcbiRlZ2VvLWZvbnQtc2l6ZS14eHhsYXJnZTogIDEuODEzcmVtICFkZWZhdWx0OyAgIC8vIDI5cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14eGxhcmdlOiAgIDEuNTYzcmVtICFkZWZhdWx0OyAgIC8vIDI1cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14bGFyZ2U6ICAgIDEuMzc1cmVtICFkZWZhdWx0OyAgIC8vIDIycHggKGJhc2UgMTYpXHJcbiRlZ2VvLWZvbnQtc2l6ZS14c21hbGw6ICAgIDAuOTM4cmVtICFkZWZhdWx0OyAgIC8vIDE1cHggKGJhc2UgMTYpXHJcblxyXG4kZWdlby1saW5lLWhlaWdodC14eHhsYXJnZTogICAyLjEyNXJlbSAhZGVmYXVsdDsgIC8vIDM0cHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXh4bGFyZ2U6ICAgIDEuODc1cmVtICFkZWZhdWx0OyAgLy8gMzBweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQtc21hbGw6ICAgICAgMS4zMTNyZW0gIWRlZmF1bHQ7ICAvLyAyMXB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eHhzbWFsbDogICAxLjA2M3JlbSAhZGVmYXVsdDsgIC8vIDE3cHggKGJhc2UgMTYpXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.ts ***!
  \**********************************************************************************************************/
/*! exports provided: StVisualFieldImprovementsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StVisualFieldImprovementsDemoComponent", function() { return StVisualFieldImprovementsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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

var StVisualFieldImprovementsDemoComponent = /** @class */ (function () {
    function StVisualFieldImprovementsDemoComponent() {
    }
    StVisualFieldImprovementsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-visual-field-improvements-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-visual-field-improvements-editor-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-editor-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-visual-field-improvements-demo.component.scss */ "./src/app/demos/st-form-demo/visual-field-improvements/st-visual-field-improvements-demo.component.scss")).default]
        })
    ], StVisualFieldImprovementsDemoComponent);
    return StVisualFieldImprovementsDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-demo.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-demo.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n/**\r\n * © 2017 Stratio Big Data Inc., Sucursal en España.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.subtitle {\n  font-weight: bold;\n  font-size: 1.286rem;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.286rem;\n  letter-spacing: normal;\n  color: #414141;\n  padding: 26px 0 10px 0; }\n.code-demo {\n  font-family: monospace;\n  font-size: 14px;\n  line-height: 1.6em;\n  color: #707070;\n  padding: 20px;\n  background-color: #FAFAFA; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvc3QtdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9lZ2VvLWRlbW8vc3JjL2FwcC9kZW1vcy9zdC1mb3JtLWRlbW8vdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzL0Q6XFxwcm9qZWN0c1xcZWdlby9wcm9qZWN0c1xcZWdlby1kZW1vXFxzcmNcXGFwcFxcZGVtb3NcXHN0LWZvcm0tZGVtb1xcdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzXFxzdC12aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMtZGVtby5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9jb2xvcnMuc2NzcyIsInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvRDpcXHByb2plY3RzXFxlZ2VvL3Byb2plY3RzXFxlZ2VvXFxzcmNcXHRoZW1lXFxjb25zdGFudHNcXF9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7O0VEVUU7QUVWRjs7Ozs7Ozs7O0VGb0JFO0FHcEJGOzs7Ozs7Ozs7RUg4QkU7QUNqQkY7RUFDRyxpQkFBaUI7RUFDakIsbUJFV3lCO0VGVnpCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIscUJFUXlCO0VGUHpCLHNCQUFzQjtFQUN0QixjQzhDaUI7RUQ3Q2pCLHNCQUFzQixFQUFBO0FBR3pCO0VBQ0csc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0NvQ2lCO0VEbkNqQixhQUFhO0VBQ2IseUJDeUJnQixFQUFBIiwiZmlsZSI6InByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tZGVtby92aXN1YWwtc2VjdGlvbi1pbXByb3ZlbWVudHMvc3QtdmlzdWFsLXNlY3Rpb24taW1wcm92ZW1lbnRzLWRlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4vKipcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG4vKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXG4uc3VidGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjI4NnJlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjg2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgcGFkZGluZzogMjZweCAwIDEwcHggMDsgfVxuXG4uY29kZS1kZW1vIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBOyB9XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcbkBpbXBvcnQgJ2NvbnN0YW50cy9jb2xvcnMnO1xyXG5AaW1wb3J0ICdjb25zdGFudHMvZm9udHMnO1xyXG5cclxuLnN1YnRpdGxlIHtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtc2l6ZTogJGVnZW8tZm9udC1zaXplLTE4O1xyXG4gICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICBsaW5lLWhlaWdodDogJGVnZW8tZm9udC1zaXplLTE4O1xyXG4gICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICBjb2xvcjogJG5ldXRyYWwtODA7XHJcbiAgIHBhZGRpbmc6IDI2cHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbi5jb2RlLWRlbW8ge1xyXG4gICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgY29sb3I6ICRuZXV0cmFsLTYwO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmV1dHJhbC0yO1xyXG59XHJcbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuLy8gYnJhbmQ6XG4kYnJhbmQ6ICMzN0I1RTQgIWRlZmF1bHQ7XG5cbi8vIGFjdGlvbjpcbiRhY3Rpb246ICMwNzc2REYgIWRlZmF1bHQ7XG4kYWN0aW9uLTEwOiAjRTZGMUZDICFkZWZhdWx0O1xuJGFjdGlvbi00MDogIzlDQzhGMiAhZGVmYXVsdDtcbiRhY3Rpb24tNjA6ICM2QUFERUMgIWRlZmF1bHQ7XG4kYWN0aW9uLTgwOiAjMzk5MUU1ICFkZWZhdWx0O1xuJGFjdGlvbi0xMjA6ICMwNjVFQjIgIWRlZmF1bHQ7XG4kYWN0aW9uLTE1MDogIzAzM0I3MCAhZGVmYXVsdDtcblxuLy8gc3BhY2U6XG4kc3BhY2U6ICMyNzMyM0QgIWRlZmF1bHQ7XG4kc3BhY2UtNTogI0YzRjZGOCAhZGVmYXVsdDtcbiRzcGFjZS0xMDogI0VBRUZGNSAhZGVmYXVsdDtcbiRzcGFjZS0yMDogI0NERDZERiAhZGVmYXVsdDtcbiRzcGFjZS0zMDogI0FBQjdDNCAhZGVmYXVsdDtcbiRzcGFjZS00MDogIzlBQTlCOCAhZGVmYXVsdDtcbiRzcGFjZS01MDogIzg4OThBNyAhZGVmYXVsdDtcbiRzcGFjZS03MDogIzZDN0I4QiAhZGVmYXVsdDtcbiRzcGFjZS04MDogIzU2NjU3NCAhZGVmYXVsdDtcbiRzcGFjZS0xMTA6ICMwRjFCMjcgIWRlZmF1bHQ7XG5cbi8vIHN1Y2Nlc3M6XG4kc3VjY2VzczogIzBDQUE3MCAhZGVmYXVsdDtcbiRzdWNjZXNzLTEwOiAjRTdGN0YxICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTIwOiAjMEE4ODVBICFkZWZhdWx0O1xuJHN1Y2Nlc3MtMTQwOiAjMDc2NjQzICFkZWZhdWx0O1xuXG4vLyB3YXJuaW5nOlxuJHdhcm5pbmc6ICNFQzdFMTMgIWRlZmF1bHQ7XG4kd2FybmluZy0xMDogI0ZERjJFNyAhZGVmYXVsdDtcbiR3YXJuaW5nLTEyMDogI0JENjUwRiAhZGVmYXVsdDtcbiR3YXJuaW5nLTE0MDogIzhFNEMwQiAhZGVmYXVsdDtcblxuLy8gZXJyb3I6XG4kZXJyb3I6ICNERjI5MzUgIWRlZmF1bHQ7XG4kZXJyb3ItMTA6ICNGQ0VBRUIgIWRlZmF1bHQ7XG4kZXJyb3ItMTIwOiAjQjIyMTJBICFkZWZhdWx0O1xuJGVycm9yLTE0MDogIzg2MTkyMCAhZGVmYXVsdDtcblxuLy8gbmV1dHJhbDpcbiRuZXV0cmFsOiAjMTExMTExICFkZWZhdWx0O1xuJG5ldXRyYWwtMjogI0ZBRkFGQSAhZGVmYXVsdDtcbiRuZXV0cmFsLTQ6ICNGNUY1RjUgIWRlZmF1bHQ7XG4kbmV1dHJhbC04OiAjRUNFQ0VDICFkZWZhdWx0O1xuJG5ldXRyYWwtMTA6ICNFN0U3RTcgIWRlZmF1bHQ7XG4kbmV1dHJhbC0xNTogI0RCREJEQiAhZGVmYXVsdDtcbiRuZXV0cmFsLTIwOiAjQ0ZDRkNGICFkZWZhdWx0O1xuJG5ldXRyYWwtMzA6ICNCOEI4QjggIWRlZmF1bHQ7XG4kbmV1dHJhbC00MDogI0EwQTBBMCAhZGVmYXVsdDtcbiRuZXV0cmFsLTUwOiAjODg4ODg4ICFkZWZhdWx0O1xuJG5ldXRyYWwtNjA6ICM3MDcwNzAgIWRlZmF1bHQ7XG4kbmV1dHJhbC03MDogIzU4NTg1OCAhZGVmYXVsdDtcbiRuZXV0cmFsLTgwOiAjNDE0MTQxICFkZWZhdWx0O1xuJG5ldXRyYWwtZnVsbDogI0ZGRkZGRiAhZGVmYXVsdDtcblxuLy8gbWlzYzpcbiRtaXNjLWNvcmFsOiAgICAgICAgICAgICNmYTcxNjcgIWRlZmF1bHQ7XG4kbWlzYy1jb3JhbC1saWdodDogICAgICAjZmZjYWM2ICFkZWZhdWx0O1xuJG1pc2MtdGFuZ2VyaW5lOiAgICAgICAgI2ZhOWM3ZCAhZGVmYXVsdDtcbiRtaXNjLXRhbmdlcmluZS1saWdodDogICNmZmQ0YzUgIWRlZmF1bHQ7XG4kbWlzYy1wZWFjaDogICAgICAgICAgICAjZmRiZDJiICFkZWZhdWx0O1xuJG1pc2MtcGVhY2gtbGlnaHQ6ICAgICAgI2ZmZjBjNCAhZGVmYXVsdDtcbiRtaXNjLW9saXZlOiAgICAgICAgICAgICNhY2M5NTIgIWRlZmF1bHQ7XG4kbWlzYy1vbGl2ZS1saWdodDogICAgICAjZTlmM2QwICFkZWZhdWx0O1xuJG1pc2MtdHVycXVvaXNlOiAgICAgICAgIzJkY2ZiZSAhZGVmYXVsdDtcbiRtaXNjLXR1cnF1b2lzZS1saWdodDogICNiNGVlZWEgIWRlZmF1bHQ7XG4kbWlzYy1hcXVhOiAgICAgICAgICAgICAjM2RjOWZjICFkZWZhdWx0O1xuJG1pc2MtYXF1YS1saWdodDogICAgICAgI2JjZTdmNiAhZGVmYXVsdDtcbiRtaXNjLXZpa2luZzogICAgICAgICAgICM3N2IxZTEgIWRlZmF1bHQ7XG4kbWlzYy12aWtpbmctbGlnaHQ6ICAgICAjY2RlM2Y4ICFkZWZhdWx0O1xuJG1pc2MtbGF2ZW5kZXI6ICAgICAgICAgI2NkODlkMiAhZGVmYXVsdDtcbiRtaXNjLWxhdmVuZGVyLWxpZ2h0OiAgICNmNWRhZjcgIWRlZmF1bHQ7XG5cbi8vIGRlcHJlY2F0ZWQ6XG4kc3RhdHVzLXdhcm5pbmctZGVmYXVsdDogI2ZhOTMyZiAhZGVmYXVsdDtcbiRuZXV0cmFsLTE0OiAjZjBmMGYwICFkZWZhdWx0O1xuJGlucHV0LWZpZWxkLW9uZm9jdXM6ICM4OGM1ZWUgIWRlZmF1bHQ7XG4iLCIvKipcclxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXHJcbiAqXHJcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cclxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcclxuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cclxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gKlxyXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cclxuICovXHJcblxyXG4vLy8gVkFSUzpcclxuJGVnZW8tZm9udGZhY2Utc3JjOiAnLi9hc3NldHMvZm9udHMnICFkZWZhdWx0O1xyXG4kZWdlby1pbWFnZS1zcmM6ICdhc3NldHMvaW1hZ2VzJyAhZGVmYXVsdDtcclxuJGVnZW8tZHJvaWQtc2Fucy1tb25vOiB0cnVlICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtZmFtaWx5OlxyXG4kZWdlby1udW5pdG8tc2FuczogICAgICAgICAgICAgICAgICAnTnVuaXRvIFNhbnMnICFkZWZhdWx0O1xyXG4kZWdlby1zdHJhdGlvLWljb25zOiAgICAgICAgICAgICAgICAnaWNvX3N0cmF0aW8nICFkZWZhdWx0O1xyXG5cclxuLy8vIGZvbnQtc2l6ZSAoYmFzZSAxNCk6XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xMDogMC43MTRyZW0gIWRlZmF1bHQ7IC8vIDEwcHhcclxuJGVnZW8tZm9udC1zaXplLTExOiAwLjc4NnJlbSAhZGVmYXVsdDsgLy8gMTFweFxyXG4kZWdlby1mb250LXNpemUtMTI6IDAuODU3cmVtICFkZWZhdWx0OyAvLyAxMnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0xNDogMXJlbSAhZGVmYXVsdDsgICAgIC8vIDE0cHhcclxuJGVnZW8tZm9udC1zaXplLTE2OiAxLjE0M3JlbSAhZGVmYXVsdDsgLy8gMTZweFxyXG4kZWdlby1mb250LXNpemUtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0yMDogMS40MjlyZW0gIWRlZmF1bHQ7IC8vIDIwcHhcclxuJGVnZW8tZm9udC1zaXplLTI0OiAxLjcxNHJlbSAhZGVmYXVsdDsgLy8gMjRweFxyXG4kZWdlby1mb250LXNpemUtMjg6IDJyZW0gIWRlZmF1bHQ7ICAgICAvLyAyOHB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS0zMjogMi4yODZyZW0gIWRlZmF1bHQ7IC8vIDMycHhcclxuJGVnZW8tZm9udC1zaXplLTM4OiAyLjcxNHJlbSAhZGVmYXVsdDsgLy8gMzhweFxyXG4kZWdlby1mb250LXNpemUtNDI6IDNyZW0gIWRlZmF1bHQ7ICAgICAvLyA0MnB4XHJcbiRlZ2VvLWZvbnQtc2l6ZS00ODogMy40MjlyZW0gIWRlZmF1bHQ7IC8vIDQ4cHhcclxuJGVnZW8tZm9udC1zaXplLTUyOiAzLjcxNHJlbSAhZGVmYXVsdDsgLy8gNTJweFxyXG5cclxuLy8vIGxpbmUtaGVpZ2h0IChiYXNlIDE0KTpcclxuJGVnZW8tbGluZS1oZWlnaHQtMTg6IDEuMjg2cmVtICFkZWZhdWx0OyAvLyAxOHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTIwOiAxLjQyOXJlbSAhZGVmYXVsdDsgLy8gMjBweFxyXG4kZWdlby1saW5lLWhlaWdodC0yMjogMS41NzFyZW0gIWRlZmF1bHQ7IC8vIDIycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMjQ6IDEuNzE0cmVtICFkZWZhdWx0OyAvLyAyNHB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTI2OiAxLjg1N3JlbSAhZGVmYXVsdDsgLy8gMjZweFxyXG4kZWdlby1saW5lLWhlaWdodC0yODogMnJlbSAhZGVmYXVsdDsgICAgIC8vIDI4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtMzI6IDIuMjg2cmVtICFkZWZhdWx0OyAvLyAzMnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTM1OiAyLjVyZW0gIWRlZmF1bHQ7ICAgLy8gMzVweFxyXG4kZWdlby1saW5lLWhlaWdodC00MjogM3JlbSAhZGVmYXVsdDsgICAgIC8vIDQycHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNDY6IDMuMjg2cmVtICFkZWZhdWx0OyAvLyA0NnB4XHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LTUwOiAzLjU3MXJlbSAhZGVmYXVsdDsgLy8gNTBweFxyXG4kZWdlby1saW5lLWhlaWdodC01ODogNC4xNDNyZW0gIWRlZmF1bHQ7IC8vIDU4cHhcclxuJGVnZW8tbGluZS1oZWlnaHQtNjI6IDQuNDI5cmVtICFkZWZhdWx0OyAvLyA2MnB4XHJcblxyXG4vLyBkZXByZWNhdGVkOlxyXG4kZWdlby1mb250LXNpemUteHh4bGFyZ2U6ICAxLjgxM3JlbSAhZGVmYXVsdDsgICAvLyAyOXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHhsYXJnZTogICAxLjU2M3JlbSAhZGVmYXVsdDsgICAvLyAyNXB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteGxhcmdlOiAgICAxLjM3NXJlbSAhZGVmYXVsdDsgICAvLyAyMnB4IChiYXNlIDE2KVxyXG4kZWdlby1mb250LXNpemUteHNtYWxsOiAgICAwLjkzOHJlbSAhZGVmYXVsdDsgICAvLyAxNXB4IChiYXNlIDE2KVxyXG5cclxuJGVnZW8tbGluZS1oZWlnaHQteHh4bGFyZ2U6ICAgMi4xMjVyZW0gIWRlZmF1bHQ7ICAvLyAzNHB4IChiYXNlIDE2KVxyXG4kZWdlby1saW5lLWhlaWdodC14eGxhcmdlOiAgICAxLjg3NXJlbSAhZGVmYXVsdDsgIC8vIDMwcHggKGJhc2UgMTYpXHJcbiRlZ2VvLWxpbmUtaGVpZ2h0LXNtYWxsOiAgICAgIDEuMzEzcmVtICFkZWZhdWx0OyAgLy8gMjFweCAoYmFzZSAxNilcclxuJGVnZW8tbGluZS1oZWlnaHQteHh4c21hbGw6ICAgMS4wNjNyZW0gIWRlZmF1bHQ7ICAvLyAxN3B4IChiYXNlIDE2KVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.ts ***!
  \**************************************************************************************************************/
/*! exports provided: StVisualSectionImprovementsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StVisualSectionImprovementsDemoComponent", function() { return StVisualSectionImprovementsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
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

var StVisualSectionImprovementsDemoComponent = /** @class */ (function () {
    function StVisualSectionImprovementsDemoComponent() {
    }
    StVisualSectionImprovementsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-visual-section-improvements-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-visual-section-improvements-editor-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-editor-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-visual-section-improvements-demo.component.scss */ "./src/app/demos/st-form-demo/visual-section-improvements/st-visual-section-improvements-demo.component.scss")).default]
        })
    ], StVisualSectionImprovementsDemoComponent);
    return StVisualSectionImprovementsDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-form-demo-st-form-demo-module.js.map