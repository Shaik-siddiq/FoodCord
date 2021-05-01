import axios from 'axios'
import React,{useEffect, useState} from 'react'
import TestApi from './TestingApi/TestApi'

const App1 = ()=>{
    const ur = "https://jsonplaceholder.typicode.com/comments"
    const [tester, setTester] = useState([])
    useEffect(()=>{
        axios.get(ur)
        .then((response)=>{console.log(response)})
        .catch((err)=>{console.log(err)})
    })
    return(
        <div>
        <TestApi />
        </div>
    )
}
export default App1