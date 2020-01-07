import React, { useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PrincipalSearch from '../Components/PrincipalSearch/PrincipalSearch'

export default function HomePage({ updateSearchingProps}) {
    return (
        <>
            <div>
                <PrincipalSearch updateSearchingProps={updateSearchingProps}></PrincipalSearch>
            </div>
        </>
    )
}
