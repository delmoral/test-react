import React, { Component } from 'react';
//import EjemploComponenteDidMount from './components/EjemploComponentDidMount';
import FetchExample from './components/FetchExample';

//const HelloRender = (props) => <h1>Hola render</h1>

class App extends Component{
  constructor(props){
    super(props)
    this.state = {mensaje: 'otro'}
  }
  render(){
    return(
      <div className='App'>
        <FetchExample />
      </div>
    )
  }
}

/*
function App() {
  return (
    <HelloRender />
  );
}*/

export default App;
