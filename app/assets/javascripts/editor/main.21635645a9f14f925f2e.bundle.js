(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/demo.json":
/*!***********************!*\
  !*** ./src/demo.json ***!
  \***********************/
/*! exports provided: document, default */
/***/ (function(module) {

eval("module.exports = {\"document\":{\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"The editor gives you full control over the logic you can add. For example, it's fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with \\\"> \\\" you get a blockquote that looks like this:\"}]}]},{\"object\":\"block\",\"type\":\"block-quote\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"A wise quote.\"}]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Order when you start a line with \\\"## \\\" you get a level-two heading, like this:\"}]}]},{\"object\":\"block\",\"type\":\"heading-two\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Try it out!\"}]}]},{\"object\":\"block\",\"type\":\"paragraph\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Try it out for yourself! Try starting a new line with \\\">\\\", \\\"-\\\", or \\\"#\\\"s.\"}]}]}]}};\n\n//# sourceURL=webpack:///./src/demo.json?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ \"./node_modules/slate-react/lib/slate-react.es.js\");\n/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ \"./node_modules/slate/lib/slate.es.js\");\n/* harmony import */ var _demo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.json */ \"./src/demo.json\");\nvar _demo_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./demo.json */ \"./src/demo.json\", 1);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nvar initialValue = slate__WEBPACK_IMPORTED_MODULE_3__[\"Value\"].fromJSON(_demo_json__WEBPACK_IMPORTED_MODULE_4__);\n\nvar debounce = function debounce(fn, time) {\n  var timeout;\n  return function () {\n    var _this = this,\n        _arguments = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(_this, _arguments);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n};\n/**\n * Get the block type for a series of auto-markdown shortcut `characters`.\n *\n * @param {String} chars\n * @return {String} block\n */\n\n\nvar getBlockTypeFromCharacters = function getBlockTypeFromCharacters(characters) {\n  switch (characters) {\n    case '*':\n    case '-':\n    case '+':\n      return 'list-item';\n\n    case '>':\n      return 'block-quote';\n\n    case '#':\n      return 'heading-one';\n\n    case '##':\n      return 'heading-two';\n\n    case '###':\n      return 'heading-three';\n\n    case '####':\n      return 'heading-four';\n\n    case '#####':\n      return 'heading-five';\n\n    case '######':\n      return 'heading-six';\n\n    case '---':\n      return 'horizontal-rule';\n\n    default:\n      return null;\n  }\n};\n/**\n * Render an HTML element (aka Slate node)\n *\n * @param {Object} props\n * @param {Editor} editor\n * @param {Function} next\n * @return {Element}\n */\n\n\nvar renderHTMLElement = function renderHTMLElement(props, _editor, next) {\n  var attributes = props.attributes,\n      children = props.children,\n      type = props.node.type;\n\n  switch (type) {\n    case 'block-quote':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", attributes, children);\n\n    case 'bulleted-list':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", attributes, children);\n\n    case 'heading-one':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", attributes, children);\n\n    case 'heading-two':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", attributes, children);\n\n    case 'heading-three':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", attributes, children);\n\n    case 'heading-four':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", attributes, children);\n\n    case 'heading-five':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", attributes, children);\n\n    case 'heading-six':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", attributes, children);\n\n    case 'list-item':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", attributes, children);\n\n    case 'horizontal-rule':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", _extends({}, attributes, {\n        style: {\n          borderTop: '5px solid cornflowerblue',\n          height: 10,\n          width: '100%',\n          display: 'block'\n        }\n      }), children);\n\n    default:\n      return next();\n  }\n};\n\nvar renderHTMLElementStyle = function renderHTMLElementStyle(props, _editor, next) {\n  var children = props.children,\n      mark = props.mark,\n      attributes = props.attributes;\n\n  switch (mark.type) {\n    case 'bold':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", attributes, children);\n\n    case 'code':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", attributes, children);\n\n    case 'italic':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", attributes, children);\n\n    case 'underlined':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"u\", attributes, children);\n\n    default:\n      {\n        return next();\n      }\n  }\n};\n/**\n * On key down, check for our specific key shortcuts.\n *\n * @param {Event} event\n * @param {Editor} editor\n * @param {Function} next\n */\n\n\nvar onKeyDown = function onKeyDown(event, editor, next) {\n  switch (event.key) {\n    case ' ':\n      return onSpace(event, editor, next);\n\n    case 'Backspace':\n      return onBackspace(event, editor, next);\n\n    case 'Enter':\n      return onEnter(event, editor, next);\n\n    default:\n      return next();\n  }\n};\n/**\n * On space, if it was after an auto-markdown shortcut, convert the current\n * node into the shortcut's corresponding type.\n *\n * @param {Event} event\n * @param {Editor} editor\n * @param {Function} next\n */\n\n\nvar onSpace = function onSpace(event, editor, next) {\n  var value = editor.value,\n      setBlocks = editor.setBlocks,\n      wrapBlock = editor.wrapBlock,\n      moveFocusToStartOfNode = editor.moveFocusToStartOfNode;\n  var _value$selection = value.selection,\n      start = _value$selection.start,\n      isExpanded = _value$selection.isExpanded,\n      startBlock = value.startBlock;\n  if (isExpanded) return next();\n  var chars = startBlock.text.slice(0, start.offset).replace(/\\s*/g, '');\n  var type = getBlockTypeFromCharacters(chars);\n  if (!type) return next();\n  if (type == 'list-item' && startBlock.type == 'list-item') return next();\n  event.preventDefault();\n  setBlocks(type);\n\n  if (type == 'list-item') {\n    wrapBlock('bulleted-list');\n  }\n\n  moveFocusToStartOfNode(startBlock).delete();\n};\n/**\n * On backspace, if at the start of a non-paragraph, convert it back into a\n * paragraph node.\n *\n * @param {Event} event\n * @param {Editor} editor\n * @param {Function} next\n */\n\n\nvar onBackspace = function onBackspace(event, editor, next) {\n  var value = editor.value,\n      unwrapBlock = editor.unwrapBlock,\n      setBlocks = editor.setBlocks;\n  var _value$selection2 = value.selection,\n      isExpanded = _value$selection2.isExpanded,\n      start = _value$selection2.start,\n      startBlock = value.startBlock;\n  if (isExpanded) return next();\n  if (start.offset != 0) return next();\n  if (startBlock.type == 'paragraph') return next();\n  event.preventDefault();\n  setBlocks('paragraph');\n\n  if (startBlock.type == 'list-item') {\n    unwrapBlock('bulleted-list');\n  }\n};\n/**\n * On return, if at the end of a node type that should not be extended,\n * create a new paragraph below it.\n *\n * @param {Event} event\n * @param {Editor} editor\n * @param {Function} next\n */\n\n\nvar onEnter = function onEnter(event, editor, next) {\n  var value = editor.value,\n      splitBlock = editor.splitBlock;\n  var _value$selection3 = value.selection,\n      start = _value$selection3.start,\n      end = _value$selection3.end,\n      isExpanded = _value$selection3.isExpanded,\n      startBlock = value.startBlock;\n  if (isExpanded) return next();\n  if (start.offset == 0 && startBlock.text.length == 0) return onBackspace(event, editor, next);\n  if (end.offset != startBlock.text.length) return next();\n\n  if (startBlock.type != 'heading-one' && startBlock.type != 'heading-two' && startBlock.type != 'heading-three' && startBlock.type != 'heading-four' && startBlock.type != 'heading-five' && startBlock.type != 'heading-six' && startBlock.type != 'block-quote' && startBlock.type != 'horizontal-rule') {\n    return next();\n  }\n\n  event.preventDefault();\n  splitBlock().setBlocks('paragraph');\n};\n\nvar Editor =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(Editor, _PureComponent);\n\n  function Editor() {\n    _classCallCheck(this, Editor);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Editor).apply(this, arguments));\n  }\n\n  _createClass(Editor, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_2__[\"Editor\"], {\n        defaultValue: initialValue,\n        onKeyDown: onKeyDown,\n        renderNode: renderHTMLElement,\n        renderMark: renderHTMLElementStyle\n      });\n    }\n  }]);\n\n  return Editor;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\nvar root = document.getElementById('root');\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Editor, null), root);\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ })

},[["./src/index.tsx","runtime","vendors"]]]);