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
 * @author okhiroyuki@gmail.com
 */
'use strict';

goog.provide('Blockly.Constants.Mpr121');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Mpr121.image = './media/mpr121.jpg';

Blockly.Constants.Mpr121.checkBlocks = function (obj) {
  var legal = null;
  var current = obj.type;
  var blocks = obj.workspace.getAllBlocks();
  for (var i = 0; i < blocks.length; i++) {
    if ((blocks[i].type == 'mpr121_touched' ||
        blocks[i].type == 'mpr121_released' ||
        blocks[i].type == 'mpr121_value' ||
        blocks[i].type == 'mpr121_reset') &&
      legal == null) {
      if (blocks[i].type != current) legal = true;
      else legal = false;
    }
    if (blocks[i].type == 'mpr121_begin') {
      return true;
    }
  }
  return legal;
};

Blockly.Blocks['mpr121_begin'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);
    this.setColour(Blockly.Msg.MPR121_HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Constants.Mpr121.image, 64, 64))
      .appendField(Blockly.Msg.MPR121_BEGIN_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MPR121_BEGIN_TOOLTIP);
  },
  onchange: function () {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    this.setWarningText(Blockly.Msg.MPR121_BEGIN_WARNING);
  }
};


Blockly.Blocks['mpr121_touched'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);
    this.setColour(Blockly.Msg.MPR121_HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Constants.Mpr121.image, 64, 64));
    this.appendValueInput("CH")
      .setCheck("Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.MPR121_TOUCHED_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MPR121_TOUCHED_TOOLTIP);
  },
  onchange: function () {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Constants.Mpr121.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.MPR121_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['mpr121_released'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);
    this.setColour(Blockly.Msg.MPR121_HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Constants.Mpr121.image, 64, 64));
    this.appendValueInput("CH")
      .setCheck("Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.MPR121_RELEASED_TITLE);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.MPR121_RELEASED_TOOLTIP);
  },
  onchange: function () {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Constants.Mpr121.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.MPR121_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};


Blockly.Blocks['mpr121_value'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);
    this.setColour(Blockly.Msg.MPR121_HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Constants.Mpr121.image, 64, 64))
      .appendField(Blockly.Msg.MPR121_VALUE_TITLE);
    this.appendValueInput("CH")
      .setCheck("Number")
      .appendField(Blockly.Msg.MPR121_POSITION);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MPR121_VALUE_TOOLTIP);
  },
  onchange: function () {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Constants.Mpr121.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.MPR121_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['mpr121_reset'] = {
  init: function () {
    this.setHelpUrl(Blockly.Msg.MPR121_HELPURL);
    this.setColour(Blockly.Msg.MPR121_HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Constants.Mpr121.image, 64, 64))
      .appendField(Blockly.Msg.MPR121_RESET_TITLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.MPR121_RESET_TOOLTIP);
  },
  onchange: function () {
    if (!this.workspace) {
      // Block has en deleted.
      return;
    }
    if (!Blockly.Constants.Mpr121.checkBlocks(this)) {
      this.setWarningText(Blockly.Msg.MPR121_WARNING);
    } else {
      this.setWarningText(null);
    }
  }
};
