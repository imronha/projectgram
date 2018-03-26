const express = require('express'); //Express server
const router = express.Router();
const mongoose = require('mongoose');
const project = require('../models/project'); // References project.js

const db = "mongodb://imronha:i6247895@ds123929.mlab.com:23929/projectgram";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log('Connection Error');
    }
})

router.get('/projects', function(req,res){
    console.log('Requesting projects');
    project.find({})
        .exec(function(err, projects) {
            if (err) {
                console.log('Error getting projects');
            } else {
                res.json(projects);
                console.log(projects);
            }
        })
})

// Allows server.js to access api
module.exports = router;
