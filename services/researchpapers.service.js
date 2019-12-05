const Researchpaper = require('../models/researchpapers')
const { Userprofile } = require('../models/index')
module.exports = () => {
    const likePapers = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const researchpaper = await Researchpaper.findById({ _id: payload.paper_id })
            const user = await Userprofile.findById({ _id: payload.user_id })
            if (researchpaper.likedBy.includes(payload.user_id)) {
                resolve("User has already liked this paper")
            } else if (researchpaper.dislikedBy.includes(payload.user_id)) {
                // devrease dislikes
                researchpaper.dislike--;
                // remove paper from disliked list
                const arrayIndex = researchpaper.dislikedBy.indexOf(payload.user_id)
                researchpaper.dislikedBy.splice(arrayIndex, 1);
                // Increase likes count
                researchpaper.likes++;
                // add paper in likedBy list
                researchpaper.likedBy.push(payload.user_id)
                await researchpaper.save()
                    // remove entry from user dislikedpapers
                const arrayIndexUser = researchpaper.dislikedPapers.indexOf(payload.paper_id)
                user.dislikedPapers.splice(arrayIndexUser, 1)
                    // add paper to likedPapers
                user.likedPapers.push(payload.paper_id)
                await user.save()
                resolve("Paper Liked !")
            } else {
                // incerease likes
                researchpaper.likes++;
                researchpaper.likedBy.push(payload.user_id)
                await researchpaper.save()
                    // push to userprofile
                user.likedPapers.push(payload.user_id)
                await user.save()
                resolve("Paper Liked !")
            }
        } catch (error) {
            reject(error)
        }
    })
    const dislikePapers = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const researchpaper = await Researchpaper.findById({ _id: payload.paper_id })
            const user = await Userprofile.findById({ _id: paylaod.user_id })
            if (user.dislikedBy.includes(user_id)) {
                resolve("User has already disliked this paper")
            } else if (user.likedBy.includes(user_id)) {
                // decrease likes
                researchpaper.like--;
                // remove user from likedBy
                const arrayIndex = researchpaper.likedBy.indexOf(user_id)
                researchpaper.likedBy.splice(arrayIndex, 1);
                // increase disliked
                researchpaper.dislikes++;
                researchpaper.dislikedBy.push(user_id)
                await researchpaper.save()
                    // add paper to likedPapers
                user.dislikedPapers.push(payload.paper_id)
                await user.save()
                resolve("Paper Disliked !")
            } else {
                researchpaper.dislikes++;
                researchpaper.dislikedBy.push(user_id)
                await researchpaper.save()
                resolve("Paper Disliked !")
            }
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
            const paper = Researchpaper.update({ _id: _id }, { $inc: { "views": 1 } }, { new: true })
                // resolve("Added View count to the paper")
            resolve(paper)
        } catch (error) {
            reject(error)
        }
    })
    const getView = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const { _id } = payload
            const paper = Researchpaper.find({ _id }, { views: 1, _id: 0 })
            resolve(paper)
        } catch (error) {
            reject(error)
        }
    })
    return {
        likePapers,
        dislikePapers,
        bulkImport,
        getPaper,
        postView,
        getView
    }
}