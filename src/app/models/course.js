const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
    {
        _id: Number,
        name: { type: String, required: true, default: '' },
        description: { type: String, default: '' },
        image: { type: String, default: '' },
        videolink: { type: String, required: true, default: '' },
        level: { type: String, default: '' },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true, _id: false },
);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
// ???
