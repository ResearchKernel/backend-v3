module.exports = () => {
    const like = (payload, logger, db) => new Promise(async(resolve, reject) => {
        try {
            resolve(payload)
        } catch (error) {
            reject(error)
        }
    })
    return {
        like,
    }
}