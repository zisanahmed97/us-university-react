
import { Suspense } from 'react';
import './App.css'
import Universites from './Components/Universities/Universites'


const fetchUniversities = async() =>{
  const res = await fetch("http://universities.hipolabs.com/search?name=middle");
  return res.json();
}

function App() {

   const universitiesPromise = fetchUniversities();
  return (
    <>
      <h1>United States University List</h1>

     <Suspense fallback={<h3>universities loading......</h3>}>
       <Universites universitiesPromise={universitiesPromise}></Universites>
     </Suspense>
    </>
  )
}

export default App
