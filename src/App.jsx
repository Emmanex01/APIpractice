import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Filter from './Components/Filter/Filter';
import Table from './Components/Table/Table';
import { contextData } from './Components/ContextProvide/ContextProvider';

const App = () => {
  const {data, searchQuery} = useContext(contextData);

  const filterData = data.filter((item) => {
    console.log(item)
   return item.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  // console.log(contextValue)
  return (
    <div className='app'>
      <NavBar/>
      <Filter/>
      <Table info={filterData}/>
    </div>
  )
}

export default App

