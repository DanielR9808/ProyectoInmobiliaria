import React from 'react'
import HomePage from './Containers/HomePage'
import firebase from 'firebase'
import {DB_CONFIG } from './Config/config'
import 'firebase/database'
import './App.css'

export default function App() {
    
    
    return (
        <div>
            <HomePage></HomePage>
        </div>
    )
}
