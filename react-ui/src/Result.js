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
            <label>Based on the calculation, the best price is {resultData}</label>
          </div>
      }
    </div>

  );
}
//
export default Result;