/**
 *  @file       banner.js
 *  @brief      The Banner module of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/04/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Banner module of the ULog.
 */
'use strict';

import ELEMENT from '../dom/element.js';
import HTML from '../dom/html.js';

export default (() => {
  return Object.create(ELEMENT)
    .node(HTML.HEADER)
    .appendElement(Object.create(ELEMENT)
      .node(HTML.H1)
      .setAttribute('textContent', 'U Log')
    )
    .setCSSProperty('background', '#47c7f0ff')
    .setCSSProperty('height', '5rem');
})();

// blog/banner.js
