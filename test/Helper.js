'use strict';

var fs = require('fs');

var diagramCSS = fs.readFileSync('node_modules/diagram-js/assets/diagram-js.css');
var bpmnCSS = fs.readFileSync('node_modules/bpmn-js/assets/bpmn-font/css/bpmn-embedded.css');


function addStyle(styleText) {

  var head = document.head;

  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.textContent = styleText;

  head.appendChild(styleElement);
}

module.exports.addStyle = addStyle;


// add initial style
addStyle(diagramCSS);
addStyle(bpmnCSS);