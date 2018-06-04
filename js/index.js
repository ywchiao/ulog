/**
 *  @file       index.js
 *  @brief      The entry point of ULog.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/12/2018 created.
 *  @date       06/04/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The entry point of ULog.
 */
'use strict';

import APP from './app/app.js';
import ASIDE from './aside/aside.js';
import BANNER from './blog/banner.js';

import ELEMENT from './dom/element.js';
import HTML from './dom/html.js';

import HTTP from './http/http.js';

import post from './post/post.js';
import card from './ui/card.js';

window.addEventListener('load', () => {
  document.body = APP.node;

  let postList = null;
  
  fetch('catalog', {
    method: 'GET',
  }).then(response => {
    console.log(response);
    return response.json();
  }).then(json => {
    console.log(JSON.stringify(json, null, 2));
  });

  APP.appendElement(ASIDE, 'sideMenu')
    .setContent(Object.create(ELEMENT)
    .node(HTML.ARTICLE)
    .setCSSProperty('display', 'flex')
    .appendElement(ASIDE, 'sidemenu')
    .appendElement(
      card('blog')
        .setCSSProperty('flex', '1 1 auto')
        .appendElement(post(), 'post'),
      'blog'
    )
  )
  .setBanner(BANNER);
});

// index.js
