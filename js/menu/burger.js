/**
 *  @file       burger.js
 *  @brief      The Burger module of the Menu subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       05/21/2018 created.
 *  @date       05/21/2018 last modified.
 *  @version    0.5.0
 *  @since      0.5.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Burger module of the Menu subsystem.
 */
'use strict';

import APP from '../app/app.js';
import HTML from '../dom/html.js';

import icon from '../ui/icon.js';

export default ((fn) => {
  return HTML.element(HTML.ARTICLE)
    .appendElement(icon('2x fa-bars'))
    .setCSSProperty('marginLeft', 'auto')
    .onClick(fn);
})(
  () => {
    APP.sideMenu.swapClass('aside-out', 'aside-in');
  }
);

// menu/burger.js
