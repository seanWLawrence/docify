(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/components/Button.tsx":
/*!***********************************!*\
  !*** ./src/components/Button.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar styles = {\n  border: 0,\n  padding: '10px 15px',\n  maxWidth: 'max-content',\n  margin: 10,\n  cursor: 'pointer',\n  color: 'cornflowerblue',\n  backgroundColor: 'rgba(240, 240, 240, 1)'\n};\n\nvar Button = function Button(_ref) {\n  var text = _ref.text,\n      onClick = _ref.onClick;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: onClick,\n    style: styles\n  }, text);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/Button.tsx?");

/***/ }),

/***/ "./src/components/Toolbar.tsx":
/*!************************************!*\
  !*** ./src/components/Toolbar.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar styles = {\n  display: 'flex',\n  flexDirection: 'column',\n  width: 'max-content',\n  justifyContent: 'center',\n  alignItems: 'center',\n  flexWrap: 'wrap',\n  boxShadow: '0 1px 9px #ddd',\n  position: 'fixed',\n  right: 0,\n  backgroundColor: '#fff',\n  zIndex: 2\n};\n\nvar Toolbar = function Toolbar(_ref) {\n  var children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: styles\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbar);\n\n//# sourceURL=webpack:///./src/components/Toolbar.tsx?");

/***/ }),

/***/ "./src/demo.json":
/*!***********************!*\
  !*** ./src/demo.json ***!
  \***********************/
/*! exports provided: document, default */
/***/ (function(module) {

eval("module.exports = {\"document\":{\"nodes\":[{\"object\":\"block\",\"type\":\"heading-one\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Create beautiful documents\"}]}]},{\"object\":\"block\",\"type\":\"block-quote\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"This entire page is fully editable - try it out!\"}]}]},{\"object\":\"block\",\"type\":\"heading-six\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Built-in auto Markdown formatting for:\"}]}]},{\"object\":\"block\",\"type\":\"unordered-list\",\"nodes\":[{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Headings\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Blockquotes\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Bulleted lists\"}]}]}]},{\"object\":\"block\",\"type\":\"heading-six\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"And full rich text editor support for:\"}]}]},{\"object\":\"block\",\"type\":\"unordered-list\",\"nodes\":[{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Headings\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Blockquotes\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Bold\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Italic\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Underline\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Code\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Blockquote\"}]}]},{\"object\":\"block\",\"type\":\"list-item\",\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"text\":\"Bulleted lists\"}]}]}]}]}};\n\n//# sourceURL=webpack:///./src/demo.json?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ \"./node_modules/slate-react/lib/slate-react.es.js\");\n/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate */ \"./node_modules/slate/lib/slate.es.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Button */ \"./src/components/Button.tsx\");\n/* harmony import */ var _components_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Toolbar */ \"./src/components/Toolbar.tsx\");\n/* harmony import */ var _slate_types_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slate-types/block */ \"./src/slate-types/block.tsx\");\n/* harmony import */ var _slate_types_inline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slate-types/inline */ \"./src/slate-types/inline.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ \"./src/utils.tsx\");\n/* harmony import */ var _demo_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demo.json */ \"./src/demo.json\");\nvar _demo_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./demo.json */ \"./src/demo.json\", 1);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nvar initialValue = slate__WEBPACK_IMPORTED_MODULE_3__[\"Value\"].fromJSON(_demo_json__WEBPACK_IMPORTED_MODULE_9__);\n\nvar Editor =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  _inherits(Editor, _PureComponent);\n\n  function Editor() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Editor);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Editor)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"editor\", void 0);\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      value: initialValue\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"hasMark\", function (type) {\n      var value = _this.state.value;\n      return value.activeMarks.some(function (mark) {\n        return mark.type == type;\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"hasBlock\", function (type) {\n      var value = _this.state.value;\n      return value.blocks.some(function (node) {\n        return node.type == type;\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"ref\", function (editor) {\n      _this.editor = editor;\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onChange\", function (_ref) {\n      var value = _ref.value;\n      return _this.setState({\n        value: value\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onClickMark\", function (_ref2) {\n      var event = _ref2.event,\n          type = _ref2.type;\n      event.preventDefault();\n\n      _this.editor.toggleMark(type);\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onClickBlock\", function (_ref3) {\n      var event = _ref3.event,\n          type = _ref3.type;\n      event.preventDefault();\n\n      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),\n          editor = _assertThisInitialize.editor;\n\n      var value = editor.value;\n      var document = value.document; // Handle everything but list buttons.\n\n      if (type != 'bulleted-list' && type != 'numbered-list') {\n        var isActive = _this.hasBlock(type);\n\n        var isList = _this.hasBlock('list-item');\n\n        if (isList) {\n          editor.setBlocks(isActive ? 'paragraph' : type).unwrapBlock('bulleted-list').unwrapBlock('numbered-list');\n        } else {\n          editor.setBlocks(isActive ? 'paragraph' : type);\n        }\n      } else {\n        // Handle the extra wrapping required for list buttons.\n        var _isList = _this.hasBlock('list-item');\n\n        var isType = value.blocks.some(function (block) {\n          return !!document.getClosest(block.key, function (parent) {\n            return parent.type == type;\n          });\n        });\n\n        if (_isList && isType) {\n          editor.setBlocks('paragraph').unwrapBlock('bulleted-list').unwrapBlock('numbered-list');\n        } else if (_isList) {\n          editor.unwrapBlock(type == 'bulleted-list' ? 'numbered-list' : 'bulleted-list').wrapBlock(type);\n        } else {\n          editor.setBlocks('list-item').wrapBlock(type);\n        }\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"renderMarkButton\", function (_ref4) {\n      var type = _ref4.type,\n          icon = _ref4.icon;\n\n      var isActive = _this.hasMark(type);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onClick: function onClick(event) {\n          return _this.onClickMark({\n            event: event,\n            type: type\n          });\n        },\n        text: icon\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"renderBlockButton\", function (_ref5) {\n      var type = _ref5.type,\n          icon = _ref5.icon;\n\n      var isActive = _this.hasBlock(type);\n\n      if (['numbered-list', 'bulleted-list'].includes(type)) {\n        var _this$state$value = _this.state.value,\n            _document = _this$state$value.document,\n            blocks = _this$state$value.blocks;\n\n        if (blocks.size > 0) {\n          var parent = _document.getParent(blocks.first().key);\n\n          isActive = _this.hasBlock('list-item') && parent && parent.type === type;\n        }\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        onClick: function onClick(event) {\n          return _this.onClickBlock({\n            event: event,\n            type: type\n          });\n        },\n        text: icon\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(Editor, [{\n    key: \"render\",\n    value: function render() {\n      var value = this.state.value;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, this.renderMarkButton({\n        type: 'bold',\n        icon: 'B'\n      }), this.renderMarkButton({\n        type: 'italic',\n        icon: 'I'\n      }), this.renderMarkButton({\n        type: 'underlined',\n        icon: '_'\n      }), this.renderMarkButton({\n        type: 'code',\n        icon: '</>'\n      }), this.renderBlockButton({\n        type: 'heading-one',\n        icon: 'H1'\n      }), this.renderBlockButton({\n        type: 'heading-two',\n        icon: 'H2'\n      }), this.renderBlockButton({\n        type: 'block-quote',\n        icon: '\"'\n      }), this.renderBlockButton({\n        type: 'numbered-list',\n        icon: 'List'\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_2__[\"Editor\"], {\n        autofocus: true,\n        spellcheck: true,\n        defaultValue: initialValue,\n        onKeyDown: _utils__WEBPACK_IMPORTED_MODULE_8__[\"onKeyDown\"],\n        renderNode: _slate_types_block__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        renderMark: _slate_types_inline__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        onChange: this.onChange,\n        value: value,\n        ref: this.ref\n      }));\n    }\n  }]);\n\n  return Editor;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"PureComponent\"]);\n\nvar root = document.getElementById('root');\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Editor, null), root);\n\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ }),

/***/ "./src/slate-types/block.tsx":
/*!***********************************!*\
  !*** ./src/slate-types/block.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n/**\n * Render an HTML element (aka Slate node)\n */\nvar blockTypes = function blockTypes(props, _editor, next) {\n  var attributes = props.attributes,\n      children = props.children,\n      type = props.node.type;\n\n  switch (type) {\n    case 'block-quote':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", attributes, children);\n\n    case 'bulleted-list':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", attributes, children);\n\n    case 'heading-one':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", attributes, children);\n\n    case 'heading-two':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", attributes, children);\n\n    case 'heading-three':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", attributes, children);\n\n    case 'heading-four':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", attributes, children);\n\n    case 'heading-five':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", attributes, children);\n\n    case 'heading-six':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", attributes, children);\n\n    case 'list-item':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", attributes, children);\n\n    case 'horizontal-rule':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", _extends({}, attributes, {\n        style: {\n          borderTop: '5px solid cornflowerblue',\n          height: 10,\n          width: '100%',\n          display: 'block'\n        }\n      }), children);\n\n    default:\n      return next();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (blockTypes);\n\n//# sourceURL=webpack:///./src/slate-types/block.tsx?");

/***/ }),

/***/ "./src/slate-types/inline.tsx":
/*!************************************!*\
  !*** ./src/slate-types/inline.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar inline = function inline(props, _editor, next) {\n  var children = props.children,\n      type = props.mark.type,\n      attributes = props.attributes;\n\n  switch (type) {\n    case 'bold':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", attributes, children);\n\n    case 'code':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"code\", attributes, children);\n\n    case 'italic':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", attributes, children);\n\n    case 'underlined':\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"u\", attributes, children);\n\n    default:\n      {\n        return next();\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (inline);\n\n//# sourceURL=webpack:///./src/slate-types/inline.tsx?");

/***/ }),

/***/ "./src/utils.tsx":
/*!***********************!*\
  !*** ./src/utils.tsx ***!
  \***********************/
/*! exports provided: getBlockTypeFromCharacters, onKeyDown, onMark, onSpace, onBackspace, onEnter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBlockTypeFromCharacters\", function() { return getBlockTypeFromCharacters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onKeyDown\", function() { return onKeyDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onMark\", function() { return onMark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSpace\", function() { return onSpace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onBackspace\", function() { return onBackspace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onEnter\", function() { return onEnter; });\n/**\n * Get the block type for a series of auto-markdown shortcut `characters`.\n */\nvar getBlockTypeFromCharacters = function getBlockTypeFromCharacters(characters) {\n  switch (characters) {\n    case '*':\n    case '-':\n    case '+':\n      return 'list-item';\n\n    case '>':\n      return 'block-quote';\n\n    case '#':\n      return 'heading-one';\n\n    case '##':\n      return 'heading-two';\n\n    case '###':\n      return 'heading-three';\n\n    case '####':\n      return 'heading-four';\n\n    case '#####':\n      return 'heading-five';\n\n    case '######':\n      return 'heading-six';\n\n    case '---':\n      return 'horizontal-rule';\n    // case '`':\n    //   return 'code-inline';\n    // case '```':\n    //   return 'code-block';\n\n    default:\n      return null;\n  }\n};\n/**\n * On key down, check for our specific key shortcuts.\n */\n\nvar onKeyDown = function onKeyDown(event, editor, next) {\n  switch (event.key) {\n    case ' ':\n      return onSpace(event, editor, next);\n\n    case 'Backspace':\n      return onBackspace(event, editor, next);\n\n    case 'Enter':\n      return onEnter(event, editor, next);\n\n    case '`':\n      return onMark(event, editor, next);\n\n    default:\n      return next();\n  }\n};\nvar onMark = function onMark(event, editor, next) {\n  var addMark = editor.addMark;\n  event.preventDefault();\n\n  switch (event.key) {\n    case '`':\n      addMark('code');\n      break;\n\n    case '_':\n      addMark('italic');\n      break;\n\n    default:\n      return next();\n  }\n};\n/**\n * On space, if it was after an auto-markdown shortcut, convert the current\n * node into the shortcut's corresponding type.\n */\n\nvar onSpace = function onSpace(event, editor, next) {\n  var value = editor.value,\n      setBlocks = editor.setBlocks,\n      wrapBlock = editor.wrapBlock,\n      moveFocusToStartOfNode = editor.moveFocusToStartOfNode;\n  var _value$selection = value.selection,\n      start = _value$selection.start,\n      isExpanded = _value$selection.isExpanded,\n      startBlock = value.startBlock;\n  if (isExpanded) return next();\n  var chars = startBlock.text.slice(0, start.offset).replace(/\\s*/g, '');\n  var type = getBlockTypeFromCharacters(chars);\n  if (!type) return next();\n  if (type == 'list-item' && startBlock.type == 'list-item') return next();\n  if (type == 'code' && startBlock.type == 'code') return next();\n  event.preventDefault();\n  setBlocks(type);\n\n  if (type == 'list-item') {\n    wrapBlock('bulleted-list');\n  }\n\n  if (type == 'code') {\n    wrapBlock('code');\n  }\n\n  moveFocusToStartOfNode(startBlock).delete();\n};\n/**\n * On backspace, if at the start of a non-paragraph, convert it back into a\n * paragraph node.\n */\n\nvar onBackspace = function onBackspace(event, editor, next) {\n  var value = editor.value,\n      unwrapBlock = editor.unwrapBlock,\n      setBlocks = editor.setBlocks;\n  var _value$selection2 = value.selection,\n      isExpanded = _value$selection2.isExpanded,\n      start = _value$selection2.start,\n      startBlock = value.startBlock;\n  if (isExpanded) return next();\n  if (start.offset != 0) return next();\n  if (startBlock.type == 'paragraph') return next();\n  event.preventDefault();\n  setBlocks('paragraph');\n\n  if (startBlock.type == 'list-item') {\n    unwrapBlock('bulleted-list');\n  }\n};\n/**\n * On return, if at the end of a node type that should not be extended,\n * create a new paragraph below it.\n */\n\nvar onEnter = function onEnter(event, editor, next) {\n  var value = editor.value,\n      splitBlock = editor.splitBlock;\n  var _value$selection3 = value.selection,\n      start = _value$selection3.start,\n      end = _value$selection3.end,\n      isExpanded = _value$selection3.isExpanded,\n      startBlock = value.startBlock;\n  if (isExpanded) return next();\n  if (start.offset == 0 && startBlock.text.length == 0) return onBackspace(event, editor, next);\n  if (end.offset != startBlock.text.length) return next();\n\n  if (startBlock.type != 'heading-one' && startBlock.type != 'heading-two' && startBlock.type != 'heading-three' && startBlock.type != 'heading-four' && startBlock.type != 'heading-five' && startBlock.type != 'heading-six' && startBlock.type != 'block-quote' // startBlock.type != 'horizontal-rule'\n  ) {\n      return next();\n    }\n\n  event.preventDefault();\n  splitBlock(1).setBlocks('paragraph');\n};\n\n//# sourceURL=webpack:///./src/utils.tsx?");

/***/ })

},[["./src/index.tsx","runtime","vendors"]]]);