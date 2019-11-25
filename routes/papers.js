const express = require("express");
const router = express.Router();

const researchpapersController = require("../controllers/researchpapers.controller")()

module.exports = ({ client, db, logger }) => {
    router
        .route("/like")
        .post((req, res, next) => researchpapersController.likePapers(req, res, next, { logger, client, db }))
        .delete((req, res, next) => researchpapersController.deleteLikePapers(req, res, next, { logger, client, db }))
    router
        .route("/dislike")
        .post((req, res, next) => researchpapersController.dislike(req, res, next, { logger, client, db }))
        .delete((req, res, next) => researchpapersController.deleteDislike(req, res, next, { logger, client, db }))
    router
        .route("/comment")
        .post((req, res, next) => researchpapersController.comment(req, res, next, { logger, client, db }))
        .get((req, res, next) => researchpapersController.getComment(req, res, next, { logger, client, db }))
        .delete((req, res, next) => researchpapersController.deleteComment(req, res, next, { logger, client, db }))
    router
        .route("/share")
        .post((req, res, next) => researchpapersController.share(req, res, next, { logger, client, db }))
    router
        .route("/bulk-import")
        .post((req, res, next) => researchpapersController.bulkImport(req, res, next, { logger, client, db }))
        .get((req, res, next) => researchpapersController.getPaper(req, res, next, { logger, client, db }))
    return router
}