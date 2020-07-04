import React from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FieldComponent, generalizeOptionalValueCallback } from 'reforml'

const DatePicker: FieldComponent<Date> = ({label, value, helperText, onChange, ...props}) => {
  return (
    <div>
      <div className='label'>{label}</div>
      <ReactDatePicker selected={value} onChange={generalizeOptionalValueCallback(onChange)} {...props}/>
      <div>
        <small className='form-text text-muted'>{helperText}</small>
      </div>
    </div>
  )
}

export default DatePicker
