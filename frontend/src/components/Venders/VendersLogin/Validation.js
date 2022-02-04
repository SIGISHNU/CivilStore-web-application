const Validation = (values) => {

    let error = {}

    if(!values.email){
        error.email = "Email required.";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email = "Invalid email."
    }

    if(!values.password){
        error.password = "Enter password."
    }else if(values.password.length < 3){
        error.password = "Password must be 3 characters."
    }
}

export default Validation;