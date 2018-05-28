/**
 *  @file       blogger.js
 *  @brief      The Blogger module of Nav subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/23/2018 created.
 *  @date       04/23/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Blogger module of Nav subsystem.
 */
'use strict';

import HTML from '../html/html.js';

import NavBar from '../widget/navbar.js';
import NavItem from '../widget/navitem.js';

export default () => {
  let el = new NavBar();

  [
    {
      tag: '讀 取',
      callback: (e) => {
        alert('讀取 (read)');

        fetch('/latest', {
          method: 'GET',
        }).then(json => {
          console.log(JSON.stringify(json, null, 2));
        });
        // save post
      }
    },
    {
      tag: '貼 文',
      callback: (e) => {
        alert('新增 (new)');
        // new post
      }
    },
    {
      tag: '編  輯',
      callback: (e) => {
        alert('編輯 (edit)');
        // edit post
      }
    },
    {
      tag: '儲  存',
      callback: (e) => {
        alert('儲存 (save)');
        // save post
      }
    },
  ].forEach(o => {
    let item = new NavItem(o);

    el.appendChild(item.node);
  });

  return el;
}

// nav/blogger.js
