/**
 *  @file       catalog.js
 *  @brief      The Catalog module of the Menu subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/04/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Catalog module of the Menu subsystem.
 */
'use strict';

import HTML from '../dom/html.js';
import HTTP from '../dom/http.js';

import droplist from '../ui/droplist.js';
import menu from '../ui/menu.js';
import menuItem from '../ui/menuitem.js';

const populate = function (menu, json) {
  let dropMenu = null;
  
  Object.entries(json).forEach(([key, value]) => {
    dropMenu = droplist(key);

    value.forEach(item => {
      dropMenu.addItem(menuItem(item));
    });
    
    menu.appendElement(dropMenu);
  });
};

export default () => {
  let catalog = menu();
  
  HTTP.query('catalog')
    .then(json => {
      populate(catalog, json);
    });

  return HTML.element(HTML.ASIDE)
    .setClass('site-menu')
    .appendElement(catalog);
};

// menu/catalog.js
