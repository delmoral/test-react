import React, { Component } from 'react';

class EjemploComponenteDidMount extends Component{
    constructor(props){
        super(props)
        console.log('constructor');
        this.state = { scroll: 0 }
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
        //this.setState({ otroState: ''})
        document.addEventListener('scroll', ()=>{
            this.setState({ scroll: window.scrollY})
        })
    }

    render(){
        console.log('render');
        return (
            <div>
                <p>el scroll es: {this.state.scroll}</p>
                <h4> Ciclo de montaje: componentWillMount</h4>
                <p>Ejemplo de componentWillMount</p>
            </div>
        )
    }
}

export default EjemploComponenteDidMount;