import React from 'react'

export default function Selects(props) {
   const {handleChange,name,value,items}=props;


    return (
        <div>
            <select name={name} onChange={handleChange} value={value} >
                {items.map((item, index)=><option key={index}>{item}</option>)}
            </select>
        </div>
    )
}
