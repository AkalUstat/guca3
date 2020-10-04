import React from 'react';
import Header from './Header'
import ConversionInput from './ConversionInput'
import ConversionResult from './ConversionResult'
import './App.css';
import { ConversionProvider } from './lib/Context';

const App = () =>{ 
  return (
  <ConversionProvider>
    <Header />
    <div className="body">
      <ConversionInput />
      <ConversionResult />
    </div>
  </ConversionProvider>

)
}
App.displayName = "App"

export default App