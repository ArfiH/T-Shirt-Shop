import React from 'react'
import './Availability.css'
import Input from '../../components/Input'

const Availability = ({handleChange}) => {
    return (
        <div>
          <h2 className="sidebar-title">Availability</h2>
          <div>
            <label className="sidebar-label-container">
              <input type="radio" onChange={handleChange} value="" 
              name = "test5"/>
              <span className='checkmark'></span>All
            </label>
    
            <Input
              handleChange={handleChange}
              value = "instock"
              title = "In stock"
              name = "test5"
            />
            <Input
              handleChange={handleChange}
              value = "outofstock"
              title = "Out Of Stock"
              name = "test5"
            />
          </div>
        </div>
    
      )
}

export default Availability