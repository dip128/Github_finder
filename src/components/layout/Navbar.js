import React from 'react'
import PropTypes from 'prop-types'


const Navbar =(props)=>{
  
        return (
            <nav className="navbar bg-primary">
                <h1><i class="fa fa-github" aria-hidden="true"></i>{props.title}</h1>
            </nav>
        )
    
}
Navbar.defaultProps={
        title:'Github-Finder',
       
    };
Navbar.propTypes={
        title:PropTypes.string.isRequired
    };

export default Navbar
