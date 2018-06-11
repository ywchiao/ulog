/**
 *  @file       catalog.js
 *  @brief      The Catalog module of the Menu subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/04/2018 created.
 *  @date       06/11/2018 last modified.
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
//      dropMenu.addItem(menuItem(item));
      dropMenu.addItem(menuItem(item, (e) => {
        HTTP.query(`article/${key}/${item}`)
          .then(json => {
            let el = document.querySelector('.edit-area');
            
            el.innerHTML = JSON.parse(json)["content"];            
          });
      }));
    });
    
    menu.appendElement(dropMenu);
  });
};

export default () => {
  let catalog = menu();
  
  // 詢問伺服端 (server) 目前的文章列表
  HTTP.query('catalog')
    .then(json => {
      populate(catalog, json);  // 使用伺服的回答，建構目錄 (menu)
    });

  // 傳回一個包含了 `目錄` 的 <aside> 元件
  return HTML.element(HTML.ASIDE)
    .setClass('site-menu')
    .appendElement(catalog);  // 將 `目錄` (menu) 放到 <aside> 元素內
};

// menu/catalog.js
