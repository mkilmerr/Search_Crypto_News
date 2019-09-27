import React, { Component } from 'react';

class Header extends Component{
    state = {
        keywords : ''
    }
    inputChange = (event) => {
        console.log(event.target.value)
        this.setState({
            keywords : event.target.value
        })
    }
    render(){
        return(
            <header>
                <div className="logo">Crypto News</div>
                <input
                    onChange = {this.props.input}
                />
                <div>{`The keywords are : ${this.state.keywords}`}</div>
            </header>
        )
    }
}


export default Header;