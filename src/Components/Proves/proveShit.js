import React, {useState,useEffect}from 'react'
import ImmovableCard from '../Cards/immovableCard.js'
import axios from 'axios'

export default function proveShit(props) {



   const [immovable,setImmovable]=useState();
   const [currentPageUrl,setCurrentPageUrl]=useState(`/api/immovable?limit=5&page=1&immovable[area]=    &immovable[type]=Apartamento&immovable[state]=Compra+Nuevo`);
   const [nextPageUrl,setNextPageUrl]=useState('');
   const [prevPageUrl,setPrevPageUrl]=useState('')

    

    useEffect(() => {
        let cancel
        axios.get(currentPageUrl,{
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res =>{
                
                setNextPageUrl(`/api/immovable?limit=${res.data.next.limit}&page=${res.data.next.page}&immovable[area]=${props.area}&immovable[type]=${props.iType}&immovable[state]=${props.pType}`)
            
                if(res.data.previous) setPrevPageUrl(`/api/immovable?limit=${res.data.previous.limit}&page=${res.data.previous.page}&immovable[area]=${props.area}&immovable[type]=${props.iType}&immovable[state]=${props.pType}`)
             console.log(res.data)
                setImmovable(res.data.results)
                
            })
            return () => cancel()
        }, [currentPageUrl])



            const goToNextPage = () =>{
                setCurrentPageUrl(nextPageUrl)
            }
        
            const goToPrevPage = () => {
                setCurrentPageUrl(prevPageUrl)
            }
    return (
        
        <div>
            <button onClick={goToNextPage}>next</button>

            <button onClick={goToPrevPage}>prev</button>
           
     
           {immovable?immovable.map((immo, index)=>
                <ImmovableCard key={index} immovable={immo}/>):console.log('problems')}
        
           
        </div>
    )
}