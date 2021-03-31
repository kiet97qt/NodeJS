const course = require('../models/course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {
        course
            .find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
