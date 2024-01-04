
using Props
import React from 'react'
import App2 from './App2'

function App() {
  let user="fatima"
  let email="fatima@"
  return (
    <div>
    <h1> hello <App2 name={user} id={email}/></h1></div>
  )
}

export default App


  getting input box value onchange
  import React, { useState } from 'react'
  
  function App() {
    let[data,setdata]=useState("")
    function getdataoncng(e){
      setdata(e.target.value)

    }
    return (
      <div>
        <h1> get input box value </h1>
        <input type='text' onChange={getdataoncng}/>
        <div>this is input field data : {data}</div>

      </div>
    )
  }
  
  export default App

     getting input box value onclicking button
     import React, { useState } from "react"
     
    function App() {
    let[data,setdata]=useState(null)
    let[print,setprint]=useState(false)
    function getdataoncng(e){
      setdata(e.target.value)
      setprint(false)

    }
    function showdata(){
      setprint(true)
    }
    return (
      <div>
        <h1> get input box value </h1>
        <input type='text' onChange={getdataoncng}/>
        <button className="bg-cyan-500" onClick={showdata}>Show data</button>
        <h1 className="text-red-500">
        {print?<h1>{data}</h1>:null}</h1>

      </div>
    )}
     
 Practicing 

    import React, { useState } from 'react'
    
    function App() {
      let[data,setdata]=useState(null)
      let[print,setprint]=useState(false)
      function gettingdata(e){
        setdata(e.target.value)
        setprint(false)
      }
      function showData(){
        setdata(true)
      }

      return (

        <div>
          <input type='text' onChange={gettingdata}></input>
          <button onClick={showData}>show Data</button>
          <h1 className='text-3xl'>
            {print ?<h1>{data}</h1>: null}
          </h1>
        </div>
      )
    }
    
    export default App



hide and show in reactjs

 import React, { useState } from 'react'
 
 function App() {
  const [data,setdata]=useState()
  const [isVisible, setIsVisible] = useState(false);
  function hide(){
    setIsVisible(false)
  }
  function show(){
    setIsVisible(true)
    }
   return (
     <div>
     <h1 className='text-3xl'>{isVisible?<h1>Hello world</h1>:null}</h1>
     <button className='m-3 bg-blue-600'  onClick={hide}>Hide</button>
     <button className='m-3 bg-blue-600'  onClick={show}>Show</button>

     </div>
   )
 }
 
 export default App


toggle between hide and show 

import React, { useState } from 'react'

function App() {
  let[isVisible,setIsVisible]=useState(false)

  return (
    <div>
      {isVisible?<h1>hello Fatima</h1>:null}
      <button onClick={()=>setIsVisible(!isVisible)}>toggle </button>
    </div>
  )
}

export default App

Handling form 

import React, { useState } from 'react';

function App() {
  let [name, setName] = useState("");
  let [tnc, setTnc] = useState("");
  let [interest, setInterest] = useState("");
  let [isVisible, setIsVisible] = useState(false);

  function getFormData(e) {
    e.preventDefault();
    setIsVisible(true);
    console.log(`Name: ${name}, TnC: ${tnc}, Interest: ${interest}`);

    // Clear the input fields after submission
    setName("");
    setTnc("");
    setInterest("");
  }

  return (
    <div>
      <form onSubmit={getFormData}>
        <input type='text' placeholder='type here' value={name} onChange={(e) => { setName(e.target.value) }} /><br></br>
        <select value={tnc} onChange={(e) => { setTnc(e.target.value) }}><br></br>
          <option value="">select option</option>
          <option value="apple">apple</option>
          <option value="mango">mango</option>
          <option value="banana">banana</option>
        </select>
        <input type='checkbox' checked={interest} onChange={(e) => { setInterest(e.target.checked) }} /><span>terms and conditions</span><br></br>
        <button type='submit'>Submit</button><br></br>
        <button type='reset'>Reset</button>
      </form>
      <div>
        <h1>
          {isVisible ? <p>You entered the following details: {name}, {tnc}, {interest}</p> : null}
        </h1>
      </div>
    </div>
  );
}

export default App;

conditional Rendering

import React, { useState } from 'react';

function App() {
  const [login, setLogin] = useState(1);
  function giveid(e){
    setLogin(e.target.value)
  }

  return (
    <div>
    <input type='number' onChange={giveid} placeholder='enter your Id'></input>
    
      {login == 1
        ? <h1>Hello user 1</h1>
        : login == 2
          ? <h1>Hello user 2</h1>
          : login == 3
            ? <h1>Hello user 3</h1>
            : null
      }
    </div>
  );
}

export default App;


pass function as props

import React from 'react'
import App2 from './App2'

function App() {
  function show(){
    alert("messege from parent")
  }
  return (

    <div>
    <App2 show={show}/>

    </div>
  )
}

export default App

useeffect hook 
import React, { useEffect, useState } from 'react';

function App() {
  // State variable and setter function should be declared inside the function component
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Hello from useEffect");
  }, [count]);

  function inc() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increase</button>
    </div>
  );

export default App;



















































































  
  
