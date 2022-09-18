export function AuthValidator(validator){
    const validate = validator.validate({
        email: { required:true,email: true },
        password: { required: true,hasNumber:true,hasUpperCase:true,hasLowerCase:true}
    });
    return validate;
}
