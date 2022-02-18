import React, { Component } from "react";
import Header from './header';
import Content from './content';
import Footer from './footer'


class Main extends Component{
    constructor(props){
        super(props);
        this.state={
        };
    }


    render(){
        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default Main