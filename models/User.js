const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const secret = 'secret';

//Image Schema
const ImageSchema = ({
    claim_reference_no:{
        type:String,
        required:true,
       
    },
    vin_number:{
        type:String,
        required:true,
       
    },
   
    make:{
        type:String,
        required:true,
       
    },
    year:{
        type:String,
        required:true,
        
    },
    image_name:{
        type:String,
        required:true,
        
    },
    image_type:{
        type:String,
        required:true,
        
    },
    date_uploaded:{
        type:String,
        required:true,
        
    },
   
    damaged_parts:{
        type:String,
        required:true,
         
    },
    
   
    severity_of_damage:{
        type:String,
        required:true,
          
    },
    acurracy:{
        type:String,
        required:true,
          
    },
    imagePath:{
        type:String,
        required:true
    }
    
})

//Adjustor  Schema
const UserSchema = new mongoose.Schema({
    claim_adjustor_id:{
        type:String,
        required:true,
        
    },
    adjustorfirstname:{
        type:String,
        required:true,
        
    },
    adjustorlastname:{
        type:String,
        required:true,
        
    },
    adjustoremail:{
        type:String,
        required:true,
         
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
         
    },
    adjustor_username:{
        type:String,
        required:true,
      
    },
    adjustor_password:{
        type:String,
        required:true,
          
    },
    images:[ImageSchema]
});

//Company Schema
const CompanySchema=({
    company_id:{
        type:String,
        required:true,
        
    },
    company_name:{
        type:String,
        required:true,
        
    },
    company_address:{
        type:String,
        required:true,
        
    },
    company_zipcode:{
        type:String,
        required:true,
        
    },
    company_country:{
        type:String,
        required:true,
        
    },
    adjustors:[UserSchema]
})





UserSchema.pre('save',function(next){
    //Checking if the document is new or a new password has been set
    if(this.isNew || this.isModified('adjustor_password')){
        const document = this;
        console.log(document)
        bcrypt.hash(document.adjustor_password,saltRounds,function(err,hashedPassword){
            if(err){
                next(err);
             
            }else{
                
                document.adjustor_password=hashedPassword;
                
                next();
            }
        });
    }else{
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(adjustor_password, callback){
  
    bcrypt.compare(adjustor_password, this.adjustor_password, function(err, same) {
      if (err) {
        callback(err);
      } else {
        callback(err, same);
      }
    });
  }

module.exports = mongoose.model('User',UserSchema);