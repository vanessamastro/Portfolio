import React, { Component } from 'react';
import logo from './logo.svg';
import file from './Desktop/MastrosimoneResume.pdf';
import './App.css';

console.log(logo);

function Header(){
  return <img src={file} alt="File" />;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Vanessa Mastrosimone
          </p>
          <p>
            SPU Student
          </p>
          <p>
            Software Developer & Aspiring UI Designer
          </p>
          <p>
             
          </p>
          <a
            className="LinkedIn"
            href="https://www.linkedin.com/in/vanessa-mastrosimone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </header>
      </div>
    );
  }
}

export default App;
