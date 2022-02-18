import React, { Component } from "react";

const firstName = ['Yoda','Willy','fool','dilly','billy','Sam', ''];

const lastName =['Sanchez','silly','meow','son','Roger'];

const renderFirst= firstName[Math.floor(Math.random()* firstName.length)];
    
const rendeLast= lastName[Math.floor(Math.random()* lastName.length)];
   
const renderboth = renderFirst + " " + rendeLast;





class Content extends Component{
    constructor(props){
        super(props);
        this.state={};

        this.handlename=this.handlename.bind(this);
    }



    handlename(props){
        alert(renderboth)
    }


    render(props){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 offset-4">
                        <h1>Hello {}</h1>
                    </div>
                    <div className="col offset-4">
                        <button className="btn btn-info" onClick={this.handlename}>Genarate A Name</button>
                        <p>The button above Genarate a name for you! </p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Content
