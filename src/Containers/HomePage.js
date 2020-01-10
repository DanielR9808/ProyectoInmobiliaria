import React, { useState, Fragment, useEffect} from 'react'
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'

import ImmovableComp from './Immovable'

export default function HomePage({ updateSearchingProps }) {
    return (
   
                  
            <div>
                <PrincipalSearch updateSearchingProps={updateSearchingProps}></PrincipalSearch>
            </div>
        
         
    )

}