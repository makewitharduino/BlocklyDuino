/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License; Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing; software
 * distributed under the License is distributed on an 'AS IS' BASIS;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND; either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author fraser@google.com (Neil Fraser)
 *
 * After modifying this file; either run 'build.py' from the parent directory;
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en;qqq;synonyms}.json.
 *
 * To convert all of the json files to .js files; run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings; the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors; adds
 * them to msg/json/qqq.json; and they show up in the translation console.
 */

/// {{Notranslate}} Hue value for all logic blocks.
Blockly.Msg.LOGIC_HUE = '210';
/// {{Notranslate}} Hue value for all loop blocks.
Blockly.Msg.LOOPS_HUE = '120';
/// {{Notranslate}} Hue value for all math blocks.
Blockly.Msg.MATH_HUE = '230';
/// {{Notranslate}} Hue value for all text blocks.
Blockly.Msg.TEXTS_HUE = '160';
/// {{Notranslate}} Hue value for all list blocks.
Blockly.Msg.LISTS_HUE = '260';
/// {{Notranslate}} Hue value for all colour blocks.
Blockly.Msg.COLOUR_HUE = '20';
/// {{Notranslate}} Hue value for all variable blocks.
Blockly.Msg.VARIABLES_HUE = '330';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.PROCEDURES_HUE = '290';

/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.INOUT_HUE = '230';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.INITIALIZES_HUE = '230';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.TIMES_HUE = '90';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.SERIAL_HUE = '200';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.INTERRUPTS_HUE = '190';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.ADAFRUIT_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.RGBLED_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.NEOPIXEL_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.I2C_MATRIX_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.I2C_SEVENSEG_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.MPR121_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.GROVE_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.GROVE_INPUT_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.GROVE_OUTPUT_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.ROBOT_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.SHIELD_BOT_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.AEROBOT_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.ETHERNET_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.IFTTT_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.M2X_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.BLYNK_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.SERVO_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.ULTRASONIC_HUE = '215';
/// {{Notranslate}} Hue value for all procedure blocks.
Blockly.Msg.OTHERS_HUE = '215';


/// default name - A simple; general default name for a variable; preferably short.
/// For more context; see
/// [[Translating:Blockly#infrequent_message_types]].\n{{Identical|Item}}
Blockly.Msg.VARIABLES_DEFAULT_NAME = 'item';
/// button text - Button that sets a calendar to today's date.\n{{Identical|Today}}
Blockly.Msg.TODAY = 'Today';

// Context menus.
/// context menu - Make a copy of the selected block (and any blocks it contains).\n{{Identical|Duplicate}}
Blockly.Msg.DUPLICATE_BLOCK = 'Duplicate';
/// context menu - Add a descriptive comment to the selected block.
Blockly.Msg.ADD_COMMENT = 'Add Comment';
/// context menu - Remove the descriptive comment from the selected block.
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
/// context menu - Change from 'external' to 'inline' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
/// context menu - Change from 'internal' to 'external' mode for displaying blocks used as inputs to the selected block.  See [[Translating:Blockly#context_menus]].
Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
/// context menu - Permanently delete the selected block.
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
/// context menu - Permanently delete the %1 selected blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
/// confirmation prompt - Question the user if they really wanted to permanently delete all %1 blocks.\n\nParameters:\n* %1 - an integer greater than 1.
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
/// context menu - Reposition all the blocks so that they form a neat line.
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
/// context menu - Make the appearance of the selected block smaller by hiding some information about it.
Blockly.Msg.COLLAPSE_BLOCK = 'Collapse Block';
/// context menu - Make the appearance of all blocks smaller by hiding some information about it.  Use the same terminology as in the previous message.
Blockly.Msg.COLLAPSE_ALL = 'Collapse Blocks';
/// context menu - Restore the appearance of the selected block by showing information about it that was hidden (collapsed) earlier.
Blockly.Msg.EXPAND_BLOCK = 'Expand Block';
/// context menu - Restore the appearance of all blocks by showing information about it that was hidden (collapsed) earlier.  Use the same terminology as in the previous message.
Blockly.Msg.EXPAND_ALL = 'Expand Blocks';
/// context menu - Make the selected block have no effect (unless reenabled).
Blockly.Msg.DISABLE_BLOCK = 'Disable Block';
/// context menu - Make the selected block have effect (after having been disabled earlier).
Blockly.Msg.ENABLE_BLOCK = 'Enable Block';
/// context menu - Provide helpful information about the selected block.\n{{Identical|Help}}
Blockly.Msg.HELP = 'Help';
/// context menu - Undo the previous action.\n{{Identical|Undo}}
Blockly.Msg.UNDO = 'Undo';
/// context menu - Undo the previous undo action.\n{{Identical|Redo}}
Blockly.Msg.REDO = 'Redo';

// Variable renaming.
/// prompt - This message is only seen in the Opera browser.  With most browsers; users can edit numeric values in blocks by just clicking and typing.  Opera does not allows this; so we have to open a new window and prompt users with this message to chanage a value.
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
/// dropdown choice - When the user clicks on a variable block; this is one of the dropdown menu choices.  It is used to rename the current variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.RENAME_VARIABLE = 'Rename variable...';
/// prompt - Prompts the user to enter the new name for the selected variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].\n\nParameters:\n* %1 - the name of the variable to be renamed.
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all '%1' variables to:';

// Variable creation
/// button text - Text on the button used to launch the variable creation dialogue.
Blockly.Msg.NEW_VARIABLE = 'Create variable...';
/// prompt - Prompts the user to enter the name for a new variable.  See [https://github.com/google/blockly/wiki/Variables#dropdown-menu https://github.com/google/blockly/wiki/Variables#dropdown-menu].
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
/// alert - Tells the user that the name they entered is already in use.
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named '%1' already exists.';
/// alert - Tells the user that the name they entered is already in use for another type.
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named '%1' already exists for another variable of type '%2'.';

// Variable deletion.
/// confirm -  Ask the user to confirm their deletion of multiple uses of a variable.
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the '%2' variable?';
/// alert - Tell the user that they can't delete a variable because it's part of the definition of a function.
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable '%1' because it\'s part of the definition of the function '%2'';
/// dropdown choice - Delete the currently selected variable.
Blockly.Msg.DELETE_VARIABLE = 'Delete the '%1' variable';

// Colour Blocks.
/// url - Information about colour.
Blockly.Msg.COLOUR_PICKER_HELPURL = 'https://en.wikipedia.org/wiki/Color';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette https://github.com/google/blockly/wiki/Colour#picking-a-colour-from-a-palette].
Blockly.Msg.COLOUR_PICKER_TOOLTIP = 'Choose a colour from the palette.';
/// url - A link that displays a random colour each time you visit it.
Blockly.Msg.COLOUR_RANDOM_HELPURL = 'http://randomcolour.com';
/// block text - Title of block that generates a colour at random.
Blockly.Msg.COLOUR_RANDOM_TITLE = 'random colour';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#generating-a-random-colour https://github.com/google/blockly/wiki/Colour#generating-a-random-colour].
Blockly.Msg.COLOUR_RANDOM_TOOLTIP = 'Choose a colour at random.';
/// url - A link for color codes with percentages (0-100%) for each component; instead of the more common 0-255; which may be more difficult for beginners.
Blockly.Msg.COLOUR_RGB_HELPURL = 'http://www.december.com/html/spec/colorper.html';
/// block text - Title of block for [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TITLE = 'colour with';
/// block input text - The amount of red (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Red}}
Blockly.Msg.COLOUR_RGB_RED = 'red';
/// block input text - The amount of green (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_GREEN = 'green';
/// block input text - The amount of blue (from 0 to 100) to use when [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].\n{{Identical|Blue}}
Blockly.Msg.COLOUR_RGB_BLUE = 'blue';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components https://github.com/google/blockly/wiki/Colour#creating-a-colour-from-red-green-and-blue-components].
Blockly.Msg.COLOUR_RGB_TOOLTIP = 'Create a colour with the specified amount of red; green; and blue. All values must be between 0 and 100.';
/// url - A useful link that displays blending of two colors.
Blockly.Msg.COLOUR_BLEND_HELPURL = 'http://meyerweb.com/eric/tools/color-blend/';
/// block text - A verb for blending two shades of paint.
Blockly.Msg.COLOUR_BLEND_TITLE = 'blend';
/// block input text - The first of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR1 = 'colour 1';
/// block input text - The second of two colours to [https://github.com/google/blockly/wiki/Colour#blending-colours blend].
Blockly.Msg.COLOUR_BLEND_COLOUR2 = 'colour 2';
/// block input text - The proportion of the [https://github.com/google/blockly/wiki/Colour#blending-colours blend] containing the first color; the remaining proportion is of the second colour.  For example; if the first colour is red and the second color blue; a ratio of 1 would yield pure red; a ratio of .5 would yield purple (equal amounts of red and blue); and a ratio of 0 would yield pure blue.\n{{Identical|Ratio}}
Blockly.Msg.COLOUR_BLEND_RATIO = 'ratio';
/// tooltip - See [https://github.com/google/blockly/wiki/Colour#blending-colours https://github.com/google/blockly/wiki/Colour#blending-colours].
Blockly.Msg.COLOUR_BLEND_TOOLTIP = 'Blends two colours together with a given ratio (0.0 - 1.0).';

// Loop Blocks.
/// url - Describes 'repeat loops' in computer programs; consider using the translation of the page [https://en.wikipedia.org/wiki/Control_flow http://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_REPEAT_HELPURL = 'https://en.wikipedia.org/wiki/For_loop';
/// block input text - Title of [https://github.com/google/blockly/wiki/Loops#repeat repeat block].\n\nParameters:\n* %1 - the number of times the body of the loop should be repeated.
Blockly.Msg.CONTROLS_REPEAT_TITLE = 'repeat %1 times';
/// block text - Preceding the blocks in the body of the loop.  See [https://github.com/google/blockly/wiki/Loops https://github.com/google/blockly/wiki/Loops].\n{{Identical|Do}}
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = 'do';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat https://github.com/google/blockly/wiki/Loops#repeat].
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Do some statements several times.';
/// url - Describes 'while loops' in computer programs; consider using the translation of [https://en.wikipedia.org/wiki/While_loop https://en.wikipedia.org/wiki/While_loop]; if present; or [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow].
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = 'https://github.com/google/blockly/wiki/Loops#repeat';
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-while repeat while] the following condition is true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'repeat while';
/// dropdown - Specifies that a loop should [https://github.com/google/blockly/wiki/Loops#repeat-until repeat until] the following condition becomes true.
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'repeat until';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while https://github.com/google/blockly/wiki/Loops#repeat-while Loops#repeat-while].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'While a value is true; then do some statements.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#repeat-until https://github.com/google/blockly/wiki/Loops#repeat-until].
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'While a value is false; then do some statements.';

/// url - Describes 'for loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/For_loop https://en.wikipedia.org/wiki/For_loop]; if present.
Blockly.Msg.CONTROLS_FOR_HELPURL = 'https://github.com/google/blockly/wiki/Loops#count-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#count-with https://github.com/google/blockly/wiki/Loops#count-with].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOR_TOOLTIP = 'Have the variable '%1' take on the values from the start number to the end number; counting by the specified interval; and do the specified blocks.';
/// block text - Repeatedly counts a variable (%1)
/// starting with a (usually lower) number in a range (%2);
/// ending with a (usually higher) number in a range (%3); and counting the
/// iterations by a number of steps (%4).  As in
/// [https://github.com/google/blockly/wiki/Loops#count-with
/// https://github.com/google/blockly/wiki/Loops#count-with].
/// [[File:Blockly-count-with.png]]
Blockly.Msg.CONTROLS_FOR_TITLE = 'count with %1 from %2 to %3 by %4';
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;

/// url - Describes 'for-each loops' in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Foreach https://en.wikipedia.org/wiki/Foreach] if present.
Blockly.Msg.CONTROLS_FOREACH_HELPURL = 'https://github.com/google/blockly/wiki/Loops#for-each';
/// block text - Title of [https://github.com/google/blockly/wiki/Loops#for-each for each block].
/// Sequentially assigns every item in array %2 to the valiable %1.
Blockly.Msg.CONTROLS_FOREACH_TITLE = 'for each item %1 in list %2';
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
/// block text - Description of [https://github.com/google/blockly/wiki/Loops#for-each for each blocks].\n\nParameters:\n* %1 - the name of the loop variable.
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = 'For each item in a list; set the variable '%1' to the item; and then do some statements.';

/// url - Describes control flow in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Control_flow https://en.wikipedia.org/wiki/Control_flow]; if it exists.
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = 'https://github.com/google/blockly/wiki/Loops#loop-termination-blocks';
/// dropdown - The current loop should be exited.  See [https://github.com/google/blockly/wiki/Loops#break https://github.com/google/blockly/wiki/Loops#break].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out of loop';
/// dropdown - The current iteration of the loop should be ended and the next should begin.  See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continue with next iteration of loop';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#break-out-of-loop https://github.com/google/blockly/wiki/Loops#break-out-of-loop].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Break out of the containing loop.';
/// tooltip - See [https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration https://github.com/google/blockly/wiki/Loops#continue-with-next-iteration].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Skip the rest of this loop; and continue with the next iteration.';
/// warning - The user has tried placing a block outside of a loop (for each; while; repeat; etc.); but this type of block may only be used within a loop.  See [https://github.com/google/blockly/wiki/Loops#loop-termination-blocks https://github.com/google/blockly/wiki/Loops#loop-termination-blocks].
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = 'Warning: This block may only be used within a loop.';

// Logic Blocks.
/// url - Describes conditional statements (if-then-else) in computer programs.  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_else https://en.wikipedia.org/wiki/If_else]; if present.
Blockly.Msg.CONTROLS_IF_HELPURL = 'https://github.com/google/blockly/wiki/IfElse';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-blocks 'if' blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement]; if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = 'If a value is true; then do some statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-blocks if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement]; if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = 'If a value is true; then do the first block of statements. Otherwise; do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-blocks if-else-if blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement]; if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = 'If the first value is true; then do the first block of statements. Otherwise; if the second value is true; do the second block of statements.';
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#if-else-if-else-blocks if-else-if-else blocks].  Consider using your language's translation of [https://en.wikipedia.org/wiki/If_statement https://en.wikipedia.org/wiki/If_statement]; if present.
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = 'If the first value is true; then do the first block of statements. Otherwise; if the second value is true; do the second block of statements. If none of the values are true; do the last block of statements.';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].
/// It is recommended; but not essential; that this have text in common with the translation of 'else if'\n{{Identical|If}}
Blockly.Msg.CONTROLS_IF_MSG_IF = 'if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English words 'otherwise if' would probably be clearer than 'else if'; but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = 'else if';
/// block text - See [https://github.com/google/blockly/wiki/IfElse https://github.com/google/blockly/wiki/IfElse].  The English word 'otherwise' would probably be superior to 'else'; but the latter is used because it is traditional and shorter.
Blockly.Msg.CONTROLS_IF_MSG_ELSE = 'else';
Blockly.Msg.CONTROLS_IF_MSG_THEN = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
/// tooltip - Describes [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = 'Add; remove; or reorder sections to reconfigure this if block.';
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
/// tooltip - Describes the 'else if' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = 'Add a condition to the if block.';
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
/// tooltip - Describes the 'else' subblock during [https://github.com/google/blockly/wiki/IfElse#block-modification if block modification].
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = 'Add a final; catch-all condition to the if block.';

/// button text - Text on a button inside a dialogue window; which will accept or acknowledge the contents of the dialogue when pressed.\n{{Identical|OK}}
Blockly.Msg.IOS_OK = 'OK';
/// button text - Text on a button inside a dialogue window; which will close or cancel the dialogue when pressed.\n{{Identical|Cancel}}
Blockly.Msg.IOS_CANCEL = 'Cancel';
/// alert - Title text for an error dialogue.\n{{Identical|Error}}
Blockly.Msg.IOS_ERROR = 'Error';
/// header text - Title of a section that displays a list of parameters (aka. 'inputs') that have been defined for a procedure. This is used inside a dialogue window to configure a procedure.\n{{Identical|Input}}
Blockly.Msg.IOS_PROCEDURES_INPUTS = 'INPUTS';
/// button text - Text on a button which will add a parameter (aka. 'input') to a procedure. This is used inside a dialogue window to configure a procedure. NOTE: The '+' should be preserved at the beginning of the text.
Blockly.Msg.IOS_PROCEDURES_ADD_INPUT = '+ Add Input';
/// option text - Text describing an option to allow statements to be added within a procedure. This is used inside a dialogue window to configure a procedure.
Blockly.Msg.IOS_PROCEDURES_ALLOW_STATEMENTS = 'Allow statements';
/// alert - Error message when duplicate parameters (aka. 'inputs') have been defined on a procedure. This is used inside a dialogue window to configure procedure parameters.
Blockly.Msg.IOS_PROCEDURES_DUPLICATE_INPUTS_ERROR = 'This function has duplicate inputs.';
/// button text - Text on a button which will open a variable creation dialogue when pressed. NOTE: The '+' should be preserved at the beginning of the text.
Blockly.Msg.IOS_VARIABLES_ADD_VARIABLE = '+ Add Variable';
/// button text - Text on a button inside a variable creation dialogue; which will add a variable when pressed.\n{{Identical|Add}}
Blockly.Msg.IOS_VARIABLES_ADD_BUTTON = 'Add';
/// button text - Text on a button inside a variable rename dialogue; which will rename a variable when pressed.\n{{Identical|Rename}}
Blockly.Msg.IOS_VARIABLES_RENAME_BUTTON = 'Rename';
/// button text - Text on a button inside a variable deletion dialogue; which will delete a variable when pressed.\n{{Identical|Delete}}
Blockly.Msg.IOS_VARIABLES_DELETE_BUTTON = 'Delete';
/// placeholder text - Placeholder text used inside a text input; where a variable name should be entered.
Blockly.Msg.IOS_VARIABLES_VARIABLE_NAME = 'Variable name';
/// alert - Error message that is displayed when the user attempts to create a variable without a name.
Blockly.Msg.IOS_VARIABLES_EMPTY_NAME_ERROR = 'You can\'t use an empty variable name.';

/// url - Information about comparisons.
Blockly.Msg.LOGIC_COMPARE_HELPURL = 'https://en.wikipedia.org/wiki/Inequality_(mathematics)';
/// tooltip - Describes the equals (=) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = 'Return true if both inputs equal each other.';
/// tooltip - Describes the not equals (≠) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = 'Return true if both inputs are not equal to each other.';
/// tooltip - Describes the less than (<) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = 'Return true if the first input is smaller than the second input.';
/// tooltip - Describes the less than or equals (≤) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = 'Return true if the first input is smaller than or equal to the second input.';
/// tooltip - Describes the greater than (>) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = 'Return true if the first input is greater than the second input.';
/// tooltip - Describes the greater than or equals (≥) block.
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = 'Return true if the first input is greater than or equal to the second input.';

/// url - Information about the Boolean conjunction ('and') and disjunction ('or') operators.  Consider using the translation of [https://en.wikipedia.org/wiki/Boolean_logic https://en.wikipedia.org/wiki/Boolean_logic]; if it exists in your language.
Blockly.Msg.LOGIC_OPERATION_HELPURL = 'https://github.com/google/blockly/wiki/Logic#logical-operations';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = 'Return true if both inputs are true.';
/// block text - See [https://en.wikipedia.org/wiki/Logical_conjunction https://en.wikipedia.org/wiki/Logical_conjunction].\n{{Identical|And}}
Blockly.Msg.LOGIC_OPERATION_AND = 'and';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = 'Return true if at least one of the inputs is true.';
/// block text - See [https://en.wikipedia.org/wiki/Disjunction https://en.wikipedia.org/wiki/Disjunction].\n{{Identical|Or}}
Blockly.Msg.LOGIC_OPERATION_OR = 'or';

/// url - Information about logical negation.  The translation of [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation] is recommended if it exists in the target language.
Blockly.Msg.LOGIC_NEGATE_HELPURL = 'https://github.com/google/blockly/wiki/Logic#not';
/// block text - This is a unary operator that returns ''false'' when the input is ''true''; and ''true'' when the input is ''false''.
/// \n\nParameters:\n* %1 - the input (which should be either the value 'true' or 'false')
Blockly.Msg.LOGIC_NEGATE_TITLE = 'not %1';
/// tooltip - See [https://en.wikipedia.org/wiki/Logical_negation https://en.wikipedia.org/wiki/Logical_negation].
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = 'Returns true if the input is false. Returns false if the input is true.';

/// url - Information about the logic values ''true'' and ''false''.  Consider using the translation of [https://en.wikipedia.org/wiki/Truth_value https://en.wikipedia.org/wiki/Truth_value] if it exists in your language.
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = 'https://github.com/google/blockly/wiki/Logic#values';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''true''.\n{{Identical|True}}
Blockly.Msg.LOGIC_BOOLEAN_TRUE = 'true';
/// block text - The word for the [https://en.wikipedia.org/wiki/Truth_value logical value] ''false''.\n{{Identical|False}}
Blockly.Msg.LOGIC_BOOLEAN_FALSE = 'false';
/// tooltip - Indicates that the block returns either of the two possible [https://en.wikipedia.org/wiki/Truth_value logical values].
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = 'Returns either true or false.';

/// url - Provide a link to the translation of [https://en.wikipedia.org/wiki/Nullable_type https://en.wikipedia.org/wiki/Nullable_type]; if it exists in your language; otherwise; do not worry about translating this advanced concept.
Blockly.Msg.LOGIC_NULL_HELPURL = 'https://en.wikipedia.org/wiki/Nullable_type';
/// block text - In computer languages; ''null'' is a special value that indicates that no value has been set.  You may use your language's word for 'nothing' or 'invalid'.\n{{Identical|Null}}
Blockly.Msg.LOGIC_NULL = 'null';
/// tooltip - This should use the word from the previous message.
Blockly.Msg.LOGIC_NULL_TOOLTIP = 'Returns null.';

/// url - Describes the programming language operator known as the ''ternary'' or ''conditional'' operator.  It is recommended that you use the translation of [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:] if it exists.
Blockly.Msg.LOGIC_TERNARY_HELPURL = 'https://en.wikipedia.org/wiki/%3F:';
/// block input text - Label for the input whose value determines which of the other two inputs is returned.  In some programming languages; this is called a ''''predicate''''.
Blockly.Msg.LOGIC_TERNARY_CONDITION = 'test';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is true.  Remember to try to keep block text terse (short).
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = 'if true';
/// block input text - Indicates that the following input should be returned (used as output) if the test input is false.
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = 'if false';
/// tooltip - See [https://en.wikipedia.org/wiki/%3F: https://en.wikipedia.org/wiki/%3F:].
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = 'Check the condition in 'test'. If the condition is true; returns the 'if true' value; otherwise returns the 'if false' value.';

// Math Blocks.
/// url - Information about (real) numbers.
Blockly.Msg.MATH_NUMBER_HELPURL = 'https://en.wikipedia.org/wiki/Number';
/// tooltip - Any positive or negative number; not necessarily an integer.
Blockly.Msg.MATH_NUMBER_TOOLTIP = 'A number.';

/// {{optional}}\nmath - The symbol for the binary operation addition.
Blockly.Msg.MATH_ADDITION_SYMBOL = '+';
/// {{optional}}\nmath - The symbol for the binary operation indicating that the right operand should be
/// subtracted from the left operand.
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = '-';
/// {{optional}}\nmath - The binary operation indicating that the left operand should be divided by
/// the right operand.
Blockly.Msg.MATH_DIVISION_SYMBOL = '÷';
/// {{optional}}\nmath - The symbol for the binary operation multiplication.
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = '×';
/// {{optional}}\nmath - The symbol for the binary operation exponentiation.  Specifically; if the
/// value of the left operand is L and the value of the right operand (the exponent) is
/// R; multiply L by itself R times.  (Fractional and negative exponents are also legal.)
Blockly.Msg.MATH_POWER_SYMBOL = '^';

/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_SIN = 'sin';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_COS = 'cos';
/// math - The short name of the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_TAN = 'tan';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine].
Blockly.Msg.MATH_TRIG_ASIN = 'asin';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine].
Blockly.Msg.MATH_TRIG_ACOS = 'acos';
/// math - The short name of the ''inverse of'' the trigonometric function
/// [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent].
Blockly.Msg.MATH_TRIG_ATAN = 'atan';

/// url - Information about addition; subtraction; multiplication; division; and exponentiation.
Blockly.Msg.MATH_ARITHMETIC_HELPURL = 'https://en.wikipedia.org/wiki/Arithmetic';
/// tooltip - See [https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = 'Return the sum of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Subtraction https://en.wikipedia.org/wiki/Subtraction].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = 'Return the difference of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Multiplication https://en.wikipedia.org/wiki/Multiplication].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Return the product of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Division_(mathematics) https://en.wikipedia.org/wiki/Division_(mathematics)].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Return the quotient of the two numbers.';
/// tooltip - See [https://en.wikipedia.org/wiki/Exponentiation https://en.wikipedia.org/wiki/Exponentiation].
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = 'Return the first number raised to the power of the second number.';

/// url - Information about the square root operation.
Blockly.Msg.MATH_SINGLE_HELPURL = 'https://en.wikipedia.org/wiki/Square_root';
/// dropdown - This computes the positive [https://en.wikipedia.org/wiki/Square_root square root] of its input.  For example; the square root of 16 is 4.
Blockly.Msg.MATH_SINGLE_OP_ROOT = 'square root';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = 'Return the square root of a number.';
/// dropdown - This leaves positive numeric inputs changed and inverts negative inputs.  For example; the absolute value of 5 is 5; the absolute value of -5 is also 5.  For more information; see [https://en.wikipedia.org/wiki/Absolute_value https://en.wikipedia.org/wiki/Absolute_value].
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = 'absolute';
/// tooltip - Please use the same term as in the previous message.
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = 'Return the absolute value of a number.';

/// tooltip - Calculates '''0-n'''; where '''n''' is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = 'Return the negation of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Natural_logarithm|natural logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = 'Return the natural logarithm of a number.';
/// tooltip - Calculates the [https://en.wikipedia.org/wiki/Common_logarithm common logarithm] of its single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = 'Return the base 10 logarithm of a number.';
/// tooltip - Multiplies [https://en.wikipedia.org/wiki/E_(mathematical_constant) e] by itself n times; where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = 'Return e to the power of a number.';
/// tooltip - Multiplies 10 by itself n times; where n is the single numeric input.
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';

/// url - Information about the trigonometric functions sine; cosine; tangent; and their inverses (ideally using degrees; not radians).
Blockly.Msg.MATH_TRIG_HELPURL = 'https://en.wikipedia.org/wiki/Trigonometric_functions';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent sine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees]; not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = 'Return the sine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent cosine] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees]; not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = 'Return the cosine of a degree (not radian).';
/// tooltip - Return the [https://en.wikipedia.org/wiki/Trigonometric_functions#Sine.2C_cosine_and_tangent tangent] of an [https://en.wikipedia.org/wiki/Degree_(angle) angle in degrees]; not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = 'Return the tangent of a degree (not radian).';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent sine function]; using [https://en.wikipedia.org/wiki/Degree_(angle) degrees]; not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = 'Return the arcsine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent cosine] function; using [https://en.wikipedia.org/wiki/Degree_(angle) degrees]; not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = 'Return the arccosine of a number.';
/// tooltip - The [https://en.wikipedia.org/wiki/Inverse_trigonometric_functions inverse] of the [https://en.wikipedia.org/wiki/Cosine#Sine.2C_cosine_and_tangent tangent] function; using [https://en.wikipedia.org/wiki/Degree_(angle) degrees]; not radians.
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = 'Return the arctangent of a number.';

/// url - Information about the mathematical constants Pi (π); e; the golden ratio (φ); √ 2; √ 1/2; and infinity (∞).
Blockly.Msg.MATH_CONSTANT_HELPURL = 'https://en.wikipedia.org/wiki/Mathematical_constant';
/// tooltip - Provides the specified [https://en.wikipedia.org/wiki/Mathematical_constant mathematical constant].
Blockly.Msg.MATH_CONSTANT_TOOLTIP = 'Return one of the common constants: π (3.141…); e (2.718…); φ (1.618…); sqrt(2) (1.414…); sqrt(½) (0.707…); or ∞ (infinity).';
/// dropdown - A number is '''even''' if it is a multiple of 2.  For example; 4 is even (yielding true); but 3 is not (false).
Blockly.Msg.MATH_IS_EVEN = 'is even';
/// dropdown - A number is '''odd''' if it is not a multiple of 2.  For example; 3 is odd (yielding true); but 4 is not (false).  The opposite of 'odd' is 'even'.
Blockly.Msg.MATH_IS_ODD = 'is odd';
/// dropdown - A number is [https://en.wikipedia.org/wiki/Prime prime] if it cannot be evenly divided by any positive integers except for 1 and itself.  For example; 5 is prime; but 6 is not because 2 × 3 = 6.
Blockly.Msg.MATH_IS_PRIME = 'is prime';
/// dropdown - A number is '''whole''' if it is an [https://en.wikipedia.org/wiki/Integer integer].  For example; 5 is whole; but 5.1 is not.
Blockly.Msg.MATH_IS_WHOLE = 'is whole';
/// dropdown - A number is '''positive''' if it is greater than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_POSITIVE = 'is positive';
/// dropdown - A number is '''negative''' if it is less than 0.  (0 is neither negative nor positive.)
Blockly.Msg.MATH_IS_NEGATIVE = 'is negative';
/// dropdown - A number x is divisible by y if y goes into x evenly.  For example; 10 is divisible by 5; but 10 is not divisible by 3.
Blockly.Msg.MATH_IS_DIVISIBLE_BY = 'is divisible by';
/// tooltip - This block lets the user specify via a dropdown menu whether to check if the numeric input is even; odd; prime; whole; positive; negative; or divisible by a given value.
Blockly.Msg.MATH_IS_TOOLTIP = 'Check if a number is an even; odd; prime; whole; positive; negative; or if it is divisible by certain number. Returns true or false.';

/// url - Information about incrementing (increasing the value of) a variable.
/// For other languages; just use the translation of the Wikipedia page about
/// addition ([https://en.wikipedia.org/wiki/Addition https://en.wikipedia.org/wiki/Addition]).
Blockly.Msg.MATH_CHANGE_HELPURL = 'https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter';
/// - As in: ''change'' [the value of variable] ''item'' ''by'' 1 (e.g.; if the variable named 'item' had the value 5; change it to 6).
/// %1 is a variable name.
/// %2 is the amount of change.
Blockly.Msg.MATH_CHANGE_TITLE = 'change %1 by %2';
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - This updates the value of the variable by adding to it the following numeric input.\n\nParameters:\n* %1 - the name of the variable whose value should be increased.
Blockly.Msg.MATH_CHANGE_TOOLTIP = 'Add a number to variable '%1'.';

/// url - Information about how numbers are rounded to the nearest integer
Blockly.Msg.MATH_ROUND_HELPURL = 'https://en.wikipedia.org/wiki/Rounding';
/// tooltip - See [https://en.wikipedia.org/wiki/Rounding https://en.wikipedia.org/wiki/Rounding].
Blockly.Msg.MATH_ROUND_TOOLTIP = 'Round a number up or down.';
/// dropdown - This rounds its input to the nearest whole number.  For example; 3.4 is rounded to 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = 'round';
/// dropdown - This rounds its input up to the nearest whole number.  For example; if the input was 2.2; the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = 'round up';
/// dropdown - This rounds its input down to the nearest whole number.  For example; if the input was 3.8; the result would be 3.
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = 'round down';

/// url - Information about applying a function to a list of numbers.  (We were unable to find such information in English.  Feel free to skip this and any other URLs that are difficult.)
Blockly.Msg.MATH_ONLIST_HELPURL = '';
/// dropdown - This computes the sum of the numeric elements in the list.  For example; the sum of the list {1; 4} is 5.
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = 'sum of list';
/// tooltip - Please use the same term for 'sum' as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = 'Return the sum of all the numbers in the list.';
/// dropdown - This finds the smallest (minimum) number in a list.  For example; the smallest number in the list [-5; 0; 3] is -5.
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = 'min of list';
/// tooltip - Please use the same term for 'min' or 'minimum' as in the previous message.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = 'Return the smallest number in the list.';
/// dropdown - This finds the largest (maximum) number in a list.  For example; the largest number in the list [-5; 0; 3] is 3.
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = 'max of list';
/// tooltip
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = 'Return the largest number in the list.';
/// dropdown - This adds up all of the numbers in a list and divides the sum by the number of elements in the list.  For example; the [https://en.wikipedia.org/wiki/Arithmetic_mean average] of the list [1; 2; 3; 4] is 2.5 (10/4).
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = 'average of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Arithmetic_mean https://en.wikipedia.org/wiki/Arithmetic_mean] for more informatin.
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = 'Return the average (arithmetic mean) of the numeric values in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Median median] of the numeric values in a list.  For example; the median of the list {1; 2; 7; 12; 13} is 7.
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = 'median of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Median median https://en.wikipedia.org/wiki/Median median] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = 'Return the median number in the list.';
/// dropdown - This finds the most common numbers ([https://en.wikipedia.org/wiki/Mode_(statistics) modes]) in a list.  For example; the modes of the list {1; 3; 9; 3; 9}  are {3; 9}.
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = 'modes of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Mode_(statistics) https://en.wikipedia.org/wiki/Mode_(statistics)] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = 'Return a list of the most common item(s) in the list.';
/// dropdown - This finds the [https://en.wikipedia.org/wiki/Standard_deviation standard deviation] of the numeric values in a list.
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = 'standard deviation of list';
/// tooltip - See [https://en.wikipedia.org/wiki/Standard_deviation https://en.wikipedia.org/wiki/Standard_deviation] for more information.
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = 'Return the standard deviation of the list.';
/// dropdown - This choose an element at random from a list.  Each element is chosen with equal probability.
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = 'random item of list';
/// tooltip - Please use same term for 'random' as in previous entry.
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = 'Return a random element from the list.';

/// url - information about the modulo (remainder) operation.
Blockly.Msg.MATH_MODULO_HELPURL = 'https://en.wikipedia.org/wiki/Modulo_operation';
/// block text - Title of block providing the remainder when dividing the first numerical input by the second.  For example; the remainder of 10 divided by 3 is 1.\n\nParameters:\n* %1 - the dividend (10; in our example)\n* %2 - the divisor (3 in our example).
Blockly.Msg.MATH_MODULO_TITLE = 'remainder of %1 ÷ %2';
/// tooltip - For example; the remainder of 10 divided by 3 is 1.
Blockly.Msg.MATH_MODULO_TOOLTIP = 'Return the remainder from dividing the two numbers.';

/// url - Information about constraining a numeric value to be in a specific range.  (The English URL is not ideal.  Recall that translating URLs is the lowest priority.)
Blockly.Msg.MATH_CONSTRAIN_HELPURL = 'https://en.wikipedia.org/wiki/Clamping_(graphics)';
/// block text - The title of the block that '''constrain'''s (forces) a number to be in a given range.
///For example; if the number 150 is constrained to be between 5 and 100; the result will be 100.
///\n\nParameters:\n* %1 - the value to constrain (e.g.; 150)\n* %2 - the minimum value (e.g.; 5)\n* %3 - the maximum value (e.g.; 100).
Blockly.Msg.MATH_CONSTRAIN_TITLE = 'constrain %1 low %2 high %3';
/// tooltip - This compares a number ''x'' to a low value ''L'' and a high value ''H''.  If ''x'' is less then ''L''; the result is ''L''.  If ''x'' is greater than ''H''; the result is ''H''.  Otherwise; the result is ''x''.
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = 'Constrain a number to be between the specified limits (inclusive).';

/// url - Information about how computers generate random numbers.
Blockly.Msg.MATH_RANDOM_INT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random integer (whole number) in the specified range.  For example; if the range is from 5 to 7; this returns 5; 6; or 7 with equal likelihood. %1 is a placeholder for the lower number; %2 is the placeholder for the larger number.
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'random integer from %1 to %2';
/// tooltip - Return a random integer between two values specified as inputs.  For example; if one input was 7 and another 9; any of the numbers 7; 8; or 9 could be produced.
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = 'Return a random integer between the two specified limits; inclusive.';

/// url - Information about how computers generate random numbers (specifically; numbers in the range from 0 to just below 1).
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = 'https://en.wikipedia.org/wiki/Random_number_generation';
/// block text - The title of the block that generates a random number greater than or equal to 0 and less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = 'random fraction';
/// tooltip - Return a random fraction between 0 and 1.  The value may be equal to 0 but must be less than 1.
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = 'Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).';

// Text Blocks.
/// url - Information about how computers represent text (sometimes referred to as ''string''s).
Blockly.Msg.TEXT_TEXT_HELPURL = 'https://en.wikipedia.org/wiki/String_(computer_science)';
/// tooltip - See [https://github.com/google/blockly/wiki/Text https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_TEXT_TOOLTIP = 'A letter; word; or line of text.';

/// url - Information on concatenating/appending pieces of text.
Blockly.Msg.TEXT_JOIN_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-creation';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation].
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = 'create text with';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation create text with] for more information.
Blockly.Msg.TEXT_JOIN_TOOLTIP = 'Create a piece of text by joining together any number of items.';

/// block text - This is shown when the programmer wants to change the number of pieces of text being joined together.  See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation]; specifically the last picture in the 'Text creation' section.\n{{Identical|Join}}
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = 'join';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation]; specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = 'Add; remove; or reorder sections to reconfigure this text block.';
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// block text - See [https://github.com/google/blockly/wiki/Text#text-creation https://github.com/google/blockly/wiki/Text#text-creation]; specifically the last picture in the 'Text creation' section.
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = 'Add an item to the text.';

/// url - This and the other text-related URLs are going to be hard to translate.  As always; it is okay to leave untranslated or paste in the English-language URL.  For these URLs; you might also consider a general URL about how computers represent text (such as the translation of [https://en.wikipedia.org/wiki/String_(computer_science) this Wikipedia page]).
Blockly.Msg.TEXT_APPEND_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block input text - Message that the variable name at %1 will have the item at %2 appended to it.
/// [[File:blockly-append-text.png]]
Blockly.Msg.TEXT_APPEND_TITLE = 'to %1 append text %2';
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-modification https://github.com/google/blockly/wiki/Text#text-modification] for more information.\n\nParameters:\n* %1 - the name of the variable to which text should be appended
Blockly.Msg.TEXT_APPEND_TOOLTIP = 'Append some text to variable '%1'.';

/// url - Information about text on computers (usually referred to as 'strings').
Blockly.Msg.TEXT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Text#text-modification';
/// block text - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
/// \n\nParameters:\n* %1 - the piece of text to take the length of
Blockly.Msg.TEXT_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#text-length https://github.com/google/blockly/wiki/Text#text-length].
Blockly.Msg.TEXT_LENGTH_TOOLTIP = 'Returns the number of letters (including spaces) in the provided text.';

/// url - Information about empty pieces of text on computers (usually referred to as 'empty strings').
Blockly.Msg.TEXT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Text#checking-for-empty-text';
/// block text - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
/// \n\nParameters:\n* %1 - the piece of text to test for emptiness
Blockly.Msg.TEXT_ISEMPTY_TITLE = '%1 is empty';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#checking-for-empty-text https://github.com/google/blockly/wiki/Text#checking-for-empty-text].
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = 'Returns true if the provided text is empty.';

/// url - Information about finding a character in a piece of text.
Blockly.Msg.TEXT_INDEXOF_HELPURL = 'https://github.com/google/blockly/wiki/Text#finding-text';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode. See [https://github.com/google/blockly/wiki/Text#finding-text https://github.com/google/blockly/wiki/Text#finding-text].
Blockly.Msg.TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.';
/// block text - Title of blocks allowing users to find text.  See
/// [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
/// In English the expanded message is 'in text %1 find (first|last) occurance of text %3'
/// where %1 and %3 are added by the user. See TEXT_INDEXOF_OPERATOR_FIRST and
/// TEXT_INDEXOF_OPERATOR_LAST for the dropdown text that replaces %2.
Blockly.Msg.TEXT_INDEXOF_TITLE = 'in text %1 %2 %3';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_FIRST = 'find first occurrence of text';
/// dropdown - See [https://github.com/google/blockly/wiki/Text#finding-text
/// https://github.com/google/blockly/wiki/Text#finding-text].  This would
/// replace 'find first occurrence of text' below.  (For more information on
/// how common text is factored out of dropdown menus; see
/// [https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus
/// https://translatewiki.net/wiki/Translating:Blockly#Drop-Down_Menus)].)
/// [[File:Blockly-find-text.png]].
Blockly.Msg.TEXT_INDEXOF_OPERATOR_LAST = 'find last occurrence of text';

/// url - Information about extracting characters (letters; number; symbols; etc.) from text.
Blockly.Msg.TEXT_CHARAT_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-text';
/// block text - Text for a block to extract a letter (or number;
/// punctuation character; etc.) from a string; as shown below. %1 is added by
/// the user and %2 is replaced by a dropdown of options; possibly followed by
/// another user supplied string. TEXT_CHARAT_TAIL is then added to the end.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TITLE = 'in text %1 %2'
/// dropdown - Indicates that the letter (or number; punctuation character; etc.) with the
/// specified index should be obtained from the preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_START = 'get letter #';
/// block text - Indicates that the letter (or number; punctuation character; etc.) with the
/// specified index from the end of a given piece of text should be obtained. See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FROM_END = 'get letter # from end';
/// block text - Indicates that the first letter of the following piece of text should be
/// retrieved.  See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_FIRST = 'get first letter';
/// block text - Indicates that the last letter (or number; punctuation mark; etc.) of the
/// following piece of text should be retrieved.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_LAST = 'get last letter';
/// block text - Indicates that any letter (or number; punctuation mark; etc.) in the
/// following piece of text should be randomly selected.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_RANDOM = 'get random letter';
/// block text - Text that goes after the rightmost block/dropdown when getting a single letter from
/// a piece of text; as in [https://blockly-demo.appspot.com/static/apps/code/index.html#3m23km these
/// blocks] or shown below.  For most languages; this will be blank.
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#extracting-a-single-character
/// https://github.com/google/blockly/wiki/Text#extracting-a-single-character].
/// [[File:Blockly-text-get.png]]
Blockly.Msg.TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';

/// See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
Blockly.Msg.TEXT_GET_SUBSTRING_TOOLTIP = 'Returns a specified portion of the text.';
/// url - Information about extracting characters from text.  Reminder: urls are the
/// lowest priority translations.  Feel free to skip.
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = 'https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text';
/// block text - Precedes a piece of text from which a portion should be extracted.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = 'in text';
/// dropdown - Indicates that the following number specifies the position (relative to the start
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_START = 'get substring from letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the end
/// position) of the beginning of the region of text that should be obtained from the preceding
/// piece of text.  See [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined; it will
/// automatically appear ''after'' this and any other
/// [https://translatewiki.net/wiki/Translating:Blockly#Ordinal_numbers ordinal numbers]
/// on this block.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FROM_END = 'get substring from letter # from end';
/// block text - Indicates that a region starting with the first letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_START_FIRST = 'get substring from first letter';
/// dropdown - Indicates that the following number specifies the position (relative to
/// the start position) of the end of the region of text that should be obtained from the
/// preceding piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_START = 'to letter #';
/// dropdown - Indicates that the following number specifies the position (relative to the
/// end position) of the end of the region of text that should be obtained from the preceding
/// piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_FROM_END = 'to letter # from end';
/// block text - Indicates that a region ending with the last letter of the preceding piece
/// of text should be extracted.  See
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text].
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_END_LAST = 'to last letter';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text
/// extracting a region of text].  In most languages; this will be the empty string.
/// [[File:Blockly-get-substring.png]]
Blockly.Msg.TEXT_GET_SUBSTRING_TAIL = '';

/// url - Information about the case of letters (upper-case and lower-case).
Blockly.Msg.TEXT_CHANGECASE_HELPURL = 'https://github.com/google/blockly/wiki/Text#adjusting-text-case';
/// tooltip - Describes a block to adjust the case of letters.  For more information on this block;
/// see [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_TOOLTIP = 'Return a copy of the text in a different case.';
/// block text - Indicates that all of the letters in the following piece of text should be
/// capitalized.  If your language does not use case; you may indicate that this is not
/// applicable to your language.  For more information on this block; see
/// [https://github.com/google/blockly/wiki/Text#adjusting-text-case
/// https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'to UPPER CASE';
/// block text - Indicates that all of the letters in the following piece of text should be converted to lower-case.  If your language does not use case; you may indicate that this is not applicable to your language.  For more information on this block; see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE = 'to lower case';
/// block text - Indicates that the first letter of each of the following words should be capitalized and the rest converted to lower-case.  If your language does not use case; you may indicate that this is not applicable to your language.  For more information on this block; see [https://github.com/google/blockly/wiki/Text#adjusting-text-case https://github.com/google/blockly/wiki/Text#adjusting-text-case].
Blockly.Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE = 'to Title Case';

/// url - Information about trimming (removing) text off the beginning and ends of pieces of text.
Blockly.Msg.TEXT_TRIM_HELPURL = 'https://github.com/google/blockly/wiki/Text#trimming-removing-spaces';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
Blockly.Msg.TEXT_TRIM_TOOLTIP = 'Return a copy of the text with spaces removed from one or both ends.';
/// dropdown - Removes spaces from the beginning and end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].  Note that neither
/// this nor the other options modify the original piece of text (that follows);
/// the block just returns a version of the text without the specified spaces.
Blockly.Msg.TEXT_TRIM_OPERATOR_BOTH = 'trim spaces from both sides of';
/// dropdown - Removes spaces from the beginning of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts; this will remove spaces from the right side.
Blockly.Msg.TEXT_TRIM_OPERATOR_LEFT = 'trim spaces from left side of';
/// dropdown - Removes spaces from the end of a piece of text.  See
/// [https://github.com/google/blockly/wiki/Text#trimming-removing-spaces
/// https://github.com/google/blockly/wiki/Text#trimming-removing-spaces].
/// Note that in right-to-left scripts; this will remove spaces from the left side.
Blockly.Msg.TEXT_TRIM_OPERATOR_RIGHT = 'trim spaces from right side of';

/// url - Information about displaying text on computers.
Blockly.Msg.TEXT_PRINT_HELPURL = 'https://github.com/google/blockly/wiki/Text#printing-text';
/// block text - Display the input on the screen.  See
/// [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
/// \n\nParameters:\n* %1 - the value to print
Blockly.Msg.TEXT_PRINT_TITLE = 'print %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PRINT_TOOLTIP = 'Print the specified text; number or other value.';
/// url - Information about getting text from users.
Blockly.Msg.TEXT_PROMPT_HELPURL = 'https://github.com/google/blockly/wiki/Text#getting-input-from-the-user';
/// dropdown - Specifies that a piece of text should be requested from the user with
/// the following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_TEXT = 'prompt for text with message';
/// dropdown - Specifies that a number should be requested from the user with the
/// following message.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TYPE_NUMBER = 'prompt for number with message';
/// dropdown - Precedes the message with which the user should be prompted for
/// a number.  See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_NUMBER = 'Prompt for user for a number.';
/// dropdown - Precedes the message with which the user should be prompted for some text.
/// See [https://github.com/google/blockly/wiki/Text#printing-text
/// https://github.com/google/blockly/wiki/Text#printing-text].
Blockly.Msg.TEXT_PROMPT_TOOLTIP_TEXT = 'Prompt for user for some text.';

/// block text - Title of a block that counts the number of instances of
/// a smaller pattern (%1) inside a longer string (%2).
Blockly.Msg.TEXT_COUNT_MESSAGE0 = 'count %1 in %2';
/// url - Information about counting how many times a string appears in another string.
Blockly.Msg.TEXT_COUNT_HELPURL = 'https://github.com/google/blockly/wiki/Text#counting-substrings';
/// tooltip - Short description of a block that counts how many times some text occurs within some other text.
Blockly.Msg.TEXT_COUNT_TOOLTIP = 'Count how many times some text occurs within some other text.';

/// block text - Title of a block that returns a copy of text (%3) with all
/// instances of some smaller text (%1) replaced with other text (%2).
Blockly.Msg.TEXT_REPLACE_MESSAGE0 = 'replace %1 with %2 in %3';
/// url - Information about replacing each copy text (or string; in computer lingo) with other text.
Blockly.Msg.TEXT_REPLACE_HELPURL = 'https://github.com/google/blockly/wiki/Text#replacing-substrings';
/// tooltip - Short description of a block that replaces copies of text in a large text with other text.
Blockly.Msg.TEXT_REPLACE_TOOLTIP = 'Replace all occurances of some text within some other text.';

/// block text - Title of block that returns a copy of text (%1) with the order
/// of letters and characters reversed.
Blockly.Msg.TEXT_REVERSE_MESSAGE0 = 'reverse %1';
/// url - Information about reversing a letters/characters in text.
Blockly.Msg.TEXT_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Text#reversing-text';
/// tooltip - See [https://github.com/google/blockly/wiki/Text].
Blockly.Msg.TEXT_REVERSE_TOOLTIP = 'Reverses the order of the characters in the text.';

// Lists Blocks.
/// url - Information on empty lists.
Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = 'create empty list';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-list https://github.com/google/blockly/wiki/Lists#create-empty-list].
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list; of length 0; containing no data records';

/// url - Information on building lists.
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = 'Create a list with any number of items.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with https://github.com/google/blockly/wiki/Lists#create-list-with].
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = 'create list with';
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create list with'''' block].\n{{Identical|List}}
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'list';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Add; remove; or reorder sections to reconfigure this list block.';
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the list.';

/// url - Information about [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-list-with';
/// url - See [https://github.com/google/blockly/wiki/Lists#create-list-with creating a list with multiple copies of a single item].
Blockly.Msg.LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value repeated the specified number of times.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-list-with
/// https://github.com/google/blockly/wiki/Lists#create-list-with].
///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
Blockly.Msg.LISTS_REPEAT_TITLE = 'create list with item %1 repeated %2 times';

/// url - Information about how the length of a list is computed (i.e.; by the total number of elements; not the number of different elements).
Blockly.Msg.LISTS_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the list whose length is desired
Blockly.Msg.LISTS_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.LISTS_LENGTH_TOOLTIP = 'Returns the length of a list.';

/// url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
/// \n\nParameters:\n* %1 - the list to test
Blockly.Msg.LISTS_ISEMPTY_TITLE = '%1 is empty';
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = 'Returns true if the list is empty.';

/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists lists].
Blockly.Msg.LISTS_INLIST = 'in list';

/// url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list].
Blockly.Msg.LISTS_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list';
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_FIRST = 'find first occurrence of item';
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_LAST = 'find last occurrence of item';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-list].
/// [[File:Blockly-list-find.png]]
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.';

Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a list] without removing it from the list.
Blockly.Msg.LISTS_GET_INDEX_GET = 'get';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a list]; as opposed to merely getting
/// it without modifying the list.
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = 'get and remove';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a list].\n{{Identical|Remove}}
Blockly.Msg.LISTS_GET_INDEX_REMOVE = 'remove';
/// dropdown - Indicates that an index relative to the front of the list should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a list].  Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined; it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_START = '#';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FROM_END = '# from end';
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_FIRST = 'first';
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_LAST = 'last';
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a list].
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_RANDOM = 'random';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a list].  In most languages; this will be the empty string.
/// [[File:Blockly-list-get-item.png]]
Blockly.Msg.LISTS_GET_INDEX_TAIL = '';
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// tooltip - Indicates the ordinal number that the first item in a list is referenced by.  %1 will be replaced by either '#0' or '#1' depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = '%1 is the first item.';
/// tooltip - Indicates the ordinal number that the last item in a list is referenced by.  %1 will be replaced by either '#0' or '#1' depending on the indexing mode.
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = '%1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = 'Returns the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = 'Removes and returns the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = 'Removes the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a list.';
/// url - Information about putting items in lists.
Blockly.Msg.LISTS_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-list--set';
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--set
/// Replaces an item in a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_SET = 'set';
/// block text - [https://github.com/google/blockly/wiki/Lists#in-list--insert-at
/// Inserts an item into a list].
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INSERT = 'insert at';
/// block text - The word(s) after the position in the list and before the item to be set/inserted.
/// [[File:Blockly-in-list-set-insert.png]]
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = 'as';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'set' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = 'Sets the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'set' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'set' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'set' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'insert' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = 'Inserts the item at the specified position in a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'insert' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'insert' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a list.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the 'get' block; the idea is the same for the 'insert' block).
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a list.';

/// url - Information describing extracting a sublist from an existing list.
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-sublist';
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
/// dropdown - Indicates that an index relative to the front of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined; it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = 'get sub-list from #';
/// dropdown - Indicates that an index relative to the end of the list should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = 'get sub-list from # from end';
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist sublist to extract]
/// should begin with the list's first item.
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = 'get sub-list from first';
/// dropdown - Indicates that an index relative to the front of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = 'to #';
/// dropdown - Indicates that an index relative to the end of the list should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist get a sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = 'to # from end';
/// dropdown - Indicates that the '''last''' item in the given list should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist the end
/// of the selected sublist].
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = 'to last';
/// block text - This appears in the rightmost position ('tail') of the
/// sublist block; as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist].
/// In English and most other languages; this is the empty string.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-sublist
/// https://github.com/google/blockly/wiki/Lists#getting-a-sublist] for more information.
/// [[File:Blockly-get-sublist.png]]
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a list.';

/// {{optional}}\nurl - Information describing sorting a list.
Blockly.Msg.LISTS_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-list';
/// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a list of items %3.\n{{Identical|Sort}}
Blockly.Msg.LISTS_SORT_TITLE = 'sort %1 %2 %3';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-list].
Blockly.Msg.LISTS_SORT_TOOLTIP = 'Sort a copy of a list.';
/// sorting order or direction from low to high value for numeric; or A-Z for alphabetic.\n{{Identical|Ascending}}
Blockly.Msg.LISTS_SORT_ORDER_ASCENDING = 'ascending';
/// sorting order or direction from high to low value for numeric; or Z-A for alphabetic.\n{{Identical|Descending}}
Blockly.Msg.LISTS_SORT_ORDER_DESCENDING = 'descending';
/// sort by treating each item as a number.
Blockly.Msg.LISTS_SORT_TYPE_NUMERIC = 'numeric';
/// sort by treating each item alphabetically; case-sensitive.
Blockly.Msg.LISTS_SORT_TYPE_TEXT = 'alphabetic';
/// sort by treating each item alphabetically; ignoring differences in case.
Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE = 'alphabetic; ignore case';

/// url - Information describing splitting text into a list; or joining a list into text.
Blockly.Msg.LISTS_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists';
/// dropdown - Indicates that text will be split up into a list (e.g. 'a-b-c' -> ['a'; 'b'; 'c']).
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = 'make list from text';
/// dropdown - Indicates that a list will be joined together to form text (e.g. ['a'; 'b'; 'c'] -> 'a-b-c').
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = 'make text from list';
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER = 'with delimiter';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-list-from-text
/// https://github.com/google/blockly/wiki/Lists#make-list-from-text] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT = 'Split text into a list of texts; breaking at each delimiter.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-list
/// https://github.com/google/blockly/wiki/Lists#make-text-from-list] for more information.
Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN = 'Join a list of texts into one text; separated by a delimiter.';

/// url - Information describing reversing a list.
Blockly.Msg.LISTS_REVERSE_HELPURL = 'https://github.com/google/blockly/wiki/Lists#reversing-a-list';
/// block text - Title of block that returns a copy of a list (%1) with the order of items reversed.
Blockly.Msg.LISTS_REVERSE_MESSAGE0 = 'reverse %1';
/// tooltip - Short description for a block that reverses a copy of a list.
Blockly.Msg.LISTS_REVERSE_TOOLTIP = 'Reverse a copy of a list.';

/// grammar - Text that follows an ordinal number (a number that indicates
/// position relative to other numbers).  In most languages; such text appears
/// before the number; so this should be blank.  An exception is Hungarian.
/// See [[Translating:Blockly#Ordinal_numbers]] for more information.
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = '';

// Variables Blocks.
/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)]; if it exists.
Blockly.Msg.VARIABLES_GET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#get';
/// tooltip - This gets the value of the named variable without modifying it.
Blockly.Msg.VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';
/// context menu - Selecting this creates a block to set (change) the value of this variable.
/// \n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_GET_CREATE_SET = 'Create 'set %1'';

/// url - Information about ''variables'' in computer programming.  Consider using your language's translation of [https://en.wikipedia.org/wiki/Variable_(computer_science) https://en.wikipedia.org/wiki/Variable_(computer_science)]; if it exists.
Blockly.Msg.VARIABLES_SET_HELPURL = 'https://github.com/google/blockly/wiki/Variables#set';
/// block text - Change the value of a mathematical variable: '''set [the value of] x to 7'''.\n\nParameters:\n* %1 - the name of the variable.\n* %2 - the value to be assigned.
Blockly.Msg.VARIABLES_SET = 'set %1 to %2';
/// tooltip - This initializes or changes the value of the named variable.
Blockly.Msg.VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
/// context menu - Selecting this creates a block to get (change) the value of
/// this variable.\n\nParameters:\n* %1 - the name of the variable.
Blockly.Msg.VARIABLES_SET_CREATE_GET = 'Create 'get %1'';

// Procedures Blocks.
/// url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that do not have return values.
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// block text - This precedes the name of the function when defining it.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#c84aoc this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = 'to';
/// default name - This acts as a placeholder for the name of a function on a
/// function definition block; as shown on
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#w7cfju this block].
/// The user will replace it with the function's name.
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = 'do something';
/// block text - This precedes the list of parameters on a function's defiition block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_BEFORE_PARAMS = 'with:';
/// block text - This precedes the list of parameters on a function's caller block.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function with parameters].
Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS = 'with:';
/// block text - This appears next to the function's 'body'; the blocks that should be
/// run when the function is called; as shown in
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#voztpd this sample
/// function definition].
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = '';
/// tooltip
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = 'Creates a function with no output.';
/// Placeholder text that the user is encouraged to replace with a description of what their function does.
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = 'Describe this function...';
/// url - Information about defining [https://en.wikipedia.org/wiki/Subroutine functions] that have return values.
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;
/// block text - This imperative or infinite verb precedes the value that is used as the return value
/// (output) of this function.  See
/// [https://blockly-demo.appspot.com/static/apps/code/index.html?lang=en#6ot5y5 this sample
/// function that returns a value].
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = 'return';
/// tooltip
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = 'Creates a function with an output.';
/// Label for a checkbox that controls if statements are allowed in a function.
Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS = 'allow statements';

/// alert - The user has created a function with two parameters that have the same name.  Every parameter must have a different name.
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning: This function has duplicate parameters.';

/// url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that do not return values.
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = 'Run the user-defined function '%1'.';

/// url - Information about calling [https://en.wikipedia.org/wiki/Subroutine functions] that return values.
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = 'https://en.wikipedia.org/wiki/Subroutine';
/// tooltip - This block causes the body (blocks inside) of the named function definition to be run.\n\nParameters:\n* %1 - the name of the function.
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = 'Run the user-defined function '%1' and use its output.';

/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block.  It refers to the set of parameters
/// (referred to by the simpler term 'inputs') to the function.  See
/// [[Translating:Blockly#function_definitions]].\n{{Identical|Input}}
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = 'Add; remove; or reorder inputs to this function.';
/// block text - This text appears on a block in a window that appears when the user clicks
/// on the plus sign or star on a function definition block].  It appears on the block for
/// adding an individual parameter (referred to by the simpler term 'inputs') to the function.
/// See [[Translating:Blockly#function_definitions]].
Blockly.Msg.PROCEDURES_MUTATORARG_TITLE = 'input name:';
/// tooltip
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = 'Add an input to the function.';

/// context menu - This appears on the context menu for function calls.  Selecting
/// it causes the corresponding function definition to be highlighted (as shown at
/// [[Translating:Blockly#context_menus]].
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = 'Highlight function definition';
/// context menu - This appears on the context menu for function definitions.
/// Selecting it creates a block to call the function.\n\nParameters:\n* %1 - the name of the function.\n{{Identical|Create}}
Blockly.Msg.PROCEDURES_CREATE_DO = 'Create '%1'';

/// tooltip - If the first value is true; this causes the second value to be returned
/// immediately from the enclosing function.
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = 'If a value is true; then return a second value.';
/// {{optional}}\nurl - Information about guard clauses.
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = 'http://c2.com/cgi/wiki?GuardClause';
/// warning - This appears if the user tries to use this block outside of a function definition.
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = 'Warning: This block may be used only within a function definition.';


/// common
Blockly.Msg.COL = 'Col';
Blockly.Msg.ROW = 'Row';
Blockly.Msg.COLOR = 'Color';
Blockly.Msg.RED = 'Red';
Blockly.Msg.GREEN = 'Green';
Blockly.Msg.BLUE = 'Blue';
Blockly.Msg.YELLOW = 'Yellow';
Blockly.Msg.SERVER = 'Server';
Blockly.Msg.IP_ADDRESS = 'IP Address';
Blockly.Msg.MAC_ADDRESS = 'Mac Address';
Blockly.Msg.PORT = 'Port';
Blockly.Msg.TEXT = 'Text';
Blockly.Msg.URL = 'URL';
Blockly.Msg.DEVICE_ID = 'DeviceID';
Blockly.Msg.VALUE = 'Value';
Blockly.Msg.LATITUDE = 'Latitude';
Blockly.Msg.LONGITUDE = 'Longitude';
Blockly.Msg.ELEVATION = 'Elevation';
Blockly.Msg.INTEGER = 'Integer';
Blockly.Msg.DOUBLE = 'Double';
Blockly.Msg.STRING = 'String';
Blockly.Msg.EMAIL_ADDRESS = 'Address';
Blockly.Msg.EMAIL_TITLE = 'Title';
Blockly.Msg.EMAIL_BODY = 'Body';
Blockly.Msg.DATA_TYPE = 'DataType';
Blockly.Msg.INDEX = 'Index';
Blockly.Msg.ON = 'On';
Blockly.Msg.OFF = 'Off';
Blockly.Msg.DIRECTION = 'Direction';
Blockly.Msg.LEFT = 'Left';
Blockly.Msg.RIGHT = 'Right';
Blockly.Msg.DATA_LENGTH = 'Data Length';
Blockly.Msg.PIN = 'Pin';
Blockly.Msg.MODE = 'Mode';
Blockly.Msg.LOW = 'Low';
Blockly.Msg.CHANGE = 'Change';
Blockly.Msg.RISING = 'Rising';
Blockly.Msg.FALLING = 'Falling';

/// helpurl
Blockly.Msg.INITIALIZES_SETUP_HELPURL = 'http://www.arduino.cc/en/Reference/Setup';
/// append text
Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT = 'add setup()';
/// tooltip
Blockly.Msg.INITIALIZES_SETUP_TOOLTIP = 'The setup() function is called when a sketch starts.';

/// inout common
/// digital pin
Blockly.Msg.INOUT_DIGITALPIN_TEXT = 'Digital Pin';
/// analog pin
Blockly.Msg.INOUT_ANALOGPIN_TEXT = 'Analog Pin';
/// pin state is high
Blockly.Msg.INOUT_HIGH = 'HIGH';
/// pin state is low
Blockly.Msg.INOUT_LOW = 'LOW';
/// pin state is high
Blockly.Msg.INOUT_ON = 'ON';
/// pin state is low
Blockly.Msg.INOUT_OFF = 'OFF';

/// digital write
/// digital Write HelpUrl
Blockly.Msg.INOUT_DIGITAL_WRITE_HELPURL = 'http://arduino.cc/en/Reference/DigitalWrite';
/// digital Write Append text pin
Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_PIN = 'DigitalWrite PIN#';
/// digital Write Append text stat
Blockly.Msg.INOUT_DIGITAL_WRITE_APPENDTEXT_STAT = 'Stat';
/// digital Write tooltip
Blockly.Msg.INOUT_DIGITAL_WRITE_TOOLTIP = 'Write digital value to a specific Port.';

/// digatal read
/// digital read helpurl
Blockly.Msg.INOUT_DIGITAL_READ_HELPURL = 'http://arduino.cc/en/Reference/DigitalRead';
/// digital read pin append text
Blockly.Msg.INOUT_DIGITAL_READ_APPENDTEXT_PIN = 'DigitalRead PIN#';
/// digital read pullup append text
Blockly.Msg.INOUT_DIGITAL_READ_APPENDTEXT_PULLUP = 'pullup';
/// digital read tooltip
Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP = '';

/// analog read
/// analog read helpurl
Blockly.Msg.INOUT_ANALOG_READ_HELPURL = 'http://arduino.cc/en/Reference/AnalogRead';
/// analog read appned text
Blockly.Msg.INOUT_ANALOG_READ_APPENDTEXT = 'AnalogRead PIN#';
/// analog read tooltip
Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP = 'Return value between 0 and 1024.';

/// analog write
/// analog write helpurl
Blockly.Msg.INOUT_ANALOG_WRITE_HELPURL = 'http://arduino.cc/en/Reference/AnalogWrite';
/// analog write pin append text
Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_PIN = 'AnalogWrite PIN#';
/// analog write value append text
Blockly.Msg.INOUT_ANALOG_WRITE_APPENDTEXT_VALUE ='value';
/// analog write tooltip
Blockly.Msg.INOUT_ANALOG_WRITE_TOOLTIP = 'Write analog value between 0 and 255 to a specific Port.';

/// tone
/// tone helpurl
Blockly.Msg.INOUT_TONE_HELPURL = 'http://arduino.cc/en/reference/tone';
/// tone pin append text
Blockly.Msg.INOUT_TONE_APPENDTEXT_PIN = 'tone Pin#';
/// tone freq append text
Blockly.Msg.INOUT_TONE_APPENDTEXT_FREQ = 'frequency';
/// tone duration append text
Blockly.Msg.INOUT_TONE_APPENDTEXT_DURATION = 'duration';
/// tone tooltip
Blockly.Msg.INOUT_TONE_TOOLTIP = 'The pin can be connected to a piezo buzzer or other speaker to play tones.';

/// pulse in
/// pulse in helpurl
Blockly.Msg.INOUT_PULSEIN_HELPURL = 'http://arduino.cc/en/Reference/pulseIn';
/// pulse in pin append text
Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_PIN = 'Pulsein Pin#';
/// pulse in type append text
Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_TYPE = 'Type';
/// pulse in timeout append text
Blockly.Msg.INOUT_PULSEIN_APPENDTEXT_TIMEOUT = 'Timeout';
/// pulse in tooltip
Blockly.Msg.INOUT_PULSEIN_TOOLTIP = 'Reads a pulse (either HIGH or LOW) on a pin.';

///timeout
/// helpurl
Blockly.Msg.TIMES_DELAY_HELPURL = 'http://arduino.cc/en/Reference/delay';
/// append text
Blockly.Msg.TIMES_DELAY_APPENDTEXT = 'delay';
/// tooltip
Blockly.Msg.TIMES_DELAY_TOOLTIP = 'Delay specific time';
/// helpurl
Blockly.Msg.TIMES_MICROS_HELPURL = 'hhttp://arduino.cc/en/Reference/Micros';
/// append text
Blockly.Msg.TIMES_MICROS_APPENDTEXT = 'micros';
/// tooltip
Blockly.Msg.TIMES_MICROS_TOOLTIP = 'Returns the number of microseconds since the Arduino board began running the current program.';
/// helpurl
Blockly.Msg.TIMES_DELAYMICROSECONDS_HELPURL = 'http://arduino.cc/en/Reference/DelayMicroseconds';
//// append text
Blockly.Msg.TIMES_DELAYMICROSECONDS_APPENDTEXT = 'delayMicroseconds';
/// tooltip
Blockly.Msg.TIMES_DELAYMICROSECONDS_TOOLTIP = 'Pauses the program for the amount of time (in microseconds) specified as parameter.';
/// helpurl
Blockly.Msg.TIMES_MILLIS_HELPURL = 'hhttp://arduino.cc/en/Reference/Millis';
/// append text
Blockly.Msg.TIMES_MILLIS_APPENDTEXT = 'millis';
/// tooltip
Blockly.Msg.TIMES_MILLIS_TOOLTIP = 'Returns the number of milliseconds since the Arduino board began running the current program.';

/// serial print
/// helpurl
Blockly.Msg.SERIAL_PRINT_HELPURL = 'http://www.arduino.cc/en/Serial/Print';
/// append text
Blockly.Msg.SERIAL_PRINT_APPENDTEXT = 'Serial Print';
/// tooltip
Blockly.Msg.SERIAL_PRINT_TOOLTIP = 'Prints data to the console/serial port as human-readable ASCII text.';

/// serial read
/// helpurl
Blockly.Msg.SERIAL_READ_HELPURL = 'http://www.arduino.cc/en/Serial/Read';
/// append text
Blockly.Msg.SERIAL_READ_APPENDTEXT = 'Serial Read';
/// tooltip
Blockly.Msg.SERIAL_READ_TOOLTIP = 'the first byte of incoming serial data available (or -1 if no data is available).';

/// serial available
/// helpurl
Blockly.Msg.SERIAL_AVAILABLE_HELPURL = 'http://www.arduino.cc/en/Serial/available';
/// append text
Blockly.Msg.SERIAL_AVAILABLE_APPENDTEXT = 'Serial Available';
/// tooltip
Blockly.Msg.SERIAL_AVAILABLE_TOOLTIP = 'Get the number of bytes (characters) available for reading from the serial port.';

/// serial println
/// helpurl
Blockly.Msg.SERIAL_PRINTLN_HELPURL = 'http://www.arduino.cc/en/Serial/Println';
/// append text
Blockly.Msg.SERIAL_PRINTLN_APPENDTEXT = 'Serial Println';
/// tooltip
Blockly.Msg.SERIAL_PRINTLN_TOOLTIP = 'Prints data to the serial port as human-readable ASCII text followed by a carriage return character and a newline characte.';

/// serial byte number
Blockly.Msg.SERIAL_BYTE_NUMBER = 'Byte Code of Number';
/// serial byte number text1
Blockly.Msg.SERIAL_BYTE_NUMBER_TEXT1 = 'Byte code of';
/// serial byte number text2
Blockly.Msg.SERIAL_BYTE_NUMBER_TEXT2 = '';

/// interrupts attach
/// helpurl
Blockly.Msg.INTERRUPTS_ATTACH_HELPURL = 'https://www.arduino.cc/en/Reference/AttachInterrupt';
/// title
Blockly.Msg.INTERRUPTS_ATTACH_TITLE = 'Attach Interrupt';
/// tooltip
Blockly.Msg.INTERRUPTS_ATTACH_TOOLTIP = 'The first parameter to attachInterrupt is an interrupt number.';

/// interrupt detach
/// helpurl
Blockly.Msg.INTERRUPTS_DETACH_HELPURL = 'https://www.arduino.cc/en/Reference/DetachInterrupt';
/// title
Blockly.Msg.INTERRUPTS_DETACH_TITLE = 'Detach Interrupt';
/// tooltip
Blockly.Msg.INTERRUPTS_DETACH_TOOLTIP = 'Turns off the given interrupt.';

/// interrupts
/// helpurl
Blockly.Msg.INTERRUPTS_HELPURL =  'https://www.arduino.cc/en/Reference/Interrupts';
/// title
Blockly.Msg.INTERRUPTS_TITLE = 'interrupts';
/// tooltip
Blockly.Msg.INTERRUPTS_TOOLTIP = 'Re-enables interrupts (after they've been disabled by noInterrupts()). ';

/// no interrupts
/// helpurl
Blockly.Msg.INTERRUPTS_NO_HELPURL = 'https://www.arduino.cc/en/Reference/NoInterrupts';
/// title
Blockly.Msg.INTERRUPTS_NO_TITLE = 'noInterrupts';
/// tooltip
Blockly.Msg.INTERRUPTS_NO_TOOLTIP = 'Disables interrupts (you can re-enable them with interrupts()).';

/// Adafruit NeoPixel
/// helpurl
Blockly.Msg.RGBLED_BEGIN_HELPURL = 'https://github.com/adafruit/Adafruit_NeoPixel';
/// warning libray
Blockly.Msg.RGBLED_BEGIN_WARNING = 'Need to install the Adafruit_NeoPixel Library.';
/// warning init
Blockly.Msg.RGBLED_WARNING = 'Need to Begin Block.';
/// title
Blockly.Msg.RGBLED_BEGIN_SETTING = 'Init';
/// num
Blockly.Msg.RGBLED_BEGIN_NUM = 'LED Num';
/// pin
Blockly.Msg.RGBLED_BEGIN_PIN = 'Pin#';
/// brightness
Blockly.Msg.RGBLED_BEGIN_BRIGHTNESS = 'Brightness';
/// tooltip
Blockly.Msg.RGBLED_BEGIN_TOOLTIP = 'This initializes the NeoPixel library.';

/// reg lcd
/// helpurl
Blockly.Msg.RGBLED_SETPIXELCOLOR_HELPURL':'https://github.com/adafruit/Adafruit_NeoPixel';
/// terget title
Blockly.Msg.RGBLED_SETPIXELCOLOR_TARGET = 'Target';
/// tooltip
Blockly.Msg.RGBLED_SETPIXELCOLOR_TOOLTIP = 'Set pixels.Color.';

/// helpurl
Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_HELPURL = 'https://github.com/adafruit/Adafruit_NeoPixel';
/// target title
Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TARGET = 'Target';
/// r
Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_R = 'R';
/// g
Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_G = 'G';
/// b
Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_B = 'B';
/// tooltip
Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TOOLTIP = 'pixels.Color takes RGB values; from 0;0;0 up to 255;255;255';

/// helpurl
Blockly.Msg.RGBLED_SHOW_HELPURL = 'https://github.com/adafruit/Adafruit_NeoPixel';
/// show
Blockly.Msg.RGBLED_SHOW = 'Show';
/// tooltip
Blockly.Msg.RGBLED_SHOW_TOOLTIP = 'This sends the updated pixel color to the hardware.';

/// helpurl
Blockly.Msg.NEOPIXEL_BEGIN_HELPURL = 'https://github.com/adafruit/Adafruit_NeoPixel';
/// warning
Blockly.Msg.NEOPIXEL_BEGIN_WARNING = 'Need to install the Adafruit_NeoPixel Library.';
/// warning
Blockly.Msg.NEOPIXEL_WARNING = 'Need to Begin Block.';
/// title
Blockly.Msg.NEOPIXEL_BEGIN_SETTING = 'Init';
/// num
Blockly.Msg.NEOPIXEL_BEGIN_NUM = 'LED Num';
/// pin
Blockly.Msg.NEOPIXEL_BEGIN_PIN = 'Pin#';
/// brightness
Blockly.Msg.NEOPIXEL_BEGIN_BRIGHTNESS = 'Brightness';
/// tooltip
Blockly.Msg.NEOPIXEL_BEGIN_TOOLTIP = 'This initializes the NeoPixel library.';

/// helpurl
Blockly.Msg.NEOPIXEL_SETPIXELCOLOR_HELPURL = 'https://github.com/adafruit/Adafruit_NeoPixel';
/// target
Blockly.Msg.NEOPIXEL_SETPIXELCOLOR_TARGET = 'Target';
/// tooltip
Blockly.Msg.NEOPIXEL_SETPIXELCOLOR_TOOLTIP = 'Set pixels.Color.';
/// helpurl
Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_HELPURL = 'https://github.com/adafruit/Adafruit_NeoPixel';
/// target
Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TARGET = 'Target';
/// r
Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_R = 'R';
/// g
Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_G = 'G';
/// b
Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_B = 'B';
/// tooltip
Blockly.Msg.NEOPIXEL_CUSTOM_SETPIXELCOLOR_TOOLTIP = 'pixels.Color takes RGB values; from 0;0;0 up to 255;255;255';
/// helpurl
Blockly.Msg.NEOPIXEL_SHOW_HELPURL':'https://github.com/adafruit/Adafruit_NeoPixel';
/// show
Blockly.Msg.NEOPIXEL_SHOW = 'Show';
/// tooltip
Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP = 'This sends the updated pixel color to the hardware.';

/// helpurl
Blockly.Msg.I2C_MATRIX_HELPURL = 'https://github.com/adafruit/Adafruit-LED-Backpack-Library';
/// warning
Blockly.Msg.I2C_MATRIX_WARNING = 'Need to Begin block.';
/// warning
Blockly.Msg.I2C_MATRIX_BEGIN_WARNING = 'Need to install the Adafruit-LED-Backpack-Library and the Adafruit-GFX-Library.';
/// title
Blockly.Msg.I2C_MATRIX_BEGIN_TITLE = 'Begin';
/// type
Blockly.Msg.I2C_MATRIX_TYPE = 'Type';
/// address
Blockly.Msg.I2C_MATRIX_ADDRESS = 'Address';
/// clear
Blockly.Msg.I2C_MATRIX_CLEAR = 'Clear';
/// cursor
Blockly.Msg.I2C_MATRIX_SETCURSOR = 'Cursor';
/// print
Blockly.Msg.I2C_MATRIX_PRINT = 'Print';
/// text
Blockly.Msg.I2C_MATRIX_TEXT = 'text';
//// text size
Blockly.Msg.I2C_MATRIX_SETTEXTSIZE = 'TextSize';
/// text wrap
Blockly.Msg.I2C_MATRIX_SETTEXTWRAP = 'TextWrap';
/// text color
Blockly.Msg.I2C_MATRIX_SETTEXTCOLOR = 'TextColor';
/// dwar pixel
Blockly.Msg.I2C_MATRIX_DRAWPIXEL = 'DrawPixel';
/// x
Blockly.Msg.I2C_MATRIX_X = 'x';
/// y
Blockly.Msg.I2C_MATRIX_Y = 'y';
/// draw circle
Blockly.Msg.I2C_MATRIX_DRAWCIRCLE = 'DrawCircle';
/// diamater
Blockly.Msg.I2C_MATRIX_DIAMETER = 'Diamater';
/// draw rect
Blockly.Msg.I2C_MATRIX_DRAWRECT = 'DrawRect';
/// x0
Blockly.Msg.I2C_MATRIX_X0 = 'x0';
/// y0
Blockly.Msg.I2C_MATRIX_Y0 = 'y0';
/// x1
Blockly.Msg.I2C_MATRIX_X1 = 'x1';
/// y1
Blockly.Msg.I2C_MATRIX_Y1 = 'y1';
/// draw line
Blockly.Msg.I2C_MATRIX_DRAWLINE = 'DrawLine';
/// draw fill rect
Blockly.Msg.I2C_MATRIX_FILLRECT = 'FillRect';
/// rotation
Blockly.Msg.I2C_MATRIX_SETROTATION = 'Rotation';
/// write display
Blockly.Msg.I2C_MATRIX_WRITEDISPLAY = 'WriteDisplay';
/// led on
Blockly.Msg.I2C_MATRIX_LED_ON = 'Led on';
/// led off
Blockly.Msg.I2C_MATRIX_LED_OFF = 'Led off';
/// write digit num
Blockly.Msg.I2C_MATRIX_WRITEDIGITNUM = 'writeDigitNum';
/// position
Blockly.Msg.I2C_MATRIX_POSITION = 'Position';
/// num
Blockly.Msg.I2C_MATRIX_NUM = 'Num';
/// dots
Blockly.Msg.I2C_MATRIX_DOTS = 'Dots';
/// draw colon
Blockly.Msg.I2C_MATRIX_DRAWCOLON = 'drawColon';

/// seven segment
/// title
Blockly.Msg.I2C_SEVENSEG_TITLE = '7 Segment';
/// colon
Blockly.Msg.I2C_SEVENSEG_COLON = 'Colon';
/// helpurl
Blockly.Msg.I2C_SEVENSEG_HELPURL = 'https://github.com/adafruit/Adafruit-LED-Backpack-Library';
/// warinig
Blockly.Msg.I2C_SEVENSEG_BEGIN_WARNING = 'Need to install the Adafruit-LED-Backpack-Library and the Adafruit-GFX-Library';
/// warinig
Blockly.Msg.I2C_SEVENSEG_WARNING = 'Need to Begin blocks';
/// title
Blockly.Msg.I2C_SEVENSEG_BEGIN_TITLE = 'Begin';
/// address
Blockly.Msg.I2C_SEVENSEG_ADDRESS = 'Address';
/// print
Blockly.Msg.I2C_SEVENSEG_PRINT = 'Print';
/// write display
Blockly.Msg.I2C_SEVENSEG_WRITEDISPLAY = 'WriteDisplay';
/// write digit num
Blockly.Msg.I2C_SEVENSEG_WRITEDIGITNUM = 'WriteDigitNum';
/// position
Blockly.Msg.I2C_SEVENSEG_POSITION = 'Position';
/// num
Blockly.Msg.I2C_SEVENSEG_NUM = 'Number';
/// colon
Blockly.Msg.I2C_SEVENSEG_DOTS = 'Colon';
/// show display
Blockly.Msg.I2C_SEVENSEG_BOOLEAN_TRUE = 'display';
/// hide display
Blockly.Msg.I2C_SEVENSEG_BOOLEAN_FALSE = 'hidden';

/// mrp121
/// helpurl
Blockly.Msg.MPR121_HELPURL = 'https://learn.adafruit.com/adafruit-mpr121-12-key-capacitive-touch-sensor-breakout-tutorial/wiring#download-adafruit-mpr121';
/// position
Blockly.Msg.MPR121_POSITION = 'Position';
/// title
Blockly.Msg.MPR121_BEGIN_TITLE = 'Begin';
/// tooltip
Blockly.Msg.MPR121_BEGIN_TOOLTIP = 'initialize the sensor';
/// title
Blockly.Msg.MPR121_TOUCHED_TITLE = 'Touched';
//// tooltip
Blockly.Msg.MPR121_TOUCHED_TOOLTIP = 'touched the sensor';
/// title
Blockly.Msg.MPR121_RELEASED_TITLE = 'Released';
/// tooltip
Blockly.Msg.MPR121_RELEASED_TOOLTIP = 'relesed the sensor';
/// title
Blockly.Msg.MPR121_VALUE_TITLE = 'Capacitance Value';
/// tooltip
Blockly.Msg.MPR121_VALUE_TOOLTIP = 'value of capacitance';
/// title
Blockly.Msg.MPR121_RESET_TITLE = 'Reset';
/// tooltip
Blockly.Msg.MPR121_RESET_TOOLTIP = 'Reset the sensor';
/// warning
Blockly.Msg.MPR121_BEGIN_WARNING = 'Need to install the Adafruit_MPR121 library.';
/// warning
Blockly.Msg.MPR121_WARNING = 'Need to Begin block.'

/// grove
/// pin title
Blockly.Msg.GROVE_PIN = 'PIN#';
/// stat title
Blockly.Msg.GROVE_STAT = 'Stat';

/// grove led
/// title
Blockly.Msg.GROVE_LED_TITLE = 'LED';
/// helpurl
Blockly.Msg.GROVE_LED_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_-_LED';
/// tooltip
Blockly.Msg.GROVE_LED_TOOLTIP = 'LED';

/// grove button
/// helpurl
Blockly.Msg.GROVE_BUTTON_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_.E2.80.93_Button';
/// title
Blockly.Msg.GROVE_BUTTON_TITLE = 'Button';
/// tooltip
Blockly.Msg.GROVE_BUTTON_TOOLTIP = 'Basic digital input';

/// grove touch
/// helpurl
Blockly.Msg.GROVE_TOUCH_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_-_Touch_Sensor';
/// title
Blockly.Msg.GROVE_TOUCH_TITLE = 'Touch';
/// tooltip
Blockly.Msg.GROVE_TOUCH_TOOLTIP = 'Basic digital input';

// grove light sensor
/// helpurl
Blockly.Msg.GROVE_LIGHT_SENSOR_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_-_Light_Sensor';
/// title
Blockly.Msg.GROVE_LIGHT_SENSOR_TITLE = 'Light Sensor';
/// tooltip
Blockly.Msg.GROVE_LIGHT_SENSOR_TOOLTIP = 'output Low Value in bright light. High Value is darkness.';

/// grove rotary angle
/// helpurl
Blockly.Msg.GROVE_ROTARY_ANGLE_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_-_Rotary_Angle_Sensor';
/// title
Blockly.Msg.GROVE_ROTARY_ANGLE_TITLE = 'Rotary Angle';
/// tooltip
Blockly.Msg.GROVE_ROTARY_ANGLE_TOOLTIP = 'Analog output between 0 and Vcc';

/// grove tilt switch
/// title
Blockly.Msg.GROVE_TILT_SWITCH_TITLE = 'Tilt Switch';
/// tooltip
Blockly.Msg.GROVE_TILT_SWITCH_TOOLTIP = 'When the switch is level it is open; and when tilted; the switch closes.';

/// grove buzzer
/// helpurl
Blockly.Msg.GROVE_BUZZER_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_.E2.80.93_Buzzer';
/// title
Blockly.Msg.GROVE_BUZZER_TITLE = 'Piezo Buzzer';
/// tooltip
Blockly.Msg.GROVE_BUZZER_TOOLTIP = 'Emit a tone when the output is high';

/// grove relay
/// helpurl
Blockly.Msg.GROVE_RELAY_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_.E2.80.93_Relay';
/// title
Blockly.Msg.GROVE_RELAY_TITLE = 'Relay';
/// tooltip
Blockly.Msg.GROVE_RELAY_TOOLTIP = 'capable of switching a much higher voltages and currents. The maximum voltage and current that can be controlled by this module upto 250V at 10 amps.';

/// grove temp sensor
/// helpurl
Blockly.Msg.GROVE_TEMP_SENSOR_HELPURL' :'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_.E2.80.93_Temperature_Sensor';
/// title
Blockly.Msg.GROVE_TEMP_SENSOR_TITLE = 'Temporature Sensor';
/// tooltip
Blockly.Msg.GROVE_TEMP_SENSOR_TOOLTIP = 'return number of ambient temperature in ℃';

/// grove sound sensor
/// helpurl
Blockly.Msg.GROVE_SOUND_SENSOR_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_-_Sound_Sensor';
/// title
Blockly.Msg.GROVE_SOUND_SENSOR_TITLE = 'Sound Sensor';
/// tooltip
Blockly.Msg.GROVE_SOUND_SENSOR_TOOLTIP = 'Detect the sound strength of the environment';

/// grove rgb lcd
/// helpurl
Blockly.Msg.GROVE_RGB_LCD_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Starter_Kit_v3#Grove_-_LCD_RGB_Backlight';
/// begin wraning
Blockly.Msg.GROVE_RGB_LCD_BEGIN_WARNING = 'Need to install the Grove_LCD_RGB_Backlight library.';
/// library warning
Blockly.Msg.GROVE_RGB_LCD_WARNING = 'Need to Begin block.';
/// title
Blockly.Msg.GROVE_RGB_LCD_TITLE = 'LCD RGB';

/// grove rgb lcd init
/// helpurl
Blockly.Msg.GROVE_RGB_LCD_INIT_HELPURL = 'http://www.arduino.cc/en/Reference/LiquidCrystalConstructor';

/// grove rgb lcd gegin
/// title
Blockly.Msg.GROVE_RGB_LCD_BEGIN_TITLE = 'Begin';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_BEGIN_TOOLTIP = 'Initializes the interface to the LCD screen; and specifies the dimensions (width and height) of the display.';

/// grove rgb lcd print
/// title
Blockly.Msg.GROVE_RGB_LCD_PRINT_TITLE = 'Print';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_PRINT_TOOLTIP = 'Prints text to the LCD.';

/// grove rgb lcd set cursor
/// title
Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TITLE = 'setCursor';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_SETCURSOR_TOOLTIP':'Position the LCD cursor.';

/// grove rgb lcd clear
/// title
Blockly.Msg.GROVE_RGB_LCD_CLEAR_TITLE = 'Clear';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_CLEAR_TOOLTIP = 'Clears the LCD screen and positions the cursor in the upper-left corner.';

/// grove rgb lcd scroll distpay left
/// title
Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_LEFT_TITLE = 'ScrollDisplayLeft';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_LEFT_TOOLTIP = 'Scrolls the contents of the display (text and cursor) one space to the left.';

/// grove rgb lcd scroll distpay right
/// title
Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_RIGHT_TITLE = 'ScrollDisplayRight';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_SCROLL_DISPLAY_RIGHT_TOOLTIP = 'Scrolls the contents of the display (text and cursor) one space to the right.';

/// grove rgb led autoscroll
/// title
Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TITLE = 'AutoScroll';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_AUTOSCROLL_TOOLTIP = 'Turns on automatic scrolling of the LCD.';

/// grove rgb lcd no autoscroll
/// title
Blockly.Msg.GROVE_RGB_LCD_NOAUTOSCROLL_TITLE = 'NoAutoScroll';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_NOAUTOSCROLL_TOOLTIP = 'Turns off automatic scrolling of the LCD.';

/// grove rgb lcd left to right
/// title
Blockly.Msg.GROVE_RGB_LCD_LEFTTORIGHT_TITLE = 'LeftToRight';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_LEFTTORIGHT_TOOLTIP = 'Set the direction for text written to the LCD to left-to-right; the default.';

/// grove rgb lcd right to left
/// title
Blockly.Msg.GROVE_RGB_LCD_RIGHTTOLEFT_TITLE = 'RightToLeft';
/// tooltip
Blockly.Msg.GROVE_RGB_LCD_RIGHTTOLEFT_TOOLTIP = 'Set the direction for text written to the LCD to right-to-left (the default is left-to-right). ';

/// grove ir receiver
/// title
Blockly.Msg.GROVE_IR_RECEIVER_TITLE = 'Infrared Receiver';
/// helpurl
Blockly.Msg.GROVE_IR_RECEIVER_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Infrared_Receiver';
/// warning init
Blockly.Msg.GROVE_IR_RECEIVER_INIT_WARNING = 'Need to install the (Grove) IRSendRev Library.';
/// warning libray
Blockly.Msg.GROVE_IR_RECEIVER_WARNING = 'Need to Begin block.';
/// init title
Blockly.Msg.GROVE_IR_RECEIVER_INIT_TITLE = 'Begin';
/// init tooltip
Blockly.Msg.GROVE_IR_RECEIVER_INIT_TOOLTIP = 'Begin';
/// check data title
Blockly.Msg.GROVE_IR_RECEIVER_CHECK_DATA_TITLE = 'Check Data';
/// check data tooltip
Blockly.Msg.GROVE_IR_RECEIVER_CHECK_DATA_TOOLTIP = '';
/// receive title
Blockly.Msg.GROVE_IR_RECEIVER_RECEIVE_TITLE = 'Receive';
/// receive tooltip
Blockly.Msg.GROVE_IR_RECEIVER_RECEIVE_TOOLTIP = '';
/// receive data title
Blockly.Msg.GROVE_IR_RECEIVER_DATA_TITLE = 'Received Data';
/// receive data tooltip
Blockly.Msg.GROVE_IR_RECEIVER_DATA_TOOLTIP = '';

/// receive emmiter
/// helpurl
Blockly.Msg.GROVE_IR_EMITTER_HELPURL = 'http://www.seeedstudio.com/wiki/Grove_-_Infrared_Emitter';
/// warinig librayr
Blockly.Msg.GROVE_IR_EMITTER_WARNING = 'Need to install the (Grove) IRSendRev Library.';
/// title
Blockly.Msg.GROVE_IR_EMITTER_TITLE = 'Infrared Emitter';
/// send title
Blockly.Msg.GROVE_IR_EMITTER_SEND_TITLE = 'Send';
/// send tooltip
Blockly.Msg.GROVE_IR_EMITTER_SEND_TOOLTIP = 'Send Data.';

///shield bot
Blockly.Msg.SHIELD_BOT_HELPURL = 'http://www.seeedstudio.com/wiki/Shield_Bot_V1.2';
/// warning
Blockly.Msg.SHIELD_BOT_WARNING = 'Need to install Shield Bot 1.2 library';
/// title
Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TITLE = 'MotorSpeed';
/// tooltip
Blockly.Msg.SHIELD_BOT_SETMAXSPEED_TOOLTIP = 'Set max speed of two motors. Between 0(basically off) and 255(full speed)';
///
Blockly.Msg.SHIELD_BOT_LEFT_SPEED = 'Left';
///
Blockly.Msg.SHIELD_BOT_RIGHT_SPEED = 'Right';
///
Blockly.Msg.SHIELD_BOT_SETMAXSPEED_LR_TOOLTIP = 'Write a max speed to the left and right motor. Between 0(basically off) and 255(full speed)';
///
Blockly.Msg.SHIELD_BOT_CONTROL = 'Control';
///
Blockly.Msg.SHIELD_BOT_MOTOR = 'Motor';
///
Blockly.Msg.SHIELD_BOT_MOTOR_TOOLTIP = 'Enables the right or left motor; negative for backwards; positive for forwards.';
///
Blockly.Msg.SHIELD_BOT_DRIVE_TITLE = 'Drive';
///
Blockly.Msg.SHIELD_BOT_DRIVE_TOOLTIP = 'All purpose drive call. Calls leftMotor and rightMotor directly.';
///
Blockly.Msg.SHIELD_BOT_MOVE_TITLE = 'Move';
///
Blockly.Msg.SHIELD_BOT_MOVE_TOOLTIP = 'Move Carbot.';
///
Blockly.Msg.SHIELD_BOT_FORWARD = 'Forward';
///
Blockly.Msg.SHIELD_BOT_BACKWARD = 'Backward';
///
Blockly.Msg.SHIELD_BOT_STOP = 'Stop';
///
Blockly.Msg.SHIELD_BOT_STOPLEFT = 'StopLeft';
///
Blockly.Msg.SHIELD_BOT_STOPRIGHT = 'StopRight';
///
Blockly.Msg.SHIELD_BOT_FASTSTOP_TITLE = 'FastStop';
///
Blockly.Msg.SHIELD_BOT_FASTSTOP_TOOLTIP = 'Disables the motor quicker. This is considered possibly bad for the motor chip so use at your discretion.';
///
Blockly.Msg.SHIELD_BOT_FASTSTOP_LEFT_TITLE = 'FastStop(left)';
///
Blockly.Msg.SHIELD_BOT_FASTSTOP_LEFTTOOLTIP = 'Disables the left motor quicker. This is considered possibly bad for the motor chip so use at your discretion.';
///
Blockly.Msg.SHIELD_BOT_FASTSTOP_RIGHT_TITLE = 'FastStop(right)';
///
Blockly.Msg.SHIELD_BOT_FASTSTOP_RIGHT_TOOLTIP = 'Disables the right motor quicker. This is considered possibly bad for the motor chip so use at your discretion.';
///
Blockly.Msg.SHIELD_BOT_READ_SENSOR_TITLE = 'Read Sensor';
///
Blockly.Msg.SHIELD_BOT_READ_SENSOR_TOOLTIP = 'Reads any of the 5 light sensors on board.';

///
Blockly.Msg.AEROBOT_WARNING = 'Need to install AERobot library';
///
Blockly.Msg.AEROBOT_HELPURL = 'http://affordableeducationrobot.github.io/v1.0/';
///
Blockly.Msg.AEROBOT_MOVE_TITLE = 'Move';
///
Blockly.Msg.AEROBOT_FORWARD = 'Forward';
///
Blockly.Msg.AEROBOT_BACKWARD = 'Backward';
///
Blockly.Msg.AEROBOT_STOP = 'Stop';
///
Blockly.Msg.AEROBOT_TURN_LEFT = 'TurnLeft';
///
Blockly.Msg.AEROBOT_TURN_RIGHT = 'TurnRight';
///
Blockly.Msg.AEROBOT_MOVE_TOOLTIP = '';
///
Blockly.Msg.AEROBOT_ROTATE_TITLE = 'Rotate';
///
Blockly.Msg.AEROBOT_ROTATE_LEFT = 'Left';
///
Blockly.Msg.AEROBOT_ROTATE_RIGHT = 'Right';
///
Blockly.Msg.AEROBOT_ROTATE_TOOLTIP = '';
///
Blockly.Msg.AEROBOT_LIGHTSENS_TITLE = 'LightSensor';
///
Blockly.Msg.AEROBOT_CENTER = 'Center';
///
Blockly.Msg.AEROBOT_LEFT = 'Left';
///
Blockly.Msg.AEROBOT_RIGHT = 'Right';
///
Blockly.Msg.AEROBOT_NONE = 'None';
///
Blockly.Msg.AEROBOT_LIGHTSENS_TOOLTIP = '';
///
Blockly.Msg.AEROBOT_DISTSENS_TITLE = 'DistSensor';
///
Blockly.Msg.AEROBOT_DISTSENS_TOOLTIP = '';
///
Blockly.Msg.AEROBOT_LINESENS_TITLE = 'LineSensor';
///
Blockly.Msg.AEROBOT_LINESENS_TOOLTIP = '';
///
Blockly.Msg.AEROBOT_SETLED_TITLE = 'SetLedColor';
///
Blockly.Msg.AEROBOT_SETLED_TOOLTIP = '';

///
Blockly.Msg.ETHERNET_VERSION_1 = 'Eternet';
///
Blockly.Msg.ETHERNET_VERSION_2 = 'Eternet2';
///
Blockly.Msg.ETHERNET_VERSION_V2 = 'Eternet_v2';

///
Blockly.Msg.ETHERNET_BEGIN_HELPURL = 'https://www.arduino.cc/en/Reference/EthernetBegin';
///
Blockly.Msg.ETHERNET_BEGIN_DHCP_TITLE = 'Begin (DHCP)';
///
Blockly.Msg.ETHERNET_BEGIN_DHCP_TOOLTIP = 'Using Ethernet.begin(mac) with the proper network setup; the Ethernet shield will automatically obtain an IP address.';
///
Blockly.Msg.ETHERNET_BEGIN_TITLE = 'Begin';
///
Blockly.Msg.ETHERNET_BEGIN_TOOLTIP':'Initializes the ethernet library and network settings.';
///
Blockly.Msg.ETHERNET_LOCALIP_HELPURL = 'https://www.arduino.cc/en/Reference/EthernetLocalIP';
///
Blockly.Msg.ETHERNET_LOCALIP_TITLE = 'localIP';
///
Blockly.Msg.ETHERNET_LOCALIP_TOOLTIP = 'Retruns the IP address of the Ethernet shield';
///
Blockly.Msg.ETHERNET_AVAILABLE_HELPURL = 'https://www.arduino.cc/en/Reference/ClientAvailable';
///
Blockly.Msg.ETHERNET_AVAILABLE_TITLE = 'Clinet.availalbe';
///
Blockly.Msg.ETHERNET_AVAILABLE_TOOLTIP = 'Returns the number of bytes available for reading (that is; the amount of data that has been written to the client by the server it is connected to).';
///
Blockly.Msg.ETHERNET_CONNECTED_HELPURL = 'https://www.arduino.cc/en/Reference/ClientConnected';
///
Blockly.Msg.ETHERNET_CONNECTED_TITLE = 'Clinet.Connected';
///
Blockly.Msg.ETHERNET_CONNECTED_TOOLTIP = 'Returns true if the client is connected; false if not.';
///
Blockly.Msg.ETHERNET_CONNECT_HELPURL = 'https://www.arduino.cc/en/Reference/ClientConnect';
///
Blockly.Msg.ETHERNET_CONNECT_TITLE = 'Clinet.Connect';
///
Blockly.Msg.ETHERNET_CONNECT_TOOLTIP = 'Connects to a specified IP address and port. The return value indicates success or failure. Also supports DNS lookups when using a domain name.';
///
Blockly.Msg.ETHERNET_CLIENT_PRINT_HELPURL = 'https://www.arduino.cc/en/Reference/ClientPrint';
///
Blockly.Msg.ETHERNET_CLIENT_PRINT_TITLE = 'Client.Print';
///
Blockly.Msg.ETHERNET_CLIENT_PRINT_TOOLTIP = 'Print data to the server that a client is connected to. Prints numbers as a sequence of digits; each an ASCII character (e.g. the number 123 is sent as the three characters '1'; '2'; '3').';
///
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_HELPURL = 'https://www.arduino.cc/en/Reference/ClientPrintln';
///
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TITLE = 'Client.Println';
///
Blockly.Msg.ETHERNET_CLIENT_PRINTLN_TOOLTIP = 'Print data; followed by a carriage return and newline; to the server a client is connected to. Prints numbers as a sequence of digits; each an ASCII character (e.g. the number 123 is sent as the three characters '1'; '2'; '3').';
///
Blockly.Msg.ETHERNET_STOP_HELPURL = 'https://www.arduino.cc/en/Reference/ClientStop';
///
Blockly.Msg.ETHERNET_STOP_TITLE = 'Client.Stop';
///
Blockly.Msg.ETHERNET_STOP_TOOLTIP = 'Disconnect from the server.';
///
Blockly.Msg.ETHERNET_READ_HELPURL = 'https://www.arduino.cc/en/Reference/ClientRead';
///
Blockly.Msg.ETHERNET_READ_TITLE = 'Client.Read';
///
Blockly.Msg.ETHERNET_READ_TOOLTIP = 'Read the next byte received from the server the client is connected to (after the last call to read()).';
///
Blockly.Msg.ETHERNET_GET_REQUEST_HELPURL = '';
///
Blockly.Msg.ETHERNET_GET_REQUEST_TITLE = 'GET Request';
///
Blockly.Msg.ETHERNET_GET_REQUEST_TOOLTIP = 'Create GET Request.';
///
Blockly.Msg.ETHERNET_POST_REQUEST_HELPURL = '';
///
Blockly.Msg.ETHERNET_POST_REQUEST_TITLE = 'POST Request';
///
Blockly.Msg.ETHERNET_POST_REQUEST_TOOLTIP = 'Create POST Request.';
///
Blockly.Msg.ETHERNET_POST_DATA = 'Data';
///
Blockly.Msg.ETHERNET_MAC_ADDRESS_TOOLTIP = 'Edit Mac Address';

///
Blockly.Msg.IFTTT_GET_URL_HELPURL = '';
///
Blockly.Msg.IFTTT_GET_URL_TITLE = 'Create GET Request URL';
///
Blockly.Msg.IFTTT_EVENT = 'Event';
///
Blockly.Msg.IFTTT_KEY = 'Key';
///
Blockly.Msg.IFTTT_VALUE1 = 'Value1';
///
Blockly.Msg.IFTTT_VALUE2 = 'Value2';
///
Blockly.Msg.IFTTT_VALUE3 = 'Value3';
///
Blockly.Msg.IFTTT_GET_URL_TOOLTIP = 'Create GET Request URL of IFTTT.';

///
Blockly.Msg.M2X_HELPURL = 'https://m2x.att.com/developer/tutorials/arduino';
///
Blockly.Msg.M2X_BEGIN_TITLE = 'Begin';
///
Blockly.Msg.M2X_STREAM_NAME = 'Stream Name';
///
Blockly.Msg.M2X_KEY = 'Access Key';
///
Blockly.Msg.M2X_BEGIN_TOOLTIP = 'Set Config.';
///
Blockly.Msg.M2X_UPDATE_VALUE_TITLE = 'Update';
///
Blockly.Msg.M2X_UPDATE_VALUE_TOOLTIP = 'Update Data to M2X';
///
Blockly.Msg.M2X_LIST_VALUE_TITLE = 'Get DataList';
///
Blockly.Msg.M2X_LIST_VALUE_TOOLTIP = '';
///
Blockly.Msg.M2X_DATE0_TITLE = 'Start';
///
Blockly.Msg.M2X_DATE1_TITLE = 'End';
///
Blockly.Msg.M2X_CUSTOM_LIST_VALUE_TOOLTIP = '';
///
Blockly.Msg.M2X_DELETE_VALUES_TITLE = 'Delete Value';
///
Blockly.Msg.M2X_DELETE_VALUES_TOOLTIP = '';
///
Blockly.Msg.M2X_UPDATE_LOCATION_TITLE = 'Update Location';
///
Blockly.Msg.M2X_UPDATE_LOCATION_TOOLTIP = '';
///
Blockly.Msg.M2X_READ_LOCATION_TITLE = 'Read Location';
///
Blockly.Msg.M2X_READ_LOCATION_TOOLTIP = '';
///
Blockly.Msg.M2X_LOCATION_NAME = 'Location name';

///
Blockly.Msg.BLYNK_HELPURL = 'https://github.com/blynkkk/blynk-library';
///
Blockly.Msg.BLYNK_ETHERNET_BEGIN_TITLE = 'Begin';
///
Blockly.Msg.BLYNK_AUTH = 'Auth';
///
Blockly.Msg.BLYNK_ETHERNET_BEGIN_TOOLTIP = '';
///
Blockly.Msg.BLYNK_WRITE_TITLE = 'Get Virtual Action';
///
Blockly.Msg.BLYNK_WRITE_TOOLTIP = '';
///
Blockly.Msg.BLYNK_PARAM_TITLE = 'Get Parameter';
///
Blockly.Msg.BLYNK_PARAM_TOOLTIP = '';
///
Blockly.Msg.BLYNK_MERGE_PARAM_TITLE = 'Get Merge Parameter';
///
Blockly.Msg.BLYNK_MERGE_PARAM_TOOLTIP = '';
///
Blockly.Msg.BLYNK_VIRTUAL_WRITE_TITLE = 'Send Virtual Value';
///
Blockly.Msg.BLYNK_VIRTUAL_WRITE_TOOLTIP = '';
///
Blockly.Msg.BLYNK_EMAIL_TITLE = 'Send Email';
///
Blockly.Msg.BLYNK_EMAIL_TOOLTIP = '';
///
Blockly.Msg.BLYNK_NOTIFY_TITLE = 'Push Notify';
///
Blockly.Msg.BLYNK_NOTIFY_TOOLTIP = '';
///
Blockly.Msg.BLYNK_TWEET_TITLE = 'Tweet';
///
Blockly.Msg.BLYNK_TWEET_TOOPTIP = '';
///
Blockly.Msg.BLYNK_CONNECT_TITLE = 'Connectted';
///
Blockly.Msg.BLYNK_CONNECT_TOOLTIP = 'Check connection';

///
Blockly.Msg.SERVO_ATTACH_HELPURL = 'http://www.arduino.cc/en/Reference/ServoAttach';
///
Blockly.Msg.SERVO_ATTACH_TEXT1 = 'Attach Pin';
///
Blockly.Msg.SERVO_ATTACH_TEXT2 = '';
///
Blockly.Msg.SERVO_ATTACH_MAX_TEXT1 = 'Max';
///
Blockly.Msg.SERVO_ATTACH_MAX_TEXT2 = '';
///
Blockly.Msg.SERVO_ATTACH_MIN_TEXT1 = 'Min';
///
Blockly.Msg.SERVO_ATTACH_MIN_TEXT2 = '';
///
Blockly.Msg.SERVO_ATTACH_TOOLTIP = 'Attach the Servo variable to a pin.';
///
Blockly.Msg.SERVO_WRITE_HELPURL = 'http://www.arduino.cc/en/Reference/ServoWrite';
///
Blockly.Msg.SERVO_WRITE_TEXT1 = 'Write Pin';
///
Blockly.Msg.SERVO_WRITE_TEXT2 = '';
///
Blockly.Msg.SERVO_ANGLE_TEXT1 = 'Angle';
///
Blockly.Msg.SERVO_ANGLE_TEXT2 = '';
///
Blockly.Msg.SERVO_WRITE_TOOLTIP = 'Writes a value to the servo; controlling the shaft accordingly.';
///
Blockly.Msg.SERVO_WRITE_US_HELPURL = 'http://www.arduino.cc/en/Reference/ServoWriteMicroseconds';
///
Blockly.Msg.SERVO_ANGLE_US_TEXT1 = 'Angle(uS)';
///
Blockly.Msg.SERVO_ANGLE_US_TEXT2 = '';
///
Blockly.Msg.SERVO_WRITE_US_TOOLTIP = 'Writes a value in microSeconds(uS) to the servo; controlling the shaft accordingly.';
///
Blockly.Msg.SERVO_READ_HELPURL = 'http://www.arduino.cc/en/Reference/ServoRead';
///
Blockly.Msg.SERVO_READ_TEXT1 = 'Read Pin';
///
Blockly.Msg.SERVO_READ_TEXT2 = 'Current Angle';
///
Blockly.Msg.SERVO_READ_TOOLTIP = 'Read the current angle of the servo (the value passed to the last call to write()).';
///
Blockly.Msg.SERVO_ATTACHED_HELPURL = 'http://www.arduino.cc/en/Reference/ServoAttached';
///
Blockly.Msg.SERVO_ATTACHED_TEXT1 = 'Pin';
///
Blockly.Msg.SERVO_ATTACHED_TEXT2 = 'Attached?';
///
Blockly.Msg.SERVO_ATTACHED_TOOLTIP = 'Check whether the Servo variable is attached to a pin.';
///
Blockly.Msg.SERVO_DETACH_HELPURL = 'http://www.arduino.cc/en/Reference/ServoDetach';
///
Blockly.Msg.SERVO_DETACH_TEXT1 = 'Pin';
///
Blockly.Msg.SERVO_DETACH_TEXT2 = 'Detach';
///
Blockly.Msg.SERVO_DETACH_TOOLTIP = 'Detach the Servo variable from its pin.';

///
Blockly.Msg.ULTRASONIC_SETTING_HELPURL':'';
///
Blockly.Msg.ULTRASONIC_SETTING_TITLE = 'Pin#';
///
Blockly.Msg.ULTRASONIC_SETTING_TRIG = 'Trig';
///
Blockly.Msg.ULTRASONIC_SETTING_ECHO = 'Echo';
///
Blockly.Msg.ULTRASONIC_SETTING_RESET = 'Reset';
///
Blockly.Msg.ULTRASONIC_SETTING_TOOLTIP = '';
///
Blockly.Msg.ULTRASONIC_MAXRANGE_HELPURL = '';
///
Blockly.Msg.ULTRASONIC_MAXRANGE_TITLE = 'MaxRange';
///
Blockly.Msg.ULTRASONIC_MAXRANGE_TOOLTIP = '';
///
Blockly.Msg.ULTRASONIC_DISTANCE_HELPURL = '';
///
Blockly.Msg.ULTRASONIC_DISTANCE_TITLE = 'Distance';
///
Blockly.Msg.ULTRASONIC_DISTANCE_HELPURL = '';

///
Blockly.Msg.LCD_INIT_HELPURL = 'http://www.arduino.cc/en/Reference/LiquidCrystalConstructor';
///
Blockly.Msg.LCD_INIT_TITLE = 'Pin#';
///
Blockly.Msg.LCD_INIT_RS = 'rs';
///
Blockly.Msg.LCD_INIT_RW = 'rw';
///
Blockly.Msg.LCD_INIT_ENABLE = 'enable';
///
Blockly.Msg.LCD_INIT_D4 = 'D4';
///
Blockly.Msg.LCD_INIT_D5 = 'D5';
///
Blockly.Msg.LCD_INIT_D6 = 'D6';
///
Blockly.Msg.LCD_INIT_D7 = 'D7';
///
Blockly.Msg.LCD_INIT_TOOLTIP = 'Creates a variable of type LiquidCrystal.';
///
Blockly.Msg.LCD_BEGIN_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalBegin';
///
Blockly.Msg.LCD_BEGIN_TITLE = 'begin';
///
Blockly.Msg.LCD_BEGIN_TOOLTIP = 'Initializes the interface to the LCD screen; and specifies the dimensions (width and height) of the display.';
///
Blockly.Msg.LCD_PRINT_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalPrint';
///
Blockly.Msg.LCD_PRINT_TITLE = 'Print';
///
Blockly.Msg.LCD_PRINT_TOOLTIP = 'Prints text to the LCD.';
///
Blockly.Msg.LCD_SETCURSOR_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalSetCursor';
///
Blockly.Msg.LCD_SETCURSOR_TITLE = 'setCursor';
///
Blockly.Msg.LCD_SETCURSOR_TOOLTIP':'Position the LCD cursor.';
///
Blockly.Msg.LCD_CLEAR_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalClear';
///
Blockly.Msg.LCD_CLEAR_TITLE = 'Clear';
///
Blockly.Msg.LCD_CLEAR_TOOLTIP = 'Clears the LCD screen and positions the cursor in the upper-left corner.';
///
Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_HELPURL = 'http://www.arduino.cc/en/Reference/LiquidCrystalScrollDisplayLeft';
///
Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_TITLE = 'ScrollDisplayLeft';
///
Blockly.Msg.LCD_SCROLL_DISPLAY_LEFT_TOOLTIP = 'Scrolls the contents of the display (text and cursor) one space to the left.';
///
Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalScrollDisplayRight';
///
Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_TITLE = 'ScrollDisplayRight';
///
Blockly.Msg.LCD_SCROLL_DISPLAY_RIGHT_TOOLTIP = 'Scrolls the contents of the display (text and cursor) one space to the right.';
///
Blockly.Msg.LCD_AUTOSCROLL_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalAutoscroll';
///
Blockly.Msg.LCD_AUTOSCROLL_TITLE = 'AutoScroll';
///
Blockly.Msg.LCD_AUTOSCROLL_TOOLTIP = 'Turns on automatic scrolling of the LCD.';
///
Blockly.Msg.LCD_NOAUTOSCROLL_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalNoAutoscroll';
///
Blockly.Msg.LCD_NOAUTOSCROLL_TITLE = 'NoAutoScroll';
///
Blockly.Msg.LCD_NOAUTOSCROLL_TOOLTIP = 'Turns off automatic scrolling of the LCD.';
///
Blockly.Msg.LCD_LEFTTORIGHT_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalLeftToRight';
///
Blockly.Msg.LCD_LEFTTORIGHT_TITLE = 'LeftToRight';
///
Blockly.Msg.LCD_LEFTTORIGHT_TOOLTIP = 'Set the direction for text written to the LCD to left-to-right; the default.';
///
Blockly.Msg.LCD_RIGHTTOLEFT_HELPURL = 'http://arduino.cc/en/Reference/LiquidCrystalRightToLeft';
///
Blockly.Msg.LCD_RIGHTTOLEFT_TITLE = 'RightToLeft';
///
Blockly.Msg.LCD_RIGHTTOLEFT_TOOLTIP = 'Set the direction for text written to the LCD to right-to-left (the default is left-to-right). ';

///
Blockly.Msg.DHT_HELPURL = 'https://github.com/adafruit/DHT-sensor-library';
///
Blockly.Msg.DHT_WARNING = 'Need to install the (adafruit) DHT-sensor-library';
///
Blockly.Msg.DHT_READ_SENSOR = 'Sensor';
///
Blockly.Msg.DHT_READ_PIN = 'Pin#';
///
Blockly.Msg.DHT_READ_TYPE = 'Content';
///
Blockly.Msg.DHT_READ_H = 'Humidity %';
///
Blockly.Msg.DHT_READ_C = 'Temperature C';
///
Blockly.Msg.DHT_READ_F = 'Temperature F';
///
Blockly.Msg.DHT_READ_TOOLTIP = 'The DHT sensors are made of two parts; a capacitive humidity sensor and a thermistor.';
