import React from 'react'
import propTypes from 'prop-types'

function Repositem({repo}) {
    return (
        <div className='card'>
            <h3>
                <a href={repo.html_url}>Repo Name -{repo.name}</a>
            </h3>
        </div>
    )
}
Repositem.prototype={
    repo:propTypes.object.isRequired,
}
export default Repositem
