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
    automobile_reference_no:{
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
    file_location:{
        type:String,
        required:true,
          
    },
    data_uploaded:{
        type:Date,
        required:true,
        
    },
    
    image_type:{
        type:String,
        required:true,
        
    },
    
    part_reference_no:{
        type:String,
        required:true,
          
    },
    part_name:{
        type:String,
        required:true,
        
    },
    
    damage_identified:{
        type:String,
        required:true,
          
    },
    
    damage_probability:{
        type:String,
        required:true,
          
    },
    damage_predicted:{
        type:String,
        required:true,
         
    },
    net_score:{
        type:String,
        required:true,
          
    },
    severity:{
        type:String,
        required:true,
          
    },
    cost_replacement:{
        type:String,
        required:true,
          
    },
    date_last_predicted:{
        type:Date,
        required:true,
        
    },
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