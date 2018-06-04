/**
 *  @file       menu.js
 *  @brief      The Menu module of the Menu subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       05/21/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Menu module of the Menu subsystem.
 */
'use strict';

import droplist from '../ui/droplist.js';
import menu from '../ui/menu.js';

const MENU_USER = (() => {
  return droplist('一般使用者');
})();

export default (() => {
  return menu()
    .appendDropdown(MENU_USER);
})();

// menu/menu.js
