import React, { useState } from 'react';
import "./University.css"

const University = ({university, handleAdmittedUni, handleWebPage}) => {
   const [admitted, setAdmitted]= useState(false);

   const handleAdmitted = () =>{
    setAdmitted(!admitted);

    if (!admitted) {
    handleAdmittedUni(university.name);
  }
    
   }

    return (
        <div className={`uni ${admitted && `uni-card`}`} >
            <h2>name:{university.name}</h2>
            <h3>Domain: {university.domains} </h3>
            <p>alpha code:{university.alpha_two_code} </p>
            <p>web: {university.web_pages} </p>

            <button onClick={handleAdmitted}>
                {
                    admitted ? "admitted" : "not admitted"
                }
            </button>

            <button onClick={()=>{
                handleWebPage(university.web_pages)
            }}> show web page</button>

        </div>
    );
};

export default University;