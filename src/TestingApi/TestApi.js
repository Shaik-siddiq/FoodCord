import React,{useEffect,useState} from 'react'
import Axios from 'axios'
const TestApi = ()=>{
    const [test, setTest] = useState([])
const url="https://jsonplaceholder.typicode.com/posts"
useEffect(()=>{
    Axios.get(url)
    .then((response)=>{
        setTest( response.data)
        console.log(test)
    })
    .catch(err=>{
        console.log(err)
    })
})


    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
               {test.length !== null?test.map((data)=>{
            return(
                <tr key={data.userId}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                </tr>
            )
               }):null}
                </tbody>
            </table>
        </div>
    )
}
export default TestApi