/**
 *  @file       post.js
 *  @brief      The Post component of the system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/07/2018 created.
 *  @date       04/07/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Post component of the system.
 */
'use strict';

import HTML from '../html/html.js';

import Article from '../widget/article.js';
import Icon from '../widget/icon.js';
import node from '../widget/node.js';
import widget from '../widget/widget.js';

let toolbar = () => {
  let el = node({
    tag: HTML.DIV
  });

  [
    { 
      tag: 'file',
      cmd: '',
    },
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
      tag: 'quote-left',
      cmd: '',
      value: ''
    },
    { 
      tag: 'quote-right',
      cmd: '',
      value: ''
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
  ].forEach(ctrl => {
    let icon = new Icon(ctrl.tag, {
      'mousedown': (e) => {
        e.preventDefault();
      },
      'click': (e) => {
        document.execCommand(ctrl.cmd, false, ctrl.value);
      }
    });

    icon.addClass('edit-tool');

    el.appendChild(icon.node);
  });

  return el;
};

let Post = function (tag) {
  this.node = node({
    tag: HTML.FORM,
  });

  this.node.appendChild(toolbar());

  let article = new Article();
  this.node.appendChild(article.node);
};

Post.prototype = Object.create(widget);

Post.prototype.constructor = Post;

export default Post;

// post/post.js
