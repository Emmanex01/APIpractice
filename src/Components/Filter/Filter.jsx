import React, { useState } from 'react';
import './Filter.css';
import { IoFilter } from "react-icons/io5";
import { MdInsertDriveFile } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Filter = () => {
  const [active, setActive] = useState('all');

  const styleClick = {
    backgroundColor: active === 'all' ? 'blue' : 'transparent',
    color: active === 'all' ? 'black' : 'gray'
  }

  return (
    <div className='FilterContainer'>
        <div className="Filter-left">
            <div style={{backgroundColor: active === 'all' ? 'white' : 'transparent', color: active === 'all' ? 'black' : 'gray'}} onClick={() => setActive('all')}>All</div>
            <div style={{backgroundColor: active === 'active' ? 'white' : 'transparent', color: active === 'active' ? 'black' : 'gray'}} onClick={() => setActive('active')}>Active</div>
            <div style={{backgroundColor: active === 'draft' ? 'white' : 'transparent', color: active === 'draft' ? 'black' : 'gray'}} onClick={() => setActive('draft')}>Draft</div>
            <div style={{backgroundColor: active === 'archived' ? 'white' : 'transparent', color: active === 'archived' ? 'black' : 'gray'}} onClick={() => setActive('archived')}>Archived</div>
        </div>
        <div className="Filter-right">
            <div className='Filter-right-filter'>
                <IoFilter/>
                <span>Filter</span>
            </div>
            <div>
                <MdInsertDriveFile/>
                <span>Export</span>
            </div>
            <div>
                <IoIosAddCircle/>
                <span>Add Product</span>
            </div>
        </div>
    </div>
  )
}

export default Filter
