import React, { ReactElement, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  FieldComponent,
  FieldComponents,
  Fields,
  FormValue,
  SetValidateErrorsGetter,
  ValidateErrorsGetter
} from '../../types'
import { useFieldComponents } from '../FieldComponentsContext'
import { mergeDefaultValue } from '../../utils/mergeDefaultValue'
import { useBaseComponents } from '../BaseComponentsContext'
import { getComponent } from '../../utils/getComponent'
import { generalizeValueCallback } from '../../utils/generalizeValueCallback'

export const BaseFormPropTypes = {
  onChange: PropTypes.func,
  fields: PropTypes.object,
  value: PropTypes.object
}

export type ReduceFields = (reducer: (currentFields: Fields) => Fields) => void

export interface FormSettings {
  reduceFields: ReduceFields
}

export type FormChangeHandler<T extends FormValue> = (value: T, settings: FormSettings) => unknown

export interface BaseFormProps<T extends FormValue> {
  validate?: ValidateErrorsGetter|SetValidateErrorsGetter
  onChange: FormChangeHandler<T>
  fields: Fields
  value: T
}

export function BaseForm<T extends FormValue> ({
  onChange,
  fields: propFields,
  value,
  ...props
}: BaseFormProps<T>): ReactElement<BaseFormProps<T>> {
  const Components: FieldComponents = useFieldComponents()
  const appliedDefault = useRef<boolean>(false)
  let flag = false
  if (!appliedDefault.current) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    flag = mergeDefaultValue(propFields, value)
    appliedDefault.current = true
  }
  const [fields, setFields] = useState(propFields)
  const reduceFields: ReduceFields = reducer => setFields(reducer(fields))
  const changeHandler = (value: T): void => {
    onChange(value, { reduceFields })
  }
  useEffect(() => {
    if (flag) {
      changeHandler({ ...value })
    }
  }, [flag])
  const handleChange = (fieldName: string, fieldValue: unknown): void => {
    changeHandler({ ...value, [fieldName]: fieldValue })
  }
  const { FieldWrapper } = useBaseComponents()
  const validate: ValidateErrorsGetter = () => {
    if (value.myField !== undefined) {
      return undefined
    } else {
      return {
        myField: ['required']
      }
    }
  }
  props.validate?.(validate)
  return (
    // TODO: IDK how to remove this fragment without conflicting the type
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {Object.entries(fields).map(([fieldName, field]) => {
        const Component: FieldComponent<unknown> = getComponent(Components, field, fieldName)

        const changeHandler = generalizeValueCallback((value) => handleChange(fieldName, value))

        return (
          <FieldWrapper key={fieldName}>
            <Component
              {...field}
              value={value[fieldName]}
              name={fieldName}
              onChange={changeHandler}
            />
          </FieldWrapper>
        )
      })}
    </React.Fragment>
  )
}

BaseForm.propTypes = BaseFormPropTypes
