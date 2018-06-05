/**
 *  @file       search_bar.js
 *  @brief      The SearchBar module of the App subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       06/04/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The SearchBar module of the App subsystem.
 */
'use strict';

import HTML from '../dom/html.js';

import icon from '../ui/icon.js';

export default (() => {
  return HTML.element(HTML.SECTION).appendElement(
    HTML.element(HTML.P)
      .setClass('control has-icons-left')
      .appendElement(
        HTML.element(HTML.INPUT)
          .setClass('input')
          .setAttribute('type', 'text')
          .setAttribute('placeholder', '查詢')
      )
      .appendElement(icon('search'))
  );
})();

// app/search_bar.js
