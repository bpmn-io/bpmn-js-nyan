var diagramCSS = require('diagram-js/assets/diagram-js.css');
var bpmnFontCSS = require('bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css');


export function addStyle(styleText) {

  var head = document.head;

  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.textContent = styleText;

  head.appendChild(styleElement);
}

module.exports.addStyle = addStyle;


// add initial style
addStyle(diagramCSS);
addStyle(bpmnFontCSS);