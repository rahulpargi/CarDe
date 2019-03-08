const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AdjustorSchema = new Schema({
    claim_adjustor_id:{
        type: String,
        required:true
    },
    adjustorfirstname:{
        type:String,
        required:true
    },
    adjustorlastname:{
        type:String,
        required:true
    },
    adjustoremail:{
        type:String,
        required:true
    },
    adjustorphone: {
        type: String,
        validate: {
          validator: function(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    admin:{
        type:Boolean,
        default:false
    },
    company_id:{
        type:String,
        required:true
    },
    adjustor_username:{
        type:String,
        required:true
    },
    adjustor_password:{
        type:String,
        required:true
    }
});

const Adjustor = mongoose.model('Adjustor',AdjustorSchema);

module.exports = Adjustor;