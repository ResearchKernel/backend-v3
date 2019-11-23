const userprofileService = require("../services/userprofile.service")()
module.exports = () => {
    const getUserProfile = async(req, res, next, { logger, db, client }) => {
        try {
            const payload = req.query
            const response = await userprofileService.getUserProfile(payload, logger, db)
            res.status(200).send({ status: 201, message: response })
        } catch (error) {
            next(error)
        }
    }
    const postUserProfile = async(req, res, next, { logger, db, client }) => {
        try {
            const payload = req.body
            const response = await userprofileService.postUserProfile(payload, logger, db)
            res.status(200).send({ status: 201, message: response })
        } catch (error) {
            next(error)
        }
    }
    const putUserProfile = async(req, res, next, { logger, db, client }) => {
        try {
            const payload = req.body
            const response = await userprofileService.putUserProfile(payload, logger, db)
            res.status(200).send({ status: 201, message: response })
        } catch (error) {
            next(error)
        }
    }
    return {
        getUserProfile,
        postUserProfile,
        putUserProfile
    }
}