const course = require('../models/course');
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    index(req, res, next) {
        // course.create({
        //     name: 'Xây dựng web với NodeJS & ExpressJS',
        //     description: 'Xây dựng web trong thực tế với NodeJS & ExpressJS với cách chia sẻ chi tiết, tận tâm, dễ hiểu và chất giọng giàu sức sống của người chia sẻ',
        //     image: 'https://img.youtube.com/vi/z2f7RHgvddc/sddefault.jpg'
        // })
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
