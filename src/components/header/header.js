import React, { Component } from 'react';
import './header.css'
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg ">
                    <a class="navbar-brand"  href="#" ><h1>Star DB</h1></a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active"  href="#"> People</a>
                            <a class="nav-item nav-link"  href="#" >Planet</a>
                            <a class="nav-item nav-link" href="#" >Starship</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}