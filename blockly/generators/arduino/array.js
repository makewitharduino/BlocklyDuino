/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Arduino for list blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Arduino.array');

goog.require('Blockly.Arduino');

Blockly.Arduino.array_create_with = function() {
  // Create a list with any number of elements of any type.
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
                                             Blockly.Arduino.ORDER_COMMA) || 'null';
  }
  code = '{' + code.join(', ') + '}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.array2d_create_with = function() {
  // Create a list with any number of elements of any type.
  var code = new Array(this.itemCount_);
  for (var n = 0; n < this.itemCount_; n++) {
    code[n] = Blockly.Arduino.valueToCode(this, 'ADD' + n,
                                          Blockly.Arduino.ORDER_COMMA) || 'null';
  }
  code = '{' + code.join(', ') + '}';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.array_getIndex = function() {
  var at = Blockly.Arduino.valueToCode(this, 'AT',
                                          Blockly.Arduino.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.Arduino.valueToCode(this, 'ITEM',
                                            Blockly.Arduino.ORDER_MEMBER) || '[]';

  if (Blockly.isNumber(at)) {
    // If the index is a naked number, decrement it right now.
    at = parseFloat(at) - 1;
  }
  var code = list + '[' + at + ']';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino.array_two_getIndex = function() {
  var at1 = Blockly.Arduino.valueToCode(this, 'AT1',
                                       Blockly.Arduino.ORDER_UNARY_NEGATION) || '1';
  var at2 = Blockly.Arduino.valueToCode(this, 'AT2',
                                        Blockly.Arduino.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.Arduino.valueToCode(this, 'ITEM',
                                         Blockly.Arduino.ORDER_MEMBER) || '[]';

  if (Blockly.isNumber(at1)) {
    // If the index is a naked number, decrement it right now.
    at1 = parseFloat(at1) - 1;
  }
  if (Blockly.isNumber(at2)) {
    // If the index is a naked number, decrement it right now.
    at2 = parseFloat(at2) - 1;
  }
  var code = list + '[' + at1 + ']' + '[' + at2 + ']';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

