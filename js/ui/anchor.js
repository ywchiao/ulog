/**
 *  @file       anchor.js
 *  @brief      The Anchor module of the UI subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       12/19/2017 created.
 *  @date       05/17/2018 last modified.
 *  @version    0.5.0
 *  @since      0.4.0
 *  @copyright  MIT, © 2017-2018 Yiwei Chiao
 *  @details
 *
 *  The Anchor module of the UI subsystem.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

const ANCHOR = Object.create(ELEMENT);

/**
* Set/Remove the Component's 'disabled' attribute.
*
* @name setEnabled
* @function
* @param enabled Boolean to indicate the enable/disable intension.
* @returns {this}
*/
ANCHOR.setEnabled = function (enabled) {
  if (enabled) {
    this.removeAttribute('disabled');
  }
  else {
    this.setAttribute('disabled', 'true');
  }

  return this;
};

export default (text) => {
  return Object.create(ANCHOR)
    .node(HTML.A)
    .setAttribute('textContent', text);
};

// ui/anchor.js
