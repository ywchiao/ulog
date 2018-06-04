/**
 *  @file       header.js
 *  @brief      The Header module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       05/22/2018 created.
 *  @date       05/22/2018 last modified.
 *  @version    0.5.0
 *  @since      0.5.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Header module of the App subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

import SEARCH_BAR from './search_bar.js';

const HEADER = Object.create(ELEMENT);

HEADER.setBanner = function (banner) {
  this.replaceElement(banner, 'siteBanner');

  return this;
};

export default (() => {
  return Object.create(HEADER)
    .node(HTML.HEADER)
    .setClass('site-header')
    .setBanner(HTML.element(HTML.DIV))
    .appendElement(SEARCH_BAR, 'site-search');
})();

// app/header.js
