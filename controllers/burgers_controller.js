var experess = require("express");
var router = experess.Router();

router.get ("/", function(req,res){
    res.render("index");
})

module.exports = router;