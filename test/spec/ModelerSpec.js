import {
  addStyle
} from '../Helper';

addStyle(`
  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    padding: 10px;
  }

  .icon-red {
    background: red !important;
  }

  .bjs-container {
    border: solid 2px #CCC;
  }

  .bjs-container:not(:last-child) {
    margin-bottom: 10px;
  }
`);

import Modeler from 'bpmn-js/lib/Modeler';

import customRulesModule from '../../lib/resize-all-rules';

import colorPickerModule from '../../lib/color-picker';

import nyanDrawModule from '../../lib/nyan/draw';
import nyanPaletteModule from '../../lib/nyan/palette';

import resizeAllModule from '../../lib/resize-all-rules';


describe('modeler / nyan version', function() {

  var diagram = require('./diagram.bpmn');


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

    function inject(fn) {

      var config = {
        additionalModules: [ nyanPaletteModule ]
      };

      return withModeler(config, fn);
    }


    it('should create cat from palette', inject(function() {

    }));

  });


  describe('combined', function() {

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