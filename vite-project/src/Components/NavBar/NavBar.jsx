import React, { useContext } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import './NavBar.css'
import { contextData } from '../ContextProvide/ContextProvider';

const NavBar = () => {
    const {searchQuery, setSearchQUery} = useContext(contextData)
  return (
    <div className='NavBarContainer'>
        <div className="NavBar-left">
            <span>Dashboard</span>
            <span>
                <FaGreaterThan/>    
            </span>
            <span>Products</span>
            <span>
                <FaGreaterThan/>    
            </span>
            
            <span>All products</span>
        </div>
        <div className="NavBar-right">
            <div className="inputBox">
                <div className="searchBox">
                    <CiSearch/>     
                </div>
                <input 
                    type="text" 
                    placeholder='search...'
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQUery(e.target.value)
                    }}
                />
            </div>
            <div className="userBox">
                <CiUser/>
            </div>
        </div>
    </div>
  )
}

export default NavBar
