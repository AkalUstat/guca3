import React from 'react';
import './Header.css'

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className="component-header">
        <div className="component-header-title">
          Gurmukhi Unicode Converter
        </div>
      </header>
    );
  }
}
