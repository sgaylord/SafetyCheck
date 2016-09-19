// app/models/events.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var eventSchema = mongoose.Schema({

        EventName        : String,
        EventDate         : Date,
        EventDescription      : String

});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Event', eventSchema);


