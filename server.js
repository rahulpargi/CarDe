const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const data = require('./routes/data')


//Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, './client/build')));


app.use('/api/data',data)

//catch 404 and forward to error handler
app.use((req,res,next)=>{
    var err = new Error('Not Found');
    err.status=404;
    next(err);

});


//error handler
app.use((err,req,res,next)=>{
    //set locals, proving error only in development

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err :{};


    //render error page
    res.status(err.status||500);
    //res.render('error');
})







module.exports= app;