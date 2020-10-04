import React, { useContext } from 'react';
import './ConversionInput.css'
import { ConversionContext } from './lib/Context';

const ConversionInput = () => {
  const {handleInputChange} = useContext(ConversionContext)
  return (
    <div className="component-conversion-input">
        <textarea onChange={handleInputChange}/>
    </div>
  );

}

export default ConversionInput