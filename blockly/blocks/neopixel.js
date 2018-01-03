/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Constants.Neopixel');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Neopixel.image = './media/neopixel.jpg';

Blockly.Constants.Neopixel.checkBlocks = function (obj) {
    var legal = null;
    var current = obj.type;
    var blocks = obj.workspace.getAllBlocks();
    for (var i = 0; i < blocks.length; i++) {
        if ((blocks[i].type == 'neopixel_setpixelcolor' ||
                blocks[i].type == 'neopixel_custom_setpixelcolor' ||
                blocks[i].type == 'neopixel_show' ||
                blocks[i].type == 'neopixel_setpixelcolor2') &&
            legal == null) {
            if (blocks[i].type != current) legal = true;
            else legal = false;
        }
        if (blocks[i].type == 'neopixel_begin') {
            return true;
        }
    }
    return legal;
};

Blockly.Blocks['neopixel_begin'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.NEOPIXEL_BEGIN_HELPURL);
        this.setColour(Blockly.Msg.NEOPIXEL_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Neopixel.image, 64, 64))
            .appendField(Blockly.Msg.NEOPIXEL_BEGIN_SETTING)
            .appendField(Blockly.Msg.NEOPIXEL_BEGIN_NUM)
            .appendField(new Blockly.FieldTextInput("16"), "NUM");
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_BEGIN_PIN)
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendDummyInput()
            .appendField(Blockly.Msg.NEOPIXEL_BEGIN_BRIGHTNESS)
            .appendField(new Blockly.FieldTextInput("50"), "BRIGHTNESS");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        this.setWarningText(Blockly.Msg.NEOPIXEL_BEGIN_WARNING);
    }
};

Blockly.Blocks['neopixel_setpixelcolor'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
        this.setColour(Blockly.Msg.NEOPIXEL_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Neopixel.image, 64, 64))
        this.appendValueInput("TARGET")
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TARGET)
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.COLOR)
            .appendField(new Blockly.FieldColour("#00ff00"), "RGB");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Constants.Neopixel.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.NEOPIXEL_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['neopixel_custom_setpixelcolor'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL);
        this.setColour(Blockly.Msg.NEOPIXEL_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Neopixel.image, 64, 64))
        this.appendValueInput("TARGET")
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TARGET)
        this.appendValueInput("R")
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_R)
        this.appendValueInput("G")
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_G)
        this.appendValueInput("B")
            .setCheck("Number")
            .appendField(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_B)
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Constants.Neopixel.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.NEOPIXEL_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['neopixel_show'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.NEOPIXEL_SHOW_HELPURL);
        this.setColour(Blockly.Msg.NEOPIXEL_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Neopixel.image, 64, 64))
            .appendField(Blockly.Msg.NEOPIXEL_SHOW);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Constants.Neopixel.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.NEOPIXEL_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};
