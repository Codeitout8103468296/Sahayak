import React from 'react';
import './Main.css';




function Main() {
 
   
    return (
      <div className='main' id='home' >
          <div className='home'>
        <h1>sahayak</h1>
        <p>"Those who are happiest are those who do the most for others"</p>
        <form>
         <label ></label>
           Name: <input name="myInput"  placeholder='Enter your name' required />
           <label ></label>
           State: <input name="myInput"  placeholder='Enter your stae' required />
           <label ></label>
           City: <input name="myInput"  placeholder='Enter your city' required />
      </form>
      <button  className='btn' type='Submit'>Submit</button>
        
        </div>
        </div>  
      
    );
  }
  
  export default Main