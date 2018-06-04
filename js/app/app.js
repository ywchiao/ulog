/**
 *  @file       app.js
 *  @brief      The App module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/03/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The App module of the App subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

import BODY from './body.js';
import FOOTER from './footer.js';
import HEADER from './header.js';

const APP = Object.create(ELEMENT);

APP.setBanner = function (banner) {
  this.siteHeader.setBanner(banner);

  return this;
};

APP.setBody = function (body) {
  this.replaceElement(body, 'siteBody');

  this.tabs = body.tabs;

  return this;
};

APP.setContent = function (content) {
  this.siteBody.replaceElement(content, 'content');

  return this;
};

APP.setFooter = function (footer) {
  this.replaceElement(footer, 'siteFooter');

  return this;
};

APP.setHeader = function (header) {
  this.replaceElement(header, 'siteHeader');

  return this;
};

export default (() => {
  return Object.create(APP)
    .node(HTML.BODY)
    .setClass('app')
    .setCSSProperty('backgroundColor', '#ffffffff')
    .setHeader(HEADER)
    .setBody(BODY)
    .setFooter(FOOTER);
})();

// app/app.js
