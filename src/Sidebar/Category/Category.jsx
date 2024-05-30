import React from 'react'
import './Category.css'
import Input from '../../components/Input'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Type</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value="" 
          name = "test"/>
          <span className='checkmark'></span>All
        </label>

        <Input
          handleChange={handleChange}
          value = "round-neck"
          title = "Round-neck"
          name = "test"
        />
        <Input
          handleChange={handleChange}
          value = "crew"
          title = "Crew T-shirt"
          name = "test"
        />
        <Input
          handleChange={handleChange}
          value = "sports"
          title = "Sports"
          name = "test"
        />
        <Input
          handleChange={handleChange}
          value = "skinny"
          title = "Skinny fit"
          name = "test"
        />
      </div>
    </div>

  )
}

export default Category