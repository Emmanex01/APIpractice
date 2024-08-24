import React from 'react';
import './Table.css'

const Table = (props) => {
  console.log(props)
  return (
    <div className='tableContainer'>
        <h1>Products</h1>
        <p>Manage your products and view your sales performance</p>
      <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Status</th>
                <th>Price</th>
                <th>Total Sales</th>
                <th>Created at</th>
                <th></th>
            </tr>
        </thead>
        <tbody >
        {props.info.map((item) => {
          
          console.log(item.name);
           
          const table = ( <>
            <td>
                  <div className='square'></div>
              </td>
              <td>{item.name}</td>
              <td>
                  <div className='status'>
                      {item.username}
                  </div>
              </td>
              <td>{item.email}</td>
              <td>{item.address.zipcode}</td>
              <td>{item.address.city}</td>
              <td>...</td>
          </>
              )     
     return <tr key={item.id}>{table}</tr>
        })}
         </tbody>
      </table>
    </div>
  )
}

export default Table
