import { FieldComponent, FieldPropTypes, ReformlProvider, BaseForm } from 'reforml'
import React, { FunctionComponent, useState } from 'react'
import PropTypes from 'prop-types'

const MyNumber: FieldComponent<string> = ({
  helperText,
  onChange,
  value,
  label,
  defaultVal,
  ...props
}) => {
  return (
    <div>
      <div>{label}: <input {...props} onChange={onChange} value={value}/></div>
      <div>{helperText}</div>
    </div>
  )
}

MyNumber.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}

const TextPage: FunctionComponent = () => {
  const [value, setValue] = useState({})
  return (
    <ReformlProvider fieldComponents={{ text: MyNumber }}>
      <BaseForm fields={{ myField: { type: 'number', label: 'label', helperText: 'helper' } }} onChange={setValue} value={value}/>
    </ReformlProvider>
  )
}

export default TextPage
