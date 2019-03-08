const Validator = require('validator');
const isEmpty = require('./isEmpty');


module.exports  = function validateRegisterInput(data) {
    let errors = {};
    data.claim_adjustor_id = !isEmpty(data.claim_adjustor_id) ? data.claim_adjustor_id:'';
    data.adjustorfirstname = !isEmpty(data.adjustorfirstname) ? data.adjustorfirstname:'';
    data.adjustorlastname = !isEmpty(data.adjustorlastname) ? data.adjustorlastname:'';
    data.adjustoremail = !isEmpty(data.adjustoremail) ? data.adjustoremail:'';
    data.adjustorphone = !isEmpty(data.adjustorphone) ? data.adjustorphone:'';
    data.admin = !isEmpty(data.admin) ? data.admin:'';
    data.company_id = !isEmpty(data.company_id) ? data.company_id:'';
    data.adjustor_username = !isEmpty(data.adjustor_username) ? data.adjustor_username:'';
    data.adjustor_password = !isEmpty(data.adjustor_password) ? data.adjustor_password:'';


    if(!Validator.isEmpty(data.claim_adjustor_id)){
        errors.claim_adjustor_id="Adjustor Id is required"
    }
    if(!Validator.isEmpty(data.adjustorfirstname)){
        errors.adjustorfirstname="First Name  is required"
    }
    
    if(!Validator.isEmpty(data.adjustorlastname)){
        errors.adjustorlastname="First Name is required"
    }
    if(!Validator.isEmail(data.adjustoremail)) {
        errors.adjustoremail = 'Email is invalid';
    }

    if(Validator.isEmpty(data.adjustoremail)) {
        errors.adjustoremail = 'Email is required';
    }
    if(!Validator.isLength(data.adjustor_password, {min: 6, max: 30})) {
        errors.adjustor_password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.adjustor_password)) {
        errors.adjustor_password = 'Password is required';
    }

    
    if(!Validator.isLength(data.adjustorphone, {min:10,max: 10})) {
        errors.adjustorphone = 'Invalid Phone Number';
    }
    if(!Validator.isEmpty(data.admin)) {
        errors.admin = 'Admin Selection is required';
    }
    if(!Validator.company_id(data.company_id)){
        errors.adjustorId="Company  Id is required"
    }
    if(!Validator.isEmpty(data.adjustor_username)) {
        errors.adjustor_username = 'User Name is required';
    }
    return{
        errors,
        isValid:isEmpty(errors)
    }
}