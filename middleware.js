const jwt = require('jsonwebtoken');
const secret = 'secret';

const withAuth = function(req,res,next){
    const token = 
    req.body.token ||
    req.query.token ||
    req.header['x-access-token'] ||
    req.cookies.token;

    if(!token){
        res.status(401).send('Unauthorized: No token provided');
    }else{
        jwt.verify(token,secret,function(err,decoded){
            if(err){
                res.status(401).send('Unauthorized: Invalid Token');
            }else{
                req.adjustoremail = decoded.email;
                next();
            }
        })
    }

}


module.exports = withAuth;