/**
 *  @file       menu.js
 *  @brief      The Menu module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       12/20/2017 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Menu module of the UI subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

const MENU = Object.create(ELEMENT);

MENU.addItem = function (tag) {
  this.appendElement(HTML.label(tag));

  this.appendElement(
    Object.create(ELEMENT)
      .node(HTML.UL)
      .setClass('menu-list')
  );

  return this;
};

MENU.appendDropdown = function (dropdown) {
  this.dropdown = this.dropdown || [];

  this.dropdown.push(dropdown);

  this.appendElement(dropdown);

  return this;
};

export default () => {
  return Object.create(MENU)
    .node(HTML.UL)
    .setClass('menu-list');
};

// ui/menu.js
