const { responseTemplate } = require('./utilities')

module.exports = (err, req, res, next) => {
    console.log(err);
    // if user register the same email
    if(err.code === 11000) {
        res.status(400).json(
            responseTemplate(
                'Failed',
                'Email already used.',
                null
            )
        )
    }
    // if user doesnt provide the requiref field when register their account
    if(err.name === 'ValidationError') {
        res.status(400).json(
            responseTemplate(
                'Failed',
                err._message,
                Object.values(err.errors).map(field => {
                    return { [field.path]: field.message }
                })
            )
        )
    }
    res.status(500).json({ err })
}