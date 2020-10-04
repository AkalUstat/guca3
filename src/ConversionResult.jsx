import React, { useContext } from 'react';
import './ConversionResult.css'
import { ConversionContext } from './lib/Context';

const ConversionResult = () => {
  const {results} = useContext(ConversionContext)
  return (
    <div className="component-conversion-result">
      <div className="component-conversion-result-main">
      {results.unicode}
      </div>
      <div className="component-conversion-result-main-hindi-gurbani">
      {results.devnagri}
      </div>
    </div>
  )

}
export default ConversionResult