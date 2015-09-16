
var inherits = require('inherits');

var BaseRenderer = require('diagram-js/lib/draw/BaseRenderer');

var is = require('bpmn-js/lib/util/ModelUtil').is;

var Cat = require('../cat');


function NyanRender(eventBus) {
  BaseRenderer.call(this, eventBus, 1500);

  this.canRender = function(element) {
    return is(element, 'bpmn:ServiceTask');
  };


  this.drawShape = function(parent, shape) {
    var url = Cat.dataURL;

    return parent.image(url, 0, 0, shape.width, shape.height);
  };
}

inherits(NyanRender, BaseRenderer);

module.exports = NyanRender;