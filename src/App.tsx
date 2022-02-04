import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import Info from './Components/Info'

class App extends React.Component{
  render() {
    return (
      <div>
        <Info nama='Nathan' kelas='XI MIPA 1' IsMorning='true' />
        <Counter />
      </div>
    )
  }
} 
export default App;
