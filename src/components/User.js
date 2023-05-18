import React from "react";

  //function

const User=({fun})=>{
    return(
        <React.Fragment>
        <div>
        <h1>User Component  </h1>
        
            <button onClick={fun} style={{color:'black',background:'red'}}>click me </button> 
        </div>
        </React.Fragment>
    );
      
  };

export default User;