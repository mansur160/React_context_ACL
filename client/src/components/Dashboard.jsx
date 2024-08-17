import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
	const {
		authUser,
		setAuthUser,
		isLoggedIn,
		setIsLoggedIn} = useAuth()
		
		const logIn = (e)=>{
			e.preventDefault()
			setIsLoggedIn(true)
			setAuthUser({
				Name: 'Sample Name'
			})
		}
		
		const logOut = (e)=>{
			e.preventDefault()
			setIsLoggedIn(false)
			setAuthUser(null)
		}
  return (
    <>
		<span>Login check: {isLoggedIn ? 'user logged-in' : 'user logged out'}.</span>
		{isLoggedIn ? (<span>username: {authUser.Name}</span>) : null}
		<br />
		{isLoggedIn
		? <button onClick={(e)=>{logout(e)}}>Sign out</button> :
		<button onClick={(e)=>{login(e)}}>Signin</button>
		}
		
		
	</>
  )
}

export default Dashboard