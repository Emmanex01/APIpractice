import React, { useEffect, createContext, useState } from 'react'


export const contextData = createContext(null);

const ContextProvider = ({children}) => {

    const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          setError("There is error")
        } else {
          return response.json()
        }
      })
      .then((e) => {
        setData(e);
        console.log(e)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })

      // if (loading) {
      //   return <div>Loading</div>
      // }
      // if (error){
      //   return <div>{error.message}</div>
      // }
  }, [])

    const [searchQuery, setSearchQUery] = useState('');
    // const contextValue = {data};
    console.log(data)
  return (
      <contextData.Provider value={{data, searchQuery, setSearchQUery}}>
        {children}
      </contextData.Provider>
  )
}

export default ContextProvider
