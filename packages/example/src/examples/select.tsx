import {
  Fields,
  OptionsFieldComponent,
  FieldPropTypes,
  ReformlProvider,
  BaseForm,
  useProcessOptionsMemo
} from 'reforml'
import React, { FunctionComponent, useState } from 'react'
import PropTypes from 'prop-types'

const MySelect: OptionsFieldComponent<unknown> = ({
  helperText,
  onChange,
  value,
  label,
  defaultVal,
  options,
  labelKey,
  valueKey,
  ...props
}) => {
  const valueLabel = useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })
  const handleChange = ({ target: { value } }: { target: { value: string } }): void => {
    onChange?.(valueLabel[Number.parseInt(value)]?.value)
  }
  return (
    <div>
      <div>{label}:
        <select className='form-control' onChange={handleChange} {...props}>
          <option value="" selected={value === undefined}>{props.placeholder}</option>
          {valueLabel.map(({ label }, index) => (
            <option key={label} value={index} selected={value === valueLabel[index].value}>{label}</option>
          ))}
        </select>
      </div>
      <div>{helperText}</div>
    </div>
  )
}

MySelect.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.string
}

const TextPage: FunctionComponent = () => {
  const [value, setValue] = useState({})
  console.log(value)
  const fields: Fields = {
    myField: {
      type: 'select',
      options: [{
        key1: 'value1',
        key2: {
          key3: 'label1'
        }
      }]
    }
  }
  return (
    <ReformlProvider fieldComponents={{ select: MySelect }}>
      <BaseForm fields={fields} onChange={setValue} value={value}/>
    </ReformlProvider>
  )
}

export default TextPage
