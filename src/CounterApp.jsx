import { React, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const [ counter, setCounter ] = useState(value);

    const handleIncrement = () => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1 )
    }

    const handleDecrement = () => {
      setCounter(counter - 1);
      //setCounter((c) => c - 1 );
  }
  
  const handleReset = () => {
    setCounter(value);
    // setCounter((c) => c = value);
}
  
  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        {/* //Comentario prueba */}

        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;