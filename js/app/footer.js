/**
 *  @file       footer.js
 *  @brief      The Footer module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/03/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Footer module of the App subsystem.
 */
'use strict';

import HTML from '../dom/html.js';

import COPYRIGHT from './copyright.js';

export default (() => {
  return HTML.element(HTML.FOOTER)
    .setClass('site-footer')
    .appendElement(COPYRIGHT);
})();

// app/footer.js
