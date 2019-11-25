const researchpapersService = require("../services/researchpapers.service")()
module.exports = () => {
    const likePapers = async(req, res, next, { logger, db, client }) => {
        try {
            const paylaod = req.body;
            const response = await researchpapersService.like(paylaod, logger, db)
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
            const response = await researchpapersService.like(paylaod, logger, db)
            if (!response) {
                res.status(200).send({ status: 201, message: "TADA" })
            } else {
                res.status(200).send({ status: 400, message: "TADA" })
            }
        } catch (error) {
            next(error)
        }
    }
    return {
        likePapers,
        deleteLikePapers
    }
};