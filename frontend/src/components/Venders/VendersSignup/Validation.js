const Validation = (values) => {

    let error={};

    if(!values.email){
        error.email = "Email required.";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){

        error.email = "Invalid email address.";

    }

    if(!values.password){
        error.password = "Password required.";
    }else if (values.password.length < 3){
        error.password = "Password must be 3 characters.";

    }
    
    if(!values.name){
        error.name = "Name required.";
    }

    if(!values.mobile){
        error.mobile = "Mobile required.";
    }else if(values.mobile.length < 10){
        error.mobile = "Mobile must be 10 numbers";
    }

    if(!values.place){
        error.place = "Place required.";
    }

    if(!values.landmark){
        error.landmark = "Landmark required.";
    }
    if(!values.pincode){
        error.pincode = "Pincode required.";
    }
   
    if(!values.logo){
        error.logo ="Logo required.";
    }

    return error;

};

export default Validation;