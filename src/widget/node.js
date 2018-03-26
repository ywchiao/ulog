/**
 *  @file       node.js
 *  @brief      The Node module of the Widget subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       03/25/2018 created.
 *  @date       03/25/2018 last modified.
 *  @version    0.1.0
 *  @since      0.1.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Node module of the Widget subsystem.
 */
'use strict';

let Node = function ({tag, className, attribute, handler}) {
  let el = document.createElement(tag);

  if (className) {
    el.className = className;
  } // fi

  if (attribute) {
    Object.entries(attribute).forEach(([key, value]) => {
      el[key] = value;
    });
  } // fi

  if (handler) {
    Object.entries(handler).forEach(([e, fn]) => {
      el.addEventListener(e, fn);
    });
  }

  this.node = el;
};

Node.prototype = Object.create({
  appendChild: function (node) {
    this.node.appendChild(node);

    return this;
  },

  setBackgroundColor: function (color) {
    this.node.style.backgroundColor = color;

    return this;
  },

  setForgroundColor: function (color) {
    this.node.style.color = color;

    return this;
  },
});

export default Node;

// widget/node.js
