const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: { type: String, required: true, default: '' },
        description: { type: String, default: '' },
        image: { type: String, default: '' },
        videolink: { type: String, required: true, default: '' },
        level: { type: String, default: '' },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
// ???
