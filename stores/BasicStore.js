var Dispatcher   = require('../dispatcher/Dispatcher')
  , EventEmitter = require('events').EventEmitter
  , Constants    = require('../constants/Constants')
  , assign       = require('lodash/object/assign')

var CHANGE_EVENT = 'change';

function get(url) {
  // Do something
};

var BasicStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.GET:
      get(action.url);
      break;
  }
});

module.exports = BasicStore;