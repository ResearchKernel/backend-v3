const mongo = require("mongoose");
const Schema = mongo.Schema;

const UserprofileSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
    bio: { type: String },
    researchField: { type: String },
    //  papers liked
    likedPapers: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    // disliked Papers
    dislikedPapers: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    // comments by user
    comments: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    // emotion 2
    two: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    // emotion 3
    three: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    // emotion 4
    four: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    // emotion 5
    five: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    sharedPapers: [{ type: Schema.Types.ObjectId, ref: 'researchpaper' }],
    profileImage: { url: String },
    location: { type: String },
    recommendations: [{ type: String, ref: 'researchpaper' }],
    organisation: { type: String },
});
/**
 * toJSON implementation
 */
UserprofileSchema.options.toJSON = {
    transform: function(doc, ret, options) {
        // ret.id = ret._id;
        // delete ret._id;
        delete ret.__v;
        return ret;
    }
};
module.exports = UserprofileSchema;