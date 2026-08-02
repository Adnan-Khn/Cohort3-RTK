import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedMain = () => {
  const {user} = useSelector((state)=>state.auth)
  if(!user){
    return <Navigate to="/"/>
  }
  return (
    <Outlet/>
  )
}

export default ProtectedMain