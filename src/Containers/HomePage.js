
import React, { useState, Fragment, useEffect} from 'react'
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'
import axios from 'axios'
import Seeder from './../Schemas/SeederImmovable'

export default function HomePage({ updateSearchingProps }) {

    
    return (
        
        <div>
            <PrincipalSearch updateSearchingProps={updateSearchingProps}></PrincipalSearch>
        </div>
        
    )

}