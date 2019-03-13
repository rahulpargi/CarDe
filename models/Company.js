const mongoose = require('mongoose');





const CompanySchema = new mongoose.Schema({
    claim_adjustor_id:{
        type:String,
        required:true,
        unique:true
    },
    adjustorfirstname:{
        type:String,
        required:true,
        unique:true
    },
    adjustorlastname:{
        type:String,
        required:true,
        unique:true
    },
    adjustoremail:{
        type:String,
        required:true,
        unique:true 
    },
    adjustorphone:{
        type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not a valid phone number! try xxx-xxx-xxxx format`
        },
        required: [true, 'User phone number required']
    },
    admin:{
        type:Boolean,
        default:false
          
    },
    company_id:{
        type:String,
        required:true,
        unique:true  
    },
    adjustor_username:{
        type:String,
        required:true,
        unique:true  
    },
    adjustor_password:{
        type:String,
        required:true,
        unique:true  
    }
});

UserSchema.pre('save',function(next){
    //Checking if the document is new or a new password has been set
    if(this.isNew || this.isModified('adjustor_password')){
        const document = this;
        console.log(document)
        bcrypt.hash(document.adjustor_password,saltRounds,function(err,hashedPassword){
            if(err){
                next(err);
                console.log("called1")
            }else{
                console.log("called2")
                document.adjustor_password=hashedPassword;
                console.log("called3");
                next();
            }
        });
    }else{
        next();
    }
});


module.exports = mongoose.model('Company',CompanySchema);