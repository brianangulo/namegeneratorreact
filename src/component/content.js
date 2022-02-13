import React, { Component } from "react";

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }

    
    }

    render(props){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                        <h1>hello {this.props.firstname [0]}  {this.props.lastname}</h1>
                </div>
            </div>

        );
    }
}

export default Content
