import  React from 'react';
import "./testletter.css"
const Testletter=({letter})=>{
    
    const status=letter.status;
    let statusclass;
   
    if(status=="correct"){
        statusclass="test-letter-correct";
    }
    else if(status=="NotAttempted"){
        
        statusclass="test-letter-not";
    }
    else{
        statusclass="test-letter-incorrect";
    }

    
   return (<span className={`${statusclass}`}>
       {letter.testletter}
   </span>);  
}

export default  Testletter;
