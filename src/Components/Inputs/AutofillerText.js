import React,{useEffect,useState,Fragment} from 'react';
import './../Inputs/Autofiller.css'

export default function AutoText (props){
   
    const {value, handleChange,list,name} = props; 
    
    
        return(  
            <Fragment>
                <input className="searchInput" onChange={handleChange} value={value} list={list} name={name}></input>
            </Fragment>
              
                
            
        )
    
       
    
}