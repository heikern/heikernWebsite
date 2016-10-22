var data = require('../resume.json');

module.exports = (req,res) => {
    res.status(200).json({data});
};