import React, { Component } from 'react'
import propTypes from 'prop-types'
class Search extends Component {
    state={
        text:""
    }
    static propTypes={
            searchUsers:propTypes.func.isRequired,
            clearUsers:propTypes.func.isRequired,
            showClear:propTypes.bool.isRequired,
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''})
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input name="text" type="text" placeholder="search user..." value={this.state.text} onChange={this.onChange}></input>
                    <input type="submit" className="btn btn-dark btn-block" value="Search"></input>
                </form>
                {this.props.showClear &&  ( <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>)}
               
               
            </div>
        )
    }
}

export default Search
