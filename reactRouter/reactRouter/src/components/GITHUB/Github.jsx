// import React, { useEffect , useState } from 'react'
import { useLoaderData  } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     //fetch se data string so cnvrt into json then use that data
    //     fetch('https://api.github.com/users/ShivamJoker')
    //     .then(Response => Response.json())
    //     .then( data=>{
    //         console.log(data)
    //         //now ye data component ko apni  memory mai save krna padega taki ise render kr paye 
    //         //so component's memory : useState
    //         setData(data)
    //     })
    // },[])
  return (
  <>
      <div className='bg-orange-900 text-white p-4 text-3xl
    w-1/2 text-center m-auto my-10 '
    >Github Followers : {data.followers} </div>
    <img className='mx-auto' src={data.avatar_url} alt="avatar"  />
    </>
)
}

export default Github

export const GithubDataLoader = async ()=>{
    const res  = await fetch('https://api.github.com/users/shivamjoker')
    return res.json()
   
}

