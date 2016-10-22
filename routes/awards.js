var data = require('../resume.json')

award = {
    "all": (req,res)=>{
        var awards = data.awards;
        res.status(200).json({awards})},
    "single": (req,res)=>{
        var awardId = req.params.id*1;
        var award = data.awards.find(n=>n.id===awardId);
        res.status(200).json({award});
    }
}

module.exports = award;
