import React from 'react';
//import Spinner from 'react-bootstrap/Spinner';
import "./styles.css";
//
function Result(props) {
  const { resultData } = props;
  console.log(resultData);
  
  return (
    <div>
      { 
        <div> 
            <h1>Calculation Results</h1>
            <h2>The optimum discount price:</h2>

            <label>Based on the calculation, the best price is {"abc"}</label>
          </div>
      }
    </div>

  );
}
//
export default Result;