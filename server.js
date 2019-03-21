const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware')



const mongoose = require('mongoose');
const mongo_uri = 'mongodb://localhost:27017/cardeeb';
const secret = 'secret';


mongoose.connect(mongo_uri,function(err){
    if(err){
        throw err;
    }else{
        console.log('Connected to database');
    }
})


//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));
// app.use(function(req,res,next){

// })

//Getting data from database
app.get('/api/getData',function(req,res){
    User.findOne({"claim_adjustor_id" : "ABA23"},function(err,user){
        if(err) throw err;
        else if(!user){
            res.status(500)
            .send("No User Found Try Again")
        }else{
            console.log(user);
        }
       
    })
})


//POST Router to register user
app.post('/api/register',function(req,res){
    console.log(req.body)
    const {claim_adjustor_id,adjustorfirstname,adjustorlastname,adjustoremail,adjustorphone,admin,company_id,adjustor_username,adjustor_password} = req.body;
    const user = new User({ claim_adjustor_id,adjustorfirstname,adjustorlastname,adjustoremail,adjustorphone,admin,company_id,adjustor_username,adjustor_password} );
    user.save(function(err){
        if(err){
            console.log(err)
            res.status(500)
            .send("Error Registering new Adjustor please try again");
        }else{
            res.status(200).send("Welcome you have successfully registered");
        }
    })
});

app.post('/api/authenticate',function(req,res){
    
    const {adjustoremail,adjustor_password} = req.body;
    console.log(adjustoremail,adjustor_password)
    
    User.findOne({adjustoremail},function(err,user){
        if(err){
            console.error(err);
            res.status(500)
            .json({error:'Internal error finding  please try again'});
        }else if(!user){
            res.status(401)
            .json({
                error:"Incorrect Email or Password"
            });
        }else{
            
            user.isCorrectPassword(adjustor_password,function(err,same){
                if(err){
                   console.log(err)
                    res.status(500)
                    .json({
                        error:"Internal error please try again"
                    });
                    console.log('inside---------------------------')
                }else if(!same){
                   
                    res.status(401)
                    .json({
                        error:'Incorrect Email or Password'
                    })
                }else{
                    //Issue Token
                    console.log('inside---------------------------ss')
                    const payload = {adjustoremail};
                    const token = jwt.sign(payload,secret,{
                        expiresIn:60*60
                    });
                    res.cookie('token',token,{httpOnly:true})
                    .sendStatus(200);

                }
            })
        }
    })
})
app.get('/api/profile',withAuth,function(req,res){
    //const a  = req.adjustoremail
    console.log( req.adjustoremail )
  
    res.status(200).send("Success");
});
app.get('/api/view',withAuth,function(req,res){
   
    res.status(200).send("Success");
});
app.get('/api/create',withAuth,function(req,res){
    res.status(200).send("Success");
});
//error handler
app.use((err,req,res,next)=>{
    //set locals, proving error only in development

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err :{};


    //render error page
    res.status(err.status||500);
    //res.render('error');
});


//Checking authentication for front end
app.get('/checkToken',withAuth,function(req,res){
    res.sendStatus(200);
});
app.get('/logout',function(req,res){
    let cookie = req.cookies;
    res.clearCookie('cookie.token')
    
    res.sendStatus(200);
})


//Error handling
app.get('*', function(req, res){
   
    res.status(404).send('Not Found');

});








module.exports= app;