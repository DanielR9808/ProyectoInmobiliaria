import React, { useState, Fragment, useEffect} from 'react'
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'



export default function HomePage({ updateSearchingProps }) {
    return (
   
                  
            <div>
                <PrincipalSearch updateSearchingProps={updateSearchingProps}></PrincipalSearch>
            </div>
        
         
    )

}