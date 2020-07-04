import {
  Fields,
  FieldPropTypes,
  ReformlProvider,
  BaseForm,
  MultiSelectFieldComponent,
  MultiSelectValue,
  useFieldComponents,
  useProcessMultiSelectMemo,
  useProcessOptionsMemo
} from 'reforml'
import React, { FunctionComponent, useState } from 'react'
import PropTypes from 'prop-types'
import 'reforml/dist/index.css'

const MyCheckboxGroup: MultiSelectFieldComponent<MultiSelectValue<unknown>> = ({
  helperText,
  onChange,
  value,
  label,
  options,
  valueKey,
  labelKey,
  output
}) => {
  const Checkbox = useFieldComponents().checkbox
  const valueLabel = useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })
  const [flags, setFlag] = useProcessMultiSelectMemo(onChange, value, output)
  return (
    <div>
      <div>{label}</div>
      <div>{helperText}</div>
      {valueLabel.map(({ value, label, ...otherProps }) => (
        <Checkbox key={label} {...otherProps} label={label} value={flags.has(value)} onChange={setFlag(value)}/>
      ))}
    </div>
  )
}

MyCheckboxGroup.propTypes = {
  ...FieldPropTypes,
  value: PropTypes.any
}

const TextPage: FunctionComponent = () => {
  const [value, setValue] = useState({})
  console.log(value)
  const fields: Fields = {
    myField: {
      type: 'checkbox_group',
      label: 'some label',
      helperText: 'some helper',
      options: ['option1', 'option2', 'option3']
    }
  }
  return (
    <ReformlProvider fieldComponents={{ checkbox_group: MyCheckboxGroup }}>
      <BaseForm fields={fields} onChange={setValue} value={value}/>
    </ReformlProvider>
  )
}

export default TextPage
