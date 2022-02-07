import React , { Component } from "react"



class Content extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <h1>The Ulimate Name Genarator</h1>

                </div>
                <div>render name here</div>
                <button className="btn btn-warning">Click here to render name</button>

            </div>
        );
    }
}

export default Content