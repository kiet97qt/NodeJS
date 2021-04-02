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

    edit(req, res, next) {
        course
            .findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    update(req, res, next) {
        course
            .updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[DELETE] /courses/:id
    delete(req, res, next) {
        course
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new CoursesController();
