"use strict";

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _icons = _interopRequireDefault(require("./icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const someCss = (0, _styledComponents.css)([" background:purple;"]);

var _StyledIcons = (0, _styledComponents.default)(_icons.default).withConfig({
  displayName: "code___StyledIcons",
  componentId: "sc-1wxehft-0"
})(["", ""], someCss);

const App1 = () => {
  return <_StyledIcons />;
};

var _StyledIconsFoo = (0, _styledComponents.default)(_icons.default.Foo).withConfig({
  displayName: "code___StyledIconsFoo",
  componentId: "sc-1wxehft-1"
})(["", ""], someCss);

const App2 = () => {
  return <_StyledIconsFoo />;
};

var _StyledIconsFooBar = (0, _styledComponents.default)(_icons.default.Foo.Bar).withConfig({
  displayName: "code___StyledIconsFooBar",
  componentId: "sc-1wxehft-2"
})(["", ""], someCss);

const App3 = () => {
  return <_StyledIconsFooBar />;
};
