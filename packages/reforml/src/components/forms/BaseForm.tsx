import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
  FieldComponent,
  FieldComponents,
  Fields,
  FormValue, ValidateErrors
} from '../../types'
import { useFieldComponents } from '../FieldComponentsContext'
import { mergeDefaultValue } from '../../utils/mergeDefaultValue'
import { useBaseComponents } from '../BaseComponentsContext'
import { getComponent } from '../../utils/getComponent'
import { generalizeValueCallback } from '../../utils/generalizeValueCallback'
import { useValidatorDictionary } from '../ValidatorDictionaryContext'
import { validateForm } from '../../utils/validateForm'
import { fieldsConstraintsToValidate } from '../../utils/fieldsConstraintsToValidate'
import { useValidateErrorFormatter } from '../ValidatorErrorFormatterContext'

export const BaseFormPropTypes = {
  onChange: PropTypes.func,
  fields: PropTypes.object,
  value: PropTypes.object
}

export type ReduceFields = (reducer: (currentFields: Fields) => Fields) => void

export interface FormSettings {
  reduceFields: ReduceFields
  validate: () => ValidateErrors
}

export type FormChangeHandler<T extends FormValue> = (value: T, settings: FormSettings) => unknown

export interface BaseFormProps<T extends FormValue> {
  onChange: FormChangeHandler<T>
  fields: Fields
  value: T
}

export function BaseForm<T extends FormValue> ({
  onChange,
  fields: propFields,
  value
}: BaseFormProps<T>): ReactElement<BaseFormProps<T>> {
  const Components: FieldComponents = useFieldComponents()
  const appliedDefault = useRef<boolean>(false)
  let flag = false
  if (!appliedDefault.current) {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    flag = mergeDefaultValue(propFields, value)
    appliedDefault.current = true
  }
  const processedPropFields = useMemo(() => {
    return fieldsConstraintsToValidate(propFields)
  }, [propFields])
  const [fields, setFields] = useState(processedPropFields)
  const [validateErrors, setValidateErrors] = useState<ValidateErrors>(undefined)
  const validatorDictionary = useValidatorDictionary()
  const validateErrorFormatter = useValidateErrorFormatter()
  const getValidate = (value: T) => (): ValidateErrors => {
    const error = validateForm(value, fields, validatorDictionary, validateErrorFormatter)
    setValidateErrors(error)
    return error
  }
  const reduceFields: ReduceFields = reducer => setFields(reducer(fields))
  const changeHandler = (value: T): void => {
    onChange(value, { reduceFields, validate: getValidate(value) })
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
  return (
    // TODO: IDK how to remove this fragment without conflicting the type
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <React.Fragment>
      {Object.entries(fields).map(([fieldName, field]) => {
        const Component: FieldComponent<unknown> = getComponent(Components, field, fieldName)
        const errors = validateErrors?.[fieldName]
        const changeHandler = generalizeValueCallback((value) => handleChange(fieldName, value))

        return (
          <FieldWrapper key={fieldName}>
            <Component
              {...field}
              value={value[fieldName]}
              name={fieldName}
              onChange={changeHandler}
              errors={errors}
            />
          </FieldWrapper>
        )
      })}
    </React.Fragment>
  )
}

BaseForm.propTypes = BaseFormPropTypes
