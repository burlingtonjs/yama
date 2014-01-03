'use strict';

var mongoose  = require('mongoose'),
    Thing     = mongoose.model('Thing'),
    Event     = mongoose.model('Event'),
    EventList = mongoose.model('EventList'),
    async = require('async');

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.events = function(req, res) {
  return Event.find(function(err, events) {
    if (!err) {
      return res.json(events);
    } else {
      return res.send(err);
    }
  });
};

exports.newEvent = function(req, res) {
  var event = new Event(req.body.event);

  return event.validate(function(err) {
    if (!err) {
      eventList.events.push(event);
      eventList.save(function(err, eventList) {
        res.json({ eventList: eventList });
      });
    } else {
      return res.json({ error: err });
    }
  });
};
