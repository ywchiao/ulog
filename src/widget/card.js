/**
 *  @file       card.js
 *  @brief      The Card component of the Widget system.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/24/2018 created.
 *  @date       03/24/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Card component of the Widget system.
 */
'use strict';


let cardContent = () => {
  let el = html.node({
    tag: HTML.DIV,
    className: CARD.CONTENT
  });

  el.style.overflowX = 'scroll';

  return el;
};

let cardFooter = () => {
  let el = html.node({
    tag: HTML.FOOTER,
    className: CARD.FOOTER
  });

  return el;
};

let cardHeader = () => {
  let caption = html.node({
    tag: HTML.SPAN,
    className: 'title is-5'
  });

  let textContainer = html.node({
    tag: HTML.P,
    className: CARD.HEADER_TITLE
  });

  textContainer.appendChild(caption);

  let el = html.node({
    tag: HTML.HEADER,
    className: CARD.HEADER
  });

  el.appendChild(textContainer);

  return el;
};

let prototype = {
  addControl: function (ctrl) {
    let header = html.query({
      node: this.node,
      selector: HTML.HEADER,
    });

    header.insertBefore(ctrl.node, header.lastChild);

    return this;
  },

  setFooterBackgroundColor: function (color) {
    let el = this.node.querySelector(CARD_CLASS.FOOTER);

    el.style.backgroundColor = color;

    return this;
  },

  setHeaderBackgroundColor: function (color) {
    let el = this.node.querySelector(CARD_CLASS.HEADER);

    el.style.backgroundColor = color;

    return this;
  },

  setCaptionColor: function (color) {
    let el = this.node.querySelector('.title');

    el.style.color = color;

    return this;
  },

  setCaption: function (caption) {
    let el = this.node.querySelector('.title');

    el.textContent = caption;

    return this;
  },

  setContent: function (content) {
    let el = this.node.querySelector(CARD_CLASS.CONTENT);

    el.appendChild(content);

    return this;
  },

  setContentBackgroundColor: function (color) {
    let el = this.node.querySelector(CARD_CLASS.CONTENT);

    el.style.backgroundColor = color;

    return this;
  },
};

let Card = (tag) => {
  let el = html.node({
    tag: HTML.SECTION,
    className: CARD.CARD
  });


  el.appendChild(cardHeader());
  el.appendChild(cardContent());
  el.appendChild(cardFooter());

  el.id = `${CONFIG.PREFIX}-card-${tag}`;

  this.node = el;
};

// widget/card.js
