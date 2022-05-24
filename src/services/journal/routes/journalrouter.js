"use strict";

const express = require("express");
const router = express.Router();
const BearerMW = require("../../../middleware/bearer");
const modelFinder = require("../../../middleware/modelFinder");

/** %baseUrl%/journal/:model
 * available endpoints:
 * %baseUrl%/journal/todo
 */
router.param("model", modelFinder);

//#region ----- methods-------
router.post("/:model", BearerMW, postHandler); //add a new record
router.get("/:model", BearerMW, getAllHandler); //get all records
router.get("/:model/:id", BearerMW, getByIdHandler); //get a specific record
router.put("/:model/:id", BearerMW, updateHandler); //update a record
router.delete("/:model/:id", BearerMW, deleteHandler); //delete a specific record

//#endregion

//#region ----- handlers-------
function postHandler(req,res){
    req.model
    .create(record)
    .then((rec) => {
      res.status(200).json(rec);
    })
    .catch((err) => {
      console.error(err.message);
    });

}

function getAllHandler(req,res){

}

function getByIdHandler(req,res){

}

function updateHandler(req,res){

}

function deleteHandler(req,res){

}

//#endregion
