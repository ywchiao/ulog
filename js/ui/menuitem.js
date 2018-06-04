/**
 *  @file       menuitem.js
 *  @brief      The MenuItem module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/04/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The MenuItem module of the UI subsystem.
 */
'use strict';

import HTML from '../dom/html.js';

import anchor from './anchor.js';

export default (tag, fn) => {
  return HTML.element(HTML.LI)
    .appendElement(anchor(tag))
    .onClick(fn);
};

// ui/menuitem.js
