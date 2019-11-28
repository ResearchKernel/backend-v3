const Researchpaper = require('../models/researchpapers')
module.exports = () => {
    const like = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            resolve(payload)
        } catch (error) {
            reject(error)
        }
    })
    const bulkImport = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            for (var i = 0; i < payload.length; i++) {
                const paper = new Researchpaper(payload[i])
                await paper.save()
            }
            resolve("Saved Papers")
        } catch (error) {
            reject(error)
        }
    })
    const getPaper = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const { paper_id, limit } = payload
            const paper = Researchpaper.find({ paper_id })
            resolve(paper)
        } catch (error) {
            reject(error)
        }
    })
    const postView = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const { _id } = payload
            Researchpaper.update({ _id: _id }, { $inc: { "views": 1 } }, { new: true })
            resolve("Added View count to the paper")

        } catch (error) {
            reject(error)
        }
    })
    const getView = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const { _id } = payload
            const paper = Researchpaper.find({ _id })
            resolve(paper)
        } catch (error) {
            reject(error)
        }
    })
    return {
        like,
        bulkImport,
        getPaper,
        postView,
        getView
    }
}