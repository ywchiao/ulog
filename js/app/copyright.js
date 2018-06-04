/**
 *  @file       copyright.js
 *  @brief      The Copyright module of the APP subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/04/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Copyright module of the APP subsystem.
 */
'use strict';

import HTML from '../dom/html.js';

import ABOUT from './about.js';

export default ((poweredBy, copyright) => {
  return HTML.element(HTML.ARTICLE)
    .appendElement(HTML.p(poweredBy));
})(
  `Powered by ${ABOUT.name} v${ABOUT.version}, ${ABOUT.license} Licensed, © ${ABOUT.copyright}, ${ABOUT.author.name}`
);

// app/copyright.js
