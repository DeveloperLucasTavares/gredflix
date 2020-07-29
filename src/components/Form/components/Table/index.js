import React from 'react';

function Table({ categoria }) {
    return (
        <li>
            <p>{categoria.name}</p>
        </li>
    )
}

export default Table;