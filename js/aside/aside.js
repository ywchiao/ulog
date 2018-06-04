/**
 *  @file       aside.js
 *  @brief      The Aside module of the Aside subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/03/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Aside module of the Aside subsystem.
 */
'use strict';

import HTML from '../dom/html.js';
import MENU from '../menu/menu.js';

export default (() => {
  return HTML.element(HTML.ASIDE)
    .setClass('site-menu')
    .appendElement(MENU);
})();

// agate/aside.js
