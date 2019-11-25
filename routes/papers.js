const express = require("express");
const router = express.Router();

const researchpapersController = require("../controllers/researchpapers.controller")()

module.exports = ({ client, db, logger }) => {
    router
        .route("/like")
        .post((req, res, next) => researchpapersController.like(req, res, next, { logger, client, db }))
        .delete((req, res, next) => researchpapersController.like(req, res, next, { logger, client, db }))
    router
        .route("/comment")
        .post((req, res, next) => researchpapersController.like(req, res, next, { logger, client, db }))
        .get((req, res, next) => researchpapersController.like(req, res, next, { logger, client, db }))
        .delete((req, res, next) => researchpapersController.like(req, res, next, { logger, client, db }))
    router
        .route("/share")
        .post((req, res, next) => researchpapersController.like(req, res, next, { logger, client, db }))
    return router
}