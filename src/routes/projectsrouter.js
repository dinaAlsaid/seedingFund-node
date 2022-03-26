'use strict';

const express = require('express');
const router = express.Router();
const bearerAuth = require('../middleware/bearer');//middleware to check for token 
const project = require('../collections/project-collection.js');

router.get('/projects',bearerAuth, getAllUserProjects);
// router.get('/project/:id',bearerAuth, getProjectById);

router.post('/project',bearerAuth,  addNewProject);

function addNewProject(req, res) {
  project.newProject(req.body,req.user)
  .then((data) => {
    res.status=200;
    res.message="project added successfuly";
    res.json({ data });
  }).catch(err=>err.message);
}

function getAllUserProjects(req, res) {
  project.findUserProjects(req.user).then((data)=>{

    res.json({ data });
  })

}

module.exports = router;
