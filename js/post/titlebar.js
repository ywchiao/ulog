/**
 *  @file       titlebar.js
 *  @brief      The Titlebar component of the Post subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/03/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Titlebar component of the Post subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

import button from '../ui/button.js';

export default (() => {
  return Object.create(ELEMENT)
    .node(HTML.SECTION)
    .setClass('post-title flex-container')
    .appendElement(Object.create(ELEMENT)
      .node(HTML.SPAN)
      .setClass('flex-main')
      .appendNode(Object.create(ELEMENT)
        .node(HTML.H3)
        .setAttribute('textContent', '標題：未定')
        .node
      )
    )
    .appendElement(button(' 編 輯 ')
      .addIcon('pencil-alt')
      .setAttribute('id', 'btn-edit')
      .setAttribute('contentEditable', 'false')
      .onClick(e => {
        let newTitle = document.querySelector('#new-post');

        if (newTitle.contentEditable == 'false') {
          newTitle.contentEditable = 'true';
        }
        else {
          newTitle.contentEditable = 'false';
        }
      })
    );
})();      

// post/titlebar.js
