import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div
    className='bg-orange-900 text-white p-4 text-3xl
    w-1/2 text-center m-auto my-10 ' 
    >User : {userid} </div>
  )
}

export default User