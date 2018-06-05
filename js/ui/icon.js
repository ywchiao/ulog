/**
 *  @file       icon.js
 *  @brief      The Icon module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/02/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Icon module of the UI subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

const ICON = Object.create(ELEMENT);

ICON.setChar = function (tag) {
  this.icon.setClass(`fas fa-${tag}`);

  return this;
};

export default (tag) => {
  return Object.create(ICON)
    .node(HTML.SPAN)
    .addClass('icon is-small')
    .appendElement(
      Object.create(ELEMENT)
        .node(HTML.I)
        .setClass(`fas fa-${tag}`),
      'icon'
    );
};

// ui/icon.js
