import React, { FunctionComponent, useState } from 'react'
import 'reforml/dist/index.css'
import { FormSettings, FormChangeHandler, FormValue, BaseForm, Fields } from 'reforml'
import jsyaml from 'js-yaml'

import fields from './form.yml'

const Demo: FunctionComponent = () => {
  const [value, setValue] = useState({})
  const handleChange: FormChangeHandler<FormValue> = (v: FormValue, { reduceFields }: FormSettings) => {
    reduceFields((fields: Fields): Fields => {
      if ('copy' in v) {
        fields.copy.label = v.copy as string
      }
      return fields
    })
    setValue(v)
  }
  return (
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
  )
}

export default Demo
