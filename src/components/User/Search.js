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
            setAlert:propTypes.func.isRequired
    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('Please enter something....','light');
        }
        else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''})
        }
        
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        const {showClear,clearUsers}=this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input name="text" type="text" placeholder="search user..." value={this.state.text} onChange={this.onChange}></input>
                    <input type="submit" className="btn btn-dark btn-block" value="Search"></input>
                </form>
                {showClear &&  ( <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>)}
               
               
            </div>
        )
    }
}

export default Search
