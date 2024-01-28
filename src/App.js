import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Final from './Final';

const randNum = Math.floor(Math.random()*100)+1

function App() {

	const[term, setTerm] = useState("")

	const handleChange = (e) => {
		return setTerm(e.target.value)
	}

  return (
    <div className="container">
      <div className='header'>
       <label htmlFor='inputBox'>
			 Guess the number between 1 to 100
			 </label>
      </div>
      <div className='inputField'>
        <input type='text' id='inputBox'
				name='inputBox' 
				onChange={handleChange} placeholder='Enter the number' />
      </div>
      <div className='result'>
				<Final randNum={randNum} term={term} />
      </div>
    </div>
  );
}

export default App;
