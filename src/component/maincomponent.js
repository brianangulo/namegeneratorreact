import React, { Component } from "react";
import Header from './header';
import Content from './content';
import Footer from './footer'


class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            FirstName: ['pedro','devon'],
            LastName: ['sanchez','gonzalez']
        };
    }

    render(){
        return(
            <div>
                <Header/>
                <Content firstname={this.state.FirstName} lastname={this.state.LastName}/>
                <Footer/>
            </div>
        )
    }
}

export default Main