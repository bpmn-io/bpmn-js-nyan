'use strict';

var inherits = require('inherits');

var BpmnRenderer = require('bpmn-js/lib/draw/BpmnRenderer');

var is = require('bpmn-js/lib/util/ModelUtil').is;


function ColoredRenderer(eventBus, styles, pathMap) {
  BpmnRenderer.call(this, eventBus, styles, pathMap, 1400);

  this.canRender = function(element) {
    return is(element, 'bpmn:BaseElement') && element.color;
  };

  this.drawShape = function(parent, shape) {

    var bpmnShape = this.drawBpmnShape(parent, shape);

    bpmnShape.attr({ fill: shape.color });

    return bpmnShape;
  };
}

inherits(ColoredRenderer, BpmnRenderer);

ColoredRenderer.prototype.drawBpmnShape = BpmnRenderer.prototype.drawShape;

module.exports = ColoredRenderer;