import React, { Component } from 'react';

class MainNav extends Component {

    handleClickedButton = (param, e) => {
        e.preventDefault();
        this.props.searchDefault(param);
    }

    render() {
        return (
            <nav className="main-nav">
                <ul className="nav justify-content-center">
                    <li className="nav-item Cats">
                        <a href="#" onClick={this.handleClickedButton.bind(this, 'cats')}
                        >Cats
                        </a>
                    </li>
                    <li className="nav-item Dogs">
                        <a href="#" onClick={this.handleClickedButton.bind(this, 'dogs')}
                        >Dogs
                        </a>
                    </li>
                    <li className="nav-item Computers">
                        <a href="#" onClick={this.handleClickedButton.bind(this, 'computers')}
                        >Computers
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default MainNav;