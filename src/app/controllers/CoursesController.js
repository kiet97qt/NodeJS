const course = require('../models/course');
const { mongooseToObject } = require('../../util/mongoose');
class CoursesController {
    show(req, res, next) {
        course
            .findOne({
                slug: req.params.slug,
            })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videolink}/sddefault.jpg`;
        // course.create(formData, (err, small) => {
        //     if (err) return handleError(err);
        // });
        const courseNew = new course(formData);
        courseNew
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
        //res.send('Saved Sucessfully')
    }
}
module.exports = new CoursesController();
