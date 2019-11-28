const mongo = require("mongoose");
const Schema = mongo.Schema;

const ResearchpaperSchema = new Schema({
    paper_id: {
        type: String,
        required: "Can't insert papers without it's id.",
    },
    // likes by users
    likes: { type: Number, default: 0 },
    likedBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    //  dislike by users
    dislikes: { type: Number, default: 0 },
    dislikedBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    // emotion 2
    two: { type: Number, default: 0 },
    twoBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    //  reverse[disliked] emotion 2
    revtwo: { type: Number, default: 0 },
    revtwoBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    // emotion 3
    three: { type: Number, default: 0 },
    threeBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    // rev emotion 3
    revthree: { type: Number, default: 0 },
    revthreeBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    // emotion 4
    four: { type: Number, default: 0 },
    fourBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    // rev emotion 4
    revfour: { type: Number, default: 0 },
    revfourBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    // emotion 5
    five: { type: Number, default: 0 },
    fiveBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    //  rev emotion 5
    revfive: { type: Number, default: 0 },
    revfiveBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
    // comment count
    commentsCount: { type: Number, default: 0 },
    // comments
    comments: [{
        comments: { type: String },
        user: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }],
        timestamp: Date
    }],
    //  shared count
    shares: { type: Number, default: 0 },
    //  shared by users
    sharedBy: [{
        platform: { type: String },
        user: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }]
    }],
    views: { type: Number, default: 0 },
    viewedBy: [{ type: Schema.Types.ObjectId, ref: 'userprofile' }]
});
const Researchpaper = mongo.model('researchpaper', ResearchpaperSchema);


module.exports = Researchpaper;