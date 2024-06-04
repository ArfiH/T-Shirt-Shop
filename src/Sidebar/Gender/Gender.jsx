import React from 'react'
import './Gender.css'
import Input from '../../components/Input'

const Gender = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Gender</h2>
      <div>
      <Input
           handleChange={handleChange}
           value = ""
           title = "All"
           name = "test4"
        />

        <Input
          handleChange={handleChange}
          value = "male"
          title = "Male"
          name = "test4"
        />
        <Input
          handleChange={handleChange}
          value = "female"
          title = "Female"
          name = "test4"
        />
      </div>
    </div>

  )
}

export default Gender