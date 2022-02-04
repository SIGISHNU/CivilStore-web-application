const Validation = (values) => {

    let error={};

    if(!values.email){
        error.email = "Email required.";
    }

    if(!values.password){
        error.password = "Password required.";
    }

    


    return error;

};

export default Validation;