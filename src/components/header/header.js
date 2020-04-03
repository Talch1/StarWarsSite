import React, { Component } from 'react';
import './header.css'
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className = "navbar navbar-expand-lg ">
                    <a className = "navbar-brand" href="#/" ><h1>Star DB</h1></a>
                    <div className = "collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className = "navbar-nav">
                            <a className = "nav-item nav-link active" href="#/"> People</a>
                            <a className = "nav-item nav-link" href="#/" >Planet</a>
                            <a className =" nav-item nav-link" href="#/" >Starship</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}