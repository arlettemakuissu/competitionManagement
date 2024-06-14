import React from "react";

interface WhenProps {
    condition: boolean;
    children: React.ReactNode;
}

const When = ({ condition, children } : WhenProps) => {
    if(!condition){
        return null;
    }
    return (<>{children}</>)
}

export default When;
