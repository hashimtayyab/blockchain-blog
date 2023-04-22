const router = require("express").Router();
const User = require("../modals/User");
const bcrypt = require("bcrypt");

router.post('/login', async(req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user){ 
            return res.status(400).json("Username does not exist");
        }
        const validate = await bcrypt.compare(req.body.password, user.password);
        if(!validate){
            return res.status(400).json("Wrong Password");
        }
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router