import React from "react";



const ErrorMessage = ({variant = "danger" , children}) => {

    return (
        <p variant={variant} style={{color:"red"}}>

            {children}

        </p>
    );
};

export default ErrorMessage;