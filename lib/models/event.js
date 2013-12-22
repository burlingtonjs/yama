'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema
var EventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  location: String,
  time: Date,
  registration_url: String,
  published: {
    type: Boolean,
    default: false
  },
  presenters: [{
    name: {
      type: String
    },
    blurb: {
      type: String
    },
    image: String,
    slides_url: String,
    source_code_url: String
  }],
  sponsors: [{
    name: String,
    image: String,
    blurb: String
  }],
  created_at: {
    type: Date,
    default: Date.now
  }
});

var EventListSchema = new Schema({
  events: [EventSchema]
});

mongoose.model('Event', EventSchema);
mongoose.model('EventList', EventListSchema);
