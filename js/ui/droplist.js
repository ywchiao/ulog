/**
 *  @file       droplist.js
 *  @brief      The Droplist module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       12/20/2017 created.
 *  @date       05/21/2018 last modified.
 *  @version    0.5.0
 *  @since      0.4.0
 *  @copyright  MIT, © 2017-2018 Yiwei Chiao
 *  @details
 *
 *  The Droplist module of the UI subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

import anchor from './anchor.js';

const DROPLIST = Object.create(ELEMENT);

DROPLIST.activate = function () {
  this.addClass('is-active');

  return this;
};

DROPLIST.deactivate = function () {
  this.removeClass('is-active');

  return this;
};

DROPLIST.addItem = function (item) {
  this.list.appendElement(item);

  return this;
};

export default (tag) => {
  const droplist = Object.create(DROPLIST)
    .node(HTML.LI)
    .appendElement(anchor(tag))
    .appendElement(
      HTML.element(HTML.UL).setDisplay('none'),
      'list'
    );

  droplist.onClick(e => {
    if (droplist.list.isVisible()) {
      droplist.list.setDisplay('none');
    }
    else {
      droplist.list.setDisplay('block');
    }

    e.stopPropagation();
  });

  return droplist;
};

// ui/droplist.js
