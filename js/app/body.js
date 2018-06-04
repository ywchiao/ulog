/**
 *  @file       body.js
 *  @brief      The Body module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/03/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Body module of the App subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

const BODY = Object.create(ELEMENT);

export default (() => {
  return Object.create(BODY)
    .node(HTML.MAIN)
    .setClass('site-body')
    .setCSSProperty('backgroundColor', '#fffaf0')
    .appendElement(HTML.element(HTML.DIV)
      .setClass('site-header-shadow')
    );
})();

// app/body.js
