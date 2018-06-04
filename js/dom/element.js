/**
 *  @file       element.js
 *  @brief      The Element module of the DOM subsystem.
 *  @author     Yiwei Chiao (ywchiao@gmail.com)
 *  @date       04/24/2018 created.
 *  @date       05/22/2018 last modified.
 *  @version    0.5.0
 *  @since      0.5.0
 *  @copyright  MIT, © 2018 Yiwei Chiao
 *  @details
 *
 *  The Element module of the DOM subsystem.
 */
'use strict';

const ELEMENT = {};

/**
 * Add the specified CSS class to the node.
 *
 * @name addClass
 * @function
 * @param cls The class name to be added.
 * @returns {this}
 */
ELEMENT.addClass = function (cls) {
  if (!this.node.className.includes(cls)) {
    this.node.className += this.node.className ? ` ${cls}` : cls;
  } // fi

  return this;
};

/**
 * Register an event-listener fn for the specified event e.
 *
 * @name addListener
 * @function
 * @param e The interested event.
 * @param fn The handler for event e.
 * @returns {this}
 */
ELEMENT.addListener = function (e, fn) {
  this.node.addEventListener(e, fn);

  return this;
};

/**
 * Register a customized property for this element.
 *
 * @name addProperty
 * @function
 * @param key The property name.
 * @param value The default value.
 * @returns {this}
 */
ELEMENT.addProperty = function (key, value) {
  this[key] = value;

  return this;
};

/**
 * Append the specified element as this element's child element.
 *
 * @name appendElement
 * @function
 * @param name
 * @param el The element to be appended.
 * @param tag The tag for the newly added element.
 * @returns {this}
 */
ELEMENT.appendElement = function (el, tag=null) {
  if (tag) {
    this[tag] = el;
  }

  this.node.appendChild(el.node);

  return this;
};

/**
 * Append specifed node as this element's new child node.
 *
 * @name appendNode
 * @function
 * @param node The node to be appended.
 * @returns {this}
 */
ELEMENT.appendNode = function (node) {
  this.node.appendChild(node);

  return this;
};

/**
 * Return the specified attribute value of the element.
 *
 * @name getAttribute
 * @function
 * @param attribute The HTML attribute value to be returned.
 * @returns {value}
 */
ELEMENT.getAttribute = function (attribute) {
  return this.node[attribute];
};

/**
 * Insert the passed-in node as this element's first child node.
 *
 * @name insertNode
 * @function
 * @param node The node to be insert.
 * @returns {this}
 */
ELEMENT.insertNode = function (node) {
  this.node.insertBefore(node, this.node.firstChild);

  return this;
};

/**
 * Return if this element is visible.
 *
 * @name isVisible
 * @function
 * @returns {boolean}
 */
ELEMENT.isVisible = function () {
  return !(this.node.style.display === 'none');
};

/**
 * Create an HTML element node.
 *
 * @name node
 * @function
 * @param tag The HTML tag.
 * @returns {this}
 */
ELEMENT.node = function (tag) {
  this.node = document.createElement(tag);

  return this;
};

/**
 * Help function for common 'click' event-listener.
 *
 * @name onClick
 * @function
 * @param fn The 'click' event-listener to be set.
 * @returns {this}
 */
ELEMENT.onClick = function (fn) {
  this.node.addEventListener('click', fn);

  return this;
};

/**
 * An interface to function: querySelector.
 *
 * @name query
 * @function
 * @param selector
 * @returns {node}
 */
ELEMENT.query = function (selector) {
  return this.node.querySelector(selector);
};

/**
 * Remove the specified HTML attribute from this element's node.
 *
 * @name removeAttribute
 * @function
 * @param attribute The HTML attribute to be removed.
 * @returns {this}
 */
ELEMENT.removeAttribute = function (attribute) {
  this.node.remove(attribute);

  return this;
};

/**
 * Remove the specified CSS class from this element's node.
 *
 * @name removeClass
 * @function
 * @param cls The class name to be removed.
 * @returns {this}
 */
ELEMENT.removeClass = function (cls) {
  this.node.className = this.node.className.replace(
    RegExp(`[ ]*${cls}`, 'g'), ''
  );

  return this;
};

/**
 * Remove the specified child node from this element's node.
 *
 * @name removeNode
 * @function
 * @param node The node to be removed.
 * @returns {this}
 */
ELEMENT.removeNode = function (node) {
  this.node.removeChild(node);

  return this;
};

/**
 * Replace the specified element with the new element.
 *
 * @name replaceElement
 * @function
 * @param el The new element.
 * @param tag The tag of the element to be replaced.
 * @returns {this}
 */
ELEMENT.replaceElement = function (el, tag) {
  this[tag] = this[tag] || null;

  if (this[tag]) {
    this.node.replaceChild(el.node, this[tag].node);

    this[tag] = el;
  }
  else {
    this.appendElement(el, tag);
  }

  return this;
};

/**
 * Setting the HTML attribute of this element's node.
 *
 * @name setAttribute
 * @function
 * @param attribute The HTML attribute to be set.
 * @param value     The attribute value.
 * @returns {this}
 */
ELEMENT.setAttribute = function (attribute, value) {
  this.node[attribute] = value;

  return this;
};

/**
 * Set the specified CSS class to this element's node.
 *
 * @name setClass
 * @function
 * @param cls The class name to be set.
 * @returns {this}
 */
ELEMENT.setClass = function (cls) {
  this.node.className = cls;

  return this;
};

/**
 * Setting the CSS property of this element's node.
 *
 * @name setCSSProperty
 * @function
 * @param property The CSS property to be set.
 * @param value    The property value.
 * @returns {this}
 */
ELEMENT.setCSSProperty = function (property, value) {
  this.node.style[property] = value;

  return this;
};

/**
 * Set this element to be visible or not.
 *
 * @name setVisible
 * @function
 * @param visible=false
 * @returns {this}
 */
ELEMENT.setDisplay = function (display='none') {
  this.node.style.display = display;

  return this;
};

/**
 * Swap this element's fadeIn/fadeOut, slideIn/slideOut, ... CSS class.
 *
 * @name swapClass
 * @function
 * @param clsIn  class name with in/on/...
 * @param clsOut class name with out/off/...
 * @returns {this}
 */
ELEMENT.swapClass = function (clsIn, clsOut) {
  if (this.node.className.includes(clsIn)) {
    this.node.className = this.node.className.replace(clsIn, clsOut);
  }
  else {
    this.node.className = this.node.className.replace(clsOut, clsIn);
  } // fi

  return this;
};

export default (() => {
  return Object.create(ELEMENT);
})();

// dom/element.js
