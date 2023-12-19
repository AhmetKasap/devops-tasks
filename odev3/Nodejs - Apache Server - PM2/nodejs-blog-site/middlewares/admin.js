const jwt = require('jsonwebtoken')
require('dotenv').config()


const authenticationToken = async (req,res,next) => {
    const token = req.cookies.jsonwebtoken   

    if (token) { 
        jwt.verify(token, process.env.JWT_SECRET, (err) => { 
            if(err) {
                res.redirect('/admin')
            }
            else{
                next()
            }
        })
    }
    else {
        res.redirect('/admin')
    }

}

module.exports =authenticationToken