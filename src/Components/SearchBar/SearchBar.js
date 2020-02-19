import React from 'react'

export default function SearchBar(props) {

    const {value, handleChange, name} = props;
    return (
            <input type='text' name={name}onChange={handleChange} value={value} />
        
    )
}
