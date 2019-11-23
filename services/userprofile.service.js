const { User, Userprofile } = require('../models/index')

module.exports = () => {
    /**
     * get userprofile pupulate with username with usertype
     */
    const getUserProfile = (payload, logger, db) => new Promise(async(resolve, reject) => {
            try {
                const { id } = payload
                const response = await Userprofile.findById(id).populate('User')
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
        /**
         * update userprofile with its like, comment and share etc.
         */
    const postUserProfile = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const { user_id, bio, researchField, likedPapers, dislikedPapers, comments, two, three, four, five, profileImage, location, recommendations, organisation } = payload
            // get user
            const userResponse = await User.findById(user_id)
                // create userprofile object
            const userprofile = new Userprofile({ user_id, bio, researchField, likedPapers, dislikedPapers, comments, two, three, four, five, profileImage, location, recommendations, organisation })
                // assign the user to userprofile.
            userprofile.user_id = userResponse
            const response = await userprofile.save()
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
    const putUserProfile = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            const { id } = payload
            // find user profile
            let userprofileResponse = Userprofile.findById(id)
                // update user profile.
            if (userprofileResponse) {
                const updatedUserprofile = userprofileResponse.update(payload)
                resolve("User Successfully Updated")
            } else {
                reject("User Profile not found!")
            }
        } catch (error) {
            reject(error)
        }
    })
    return {
        getUserProfile,
        postUserProfile,
        putUserProfile
    }
}