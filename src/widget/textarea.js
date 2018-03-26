/**
 *  @file       textarea.js
 *  @brief      The TextArea component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/26/2018 created.
 *  @date       03/26/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The TextArea component of the Widget system.
 */
'use strict';

import HTML from '../html/html.js';
import Node from './node.js';

let TextArea = function (tag) {
  Node.call(this, {
    tag: HTML.TEXTAREA,
    attribute: {
      rows: 25,
    }
  });
};

TextArea.prototype = Object.create(Node.prototype);

TextArea.prototype.constructor = TextArea;

export default TextArea;

// widget/textarea.js
