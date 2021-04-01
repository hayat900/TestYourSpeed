import  React from 'react';
import "./testletter.css"
const Testletter=({letter})=>{
    
    const status=letter.status;
    let statusclass;
    console.log(status);
    if(status=="correct"){
        statusclass="test-letter-correct";
    }
    else if(status=="NotAttempted"){
        console.log('I am here');
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
