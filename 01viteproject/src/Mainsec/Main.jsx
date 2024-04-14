import React, { useState, useEffect } from 'react';
import './Main.css';
import data from "../data.json";
import Box from './Box';

function Main() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [datarec, setDatarec] = useState([]);

  useEffect(() => {
    console.log(data);
    // setDatarec(data)
  }, []);

  const submithandler = (event) => {
    event.preventDefault(); 
    
    const filteredData = data.filter(obj => {
      return (state === "" || obj.state.toLowerCase() === state.toLowerCase()) && (city === "" || obj.city.toLowerCase() === city.toLowerCase());
    });

    setDatarec(filteredData);
    console.log(filteredData);
    useEffect(()=>{

    },[])
  };
  
  return (
    <div className='main' id='home'>
      <div className='home'>
        <h1>sahayak</h1>
        <p>"Those who are happiest are those who do the most for others"</p>
        <form  onSubmit={submithandler}>
          <div>
            Name: <input name="myInput" placeholder='Enter your name'  />
          </div>
          <div>
            State: <input onChange={(e) => setState(e.target.value)} value={state} name="myInput" placeholder='Enter your state'  />
          </div>
          <div>
            City: <input onChange={(e) => setCity(e.target.value)} value={city} name="myInput" placeholder='Enter your city'  />
          </div>
        </form>
          <div>

          <button onClick={submithandler} type='submit' className='btn'>Submit</button>
          </div>
      </div>
      <div className='datasec'>
        {
          datarec?(datarec.map((obj) => (
            <Box key={obj.address} {...obj} />
          ))):(
            <div>
              no data
              </div>
          )
        }
      </div>
    </div>
  );
}

export default Main;
