/**
 *  @file       html.js
 *  @brief      The HTML module of the DOM subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       12/02/2017 created.
 *  @date       06/05/2018 last modified.
 *  @version    0.5.0
 *  @since      0.3.0
 *  @copyright  MIT, © 2017-2018 Yiwei Chiao
 *  @details
 *
 *  The HTML module of the DOM subsystem.
 */
'use strict';

import ELEMENT from './element.js';

const HTML = Object.create({
  A: 'a',
  ARTICLE: 'article',
  ASIDE: 'aside',
  BODY: 'body',
  BUTTON: 'button',
  DATALIST: 'datalist',
  DIV: 'div',
  FIGURE: 'figure',
  FOOTER: 'footer',
  FORM: 'form',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  HEADER: 'header',
  I: 'i',
  IMG: 'img',
  INPUT: 'input',
  LABEL: 'label',
  LI: 'li',
  MAIN: 'main',
  NAV: 'nav',
  OL: 'ol',
  OPTION: 'option',
  P: 'p',
  PRE: 'pre',
  SECTION: 'section',
  SELECT: 'select',
  SPAN: 'span',
  TABLE: 'table',
  TBODY: 'tbody',
  TD: 'td',
  TH: 'th',
  THEAD: 'thead',
  TR: 'tr',
  UL: 'ul',
});

HTML.element = function (tag) {
  return Object.create(ELEMENT)
    .node(tag);
},

HTML.i = function (text='') {
  return this.element(this.I)
    .setAttribute('textContent', text);
};

HTML.label = function (text='') {
  return this.element(this.LABEL)
    .setClass('label')
    .setAttribute('textContent', text);
};

HTML.li = function (text='') {
  return this.element(this.LI)
    .setAttribute('textContent', text);
};

HTML.option = function (text='') {
  return this.element(this.OPTION)
    .setAttribute('textContent', text)
    .setAttribute('value', text);
};

HTML.p = function (text='') {
  return this.element(this.P)
    .setAttribute('textContent', text);
};

HTML.query = function (selector) {
  console.log(`HTML.querey: ${selector}`);
  return document.body.querySelector(selector);
};

HTML.section = function () {
  return this.element(this.SECTION);
};

HTML.span = function (text='') {
  return this.element(this.SPAN)
    .setAttribute('textContent', text);
};

export default (() => {
  return Object.create(HTML);
})();

// dom/html.js
