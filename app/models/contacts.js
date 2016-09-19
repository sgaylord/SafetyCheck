// app/models/contacts.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var contactSchema = mongoose.Schema({

        FirstName        : String,
        LastName         : String,
        PhoneNumber         : String

});

// methods ======================

function AddNew(data, callback) {

    //Load the new contact to the db
    var Contact = mongoose.model('Contact', contactSchema);

//    var newContact = new Contact(data);

    // save the user
//    newContact.save(function(err) {
//        if (err)
//            throw err;
//        callback();
//    });







    Contact.collection.insert(data, { ordered: false }, function(err, service) {
        if (err) return callback(err);
        callback();
    }); 

};

// create the model for users and expose it to our app
module.exports = mongoose.model('Contact', contactSchema);
module.exports.AddNew = AddNew;
