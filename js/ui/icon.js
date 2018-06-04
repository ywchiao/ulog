/**
 *  @file       icon.js
 *  @brief      The Icon module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       07/05/2017 created.
 *  @date       05/21/2018 last modified.
 *  @version    0.5.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2017-2018 Yiwei Chiao
 *  @details
 *
 *  The Icon module of the UI subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

const ICON = Object.create(ELEMENT);

ICON.align = function (align) {
  this.addClass(`is-${align}`);

  return this;
};

ICON.setChar = function (tag) {
  this.icon.setClass(`fa fa-${tag}`);

  return this;
};

export default (tag) => {
  return Object.create(ICON)
    .node(HTML.SPAN)
    .addClass('icon is-small')
    .appendElement(
      Object.create(ELEMENT)
        .node(HTML.I)
        .setClass(`fa fa-${tag}`),
      'icon'
    );
};

// ui/icon.js
