import React, { use, useState } from 'react';
import University from '../University/University';
import "./Universities.css"

const Universites = ({universitiesPromise}) => {

    const universities = use(universitiesPromise);

    const [admittedUni, setAdmittedUni]= useState([]);
    const handleAdmittedUni = (uni) =>{
        console.log("admitted this uni", uni);
        const newAdmittedUni = [...admittedUni, uni];
        setAdmittedUni(newAdmittedUni);
    }

    const [showWebPage, setShowWebPage] = useState([]);
    const handleWebPage = (web) =>{
        const newWebPage = [...showWebPage, web];
        setShowWebPage(newWebPage);
    }
    return (
        <>
            <h2>Hello universities</h2>
            <p>Universities:{universities.length}</p>
            <h3>Admitted Universities:{admittedUni.length}</h3>
            {
                admittedUni.map(uni => <ol>{uni}</ol>)
            }

            <h3>webpage:{showWebPage.length} </h3>
            {
                showWebPage.map(web => <a>{web}</a>)
            }

           <div className='universities'>
             {
                universities.map(university => <University university={university} handleAdmittedUni={handleAdmittedUni} 
                    handleWebPage={handleWebPage}></University>)
            }
           </div>
        </>
    );
};

export default Universites;