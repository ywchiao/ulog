/**
 *  @file       post.js
 *  @brief      The Post component of the Post subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/07/2018 created.
 *  @date       06/03/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Post component of the Post subsystem.
 *  The Post component of the system.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

import TITLEBAR from './titlebar.js';
import TOOLBAR from './toolbar.js';

export default function () {
  let editArea = Object.create(ELEMENT)
    .node(HTML.ARTICLE)
    .setClass('edit-area');
//    .setCSSProperty('writing-mode', 'vertical-rl');
 
  return Object.create(ELEMENT)
    .node(HTML.FORM)
    .setAttribute('id', 'new-post')
    .setAttribute('contentEditable', 'false')
    .addListener('submit', e => {
      e.preventDefault();

      let formData = new FormData();

      formData.append('content', editArea.node.innerHTML);

      fetch('post', {
        method: 'POST',
        body: formData
      }).then(response => {
        return response.json();
      }).then(json => {
        console.log(JSON.stringify(json, null, 2));
      })
    })
    .appendElement(TITLEBAR, 'titlebar')
    .appendElement(TOOLBAR, 'toolbar')
    .appendElement(editArea, 'edit-area')
    .appendNode(Object.create(ELEMENT)
      .node(HTML.INPUT)
      .setAttribute('type', 'submit')
      .setAttribute('value', '貼  文')
      .node
    );
};

// post/post.js
