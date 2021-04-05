const course = require('../models/course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    storedCourses(req, res, next) {
        let courseQuery = course.find({});
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([courseQuery, course.countDocumentsDeleted()])
            .then(([courses, deletedcount]) => {
                res.render('me/stored-courses', {
                    deletedcount: deletedcount,
                    courses: multipleMongooseToObject(courses),
                });
                console.log(deletedcount);
            })
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
