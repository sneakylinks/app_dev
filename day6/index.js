import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import pineapple from './images/pineapple.jpg'
import pear from './images/pear.jpg'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* --- FUNCTION COMPONENT --- */
//content in the app
const Application = function(){
  return(
    <div>
      <h1 style={{color:"magenta", textAlign:"center"}}>Welcome to ReactJS</h1>
      <p>Let's get familiar with JSX element</p>
      <div style={{backgroundColor:'aqua', marginLeft:'2em'}}>
        <img src={pear} style={{width:'30%', opacity:'0.8', display:'block'}}></img>
      <h2 style={{fontFamily:'fantasy'}}>Activity: List</h2>
      <ul style={{fontWeight:'bold'}}>
        <li>Let's try to understand React</li>
        <li>Start practicing coding with Reatc</li>
        <li>Create a project on React</li>
        <li>Test project and adjust accordingly</li>
      </ul>
      </div>
      <h2>Inline styling</h2>
      <label for="email" style={{color:"olive", padding:"0.5em 1em", fontWeight:"bolder"}}>Enter an e-mail</label>
      <input id='email' type='text' placeholder='Type your email' style={{backgroundColor:'rgb(230, 230, 230)', padding:'0.5em', borderRadius:'0.5em'}}></input>
      <button style={{marginLeft:'1em', backgroundColor:'magenta', padding:'0.5em 1em', borderRadius:'0.5em', color:'whitesmoke'}}>Submit form</button>
      <figure>
        <img src={pineapple} style={{width: '50%'}}></img>
      </figure>
      <p className='title'>Adding a class name to a JSX element</p>
    </div>
  )
}

// rooting the app
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(Application())
