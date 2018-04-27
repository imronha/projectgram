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

router.get('/details/:id', function(req,res){
    console.log('Requesting project');
    project.findById(req.params.id)
        .exec(function(err, project) {
            if (err) {
                console.log('Error getting project');
            } else {
                res.json(project);
                console.log(project);
            }
        })
})

router.post('/projects', function(req,res){
    console.log('Posting a Project');
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.url);
    console.log(req.body.description);
    var newProject = new project();
    console.log('New project being added is:', newProject);
    newProject.title = req.body.title;
    newProject.url = req.body.url;
    newProject.description = req.body.description;
    newProject.save(function(err, addedProject){
        if (err){
            console.log('Error adding project')
        } else {
            res.json(addedProject);
        }
    })

})

// Allows server.js to access api
module.exports = router;
