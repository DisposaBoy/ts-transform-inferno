var Inferno = require("inferno");
var createTextVNode = Inferno.createTextVNode;
var createVNode = Inferno.createVNode;
createVNode(1, "div", null, createTextVNode("1"), 2);
