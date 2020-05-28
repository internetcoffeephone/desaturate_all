// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

'use strict';

const Clutter = imports.gi.Clutter;
const Main = imports.ui.main;

let color_effect;

function _addEffect() {
    Main.uiGroup.add_effect( color_effect );
}

function _removeEffect() {
    Main.uiGroup.remove_effect( color_effect );
}

function init() {
    color_effect = new Clutter.DesaturateEffect();
}

function enable() {
    _addEffect()
}

function disable() {
    _removeEffect()
}
