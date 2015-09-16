
var Helper = require('../Helper');

Helper.addStyle('html, body { height: 100%; padding: 0; margin: 0; }');

var fs = require('fs');


var Modeler = require('bpmn-js/lib/Modeler');


describe('modeler / nyan version', function() {

  var diagram = fs.readFileSync(__dirname + '/diagram.bpmn', 'utf-8');


  function withModeler(config, fn) {

    return function(done) {

      var modeler = new Modeler(config);

      modeler.importXML(diagram, function(err) {
        if (err) {
          done(err);
        }

        modeler.invoke(fn);

        done();
      });

    };
  }

  describe('custom rules', function() {

    var customRulesModule = require('../../lib/rules');

    function inject(fn) {

      var config = {
        additionalModules: [ customRulesModule ]
      };

      return withModeler(config, fn);
    }


    it('should extend with custom rules', inject(function() {

    }));

  });


  describe('draw', function() {

    var drawModule = require('../../lib/draw');

    function inject(fn) {

      var config = {
        additionalModules: [ drawModule ]
      };

      return withModeler(config, fn);
    }


    it('should render cat', inject(function() {

    }));

  });


  describe('palette', function() {

    var paletteModule = require('../../lib/palette');

    function inject(fn) {

      var config = {
        additionalModules: [ paletteModule ]
      };

      return withModeler(config, fn);
    }


    it('should create cat from palette', inject(function() {

    }));

  });


  describe.only('combined', function() {

    var paletteModule = require('../../lib/palette');
    var drawModule = require('../../lib/draw');

    function inject(fn) {

      var config = {
        additionalModules: [ paletteModule, drawModule ]
      };

      return withModeler(config, fn);
    }


    it('should create cat from palette', inject(function() {

    }));

  });
});