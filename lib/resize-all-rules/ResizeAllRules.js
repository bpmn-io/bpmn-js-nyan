'use strict';

var RuleProvider = require('diagram-js/lib/features/rules/RuleProvider');

var inherits = require('inherits');


function ResizeAllRules(eventBus) {
  RuleProvider.call(this, eventBus);
}

inherits(ResizeAllRules, RuleProvider);

module.exports = ResizeAllRules;


ResizeAllRules.prototype.init = function() {

  this.addRule('shape.resize', 1500, function() {
    return true;
  });

};