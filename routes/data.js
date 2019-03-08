const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const passport = require('passport');
const validataRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const Adjustor = require('../models/Adjustor');


//Get Home Page
router.get('/',(req,res,next)=>{
    res.send('Hello')
});

router.post('/register',(req,res)=>{
    const {errors,invalid} = validataRegisterInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    Adjustor.findOne({
        email:req.body.adjustoremail
    }).then(adjustor=>{
        if(adjustor){
            return res.status(400).json({
                email:'Email already exists'
        });
        }else{
            const newAdjustor = new Adjustor({
                claim_adjustor_id:req.body.claim_adjustor_id,
                adjustorfirstname:req.body.adjustorfirstname,
                adjustorlastname:req.body.adjustorlastname,
                adjustoremail:req.body.adjustoremail,
                adjustorphone:req.body.adjustorphone,
                admin:req.body.admin,
                company_id:req.body.company_id,
                adjustor_username:req.body.adjustor_username,
                adjustor_password:req.body.adjustor_password
            });
            bcrypt.genSalt(10,(err,salt)=>{
                if(err) console.error('There was an error',err);
                else{
                    bcrypt.hash(newAdjustor.password,salt,(err,hash)=>{
                        if(err) console.error('There was an error',err);
                        else{
                            newAdjustor.password=hash;
                            newAdjustor.save()
                            .then(adjustor=>{
                                res.json(adjustor)
                            });

                        }
                    })
                }
            });
        }

    });

});

router.post('/login',(req,res)=>{
    const {errors,isValid} = validateLoginInput(req.body);

    if(!isValid){
        return res.json(400).json(errors);
    }

    const email = req.body.adjustoremail;
    const password = req.body.adjustor_password;

    Adjustor.findOne({email})
    .then(adjustor=>{
        if(!adjustor){
            errors.email = 'Adjustor not found';
            return res.status(400).json(errors);
        }
        bcrypt.compare(password,adjustor.password)
        .then(isMatch=>{
            if(isMatch){
                const payload={
                    id: adjustor.id,
                    name:adjustor_username,

                }
                jwt.sign(payload,'secret',{
                    expiresIn:3600
                },(err,token)=>{
                    if (err) console.error('There is some error in token',err);
                    else{
                        res.json({
                            sucess:true,
                            toke:`Bearer${token}`
                        })
                    }
                })
            }else{
                errors.adjustor_password = 'Incorrect Password';
                return res.status(400).json(errors);
            }
        })
    })
});

router.get('/me',passport.authenticate('jwt',{session:false},(req,res)=>{
    return res.json({
        id:req.adjustor.claim_adjustor_id,
        name:req.author.name,
        email:req.user.email
    })
}))


module.exports = router;