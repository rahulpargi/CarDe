const JWTStrategy  = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Ajuster = mongoose.model('adjuster');
const opts={};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';


module.exports = passport =>{
    passport.use(new JWTStrategy(opts,(jwt_payload,done)=>{
        Adjuster.findById(jwt_payload.id)
        .then(adjuster=>{
            if(adjuster){
                return done(null,adjuster);
            }
            return done(null,adjuster);

        })
        .catch(err=>console.error(err));
    }))
}


