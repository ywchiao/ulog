/**
 *  @file       index.js
 *  @brief      The entry point of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/12/2018 created.
 *  @date       06/05/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The entry point of ULog.
 */
'use strict';

import APP from './app/app.js';
import BANNER from './blog/banner.js';
import ELEMENT from './dom/element.js';
import HTML from './dom/html.js';

import catalog from './menu/catalog.js';
import post from './post/post.js';
import card from './ui/card.js';

window.addEventListener('load', () => {
  APP.setContent(Object.create(ELEMENT)
    .node(HTML.ARTICLE)
    .setCSSProperty('display', 'flex')
    .appendElement(catalog(), 'sidemenu')
    .appendElement(
      card('blog')
        .setCSSProperty('flex', '1 1 auto')
        .appendElement(post(), 'post'),
      'blog'
    )
  )
  .setBanner(BANNER);

  document.body = APP.node;

});

// index.js
