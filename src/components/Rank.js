import React from 'react';

const Rank = ({ name, entries }) =>{
    return (
        <div className="white tc">
            <p className="f3">{ `${name} your current entry count is...` }</p>
            <p className="f1">{ entries }</p>
        </div>
    )
}

export default Rank;