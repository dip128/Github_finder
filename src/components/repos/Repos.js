import React from 'react'
import Repositem from './Repositem'
import propTypes from 'prop-types'
function Repos({repos}) {
    return repos.map(repo => <Repositem repo={repo} key={repo.id} />);
};

Repos.prototype={
    repos:propTypes.array.isRequired,
};
export default Repos
