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

goog.provide('Blockly.Constants.Rgbled');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Constants.Rgbled.image = './media/rgbled.jpg';

Blockly.Constants.Rgbled.checkBlocks = function (obj) {
    var legal = null;
    var current = obj.type;
    var blocks = obj.workspace.getAllBlocks();
    for (var i = 0; i < blocks.length; i++) {
        if ((blocks[i].type == 'rgbled_setpixelcolor' ||
                blocks[i].type == 'rgbled_custom_setpixelcolor' ||
                blocks[i].type == 'rgbled_show' ||
                blocks[i].type == 'rgbled_setpixelcolor2') &&
            legal == null) {
            if (blocks[i].type != current) legal = true;
            else legal = false;
        }
        if (blocks[i].type == 'rgbled_begin') {
            return true;
        }
    }
    return legal;
};

Blockly.Blocks['rgbled_begin'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.RGBLED_BEGIN_HELPURL);
        this.setColour(Blockly.Msg.RGBLED_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Rgbled.image, 64, 64))
            .appendField(Blockly.Msg.RGBLED_BEGIN_SETTING)
            .appendField(Blockly.Msg.RGBLED_BEGIN_NUM)
            .appendField(new Blockly.FieldTextInput("16"), "NUM")
            .appendField(Blockly.Msg.RGBLED_BEGIN_PIN)
            .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
            .appendField(Blockly.Msg.RGBLED_BEGIN_BRIGHTNESS)
            .appendField(new Blockly.FieldTextInput("50"), "BRIGHTNESS");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.RGBLED_BEGIN_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has been deleted.
            return;
        }
        this.setWarningText(Blockly.Msg.RGBLED_BEGIN_WARNING);
    }
};

Blockly.Blocks['rgbled_setpixelcolor'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.RGBLED_SETPIXELCOLOR_HELPURL);
        this.setColour(Blockly.Msg.RGBLED_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Rgbled.image, 64, 64))
            .appendField(Blockly.Msg.RGBLED_SETPIXELCOLOR_TARGET)
            .appendField(new Blockly.FieldTextInput("0"), "TARGET")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.COLOR)
            .appendField(new Blockly.FieldColour("#00ff00"), "RGB");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.RGBLED_SETPIXELCOLOR_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Constants.Rgbled.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.RGBLED_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['rgbled_setpixelcolor2'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_HELPURL);
        this.setColour(Blockly.Msg.RGBLED_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Rgbled.image, 64, 64));
        this.appendValueInput("TARGET")
            .setCheck("Number")
            .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TARGET);
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.COLOR)
            .appendField(new Blockly.FieldColour("#00ff00"), "RGB");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Constants.Rgbled.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.RGBLED_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['rgbled_custom_setpixelcolor'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_HELPURL);
        this.setColour(Blockly.Msg.RGBLED_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Rgbled.image, 64, 64));
        this.appendValueInput("TARGET")
            .setCheck("Number")
            .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TARGET);
        this.appendValueInput("R")
            .setCheck("Number")
            .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_R);
        this.appendValueInput("G")
            .setCheck("Number")
            .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_G);
        this.appendValueInput("B")
            .setCheck("Number")
            .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_B);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Constants.Rgbled.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.RGBLED_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};

Blockly.Blocks['rgbled_show'] = {
    init: function () {
        this.setHelpUrl(Blockly.Msg.RGBLED_SHOW_HELPURL);
        this.setColour(Blockly.Msg.RGBLED_HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.Constants.Rgbled.image, 64, 64))
            .appendField(Blockly.Msg.RGBLED_SHOW);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.RGBLED_SHOW_TOOLTIP);
    },
    onchange: function () {
        if (!this.workspace) {
            // Block has en deleted.
            return;
        }
        if (!Blockly.Constants.Rgbled.checkBlocks(this)) {
            this.setWarningText(Blockly.Msg.RGBLED_WARNING);
        } else {
            this.setWarningText(null);
        }
    }
};
