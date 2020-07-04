import {
  Fields,
  FieldPropTypes,
  ReformlProvider,
  BaseForm,
  useProcessBool,
  BoolFieldComponent
} from 'reforml'
import React, { FunctionComponent, useState } from 'react'
import PropTypes from 'prop-types'

const MyCheckbox: BoolFieldComponent<unknown> = ({
  helperText,
  onChange,
  value,
  label,
  defaultVal,
  trueValue,
  falseValue,
  ...props
}) => {
  const [flag, handleChange] = useProcessBool(value, onChange, { trueValue, falseValue })
  return (
    <div>
      <label>
        <div style={{ display: 'flex' }}>
          <div>
            <input
              className='form-check-input'
              type='checkbox'
              onChange={handleChange}
              checked={flag}
              {...props}
            />
          </div>
          <div>
            <div>
              {label}
            </div>
            <div>
              {(helperText !== undefined ? <div>{helperText}</div> : null)}
            </div>
          </div>
        </div>
      </label>
    </div>
  )
}

MyCheckbox.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}

const TextPage: FunctionComponent = () => {
  const [value, setValue] = useState({})
  console.log(value)
  const fields: Fields = {
    myField: {
      type: 'checkbox',
      label: 'some label',
      helperText: 'some helper',
      trueValue: 'some true',
      falseValue: 'some false'
    }
  }
  return (
    <ReformlProvider fieldComponents={{ checkbox: MyCheckbox }}>
      <BaseForm fields={fields} onChange={setValue} value={value}/>
    </ReformlProvider>
  )
}

export default TextPage
