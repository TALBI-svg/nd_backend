const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
    },
    content : {
        type: String,
        required: true,
        trim: true,
    },
    meta : {
        type: String,
        required: true,
        trim: true,
    },
    tags : [String],
    author : {
        type: String,
        default: 'Admin',
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    thumbnail: {
        type: Object,
        url: {
            type: URL,
            //required: true,
        },
        public_id: {
            type: String,
            //required: true,
        },
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', postSchema);