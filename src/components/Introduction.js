import React, { Component } from 'react';

class Introduction extends Component {
    constructor(props){
        super(props);
        this.state ={};

    }

    render(){
        return (
            <div className="mainContainer">
                <div className="jumbotron">
                    <h1 className="display-4">Amazing React, Bootstrap and Webpack</h1>
                    <p className="lead">Created with love</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out
                        within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Introduction;