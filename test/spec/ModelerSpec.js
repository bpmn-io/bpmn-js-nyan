var Helper = require('../Helper');

Helper.addStyle('html, body { height: 100%; padding: 0; margin: 0; }');

Helper.addStyle('.icon-red { background: red !important; }');

var fs = require('fs');


var Modeler = require('bpmn-js/lib/Modeler');


describe('modeler / nyan version', function() {

  var diagram = fs.readFileSync(__dirname + '/diagram.bpmn', 'utf-8');


  function withModeler(config, fn) {

    return function(done) {

      var modeler = new Modeler(config);

      modeler.attachTo('body');

      modeler.importXML(diagram, function(err) {
        if (err) {
          done(err);
        }

        modeler.invoke(fn);

        done();
      });

    };
  }


  describe('just modeler', function() {

    function inject(fn) {
      return withModeler({}, fn);
    }


    it('should allow me to render a process', inject(function() {

    }));

  });


  describe('custom rules (resize all)', function() {

    var customRulesModule = require('../../lib/resize-all-rules');

    function inject(fn) {

      var config = {
        additionalModules: [ customRulesModule ]
      };

      return withModeler(config, fn);
    }


    it('should allow to resize all elements', inject(function() {

    }));

  });


  describe('custom colors', function() {

    var colorPickerModule = require('../../lib/color-picker');

    function inject(fn) {

      var config = {
        additionalModules: [ colorPickerModule ]
      };

      return withModeler(config, fn);
    }


    it('should allow to resize all elements', inject(function() {

    }));

  });


  describe('draw', function() {

    var nyanDrawModule = require('../../lib/nyan/draw');

    function inject(fn) {

      var config = {
        additionalModules: [ nyanDrawModule ]
      };

      return withModeler(config, fn);
    }


    it('should render cat', inject(function() {

    }));

  });


  describe('palette', function() {

    var nyanPaletteModule = require('../../lib/nyan/palette');

    function inject(fn) {

      var config = {
        additionalModules: [ nyanPaletteModule ]
      };

      return withModeler(config, fn);
    }


    it('should create cat from palette', inject(function() {

    }));

  });


  describe.only('combined', function() {

    var nyanPaletteModule = require('../../lib/nyan/palette');
    var nyanDrawModule = require('../../lib/nyan/draw');
    var colorPickerModule = require('../../lib/color-picker');
    var resizeAllModule = require('../../lib/resize-all-rules');

    function inject(fn) {

      var config = {
        additionalModules: [
          nyanPaletteModule,
          nyanDrawModule,
          colorPickerModule,
          resizeAllModule
        ]
      };

      return withModeler(config, fn);
    }


    it('should create cat from palette', inject(function() {

    }));

  });
});