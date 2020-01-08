import React from 'react'
import axios from '../Instances/axios-immovable'

export default function immovableComp({props}) {
    const x = () => {
        axios.get('Immovable')
            .then((res, req) => {
                console.log(res)
            })
    }
    return (
        <div>
            ss
            <button onClick={x}> PEGAME </button>
        </div>
    )
}
