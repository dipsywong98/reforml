import React, { FunctionComponent, useState } from 'react'
import { FormSettings, FormChangeHandler, FormValue, BaseForm, Fields, ReformlProvider } from 'reforml'
import jsyaml from 'js-yaml'
import 'reforml/dist/index.css'

import fields from './form.yml'
import { MaterialBaseComponents, MaterialFieldComponents } from '@reforml/material-ui'

const Demo: FunctionComponent = () => {
  const [value, setValue] = useState({})
  const handleChange: FormChangeHandler<FormValue> = (v: FormValue, { reduceFields, validate }: FormSettings) => {
    reduceFields((fields: Fields): Fields => {
      if ('copy' in v) {
        fields.copy.label = v.copy as string
      }
      return fields
    })
    validate()
    setValue(v)
  }
  return (
    <ReformlProvider baseComponents={MaterialBaseComponents} fieldComponents={MaterialFieldComponents} validatorDictionary={{isFoo(value: string): boolean{return value === 'Foo'}, isEqual(value: unknown, comp: unknown): boolean{return value === comp}}}>
      <div style={{ display: 'flex', width: '100%', margin: 'auto' }}>
        <div style={{ flex: 1 }}>
          <code>
            <pre>
              {jsyaml.dump(fields)}
            </pre>
          </code>
        </div>
        <div style={{ flex: 1 }}>
          <BaseForm onChange={handleChange} fields={fields} value={value}/>
        </div>
        <div style={{ flex: 1 }}>
          <code>
            <pre>
              {JSON.stringify(value, null, 2)}
            </pre>
          </code>
        </div>
      </div>
    </ReformlProvider>
  )
}

export default Demo
