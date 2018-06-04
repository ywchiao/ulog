/**
 *  @file       card.js
 *  @brief      The Card component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/24/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Card component of the Widget system.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

const CARD = Object.create(ELEMENT);

CARD.setHeader = function (header) {
  this.replaceElement(header, 'header');

  return this;
};

CARD.setContent = function (content) {
  this.replaceElement(content, 'content');
};

CARD.setFooter = function (footer) {
  this.replaceElement(footer, 'footer');
};

export default (tag) => {
  return Object.create(CARD)
    .node(HTML.SECTION)
    .setClass('card');
};

// widget/card.js
