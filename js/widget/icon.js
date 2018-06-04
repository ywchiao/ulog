/**
 *  @file       icon.js
 *  @brief      The Icon component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/02/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Icon component of the Widget system.
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
    .addClass('icon')
    .appendElement(
      Object.create(ELEMENT)
        .node(HTML.I)
        .setClass(`fas fa-${tag}`),
      'icon'
    );
};

// widget/icon.js
