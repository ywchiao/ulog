/**
 *  @file       button.js
 *  @brief      The Button module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/21/2017 created.
 *  @date       05/21/2018 last modified.
 *  @version    0.5.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2017-2018 Yiwei Chiao
 *  @details
 *
 *  The Button module of the UI subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

import icon from './icon.js';

const BUTTON = Object.create(ELEMENT);

BUTTON.addIcon = function (tag) {
  return this.appendElement(icon(tag));
};

BUTTON.setLabel = function (text) {
  if (this.hasOwnProperty('label')) {
    this.label.setAttribute('textContent', text);
  }
  else {
    this.appendElement(HTML.span(text), 'label');
  }

  return this;
};

export default (tag) => {
  return Object.create(BUTTON)
    .node(HTML.BUTTON)
    .setClass('button')
    .setLabel(tag);
};

// ui/button.js
