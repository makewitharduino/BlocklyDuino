/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @author ok.okada.hiroyuki@gmail.com
 */
'use strict';

goog.provide('Blockly.Constants.Ifttt');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Ifttt.image = './media/ifttt.png';

Blockly.Blocks['ifttt_get_url'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.IFTTT_GET_URL_HELPURL);
    this.setColour(Blockly.Msg.IFTTT_HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.IFTTT_GET_URL_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Constants.Ifttt.image, 64, 64));
    this.appendValueInput("EVENT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFTTT_EVENT);
    this.appendValueInput("KEY")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFTTT_KEY);
    this.appendValueInput("VALUE1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFTTT_VALUE1);
    this.appendValueInput("VALUE2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFTTT_VALUE2);
    this.appendValueInput("VALUE3")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.IFTTT_VALUE3);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.IFTTT_GET_URL_TOOLTIP);
  }
};
