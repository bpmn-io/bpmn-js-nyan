
var inherits = require('inherits');

var BaseRenderer = require('diagram-js/lib/draw/BaseRenderer');

var is = require('bpmn-js/lib/util/ModelUtil').is;

var Cat = require('../cat');

var svgAppend = require('tiny-svg/lib/append'),
    svgCreate = require('tiny-svg/lib/create');


function NyanRender(eventBus) {
  BaseRenderer.call(this, eventBus, 1500);

  this.canRender = function(element) {
    return is(element, 'bpmn:ServiceTask');
  };


  this.drawShape = function(parent, shape) {
    var url = Cat.dataURL;

    var catGfx = svgCreate('image', {
      x: 0,
      y: 0,
      width: shape.width,
      height: shape.height,
      href: url
    });

    svgAppend(parent, catGfx);

    return catGfx;
  };
}

inherits(NyanRender, BaseRenderer);

module.exports = NyanRender;
