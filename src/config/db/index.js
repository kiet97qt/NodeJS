const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connect Sucessfully !!!');
    } catch (error) {
        console.log('Connect failure !!!');
    }
}

module.exports = { connect };
