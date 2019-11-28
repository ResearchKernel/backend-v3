const researchpapersService = require("../services/researchpapers.service")()
module.exports = () => {
    /**
     * Like APIs
     */
    const likePapers = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.body;
            const response = await researchpapersService.likePapers(paylaod, logger, db)
            if (!response) {
                res.status(200).send({ status: 201, message: "TADA" })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    const deleteLikePapers = async(req, res, next, { logger, db, client }) => {
            try {
                const paylaod = req.body;
                const response = await researchpapersService.deleteLikePapers(paylaod, logger, db)
                if (!response) {
                    res.status(200).send({ status: 201, message: "TADA" })
                } else {
                    res.status(200).send({ status: 400, message: "TADA" })
                }
            } catch (error) {
                next(error)
            }
        }
        /**
         * Dislike APIs
         */
    const dislike = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.body;
            const response = await researchpapersService.dislike(paylaod, logger, db)
            if (!response) {
                res.status(200).send({ status: 201, message: "TADA" })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    const deleteDislike = async(req, res, next, { logger, db, client }) => {
            try {
                const paylaod = req.body;
                const response = await researchpapersService.deleteDislike(paylaod, logger, db)
                if (!response) {
                    res.status(200).send({ status: 201, message: "TADA" })
                } else {
                    res.status(200).send({ status: 400, message: "TADA" })
                }
            } catch (error) {
                next(error)
            }
        }
        /**
         * comments APIs
         */
    const comment = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.body;
            const response = await researchpapersService.comment(paylaod, logger, db)
            if (!response) {
                res.status(200).send({ status: 201, message: "TADA" })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    const getComment = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.body;
            const response = await researchpapersService.getComment(paylaod, logger, db)
            if (!response) {
                res.status(200).send({ status: 201, message: "TADA" })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    const deleteComment = async(req, res, next, { logger, db, client }) => {
            try {
                const paylaod = req.body;
                const response = await researchpapersService.deleteComment(paylaod, logger, db)
                if (!response) {
                    res.status(200).send({ status: 201, message: "TADA" })
                } else {
                    res.status(200).send({ status: 400, message: "TADA" })
                }
            } catch (error) {
                next(error)
            }
        }
        /**
         * Share APIs
         */

    const share = async(req, res, next, { logger, db, client }) => {
            try {
                const paylaod = req.body;
                const response = await researchpapersService.share(paylaod, logger, db)
                if (!response) {
                    res.status(200).send({ status: 201, message: "TADA" })
                } else {
                    res.status(200).send({ status: 400, message: "TADA" })
                }
            } catch (error) {
                next(error)
            }
        }
        /**
         * Bulk import APIs
         */
    const bulkImport = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.body;
            const response = await researchpapersService.bulkImport(paylaod, logger, db)
            if (response) {
                res.status(200).send({ status: 201, message: response })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    const getPaper = async(req, res, next, { logger, db, client }) => {
            try {
                const paylaod = req.query;
                const response = await researchpapersService.getPaper(paylaod, logger, db)
                if (response) {
                    res.status(200).send({ status: 201, message: response })
                } else {
                    res.status(200).send({ status: 400, message: "TADA" })
                }
            } catch (error) {
                next(error)
            }
        }
        /**
         * Views APIs
         */
    const postView = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.query;
            const response = await researchpapersService.postView(paylaod, logger, db)
            if (response) {
                res.status(200).send({ status: 201, message: response })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    const getView = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.query;
            const response = await researchpapersService.getView(paylaod, logger, db)
            if (response) {
                res.status(200).send({ status: 201, message: response })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    return {
        likePapers,
        deleteLikePapers,
        dislike,
        deleteDislike,
        comment,
        getComment,
        deleteComment,
        share,
        bulkImport,
        getPaper,
        postView,
        getView
    }
};