import React, {createContext, useState, useEffect} from 'react'
import {unicode, translit} from 'anvaad-js'
import {node} from 'prop-types'

const ConversionContext = createContext(null)

const ConversionProvider = ({children}) => {
  const [inputValue, updateInputValue] = useState('');

  const handleInputChange = (event) => updateInputValue(event.target.value) 

  const [results, updateResults] = useState({unicode: '', devnagri: ''})

  useEffect(() => {
    updateResults({unicode: unicode(inputValue), devnagri: translit(inputValue, 'devnagri')})
  }, [inputValue])

  return (
    <ConversionContext.Provider value={{
      inputValue, handleInputChange, results
    }}>
      {children}
    </ConversionContext.Provider>
  )
}

ConversionProvider.propTypes = {
  children: node
}

export {ConversionContext, ConversionProvider}
