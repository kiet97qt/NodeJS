const course = require('../models/course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    storedCourses(req, res, next) {
        course
            .find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
    trashCourses(req, res, next) {
        course
            .findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
module.exports = new MeController();
