"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUser = () => {
  const userData = useSelector((data) => data.users)
  console.log(userData)
  return (

    <div className="items-center justify-center mt-3 ml-96">
      <h1>Users List</h1>
      <br />
      {
        userData.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <h2 className='bg-sky-300 w-[510px] p-1'>{item.name}</h2>
        ))
      }
    </div>

  )
}

export default DisplayUser
