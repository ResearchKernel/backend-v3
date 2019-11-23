const express = require("express");
const router = express.Router();

const researchpapersController = require("../controllers/researchpapers.controller")()

module.exports = ({ client, db, logger }) => {
    router
        .route("/like")
        .post((req, res, next) => researchpapersController.like(req, res, next, { logger, client, db }))

    return router
}