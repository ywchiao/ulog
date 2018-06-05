/**
 *  @file       toolbar.js
 *  @brief      The Toolbar component of the Post subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/03/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Toolbar component of the Post subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

import icon from '../ui/icon.js';

const EDIT_TOOLS = [
  {
    tag: 'edit',
    cmd: '',
  },
  {
    tag:'undo',
    cmd: 'undo',
  },
  {
    tag: 'redo',
    cmd: 'redo',
  },
  {
    tag: 'copy',
    cmd: 'copy',
  },
  {
    tag: 'cut',
    cmd: 'cut',
  },
  {
    tag: 'paste',
    cmd: 'paste',
  },
  {
    tag: 'bold',
    cmd: 'bold',
  },
  { 
    tag: 'italic', 
    cmd: 'italic',
  },
  { 
    tag:'underline', 
    cmd: 'underline',
  },
  {
    tag: 'align-left',
    cmd: 'justifyLeft',
  },
  { 
    tag: 'align-center',
    cmd: 'justifyCenter',
  },
  { 
    tag: 'align-right',
    cmd: 'justifyRight',
  },
  { 
    tag: 'list-ol',
    cmd: 'insertOrderedList',
  },
  { 
    tag: 'list-ul',
    cmd: 'insertUnorderedList',
  },
  { 
    tag: 'indent',
    cmd: 'indent',
  },
  { 
    tag: 'outdent',
    cmd: 'outdent',
  },
  { 
    tag: 'link',
    cmd: '',
    value: ''
  },
];

export default (() => {
  let toolbar = Object.create(ELEMENT)
    .node(HTML.DIV)
    .setAttribute('contentEditable', 'false')
    .setClass('toolbar');

  EDIT_TOOLS.forEach(ctrl => {
    toolbar.appendElement(icon(ctrl.tag)
      .addClass('edit-tool')
      .addListener('mousedown', e => {
        e.preventDefault();
      })
      .onClick(e => {
        console.log('clicked');
        document.execCommand(ctrl.cmd, false, ctrl.value);
      }),
      ctrl.tag
    );
  });
  
  return toolbar;
})();

// post/toolbar.js
