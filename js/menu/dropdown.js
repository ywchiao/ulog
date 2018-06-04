/**
 *  @file       dropdown.js
 *  @brief      The Dropdown module of the Menu subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       01/18/2018 created.
 *  @date       05/22/2018 last modified.
 *  @version    0.5.0
 *  @since      0.4.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Dropdown module of the Menu subsystem.
 */
'use strict';

import DECK from '../control/deck.js';

import droplist from '../ui/droplist.js';
import menuItem from '../ui/menuitem.js';

import BURGER from './burger.js';

const fn = (tag) => {
  DECK.display(tag);

  BURGER.node.dispatchEvent(new MouseEvent('click'));
};

export default (caption, list=[]) => {
  const menu = droplist(caption);

  list.forEach(item => {
    menu.addItem(menuItem(
      item[0],
      fn.bind(null, item[1])
    ));
  });

  return menu;
}; // dropdown()

// menu/dropdown.js
