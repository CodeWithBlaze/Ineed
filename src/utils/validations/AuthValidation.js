export function SignUpValidator(validator){
    const validate = validator.validate({
        name: { required:true,minlength: 3, maxlength: 7 },
        email: { required:true,email: true },
        password: { required: true,hasNumber:true,hasUpperCase:true,hasLowerCase:true}
    });
    return validate;
}
export function SignInValidator(validator){
    const validate = validator.validate({
        email: { required:true,email: true },
        password: { required: true,hasNumber:true,hasUpperCase:true,hasLowerCase:true}
    });
    return validate;
}