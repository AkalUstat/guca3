import React from 'react';
import * as anvaad from 'anvaad-js-gursevak'
import Header from './Header'
import ConversionInput from './ConversionInput'
import ConversionResult from './ConversionResult'
import './App.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gurmukhiText: "",
      devnagriText: "",
    };
  }

  handleInputChange = event => {
    this.setState({
      gurmukhiText: anvaad.unicode(event.target.value),
      devnagriText: anvaad.translit(event.target.value, 'devnagri'),
    });
  };

  render() {
    return (
      <div>
        <Header />
        <ConversionInput textChange={this.handleInputChange} />
        <ConversionResult outputGurmukhi={this.state.gurmukhiText} outputDevnagri={this.state.devnagriText} />
      </div>
    );
  }
}
